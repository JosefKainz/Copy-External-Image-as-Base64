chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "convertImagesToBase64",
        title: "Copy with external images as Base64 data URLs",
        contexts: ["selection", "image"]
    });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "convertImagesToBase64") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: async (info) => {
                const clipboardData = {};
                const container = document.createElement("div");

                if (info.mediaType === "image" && info.srcUrl && !info.selectionText) {
                    const blob = await loadImageBlob(info.srcUrl);
                    if (blob) {
                        clipboardData[blob.type] = blob;
                        container.innerHTML = `<img src="${info.srcUrl}" alt="Image">`;
                    }
                } else {
                    document.execCommand("copy");
                    try {
                        const items = await navigator.clipboard.read();
                        if (items.length > 0) {
                            const item = items[0];
                            if (item.types.includes("text/html")) {
                                for (const type of item.types) {
                                    const blob = await item.getType(type);
                                    clipboardData[type] = blob;
                                }
                                container.innerHTML = await clipboardData["text/html"].text();
                            }
                        }
                    } catch (err) {
                        console.error("Error reading from clipboard:", err);
                        return;
                    }
                }

                const images = container.querySelectorAll("img[src^='http']");
                if (images.length === 0) {
                    return;
                }

                const conversionPromises = Array.from(images).map(async (img) => {
                    try {
                        const blob = await loadImageBlob(img.src);
                        const base64 = await new Promise((resolve, reject) => {
                            const reader = new FileReader();
                            reader.onloadend = () => resolve(reader.result);
                            reader.onerror = reject;
                            reader.readAsDataURL(blob);
                        });
                        img.src = base64;
                    } catch (err) {
                        console.warn("Base64 conversion failed for image:", img.src, err.message);
                    }
                });

                await Promise.all(conversionPromises);

                try {
                    clipboardData["text/html"] = new Blob([container.innerHTML], { type: "text/html" });
                    const clipboardItem = new ClipboardItem(clipboardData);
                    await navigator.clipboard.write([clipboardItem]);
                } catch (err) {
                    console.error("Error writing to clipboard:", err);
                }

                async function loadImageBlob(imgUrl) {
                    try {
                        const response = await fetch(imgUrl);
                        if (!response.ok) {
                            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                        }
                        return await response.blob();   
                    } catch (err) {
                        console.warn("Image could not be loaded:", info.srcUrl, err.message);
                    }
                }
            },
            args: [info]
        });
    }
});

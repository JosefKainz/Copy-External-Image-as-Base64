# Copy External Images as Base64 Chrome Extension

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-brightgreen.svg)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A Chrome extension that automatically converts external images to Base64 format when copying content to your clipboard, ensuring images remain accessible even when offline or when original URLs become unavailable.

## 🚀 Features

- **Smart Image Detection**: Automatically identifies external images in your selected content
- **Seamless Conversion**: Converts HTTP/HTTPS images to embedded Base64 data URLs
- **Dual Context Support**: Works with both text selections and direct image right-clicks
- **Clipboard Integration**: Maintains original formatting while embedding images
- **Offline Compatibility**: Copied content with images works without internet connection
- **Error Handling**: Gracefully handles failed image loads
- **Minimal Permissions**: Only requests necessary permissions for functionality

## 📋 How to Use

### For Text Selections with Images:
1. Select content containing external images on any webpage
2. Right-click and choose **"Copy with external images as Base64"**
3. Paste anywhere - images are now embedded and will always display

### For Individual Images:
1. Right-click directly on an external image
2. Choose **"Copy with external images as Base64"**
3. Paste the converted image with embedded Base64 data

## 🛠 Installation

### From Chrome Web Store (Recommended)
1. Visit the [Chrome Web Store](https://chromewebstore.google.com/detail/copy-external-images-as-b/fiophhodhfojiocehnmdmlofpbgfkcaf)
2. Click "Add to Chrome"
3. Confirm installation

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory
5. The extension will appear in your extensions list

## 📁 File Structure

```
Copy External Image as Base64/
├── manifest.json          # Extension manifest (Manifest V3)
├── background.js          # Service worker with main logic
├── icons/                 # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── README.md             # This file
└── privacy-policy.md     # Privacy policy
```

## 🔧 Technical Details

### Permissions Used:
- `contextMenus`: Creates right-click menu option
- `scripting`: Executes conversion script on current webpage
- `activeTab`: Accesses current page content to identify and convert images

### Supported Formats:
- **Input**: External images (HTTP/HTTPS URLs)
- **Output**: Base64 data URLs (maintains original format: PNG, JPEG, GIF, etc.)
- **Content**: HTML selections with embedded images

### Browser Compatibility:
- Chrome 88+ (Manifest V3 support)
- Chromium-based browsers with Manifest V3 support

## 🔒 Privacy & Security

- **Local Processing**: All operations are performed locally in your browser
- **No Data Collection**: Extension does not collect, store, or transmit personal data
- **No External Servers**: No communication with external servers except to fetch images for conversion
- **Temporary Processing**: Images are only held in memory during conversion
- **Minimal Permissions**: Only requests necessary permissions for functionality

See [Privacy Policy](privacy-policy.md) for detailed information.

## 🐛 Troubleshooting

### Images Not Converting?
- Ensure the image URL is accessible (not behind authentication)
- Check browser console for error messages
- Verify the image is from HTTP/HTTPS source (not data: URLs)

### Context Menu Not Appearing?
- Make sure you're right-clicking on selectable content or images
- Extension only works on web pages (not Chrome internal pages)

### Clipboard Issues?
- Grant clipboard permissions when prompted by browser
- Ensure you're using a supported browser
- Try refreshing the page and attempting again

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

### Development Setup:
1. Clone the repository
2. Load the extension in developer mode
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Chrome Extensions API documentation
- Modern clipboard API implementation
- Base64 encoding/FileReader API

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Contact: josefkainz1992@gmail.com

---

**Perfect for:**
- Saving web content for offline viewing
- Creating self-contained documentation
- Sharing content without broken image links
- Archiving web pages with images
- Email newsletters with embedded images
- Documentation with consistent image display

**Made with ❤️ for better web content management**
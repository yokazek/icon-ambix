# Ambix

[日本語](README_jp.md)

**Live demo: [https://yokazek.github.io/icon-ambix/](https://yokazek.github.io/icon-ambix/)**

**A lightweight, browser-based Material Icons subsetting tool.**

Ambix is a fast and intuitive web tool designed to help you curate your perfect subset of Material Icons. It generates instant Google Fonts URLs and allows you to download optimized WOFF2 font files for your web projects.

## Key Features

- **Category Filtering:** Browse icons by their official Material Design categories.
- **Search:** Quickly find icons by name with real-time search.
- **Persistent Selection:** Your choices are saved in `localStorage`, so you won't lose your work after a page reload.
- **Google Fonts Integration:** Automatically generates the correct URL for the Material Icons Outlined font subset.
- **Subset Download:** Fetch and download the subsetted WOFF2 font file directly.
- **Modern UI:** A premium dark-themed interface built with Bootstrap 5 and Alpine.js.

## How to Use

1. **Browse:** Use the sidebar categories or the search bar to find icons.
2. **Select:** Click on icons to add them to your subset.
3. **Review:** Check your selection in the "Preview" modal or the floating bar at the bottom.
4. **Generate:** Click "Generate Bundle" to get your Google Fonts URL or "Download Web Font" for the WOFF2 file.

## Development

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yokazek/icon-ambix.git
   cd icon-ambix
   ```
2. Serve the directory:
   ```bash
   npx serve -l 3000
   ```
3. Open `http://localhost:3000` in your browser.

## Technologies Used

- Vanilla JavaScript (with ES Modules)
- [Alpine.js](https://alpinejs.dev/) (Logic & State management)
- [Bootstrap 5](https://getbootstrap.com/) (Layout & UI components)
- [Material Icons](https://fonts.google.com/icons) (Icon font & Metadata)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

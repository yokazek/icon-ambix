/**
 * Ambix - Material Icons Curator
 * Alpine.js アプリケーションコンポーネント
 */

/** カテゴリ名からアイコン名へのマッピング */
const CATEGORY_ICON_MAP = {
  'Action': 'bolt',
  'Communication': 'chat',
  'Content': 'archive',
  'Device': 'devices',
  'Editor': 'mode_edit',
  'File': 'folder',
  'Hardware': 'computer',
  'Image': 'image',
  'Maps': 'explore',
  'Navigation': 'menu',
  'Notification': 'notifications',
  'Social': 'people',
  'Toggle': 'toggle_on',
};

function curatorApp() {
  return {
    icons: [],
    categories: [],
    selectedIcons: [],
    activeCategory: 'All Icons',
    searchQuery: '',
    copied: false,
    bsModals: {},

    async init() {
      try {
        const response = await fetch('icons.json');
        if (!response.ok) throw new Error('Failed to load icons.json');
        const data = await response.json();

        this.icons = data.map((icon, index) => ({
          id: String(index + 1),
          name: icon.name,
          category: icon.category || 'Uncategorized'
        }));

        const uniqueCategories = Array.from(new Set(this.icons.map(i => i.category))).sort();
        this.categories = [
          { name: 'All Icons', icon: 'category' },
          ...uniqueCategories.map(cat => ({
            name: cat,
            icon: CATEGORY_ICON_MAP[cat] || 'grid_view'
          }))
        ];
      } catch (error) {
        console.error('Fetch failed:', error);
      }
    },

    toggleIcon(id) {
      if (this.selectedIcons.includes(id)) {
        this.selectedIcons = this.selectedIcons.filter(i => i !== id);
      } else {
        this.selectedIcons.push(id);
      }
    },

    get filteredIcons() {
      return this.icons.filter(icon => {
        const matchesSearch = icon.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = this.activeCategory === 'All Icons' || icon.category === this.activeCategory;
        return matchesSearch && matchesCategory;
      });
    },

    get selectedIconObjects() {
      return this.icons.filter(icon => this.selectedIcons.includes(icon.id));
    },

    generateUrl() {
      const names = this.selectedIconObjects.map(i => i.name).join(',');
      return `https://fonts.googleapis.com/css2?family=Material+Icons+Outlined&icon_names=${names}`;
    },

    handleCopy() {
      navigator.clipboard.writeText(this.generateUrl());
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    },

    openModal(id) {
      if (!this.bsModals[id]) {
        this.bsModals[id] = new bootstrap.Modal(document.getElementById(id));
      }
      this.bsModals[id].show();
    },

    async downloadFontFile() {
      try {
        const url = this.generateUrl();
        const cssResponse = await fetch(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
          }
        });
        const cssText = await cssResponse.text();
        const urlMatch = cssText.match(/src:\s*url\((https:\/\/[^)]+)\)/);
        if (!urlMatch || !urlMatch[1]) throw new Error('Font URL not found');

        const fontUrl = urlMatch[1];
        const fontResponse = await fetch(fontUrl);
        const blob = await fontResponse.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = 'material-icons-subset.woff2';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(downloadUrl);
      } catch (error) {
        console.error('Download failed:', error);
        alert('Font download failed. This might be due to CORS restrictions in the browser.');
      }
    }
  };
}

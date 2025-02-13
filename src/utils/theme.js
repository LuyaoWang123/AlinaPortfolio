const Theme = {
    sectionBackground: '0,0,0',
    sectionBackgroundOpacity: 0.5,
    sectionContent: '#FFFFFF',
    subtitle: `225, 225, 225`,
    subtitleOpacity: 0.8,
    footerBackground: '#111111',
    footerText: '#696969',
    
    applyTheme() {
        document.documentElement.style.setProperty("--section-bg", Theme.sectionBackground);
        document.documentElement.style.setProperty("--section-bg-opacity", Theme.sectionBackground);
        document.documentElement.style.setProperty("--section-content", Theme.sectionContent);
        document.documentElement.style.setProperty("--subtitle-color", Theme.subtitle);
        document.documentElement.style.setProperty("--subtitle-opacity", Theme.subtitleOpacity);
        document.documentElement.style.setProperty("--footer-bg", Theme.footerBackground);
        document.documentElement.style.setProperty("--footer-text", Theme.footerText);
    },

    setTheme(newTheme) {
        Object.assign(Theme, newTheme);
        Theme.applyTheme();
    }
};

export default Theme;
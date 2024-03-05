/**
 * 监听系统主题
 * @type {MediaQueryList}
 */
var OSTheme = window.matchMedia('(prefers-color-scheme: dark)');

/**
 * 修改博客主题
 * @param theme
 * @constructor
 */
const ThemeChange = (theme) => {
    if (theme === 'light') {
        document.querySelector("html").id = "XSLight";
        document.querySelector("#start > aside > div > footer > div > a:nth-child(2)").style.filter = 'grayscale(0%)';
        document.querySelector("#start > aside > div > footer > div > a:nth-child(3)").style.filter = 'grayscale(100%)';
    } else {
        document.querySelector("html").id = "XSDark";
        document.querySelector("#start > aside > div > footer > div > a:nth-child(3)").style.filter = 'grayscale(0%)';
        document.querySelector("#start > aside > div > footer > div > a:nth-child(2)").style.filter = 'grayscale(100%)';
    }
    window.localStorage.setItem('XS_Theme_Mode', theme);
}

/**
 * 初始化博客主题
 */
switch (window.localStorage.getItem('XS_Theme_Mode')) {
    case 'light':
        ThemeChange('light');
        break;
    default:
        ThemeChange('dark');
}

/**
 * 切换主题模式
 */
document.querySelector("#start > aside > div > footer > div > a:nth-child(3)").onclick = () => {
    ThemeChange('dark');
}
document.querySelector("#start > aside > div > footer > div > a:nth-child(2)").onclick = () => {
    ThemeChange('light');
}
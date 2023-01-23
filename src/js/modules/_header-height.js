const header = document?.querySelector('header');
const headerHeight = header.offsetHeight;
// мы можем менять переменные в css
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);


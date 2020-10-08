import './styles.css';
import './js/template.js'


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const themeSwitchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

let currentTheme = 'null';
const value = localStorage.getItem('settings'); 
if(value){ 
    currentTheme = value;
}
if(currentTheme == 'light-theme'){
    renderlightTheme();
}
else{
    themeSwitchRef.checked = true;
    renderDarkTheme();
}
themeSwitchRef.addEventListener('change', onChange);
const onChange = (e) => {
    if(!e.target.checked) {
        currentTheme = Theme.LIGHT;
        renderLightTheme();
    }
    else{
        currentTheme = Theme.DARK;
        renderDarkTheme()
    }
    localStorage.setItem('settings',currentTheme);
}
const renderDarkTheme = () => {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
}
const renderLightTheme = () => {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
}

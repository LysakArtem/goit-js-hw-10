import './styles.css';
import './js/template.js'


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const themeSwitchRef= document.querySelector('#theme-switch-toggle');
const bodyRef= document.querySelector('body');
// const check = menuRef.getAttribute('checked');

// localStorage.setItem('settings','light-theme'); 
var currentTheme='null';
const value= localStorage.getItem('settings'); 
console.log(value)
    if(value){ 
    currentTheme=value;
    }
    if(currentTheme=='light-theme'){
        renderlightTheme();
    }
    else{
        themeSwitchRef.checked=true;
        renderDarkTheme();

    }
themeSwitchRef.addEventListener('change',onChange);
function onChange(e){
    if(!e.target.checked) {
        currentTheme=Theme.LIGHT;
        renderlightTheme();
    }
    else{
        currentTheme=Theme.DARK;
        renderDarkTheme()
    }
    localStorage.setItem('settings',currentTheme);
}
function renderDarkTheme() {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    // themeSwitchRef.setAttribute('checked','checked')
}

function renderlightTheme() {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    // themeSwitchRef.removeAttribute('checked','checked');
}

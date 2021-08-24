const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const images = document.getElementById('image1', 'image2', 'image3');
const textBox = document.getElementById('text-box');
let DARK_THEME = 'dark';
let LIGHT_THEME = 'light';

// Dark or light images
function imageMode(color){
    image1.src =`img/undraw_proud_coder_${color}.svg`;
    image2.src =`img/undraw_feeling_proud_${color}.svg`;
    image3.src =`img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(isDark){
    nav.style.backgroundColor = isDark ?'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}



// Switch Theme Dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', DARK_THEME);
        localStorage.setItem('theme', DARK_THEME); 
        toggleDarkLightMode(true);
    }else{
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);
        localStorage.setItem('theme', LIGHT_THEME);
        toggleDarkLightMode(false);
    }
}

// Event Listener
toggleSwitch/addEventListener('change', switchTheme);

//Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === DARK_THEME){
        toggleSwitch.checked = true;
        toggleDarkLightMode();
    }
}
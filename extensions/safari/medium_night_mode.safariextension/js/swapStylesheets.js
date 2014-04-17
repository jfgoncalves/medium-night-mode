// LOCALSTORAGE ALL THE THINGS !! 

function getNightModeState() { //Getter
     var nightModeState = localStorage.getItem('nightModeState');
     return nightModeState;
}

function setNightModeState(value) { //Setter
    localStorage.setItem('nightModeState', value);
}

// Function > Swaps stylesheets when a state from the toggle switch is detected

function swapSheets() {
    if (document.getElementById('toggle-night').checked) {
        document.getElementById('night-theme-css').disabled = false; // enable night mode
        setNightModeState('on');
    }
    else {
        document.getElementById('night-theme-css').disabled = true;
        setNightModeState('off');
    }
}

// Function > Allows to retrieve the state when the page loads and set the current mode without toggling the switch every time the user visits Medium

function toggleSwitch() {
    if (getNightModeState() == 'on') {
        document.getElementById('toggle-night').checked = true; // Toggle the switch to on
        document.getElementById('night-theme-css').disabled = false; // Set night mode
    }
    else {
        document.getElementById('toggle-night').checked = false; // Toggle the switch to off
        document.getElementById('night-theme-css').disabled = true; // Set normal theme
    }
}

window.onload = toggleSwitch();

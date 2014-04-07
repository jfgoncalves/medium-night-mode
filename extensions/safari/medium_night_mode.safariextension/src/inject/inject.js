var head = document.getElementsByTagName("head")[0]; // Getting the head element in the DOM

// Setting the link to the night stylesheet

var newSheet = document.createElement("link"); // Creating a link element
newSheet.type = "text/css";
newSheet.id = "night-theme-css";
newSheet.rel = "stylesheet";
newSheet.href = safari.extension.baseURI+'css/night.css';
newSheet.disabled = true; // Disabling the stylesheet by default
head.appendChild(newSheet); // Initializing the new sheet

// Setting the link to the javascript who does all the work

var js = document.createElement("script"); // Creating a <script> element
js.type = "text/javascript";
js.src = safari.extension.baseURI+'js/swapStylesheets.js';
head.appendChild(js); // Initializing the javascript part

// Setting the list item in the menu

var nightModeLi = document.createElement('ul'); // Creating a new <li> item
nightModeLi.className = "site-nav-list night"; // Setting a class to it
nightModeLi.innerHTML = '<li class="site-nav-list-item navigable-list-item super-night"><span class="site-nav-list-item-btn night-mode"><span class="icon-night-mode"></span>Night Mode</span><div class="site-nav-list-item-btn-secondary style-switch"><input type="checkbox" id="toggle-night" onChange="swapSheets();" name="check_two" /><label for="toggle-night"><div id="cursor"></div></label></div></li>'; // Setting the content
document.getElementsByClassName("site-nav-scrollable-container")[0].appendChild(nightModeLi); // Getting the navigation menu in the DOM and initializing the <li> item

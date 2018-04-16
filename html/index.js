function openMainTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="maintabcontent" and hide them
    maintabcontent = document.getElementsByClassName("maintabcontent");
    for (i = 0; i < maintabcontent.length; i++) {
        maintabcontent[i].style.display = "none";
    }

    // Get all elements with class="maintablinks" and remove the class "active"
    maintablinks = document.getElementsByClassName("maintablinks");
    for (i = 0; i < maintablinks.length; i++) {
        maintablinks[i].className = maintablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Start with the default tab selected.
document.getElementById("defaultTab").click();
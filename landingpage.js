var toggleMenu = () =>{
    var nav_container = document.getElementById("navlist-container");
    var nav_icon = document.getElementById("nav-icon");

    if (nav_container.style.display === "block") {
        nav_container.style.display = "none";
        nav_icon.classList.replace("fa-close", "fa-navicon")
    }
    else{
        nav_icon.classList.replace("fa-navicon", "fa-close")
        nav_container.style.display = "block";
        
    }
}
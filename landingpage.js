var toggleMenu = () =>{
    var nav_container = document.getElementById("navlist-container");
    var nav_icon = document.getElementById("nav-icon");

    if (nav_container.style.display === "none") {
        //nav_icon.classList.remove("fa-navicon")
        nav_icon.classList.replace("fa-navicon", "fa-close")
        nav_container.style.display = "block";
    }
    else{
        nav_container.style.display = "none";
        nav_icon.classList.replace("fa-close", "fa-navicon")
    }
}
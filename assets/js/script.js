const MenuBt=document.getElementById("open-menu");

let navBar = document.querySelector("header nav");
console.log(navBar.style.display);

MenuBt.addEventListener("click", () => {
    console.log(navBar.style.display);
    if (navBar.style.display === "" || navBar.style.display === "none"){
        navBar.style.display="flex";
        MenuBt.querySelector("img").src="../assets/images/icon-menu-close.svg";
        MenuBt.querySelector("img").style.width="25px";
        navBar.style.animationDirection="normal";
        // prevent window from scrolling while nav menu id opend
        document.body.style.overflow="hidden";
    }
    else{
        MenuBt.querySelector("img").src="../assets/images/icon-menu.svg";
        MenuBt.querySelector("img").style.width="40px";
        document.body.style.overflow="";
        navBar.style.animationDirection="reverse";
        navBar.style.display="none";
    }
});


























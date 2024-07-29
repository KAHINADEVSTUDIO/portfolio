// BURGER ANIMATION 

const btnMenu = document.querySelector("#button-menu"); 

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("active");
});

const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("button-menu");

const toggleSidebar = () => {

    const isClosed = sidebar.style.width === '0px' || !sidebar.style.width;
    sidebar.style.width = isClosed ? '380px' : '0px';

};

toggleBtn.addEventListener("click", toggleSidebar);

// BUTTON TOP

let topButton = document.getElementById("top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction () {
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

};

topButton.onclick = function() {

    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;

};


const hamburger = document.getElementById("hamburger");
const getHtml = document.querySelector('html');
hamburger.addEventListener('click',hamburgerOpen);

function hamburgerOpen(){
    var hOpen = document.getElementById("topbar");
    // var hClosed = document.getElementById("hamburger").getElementsByClassName("closed");
    if (hOpen.classList.contains("closed")){
        // document.getElementById("hamburger").classList.add("open");
        // document.getElementById("hamburger").classList.remove("closed");
        document.getElementById("topbar").classList.add("open");
        document.getElementById("topbar").classList.remove("closed");
        document.getElementById("nav").style.visibility="visible";
        getHtml.style = 'margin: 0; height: 100%; overflow: hidden';
        hamburger.classList.add('openhmb');
        hamburger.classList.remove('closedhmb');

    }
  
    else if (hOpen.classList.contains("open")){
       
        // document.getElementById("hamburger").classList.remove("open");
        // document.getElementById("hamburger").classList.add("closed");
        document.getElementById("hamburger").classList.remove("openhmb");
        document.getElementById("topbar").classList.remove("open");
        document.getElementById("topbar").classList.add("closed");
        document.getElementById("nav").style.visibility="hidden";
        getHtml.style = '';
        hamburger.classList.remove('openhmb');
        hamburger.classList.add('closedhmb');
    }

}



document.getElementById("Projects").addEventListener("load", heightAdjustFirstSection());

function heightAdjustFirstSection() {
    let right = document.getElementById('featuredBox');
    let left = document.getElementById('welcomingBox');  
    
    if (left.offsetHeight > right.offsetHeight && window.innerWidth > 640) {
        right.style.height = left.offsetHeight + "px";
    }
    if (left.offsetHeight < right.offsetHeight && window.innerWidth > 640) {
        let difference = right.offsetHeight - left.offsetHeight;
        left.childNodes[1].style.height = left.childNodes[1].offsetHeight + difference + "px";
    }
}

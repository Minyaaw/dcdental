//Modal Open
var preview = document.getElementById("open-review");
var btn = document.getElementById("btnModal");
var close = document.getElementById("btnClose");
var overley = document.getElementById("overley");
var card = document.getElementById("btnModal");

btn.onclick = function (){
    preview.style.display = "block";
    overley.style.display = "block";
    card.classList.add("active");
    body.style.overflow = "hidden"
}

close.onclick = function (){
    preview.style.display = "none";
    overley.style.display = "none";
    card.classList.remove("active");
}

window.onclick = function(event) {
    if (event.target !== preview && !preview.contains(event.target) && event.target !== btn) {
        preview.style.display = "none";
        overley.style.display = "none";
        card.classList.remove("active");
    }
}

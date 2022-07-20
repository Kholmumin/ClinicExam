let elmOpen = document.querySelector(".read-more");
let elmWrapper = document.querySelector(".wrapper");
let elmClose = document.querySelector(".close");

elmOpen.addEventListener("click", function() {
    elmWrapper.classList.add("modal-show");
});

elmClose.addEventListener("click",function(){
    elmWrapper.classList.remove("modal-show")
})
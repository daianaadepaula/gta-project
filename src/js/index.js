const buttton = document.querySelector(".btn-platforms");
const elementPlatforms = document.querySelector(".btn-platforms .platforms");

buttton.addEventListener("click", ()=>{
	elementPlatforms.classList.toggle("active");
});
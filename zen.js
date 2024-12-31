// for scrobar
// const navbar =document.getElementById('navbar')
// window.addEventListener('scroll', function(){
//     if (window.scrollY > 100) {
//         navbar.classList.add('scrolled');
//         } else{
//             navbar.classList.remove('scrolled');
//         }
    
// })





const text =  document.querySelector('.text')
const line = "WELCOME TO ZENITHORIA";
const cursor = document.querySelector('.cursor')
// cursor.style.opacity= "0";
let index = 0;

function showText (){
    if(index < line.length ){
        const span = document.createElement("span")
        span.textContent= line[index];  //adds one character to the container each time the function runs.
        span.classList.add("fading"); //adding class 
        text.appendChild(span);
        index++;
        setTimeout(showText, 90) //it delays the text
    } else {
        cursor.style.display = "none";
    }
}
setTimeout(function(){
    cursor.style.opacity ="1";
    // text.style.opacity = "1";
    showText();
},1000)


const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide() {
  // Remove the "active" class from the current slide
  slides[currentIndex].classList.remove('active');
  
  // Update the index to the next slide
  currentIndex = (currentIndex + 1) % slides.length;
  
  // Add the "active" class to the new slide
  slides[currentIndex].classList.add('active');
}

// Initialize the first slide
slides[currentIndex].classList.add('active');

// Change slide every 3 seconds
setInterval(showSlide, 3000);


// for sidebar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';

}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';



}
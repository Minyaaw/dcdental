const modal = document.getElementById('modal');
const modalBtns = document.querySelectorAll('.modal-btn');
const closeBtn = document.querySelector('.cta-close');
const overlay = document.getElementById('overlay');
const scaleActive = document.querySelectorAll('.scaleActive');

modalBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        openModal();
        activateCard(btn);
    });
});

closeBtn.addEventListener('click', function() {
    closeModal();
    deactivateAllCards();
});

overlay.addEventListener('click', function() {
    closeModal();
    deactivateAllCards();
});

function openModal() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

function activateCard(btn) {
    const card = btn.closest('.scaleActive');
    card.classList.add('active');
}

function deactivateAllCards() {
    scaleActive.forEach(function(card) {
        card.classList.remove('active');
    });
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add("active");
}
const modals = document.querySelectorAll('.preview');
const modalBtns = document.querySelectorAll('.modal-btn');
const closeBtns = document.querySelectorAll('.cta-close');
const overlay = document.getElementById('overlay');
const scaleActive = document.querySelectorAll('.scaleActive');

modalBtns.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
        openModal(index);
        activateCard(btn);
    });
});

closeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        closeModal();
        deactivateAllCards();
    });
});

overlay.addEventListener('click', function() {
    closeModal();
    deactivateAllCards();
});

function openModal(index) {
    modals.forEach(function(modal, i) {
        if (i === index) {
            modal.style.display = 'block';
        } else {
            modal.style.display = 'none';
        }
    });
    overlay.style.display = 'block';
}

function closeModal() {
    modals.forEach(function(modal) {
        modal.style.display = 'none';
    });
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
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
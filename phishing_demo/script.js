// Phishing caught function - shows custom modal
function phishCaught(event) {
    if (event) event.preventDefault();
    
    // Log attempt (for demo purposes)
    console.log('Phishing attempt detected at:', new Date().toISOString());
    console.log('Target URL: https://vn.trip.com');
    
    // Show modal
    const modal = document.getElementById('phishModal');
    modal.classList.add('show');
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('phishModal');
    modal.classList.remove('show');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('phishModal');
    if (event.target === modal) {
        modal.classList.remove('show');
    }
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
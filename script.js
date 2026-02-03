// Phishing caught function - shows custom modal
function phishCaught(event) {
    if (event) event.preventDefault();
    
    // Log attempt (for demo purposes)
    console.log('🎣 Phishing attempt detected!');
    console.log('Target: YouTube.com');
    console.log('Time:', new Date().toISOString());
    console.log('User action:', event?.target?.tagName || 'Click');
    
    // Show modal
    const modal = document.getElementById('phishModal');
    modal.classList.add('show');
    
    // Prevent page scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('phishModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('phishModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Prevent context menu on important elements (optional security)
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a, button, input');
    links.forEach(element => {
        element.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });
    });
});

// Console warning
console.log('%c⚠️ CẢNH BÁO BẢO MẬT', 'color: red; font-size: 24px; font-weight: bold;');
console.log('%cĐây là trang web PHISHING DEMO chỉ cho mục đích giáo dục!', 'color: orange; font-size: 16px;');
console.log('%cKHÔNG BAO GIỜ nhập thông tin cá nhân vào trang web đáng ngờ!', 'color: yellow; font-size: 14px;');
console.log('%cLuôn kiểm tra URL: https://youtube.com (có HTTPS và chính xác)', 'color: lime; font-size: 14px;');
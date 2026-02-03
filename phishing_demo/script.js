// Validation form
function validateForm() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    let isValid = true;
    
    // Reset previous errors
    username.style.borderColor = '';
    password.style.borderColor = '';
    
    if (!username.value.trim()) {
        username.style.borderColor = '#e74c3c';
        isValid = false;
    }
    
    if (!password.value.trim()) {
        password.style.borderColor = '#e74c3c';
        isValid = false;
    }
    
    return isValid;
}

function phishCaught(event) {
    // Ngăn form submit thật
    if (event) event.preventDefault();
    
    // Validate nếu là form submit
    if (event && event.type === 'submit') {
        if (!validateForm()) {
            showNotification('⚠️ Vui lòng điền đầy đủ thông tin!', 'warning');
            return;
        }
    }
    
    // Optional: Log thông tin form (demo)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('Phishing attempt captured:', {username, password});
    
    // Hiển thị alert "bị lừa"
    setTimeout(() => {
        alert("🎣 BẠN ĐÃ BỊ LỪA! 🎣\n\nĐây là demo phishing để minh họa:\n\n✓ Click bất kỳ nút nào đều trigger alert\n✓ Trong thực tế, thông tin sẽ gửi về attacker\n✓ Luôn kiểm tra URL trước khi nhập thông tin!\n✓ Kiểm tra chứng chỉ SSL (HTTPS)\n✓ Đừng bao giờ nhập mật khẩu vào link lạ\n\n⚠️ HÃY CẨN TRỌNG VỚI PHISHING!");
        
        // Redirect về trang thật (tốt nhất)
        // window.location.href = 'https://vn.trip.com';
    }, 100);
}

// Hiển thị notification
function showNotification(message, type = 'info') {
    // Tạo notification element
    const notification = document.createElement('div');
    notification.className = 'notification ' + type;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'warning' ? '#ffc107' : '#ff6b35'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.5s;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    // Tự động xóa sau 3s
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Thêm event listeners khi DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    // Focus vào input đầu tiên
    const usernameInput = document.getElementById('username');
    if (usernameInput) {
        usernameInput.focus();
    }
    
    // Thêm real-time validation
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (!this.value.trim() && this.hasAttribute('required')) {
                this.style.borderColor = '#e74c3c';
            } else {
                this.style.borderColor = '';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(231, 76, 60)') {
                this.style.borderColor = '';
            }
        });
    });
});

// Thêm CSS cho animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

function showSection(sectionId) {
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => section.style.display = 'none'); 
    document.getElementById(sectionId).style.display = 'block'; 
}


function validateAndSend() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10,}$/;

    
    if (!name || !email || !phone || !message) {
        alert("Semua field harus diisi.");
        return;
    }

    
    if (!emailPattern.test(email)) {
        alert("Format email tidak valid.");
        return;
    }

    
    if (!phonePattern.test(phone)) {
        alert("Nomor HP harus berupa angka dengan panjang minimal 10 karakter.");
        return;
    }

    
    const whatsappMessage = `Nama: ${name}%0AEmail: ${email}%0ANomor HP: ${phone}%0ADeskripsi: ${message}`;
    const whatsappLink = `https://wa.me/6287875395495?text=${whatsappMessage}`;

    window.open(whatsappLink, "_blank");
}

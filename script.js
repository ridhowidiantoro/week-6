document.getElementById('employform').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const nik = document.getElementById('nik').value;
    const email = document.getElementById('email').value;
    const alamat = document.getElementById('alamat').value;
    const noHandphone = document.getElementById('noHandphone').value;

    
    document.getElementById('nameError').innerText = '';
    document.getElementById('nikError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('alamatError').innerText = '';
    document.getElementById('noHandphoneError').innerText = '';

    let isValid = true;

    
    if (!name) {
        document.getElementById('nameError').innerText = 'Nama harus diisi';
        isValid = false;
    }

    
    if (!nik) {
        document.getElementById('nikError').innerText = 'NIK harus diisi';
        isValid = false;
    }

    
    if (!email) {
        document.getElementById('emailError').innerText = 'Email harus diisi';
        isValid = false;
    }

    
    if (!alamat) {
        document.getElementById('alamatError').innerText = 'Alamat harus diisi';
        isValid = false;
    }

   
    if (!noHandphone) {
        document.getElementById('noHandphoneError').innerText = 'No handphone harus diisi';
        isValid = false;
    }

    
    if (isValid) {
        alert('Form berhasil dikirim!');
        
    }
});
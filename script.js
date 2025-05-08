// Event saat dokumen siap
document.addEventListener('DOMContentLoaded', function() {
    // Animasi tombol
    const welcomeBtn = document.getElementById('welcomeBtn');
    welcomeBtn.addEventListener('click', function() {
        alert('Terima kasih telah mengunjungi website kami!');
        this.textContent = 'Tombol Telah Diklik!';
        this.style.backgroundColor = '#e8491d';
    });

    // Form kontak
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
        this.reset();
    });

    // Menambahkan layanan secara dinamis
    const services = [
        { name: 'Web Development', description: 'Pembuatan website profesional' },
        { name: 'SEO', description: 'Optimasi mesin pencari' },
        { name: 'Maintenance', description: 'Pemeliharaan website' }
    ];

    const servicesContainer = document.querySelector('.services-container');
    
    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'service';
        serviceElement.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        `;
        servicesContainer.appendChild(serviceElement);
    });

    // Smooth scrolling untuk navigasi
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

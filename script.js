const warnaCuaca = document.querySelector('.button');
const cuacaMalam = document.querySelector('.malam');
const cuacaPagi = document.querySelector('.pagi');
const cahayaBulan = document.querySelectorAll('.light-toggle');
const indicator = document.querySelector('.toggle');
const bulan = document.querySelector('.moon');
const tombol = document.querySelector('.button');

// Saat tombol ditekan dan masuk ke Dark Mode / Light Mode
tombol.addEventListener('click', () => {
    warnaCuaca.classList.toggle('active');
    cuacaMalam.classList.toggle('active');
    cuacaPagi.classList.toggle('active')
    bulan.classList.toggle('active');
    indicator.classList.toggle('active');

    cahayaBulan.forEach((cahaya) => {
        cahaya.classList.toggle('active');
    })
})
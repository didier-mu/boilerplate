document.getElementById('menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header--container__content-calendar').classList.toggle('active');
    document.querySelector('.header--container__content-icons').classList.toggle('active');
});
// document.addEventListener('DOMContentLoaded', function() {
//     // Crear un nuevo controlador de ScrollMagic
//     const controller = new ScrollMagic.Controller();

//     // Seleccionar todas las secciones
//     const secciones = document.querySelectorAll('.seccion');

//     // Iterar sobre cada sección y crear un nuevo escenario de ScrollMagic para cada una
//     secciones.forEach(seccion => {
//         new ScrollMagic.Scene({
//             triggerElement: seccion,
//             triggerHook: 0.6, // Trigger al 60% de la pantalla
//             reverse: true // Reversar la animación al hacer scroll hacia arriba
//         })
//         .on('enter', function() {
//             // Animar la sección con GSAP cuando entra en la pantalla
//             gsap.to(seccion, { opacity: 1, duration: 0.5, ease: 'power2.inOut' });
//         })
//         .on('leave', function() {
//             // Animar la sección con GSAP cuando sale de la pantalla
//             gsap.to(seccion, { opacity: 0, duration: 0.5, ease: 'power2.inOut' });
//         })
//         .addTo(controller); // Agregar el escenario al controlador
//     });
// });
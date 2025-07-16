$(document).ready(function () {
  $('.card-slider').each(function () {
    let currentIndex = 0;
    const $slider = $(this).find('.slider-imgs');
    const $images = $slider.find('img');
    const total = $images.length;

    // Ajusta el ancho del contenedor y las imágenes
    $slider.css('width', `${100 * total}%`);
    $images.css('width', `${100 / total}%`);

    // Botón "Siguiente"
    $(this).find('.next').click(function () {
      currentIndex = (currentIndex + 1) % total;
      $slider.css('transform', `translateX(-${(100 / total) * currentIndex}%)`);
    });

    // Botón "Anterior"
    $(this).find('.prev').click(function () {
      currentIndex = (currentIndex - 1 + total) % total;
      $slider.css('transform', `translateX(-${(100 / total) * currentIndex}%)`);
    });
  });
});

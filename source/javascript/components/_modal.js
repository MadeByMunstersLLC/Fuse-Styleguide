// Modal Component Interaction

var $modalTrigger = $('.modal__trigger'),
    $modal = $('.modal'),
    $modalCloseTrigger = $('.modal__close'),
    $modalActive = 'modal--active';

$modalTrigger.on('click', function (event) {
  event.preventDefault();
  $(this).siblings($modal).addClass($modalActive);
});

$modalCloseTrigger.on('click', function (event) {
  event.preventDefault();
  $(this).parents($modal).removeClass($modalActive);
});
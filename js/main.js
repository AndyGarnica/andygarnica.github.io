
// seccion menu
$( document ).ready(function() {
  $(".button-collapse").sideNav();
});

// efecto parallax
function callParallax(){
  $(".parallax").parallax();
}
window.load = callParallax();


// seccion de skills
jQuery(document).ready(function(){
  jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
    },6000);
  });
});

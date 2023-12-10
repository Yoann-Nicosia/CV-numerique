$(document).ready(function() {
    const slideCount = $('.slide').length;
    const slideWidth = $('.slide').width();
    let currentPosition = 0;
    let isScrollLocked = false;
  
    $(window).on('wheel', function(e) {
      e.preventDefault();
  
      if (isScrollLocked) return;
  
      isScrollLocked = true;
  
      const delta = e.originalEvent.deltaY;
  
      if (delta > 0) {
        currentPosition += slideWidth;
      } else {
        currentPosition -= slideWidth;
      }
  
      currentPosition = Math.min((slideCount - 1) * slideWidth, Math.max(0, currentPosition));
      
      $('.slides').css('transform', `translateX(-${currentPosition}px)`);
  
      setTimeout(function() {
        isScrollLocked = false;
      }, 0); // Délai de 800 millisecondes entre les défilements
    });
  });
  
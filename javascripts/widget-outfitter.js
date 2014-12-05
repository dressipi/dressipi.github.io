(function() {
  var outfit_container, settings;

  if ($('body').hasClass('outfits')) {
    settings = {
      slide: '.outfit',
      dots: true,
      infinite: false,
      arrows: true,
      focusOnSelect: true,
      prevArrow: '<div class="prev"><i class="fa fa-angle-double-left"></i><div class="text">Previous</div></div>',
      nextArrow: '<div class="next"><div class="text">Next</div><i class="fa fa-angle-double-right"></i></div>',
      onAfterChange: function(slider, index) {
        var max, occasion, slideIndex;
        slideIndex = index + 1;
        max = slider.$slides.length;
        slider.$slider.siblings('.slick-info').find('.current').text(slideIndex);
        if ($('.occasions li').length > 1) {
          occasion = $(slider.$slides[index]).data('occasion');
          $('.occasions li').removeClass('current');
          return $(".occasions li." + occasion).addClass('current');
        }
      }
    };
    if ($('.occasions li').length > 1) {
      $('.occasions li:first-child').addClass('current');
      $('.occasions li').click(function(e) {
        var $this, el, index_of_occasion, occasion, occasions;
        $this = $(this);
        $('.occasions li').removeClass('current');
        $this.addClass('current');
        occasion = $this.data('occasion');
        occasions = (function() {
          var _i, _len, _ref, _results;
          _ref = $('ul.outfits li.outfit');
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            el = _ref[_i];
            _results.push($(el).data('occasion'));
          }
          return _results;
        })();
        index_of_occasion = $.inArray(occasion, occasions);
        if (index_of_occasion >= 0) {
          $('.outfits').slickGoTo(index_of_occasion);
        }
        return e.preventDefault();
      });
    } else {
      $('.occasion li').addClass('only');
    }
    outfit_container = $('.outfits');
    outfit_container.slick(settings);
  }

}).call(this);

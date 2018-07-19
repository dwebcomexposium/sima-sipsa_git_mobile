/**!
	Mobile Navigation
	Basic dropdown menu navigation

	@contributors: Geoffrey Crofte, Rodolphe Rimelé (Alsacréations)
	@date-created: 2015-04-01
	@last-update: 2015-05-28
 */

;
(function($) {

    var $menuline = $('.mn-menu-line'),
        $menu = $('.mn-menu'),
        $submenus = $menu.find('.mn-item-has-megamenu, .mn-item-has-submenu'),
        speed = 175,
        menuInitPos = $menuline.offset(),
        scrolltimer;

    // actions on mouse interactions
    $submenus.on('click.megamenu', function(e) {
        var $parentmenu = $(this).parent().closest('.mn-item-has-submenu');
        $submenus.not($parentmenu).not($(this)).removeClass('is-open');
        $(this).toggleClass('is-open');
        var $el = $(this).find('> .mn-sub-menu-mega, > .mn-sub-menu').stop();
        if ($(this).hasClass('is-open')) {
            $el.fadeIn(speed);
        } else {
            $el.fadeOut(speed);
        }
        e.stopPropagation();
    });

    // accessibility (keyboard tab nav)
    $submenus.find('> .mn-link').on('focus', function() {
        $(this).closest('.mn-menu-item').trigger('mouseenter');
    });
    $submenus.find('a:last').on('blur', function() {
        $(this).closest('.mn-item-lvl-1').trigger('mouseleave');
    });

    // sticky things on scroll banner and sf-ttt to the top
    var $banner = $('.site-banner'),
        bannerInitPos = $banner.offset(),
        $btnTTT = $('.sf-ttt');




})(jQuery);

/**!
 Mobile Navigation
 Sublevel touch dropdown navigation

 @contributors: Damien Senger (Alsacréations)
 @date-created: 2015-06-18
 @last-update: 2015-06-18
 */

;(function ($) {

	$.fn.toggleSlideNav = function (options) {

		var settings = $.extend({
			speed: 200
		}, options);

		return this.each(function () {
			var $_this = $(this),
				$trigger = $(this),
				$target = $('.main-navigation');

			$trigger.on('click.tsn', function () {

				if ($_this.hasClass('is-open')) {
					$target.stop().slideUp(settings.speed);
					$_this.removeClass('is-open');
          $('body').removeClass('with-mobile-nav');

				}
				else {
					$target.stop().slideDown(settings.speed);
					$_this.addClass('is-open');
          $('body').addClass('with-mobile-nav');


				}

				return false;
			});
			$target.on('click.tsn', function (e) {
				e.stopPropagation();
			});
			$('body').on('click', function (e) {
				if ($_this.hasClass('is-open')) {
					$trigger.trigger('click.tsn');
				}
			});
		});

	};

	$('.sb-menu-trigger').toggleSlideNav();

})(jQuery);

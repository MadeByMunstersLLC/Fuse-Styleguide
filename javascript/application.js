var $alert=$(".alert"),$alertTrigger=$(".alert__icon-trigger");$alertTrigger.on("click",function(a){var e="alert--dismissed",t="alert--hidden";a.preventDefault(),$(this).parent($alert).addClass(e),$(this).parent($alert).delay(500).queue(function(){$(this).addClass(t)})});var $navbarToggle=$(".navbar__link--toggle"),$navbarItem=$(".navbar__item"),$submenu=$(".navbar__submenu");$navbarToggle.on("click",function(a){var e="navbar__item--active",t="navbar__submenu--active";a.preventDefault(),$(this).parent($navbarItem).toggleClass(e),$(this).siblings($submenu).toggleClass(t),$navbarItem.hasClass(e)?$(this).siblings($submenu).attr("aria-hidden","false"):$(this).siblings($submenu).attr("aria-hidden","true")});
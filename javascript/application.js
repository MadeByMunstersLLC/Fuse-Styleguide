var $alert=$(".alert"),$alertTrigger=$(".alert__icon-trigger");$alertTrigger.on("click",function(a){var e="alert--dismissed",t="alert--hidden";a.preventDefault(),$(this).parent($alert).addClass(e),$(this).parent($alert).delay(500).queue(function(){$(this).addClass(t)})});var $modalTrigger=$(".modal__trigger"),$modal=$(".modal"),$modalCloseTrigger=$(".modal__close"),$modalActive="modal--active";$modalTrigger.on("click",function(a){a.preventDefault(),$(this).siblings($modal).addClass($modalActive),$modal.attr("aria-hidden","false")}),$modalCloseTrigger.on("click",function(a){a.preventDefault(),$(this).parents($modal).removeClass($modalActive),$modal.attr("aria-hidden","true")});var $navbarToggle=$(".site__navigation .navbar__link--toggle"),$navbarToggleExample=$(".page__navigation--example .navbar__link--toggle"),$navbarItem=$(".navbar__item"),$navbarItemExample=$(".page__navigation--example .navbar__item"),$submenu=$(".navbar__submenu"),$navbarItemActive="navbar__item--active",$submenuActive="navbar__submenu--active",$navigationIcon=$(".navbar__link--navigation-icon");$navbarToggle.on("click",function(a){a.preventDefault(),a.stopPropagation(),$(this).parent($navbarItem).toggleClass($navbarItemActive),$(this).siblings($submenu).toggleClass($submenuActive),$navbarItem.hasClass($navbarItemActive)?$(this).siblings($submenu).attr("aria-hidden","false"):$(this).siblings($submenu).attr("aria-hidden","true")}),$navbarToggleExample.on("click",function(a){a.preventDefault(),$navbarItemExample.removeClass($navbarItemActive),$(this).parent($navbarItemExample).addClass($navbarItemActive),$navigationIcon.removeClass("navbar__link--navigation-icon--active"),$(this).closest($navigationIcon).addClass("navbar__link--navigation-icon--active")});var $tableExpand=$(".table__expand"),$tableRow=$(".table__row"),$tableRowActive="table__row--active",$tableHidden=$(".table__hidden"),$tableHiddenActive="table__hidden--active";$tableExpand.on("click",function(a){a.preventDefault(),$(this).parent($tableRow).toggleClass($tableRowActive),$(this).parent($tableRow).next($tableHidden).toggleClass($tableHiddenActive),$tableRow.hasClass($tableRowActive)?$(this).parent($tableRow).next($tableHidden).attr("aria-hidden","false"):$(this).parent($tableRow).next($tableHidden).attr("aria-hidden","true")});var $tabList=$(".tab__list"),$tabItem=$(".tab__item"),$tabLink=$(".tab__link"),$tabLinkActive="tab__link--active";$(document).ready(function(){$tabItem.first($tabItem).children($tabLink).addClass($tabLinkActive)}),$tabLink.on("click",function(a){a.preventDefault(),$tabLink.removeClass($tabLinkActive),$(this).addClass($tabLinkActive)});
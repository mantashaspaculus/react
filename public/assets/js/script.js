document.addEventListener("click",function(i){i.target.classList.contains("hamburger-toggle")&&i.target.children[0].classList.toggle("active")}),$(document).ready(function(){$(".banner-slider,.bannerInner-slider").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1}),$(".clientsLogo-slider").slick({dots:!1,arrows:!1,infinite:!0,slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:1500,responsive:[{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:480,settings:{slidesToShow:2}}]}),$(".services-slider").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1366,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),$(".keyIndustry-slider").slick({dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,variableWidth:!0,autoplay:!0,autoplaySpeed:1500}),$(".clients-slider").slick({dots:!0,arrows:!1,infinite:!0,variableWidth:!0,centerMode:!0}),$(".blog-slider").slick({dots:!1,arrows:!1,infinite:!0,variableWidth:!0}),$(".process-slider").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1}),$(".benefits-slider").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1366,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),$(".industries-slider").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),$(".case-studies-portfolio-slider").slick({dots:!1,arrows:!0,infinite:!1,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),$(".technologies-slider").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:6,slidesToScroll:1,autoplaySpeed:1500,responsive:[{breakpoint:1200,settings:{slidesToShow:5}},{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:4}},{breakpoint:576,settings:{slidesToShow:3}},{breakpoint:426,settings:{slidesToShow:2}}]}),AOS.init({once:!0,duration:1e3,container:".your-scroll-container"})}),$(function(){$(".lazy").lazy()}),$(function(){var i;function s(){$(".count").each(function(){(function i(s){var e,t,o,n,l=parseInt(s.html(),10);e=s,o=(t=$(window).scrollTop())+$(window).height(),(n=e.offset().top)+e.height()<=o&&t<=n&&!s.data("isCounting")&&l<s.data("count")&&(s.html(++l),s.data("isCounting",!0),setTimeout(function(){s.data("isCounting",!1),i(s)},10))})($(this))})}$(".count").each(function(){$(this).data("count",parseInt($(this).html(),10)),$(this).html("0"),$(this).data("isCounting",!1)}),$(window).scroll(function(){s()}),s(),window.matchMedia("(min-width: 767px)").matches&&(i=0,jQuery(".price-first").each(function(){jQuery(this).height()>i&&(i=jQuery(this).height())}),jQuery(".price-first").height(i),i=0,jQuery(".price-second").each(function(){jQuery(this).height()>i&&(i=jQuery(this).height())}),jQuery(".price-second").height(i),i=0,jQuery(".price-third").each(function(){jQuery(this).height()>i&&(i=jQuery(this).height())}),jQuery(".price-third").height(i))});
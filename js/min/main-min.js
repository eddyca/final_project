!function(){function t(t){$('a[href^="#"]').on("click",function(e){var o=$($(this).attr("href"));o.length&&(e.preventDefault(),$("html, body").animate({scrollTop:o.offset().top},t))})}function e(){$(".trigger").remove(),$(".return").remove(),$(".thumb-container label").click(function(){$(".work-belt").addClass("slided"),$(".work-container").show()}),$(".work-return").click(function(){$(".work-belt").removeClass("slided"),$(".work-container").hide(800)})}function o(){$.ajaxSetup({cache:!0}),$(".thumb-container label").click(function(){var t=$(this),e=t.find("strong").text(),o=t.find(".thumb-unit").data("folder"),i='<div class="loader">Loading...</div>',n="work/"+o;$(".project-load").html(i).load(n),$(".project-title").text(e)})}$("#container").isotope({itemSelector:".portfolio",masonry:{resizable:!1,isFitWidth:!0,gutter:20,columnWidth:$("#container").find("portfolio")[0]}}),$("#filters").on("click","li",function(){var t=$(this).attr("data-filter");$("#container").isotope({filter:t})}),$(function(){t(300),e(),o(),$("header h1").fitText(1,{minFontSize:"20px",maxFontSize:"72px"}),$(".biglink").fitText(1.5),$("textarea").autosize()})}(),function(t){t.mark={jump:function(e){var o={selector:"a.scroll-on-page-link"};return"string"==typeof e&&(o.selector=e),e=t.extend(o,e),t(e.selector).click(function(){var e=t(this),o=e.attr("href"),i=1e3,n=t(o).offset().top;t("html,body").animate({scrollTop:n},i,"swing")})}}}(jQuery),jQuery(function(){jQuery.mark.jump()}),$(function(){$(".awesome-form .input-group input").focusout(function(){var t=$(this).val();""===t?$(this).removeClass("has-value"):$(this).addClass("has-value")})}),$(function(){$("#filters li").on("click",function(){$(this).toggleClass("selected").css("color","#ffffff")})});
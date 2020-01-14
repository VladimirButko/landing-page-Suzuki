let sliderItems = $(".content-slider-box-item.normal");
let sliderBox = $(".content-slider-box");
let sliderBullets = $(".content-slider-bullets-item");
let now = 0;

sliderBox.css('width', (sliderItems.length + 2) * 100 + "%");

sliderBullets.click(function(event){

    let clickNum = sliderBullets.index( $(this) );
    now = clickNum;
    sliderBox.animate({
        left: -100 * (now + 1) + "%"
    });
    sliderBullets.removeClass("active");
    $(this).addClass("active");
});
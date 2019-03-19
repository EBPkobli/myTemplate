var navbarHeigth;
$(document).ready(function () {
    setTimeout(textAnimTimeOut, 2000);

    navbarHeigth = $(".navbar").height() + parseFloat($(".navbar").css("padding-top")) * 2;

    $(document).scroll(function () {
        var viewPort = $(document).scrollTop() + innerHeight;

        $("div.viewport-controller").each(function () {
            $(this).toggleClass('onViewPort', (viewPort > ($(this).position().top + 1) && viewPort - innerHeight < ($(this).position().top + parseFloat($(this).height()))));
        });
        $(".navbar").toggleClass('scrolledNav', $(this).scrollTop() > $('.navbar').height());
        $(".pipe").each(function (index) {
            switch (index) {
                case 0:
                    if ($(this).hasClass("onViewPort"))
                        pipeLineAnim($(this), $(".hakkindaCont"));
                    break;
                case 1:
                    if ($(this).hasClass("onViewPort"))
                        pipeLineAnim($(this), $(".yazilimCont"));
                    break;
                case 2:
                    if ($(this).hasClass("onViewPort"))
                        pipeLineAnim($(this), $(".hobiCont"));
                    break;
            }

        });
    });
});

function pipeLineAnim(element, bagElem) {
    if (element.hasClass("animated")) {
        return 0;
    } else {
        element.addClass("animated");
        element.animate({
            height: "5vh"
        }, 250);
        setTimeout(function () {
            var pipeLineHeight = parseFloat(element.height()) + parseFloat(bagElem.css("margin-top"));
            element.children().animate({
                height: pipeLineHeight + "px"
            }
                , 500, function () {
                    bagElem.animate({
                        opacity: 1.0
                    }, 1000);
                })
        }, 300);



    }
}

function textAnimTimeOut() {
    var rec = [$(".yaziGiris2"), "siteme hoşgeldin", 250, undefined];
    myTextAnim($(".yaziGiris1"), "merhaba", 250, rec);
}
function myTextAnim(element, text, time, recusive) {
    var splitText = text.split('');
    var textIndex = 0;
    var intervalSelf = setInterval(function () {
        element.text(element.text() + splitText[textIndex]);
        textIndex++;
        if (textIndex >= splitText.length) {
            clearInterval(intervalSelf);
            if (recusive != undefined)
                myTextAnim(recusive[0], recusive[1], recusive[2], recusive[3]);
        }
    }, time);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
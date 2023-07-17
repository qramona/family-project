$( document ).ready(function() {

    $('#burger-menu').click(function(){

        $('#menu-items').css('display','flex');
        $('#menu-items').css('margin','1rem -3%');
        $('#menu-items').css('padding','2rem');
        $('#menu-items').css('padding','2rem');
        $('#menu-items').css('align-items','baseline');

        $('#burger-menu').css('display','none');
        $('#close-logo').css('display','flex');
    })
    $('#close-logo').click(function(){
        $('#menu-items').css('display','none');
        $('#close-logo').css('display','none');
        $('#burger-menu').css('display','flex');
    })

    $('.loupe').on('click',function (){
        $('.header__loupe-input').css('display','flex');
    })
    $('.loupe').off('click',function (){
        $('.header__loupe-input').css('display','none');
    })

    $('.QA-loupe').on('click',function (){
        $('.header__loupe-input1').css('display','flex');
    })
    $('.QA-loupe').off('click',function (){
        $('.header__loupe-input1').css('display','none');
    })



    //panel on JQuery
   let check_panel1 = 0;
    $('#QA__btn1').click(function() {
        if (check_panel1 === 0) {
            $("#pannel1").css('display', 'flex');
            check_panel1 = 1;

            $('#QA__btn1').css('rotate','180deg');
            $('#QA__btn1').css('transition','1s');
        } else if (check_panel1 === 1) {
            $("#pannel1").css('display', 'none');
            check_panel1 = 0;
            $('#QA__btn1').css('rotate','0deg');
        }
    })

    let check_panel2 = 0;
    $('#QA__btn2').click(function() {
        if (check_panel2 === 0) {
            $("#pannel2").css('display', 'flex');
            check_panel2 = 1;
            $('#QA__btn2').css('rotate','180deg');
            $('#QA__btn2').css('transition','1s');
        } else if (check_panel2 === 1) {
            $("#pannel2").css('display', 'none');
            check_panel2 = 0;
            $('#QA__btn2').css('rotate','0deg');
        }
    })


    let check_panel3 = 0;
    $('#QA__btn3').click(function() {
        if (check_panel3 === 0) {
            $("#pannel3").css('display', 'flex');
            check_panel3 = 1;
            $('#QA__btn3').css('rotate','180deg');
            $('#QA__btn3').css('transition','1s');
        } else if (check_panel3 === 1) {
            $("#pannel3").css('display', 'none');
            check_panel3 = 0;
            $('#QA__btn3').css('rotate','0deg');
        }
    })


    let check_panel4 = 0;
    $('#QA__btn4').click(function() {
        if (check_panel4 === 0) {
            $("#pannel4").css('display', 'flex');
            check_panel4 = 1;
            $('#QA__btn4').css('rotate','180deg');
            $('#QA__btn4').css('transition','1s');
        } else if (check_panel4 === 1) {
            $("#pannel4").css('display', 'none');
            check_panel4 = 0;
            $('#QA__btn4').css('rotate','0deg');
        }
    })
    //validation on JQUERY
    jQuery('.js-form').validate({
        rules: {
            name: "required",
            phone:{
                required:true,
                minlength:5
            },
        },messages:{
            name:"Введите ваше имя",
            phone:"Введите номер телефона"
        }
    })

    $('.ask-question__items').click(function (){
    Fancybox.show([{ src: "#ask-question__validation", type: "inline" }]);

    })


    // $('.slider__blocks_family').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     arrows: false,
    //
    // });
    //
    // $('.event__blocks').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     arrows: false,
    //
    // });

    $('.button-left').click(function (){
        $('.carousel-item').carousel(prev);
    });
    $('.button-right').click(function (){
        $('.carousel-item').carousel(next);
    });

    // $('.button-left').click(function (){
    //     $('.event__blocks').slick('slickPrev');
    // });
    // $('.button-right').click(function (){
    //     $('.event__blocks').slick('slickNext');
    // });



    });


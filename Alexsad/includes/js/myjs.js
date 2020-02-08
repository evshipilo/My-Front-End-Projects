$(document).ready(function () {

            $("#t1").click(function () {
                        $("#t1").css("color", "#02635a").css("borderBottom", "3px solid #02635a");
                        $(".myTabs li:not(:nth-child(1)) a").css("color", "#a79e93").css("borderBottom", "none");});

            $("#t2").click(function () {
                        $("#t2").css("color", "#02635a").css("borderBottom", "3px solid #02635a");
                        $(".myTabs li:not(:nth-child(2)) a").css("color", "#a79e93").css("borderBottom", "none");});

            $("#t3").click(function () {
                        $("#t3").css("color", "#02635a").css("borderBottom", "3px solid #02635a");
                        $(".myTabs li:not(:nth-child(3)) a").css("color", "#a79e93").css("borderBottom", "none");});

            $("#t4").click(function () {
                        $("#t4").css("color", "#02635a").css("borderBottom", "3px solid #02635a");
                        $(".myTabs li:not(:nth-child(4)) a").css("color", "#a79e93").css("borderBottom", "none");});

           $("#logoMenuSm").click(function () {
                $(".sidenav").css("display", "block");
                $(".bgDarkSm").css("display", "block");
           
           });
            
            $("#closeMenuBtn").click(function () {
                $(".sidenav").css("display", "none");
                $(".bgDarkSm").css("display", "none");
           
           });
    
            $("#imgSm1").click(function () {
                $(".imgLg").attr("src", "images/productSmall.png");
                       
           });
    
            $("#imgSm2").click(function () {
                $(".imgLg").attr("src", "images/productLarge.png");
                       
           });
    
            $("#imgSm3").click(function () {
                $(".imgLg").attr("src", "images/productLarge.png");
                       
           });
    
            $("#imgSm4").click(function () {
                $(".imgLg").attr("src", "images/productSmall.png");
                       
           });
    
    
    
               
             
    
    
            $(".all1").click(function () {
                $(".quotePre1").css("display", "none");
                $(".quote1").css("display", "block");
           
            });
    
            $(".all2").click(function () {
                $(".quotePre2").css("display", "none");
                $(".quote2").css("display", "block");
           
            });
    
            
    
            if ($(window).width() <= '992'){
                $('#some-textarea').wysihtml5({
                toolbar: {
                "font-styles": false, //Font styling, e.g. h1, h2, etc. Default true
                "emphasis": false, //Italics, bold, etc. Default true
                "lists": false, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
                "html": false, //Button which allows you to edit the generated HTML. Default false
                "link": false, //Button to insert a link. Default true
                "image": false, //Button to insert an image. Default true,
                "color": false, //Button to change color of font  
                "blockquote": false, //Blockquote  
                    //default: none, other options are xs, sm, lg
                "fa": false
                }
            });
            }
            
            if ($(window).width() > '992'){
                $('#some-textarea').wysihtml5({
                toolbar: {
                "font-styles": true, //Font styling, e.g. h1, h2, etc. Default true
                "emphasis": true, //Italics, bold, etc. Default true
                "lists": true, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
                "html": true, //Button which allows you to edit the generated HTML. Default false
                "link": true, //Button to insert a link. Default true
                "image": true, //Button to insert an image. Default true,
                "color": true, //Button to change color of font  
                "blockquote": true, //Blockquote  
                    //default: none, other options are xs, sm, lg
                "fa": true
                }
            });
            }
    
            
    
    
    
                $("#star1").click(function () {
                    $("#star1").attr("src", "images/activStar.png");
                    $("#star2").attr("src", "images/passiveStar.png");
                    $("#star3").attr("src", "images/passiveStar.png");
                    $("#star4").attr("src", "images/passiveStar.png");
                    $("#star5").attr("src", "images/passiveStar.png");
                });
                
                $("#star2").click(function () {
                    $("#star1").attr("src", "images/activStar.png");
                    $("#star2").attr("src", "images/activStar.png");
                    $("#star3").attr("src", "images/passiveStar.png");
                    $("#star4").attr("src", "images/passiveStar.png");
                    $("#star5").attr("src", "images/passiveStar.png");
                });
    
                $("#star3").click(function () {
                    $("#star1").attr("src", "images/activStar.png");
                    $("#star2").attr("src", "images/activStar.png");
                    $("#star3").attr("src", "images/activStar.png");
                    $("#star4").attr("src", "images/passiveStar.png");
                    $("#star5").attr("src", "images/passiveStar.png");
                });
    
                $("#star4").click(function () {
                    $("#star1").attr("src", "images/activStar.png");
                    $("#star2").attr("src", "images/activStar.png");
                    $("#star3").attr("src", "images/activStar.png");
                    $("#star4").attr("src", "images/activStar.png");
                    $("#star5").attr("src", "images/passiveStar.png");
                });
    
                $("#star5").click(function () {
                    $("#star1").attr("src", "images/activStar.png");
                    $("#star2").attr("src", "images/activStar.png");
                    $("#star3").attr("src", "images/activStar.png");
                    $("#star4").attr("src", "images/activStar.png");
                    $("#star5").attr("src", "images/activStar.png");
                });
    
    
                $('.tableBtn1').click(function() {
                    $('.tr1, .tableSmall1').css("display", "none");

                });
    
                $('.tableBtn2').click(function() {
                    $('.tr2, .tableSmall2').css("display", "none");

                });
    
    
                $('#btn2').click(function() {
                $('#num').html(+$('#num').html()+1);

                });
            
            
                $('#btn1').click(function() {
                $('#num').html(+$('#num').html()-1);
                if($('#num').html() < 1) {+$('#num').html('1');}
                    
                });
    
                $('#btn4').click(function() {
                $('#num2').html(+$('#num2').html()+1);

                });
            
            
                $('#btn3').click(function() {
                $('#num2').html(+$('#num2').html()-1);
                if($('#num2').html() < 1) {+$('#num2').html('1');}
                    
                });
    
    
                $(".btnJq1").click(function () {
                    var pr1 = +$('.precent1').text().substr(0,2);
                    var price1 = $('.basketPrice1').text();
                    var number1 = $('.baskenNumber1').text();
                    
                    var sum1 = ((price1 * number1) -  ( pr1 * 0.01 *  price1) ).toFixed(2);
                    $('.summ1').text( sum1 );
                     
                });
    
                $(".btnJq2").click(function () {
                    var pr1 = +$('.precent2').text().substr(0,2);
                    var price1 = $('.basketPrice2').text();
                    var number1 = $('.baskenNumber2').text();
                    
                    var sum1 = ((price1 * number1) -  ( pr1 * 0.01 *  price1) ).toFixed(2);
                    $('.summ2').text( sum1 );
                     
                });
    
                
                $(".userPostContact").click(function () {
                    if($('#pass1').val() != $('#pass2').val()) {alert("пароли не совпадают");}
                     
                });   
                
                
                $('#check').click(function() {
                    $('.checkbox1 label , .checkbox1 h5').css("color", "#04655d");
                    $('.checkbox2 label , .checkbox2 h5').css("color", " #c9beb1");
                   
                });
    
                 $('#check1').click(function() {
                    $('.checkbox2 label , .checkbox2 h5').css("color", "#04655d");
                    $('.checkbox1 label , .checkbox1 h5').css("color", " #c9beb1");
                   
                });
    
    
                                    });






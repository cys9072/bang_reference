$(document).ready(function() {
  /* 1 */
  $(window).scroll( function(){
      /* 2 */
      $('.vision_text').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          /* 3 */
          if( bottom_of_window > bottom_of_object/2 ){
              $(this).animate({'opacity':'1'},500);
          }
      }); 
  });
});

$(document).ready(function() {
  /* 1 */
  $(window).scroll( function(){
      /* 2 */
      $('.vision_btn').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          /* 3 */
          if( bottom_of_window > bottom_of_object/2 ){
              $(this).animate({'opacity':'1'},500);
          }
      }); 
  });
});


// 스와이퍼 coverFlower
var swiper = new Swiper('.sw1', {
  loop: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 70,
    depth: 500,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.sw1 .swiper-button-next',
    prevEl: '.sw1 .swiper-button-prev',
  },
});

// 햄버거 클릭 -> 메뉴 열리고 
// x버튼 클릭 -> 메뉴 닫히고

// 메뉴열기
$(".hambuger_").click(function(){
  $('.ham_menu').css("left","0%")
});

// 메뉴 닫기
$(".ham_close").click(function(){
  $('.ham_menu').css("left","-50%")
});

// 검색창 열기 
$(".icons_parant i").hover(function(){
  $('.serch_inp').attr('placeholder',"검색")
})

// belo_ 클릭 효과 
// 설계. 
// 1.클릭 하면 배경이미지만 좌로 97px 움직인다 x축 기준 -97px
// 2.숨겨져 있던 div가 오른쪽에서 왼쪽으로 나오면서 이미지 오른쪽에 배치 된다
// 3.제품이 색상 표를 클릭하면 해당하는 이미지로 바뀐다 
// 4.자세히 보기 호버 효과
// 5.다른 제품을 클릭했을때 처음 클릭했던 div는 원점으로 돌아온다.


// 1번 제품
let count = 0;

  $(".belo_top_first").click(function(){
    count++;
    let num = count % 2;
    if(num){
      $(this).css('background-position','-97px 70px');
      $(this).children('.belo_action_box_wrap').css('top','40%');
      $(this).children('.belo_action_box_wrap').css('z-index','20');
      
    }else{
      $(this).css('background-position','0px 70px');
      $(this).children('.belo_action_box_wrap').css('top','10%');
      $(this).children('.belo_action_box_wrap').css('z-index','-1');
    }
  });

  // 색상 버튼 호버하면 색상 이미지로

  $(".first_black_btn").hover(function(){
    $(".belo_top_first h5").css('color','black').text("BLACK");
    $(".belo_top_first").css({"background":"url(https://i.ibb.co/2nWkvH2/belo-top-first-black.png)no-repeat"});
    $(".belo_top_first").css('background-position','-97px 70px'); 		
    $(".belo_top_first").css("background-size", 100 +"% " + 300+"px")
  });

  $(".first_white_btn").hover(function(){
    $(".belo_top_first h5").css('color','white').text("WHITE");
    $(".belo_top_first").css({"background":"url(https://i.ibb.co/pLKtsgm/belo-top-first-white.png)no-repeat"});
    $(".belo_top_first").css('background-position','-97px 70px');  		
    $(".belo_top_first").css("background-size", 100 +"% " + 300+"px")
  });

  $(".first_iron_btn").hover(function(){
    $('.belo_top_first h5').css('color','#a195c7').text("IRON");
    $(".belo_top_first").css({"background":"url(https://i.ibb.co/72twbwH/belo-top-first-iron.png)no-repeat"});
    $(".belo_top_first").css('background-position','-97px 70px');  		
    $(".belo_top_first").css("background-size", 100 +"% " + 300+"px")
  });



  // // 2번제품
  $(".belo_top_second").click(function(){
    count++;
    let num = count % 2;
    if(num){
    $(this).css('background-position','-87px 70px');
    $(this).children('.belo_action_box_wrap').css('top','40%');
    $(this).children('.belo_action_box_wrap').css('right','0%');
    $(this).children('.belo_action_box_wrap').css('z-index','0');
      
    }else{
     $(this).css('background-position','0px 70px');
     $(this).children('.belo_action_box_wrap').css('top','10%');
     $(this).children('.belo_action_box_wrap').css('right','0%');
     $(this).children('.belo_action_box_wrap').css('z-index','-1');
    }
  });

  // 색상 버튼 호버하면 색상 이미지로

  $(".second_naturaloak_btn").hover(function(){
    $('.belo_top_second h5').css('color','#88602c').text("Natural Oak");
    $(".belo_top_second").css({"background":"url(https://i.ibb.co/M22MVHw/belo-top-second-naturaloak.png)no-repeat"}); 		
    $(".belo_top_second").css('background-position','-87px 70px');
    $(".belo_top_second").css("background-size", 100 +"% " + 300+"px")
  });

  $(".second_black_btn").hover(function(){
    $('.belo_top_second h5').css('color','black').text("BLACK");
    $(".belo_top_second").css({"background":"url(https://i.ibb.co/1sZzbVc/belo-top-second-black.png)no-repeat"}); 		
    $(".belo_top_second").css('background-position','-87px 70px');
    $(".belo_top_second").css("background-size", 100 +"% " + 300+"px")
  });

  $(".second_golden_btn").hover(function(){
    $('.belo_top_second h5').css('color','#ddb37d').text("GOLDEN");
    $(".belo_top_second").css({"background":"url(https://i.ibb.co/vwcSrhQ/belo-top-second-golden.png)no-repeat"}); 		
    $(".belo_top_second").css('background-position','-87px 70px');
    $(".belo_top_second").css("background-size", 100 +"% " + 300+"px")
  });



    // 3번제품
    $(".belo_top_third").click(function(){
      count++;
      let num = count % 2;
      if(num){
        $(this).css('background-position','-37px 85px');
        $(this).children('.belo_action_box_wrap').css('top','40%');
        $(this).children('.belo_action_box_wrap').css('right','0%');
        $(this).children('.belo_action_box_wrap').css('z-index','0');
        
      }else{
       $(this).css('background-position','45px 85px');
       $(this).children('.belo_action_box_wrap').css('top','10%');
       $(this).children('.belo_action_box_wrap').css('right','0%');
       $(this).children('.belo_action_box_wrap').css('z-index','-1');
      }
    });

    // 색상 버튼 호버하면 색상 이미지로
    $(".third_golden_btn").hover(function(){
      $('.belo_top_third h5').css('color','#ddb37d').text("GOLDEN");
      $(".belo_top_third").css({"background":"url(https://i.ibb.co/4g3Gg0p/belo-top-third-golden.png)no-repeat"}); 	
      $(".belo_top_third").css('background-position','-37px 85px');	
      $(".belo_top_third").css("background-size", 75 +"% " + 250+"px")
    });
  
    $(".third_black_btn").hover(function(){
      $('.belo_top_third h5').css('color','black').text("BLACK");
      $(".belo_top_third").css({"background":"url(https://i.ibb.co/TKM6sgh/belo-top-third-black.png)no-repeat"}); 
      $(".belo_top_third").css('background-position','-37px 85px');			
      $(".belo_top_third").css("background-size", 75 +"% " + 250+"px")
    });
  
    $(".third_white_btn").hover(function(){
      $('.belo_top_third h5').css('color','white').text("WHITE");
      $(".belo_top_third").css({"background":"url(https://i.ibb.co/vmLKG51/belo-top-third-white.png)no-repeat"}); 
      $(".belo_top_third").css('background-position','-37px 85px');			
      $(".belo_top_third").css("background-size", 75 +"% " + 250+"px")
    });



// 하단 1번 제품

  $(".belo_bottom_first").click(function(){
    count++;
    let num = count % 2;
    if(num){
      $(this).css('background-position','-97px 70px');
      $(this).children('.belo_action_box_wrap').css('top','40%');
      $(this).children('.belo_action_box_wrap').css('z-index','20');
      
    }else{
      $(this).css('background-position','0px 70px');
      $(this).children('.belo_action_box_wrap').css('top','10%');
      $(this).children('.belo_action_box_wrap').css('z-index','-1');
    }
  });

  // 색상 버튼 호버하면 색상 이미지로

  $(".first_brasstone_btn_bottom").hover(function(){
    $(".belo_bottom_first h5").css('color','#ffab4a;').text("BRASS");
    $(".belo_bottom_first").css({"background":"url(https://i.ibb.co/vz0M4Tz/Any-Conv-com-beosound-1-brass-transparrent-image-1.png)no-repeat"});
    $(".belo_bottom_first").css('background-position','-97px 70px'); 		
    $(".belo_bottom_first").css("background-size", 100 +"% " + 300+"px")
  });

  $(".first_natural_btn_bottom").hover(function(){
    $(".belo_bottom_first h5").css('color','#c7c7c7;').text("NATURAL");
    $(".belo_bottom_first").css({"background":"url(https://i.ibb.co/Mg2dqTf/first-natural-btn-bottom.png)no-repeat"});
    $(".belo_bottom_first").css('background-position','-97px 70px');  		
    $(".belo_bottom_first").css("background-size", 100 +"% " + 300+"px")
  });

  $(".first_bronze_btn_bottom").hover(function(){
    $('.belo_bottom_first h5').css('color','#ce7e24;').text("BRONZE");
    $(".belo_bottom_first").css({"background":"url(https://i.ibb.co/qmjGr3D/first-bronze-btn-bottom.png)no-repeat"});
    $(".belo_bottom_first").css('background-position','-97px 70px');  		
    $(".belo_bottom_first").css("background-size", 100 +"% " + 300+"px")
  });

  
// 하단 2번 제품

$(".belo_bottom_second").click(function(){
  count++;
  let num = count % 2;
  if(num){
    $(this).css('background-position','-87px 70px');
    $(this).children('.belo_action_box_wrap').css('top','40%');
    $(this).children('.belo_action_box_wrap').css('z-index','20');
    
  }else{
    $(this).css('background-position','0px 70px');
    $(this).children('.belo_action_box_wrap').css('top','10%');
    $(this).children('.belo_action_box_wrap').css('z-index','-1');
  }
});



// 하단 3번 제품

$(".belo_bottom_third").click(function(){
  count++;
  let num = count % 2;
  if(num){
    $(this).css('background-position','-67px 85px');
    $(this).children('.belo_action_box_wrap').css('top','40%');
    $(this).children('.belo_action_box_wrap').css('z-index','20');
    
  }else{
    $(this).css('background-position','45px 85px');
    $(this).children('.belo_action_box_wrap').css('top','10%');
    $(this).children('.belo_action_box_wrap').css('z-index','-1');
  }
});

// 스와이퍼 하단
var swiper = new Swiper('.sw2', {
  loop:true,
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    nextEl: '.sw2 .swiper-button-next',
    prevEl: '.sw2 .swiper-button-prev',
  },
});





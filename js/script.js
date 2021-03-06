$(document).ready(function() {
    // dowers.min.jsを入れてハンバーガーのいちを調節する
    $('.drawer').drawer();
    $('.drawer').on('drawer.opened', function(){ 
       $('.drawer-toggle').css('position','fixed')
       $('.drawer-toggle').css('right','40px')
       $('.drawer-toggle').css('top','5px')
    });

  //  =========page link=======
  // #から始まるURLがクリックされた時
  $('a[href^="#"]').click(function() {
      // 移動速度を指定（ミリ秒）
      let speed = 300;
      // hrefで指定されたidを取得
      let id = $(this).attr("href");
      // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
      let target = $("#" == id ? "html" : id);
      // ページのトップを基準にターゲットの位置を取得
      let position = $(target).offset().top;
      // ターゲットの位置までspeedの速度で移動
      $("html, body").animate(
      {
          scrollTop: position -$('#js-header').outerHeight()
      },
      speed
      );
      return false;
  });
  new WOW().init();
    let $form = $('#js-form');
    $form.submit(function (e) { 
        $.ajax({ 
        url: $form.attr('action'), 
        data: $form.serialize(), 
        type: "POST", 
        dataType: "xml", 
        statusCode: { 
            0: function () { 
            //送信に成功したときの処理 
            $('.contact-form').fadeOut();
            $('.success-message').fadeIn();
            }, 
            200: function () { 
            //送信に失敗したときの処理 
            $('.contact-form').fadeOut();
            $('.error-message').fadeIn();
            } 
        } 
        }); 
        return false; 
    }); 
    let $submit =$('#js-submit');

    $('#js-form input, #js-form textarea').on('change', function(){
      if (
        $('#js-form input[type="text"]').val() !== "" &&
        $('#js-form input[type="email"]').val() !== "" &&
        $('#js-form input[name="entry.1815363710"]').prop("checked") === true
      ){
         $submit.css("color","#fff");
         $submit.css("background-color"," #3EA1D1");
        //   $submit.addClass('.active');
      } else{
        $submit.css("color","#3EA1D1");
        $submit.css("background-color"," #fff");
        // $submit.removeClass('.active');
      }
    })
  });
//vegas

<!--TOPへ戻るボタン | スムーズなスクロールを実装します-->
 
$(function(){
 
// ボタンの要素を指定します。ここでは「#for_top a」を指定
    var $btn = $('#for_top a');
    var isHidden = true;
 
//  デフォルトは非表示
    $btn.hide();
        $(window).scroll(function () {
 
// 240pxスクロールした時点でフェードイン表示する
        if( $(this).scrollTop() > 240 ) {　　
            if( isHidden ) {
                $btn.stop(true,true).fadeIn(200);
                isHidden = false;
            }
        } else {
 
//最上段から240pxの位置に戻るとフェードアウトで消える
            if( !isHidden ) {
                $btn.stop(true,true).fadeOut();
                isHidden = true;
            }
        }
    });
 
// クリックイベントの登録
    $btn.click(function(){
 
//  ページトップへスクロール
        $('html, body').animate({
                'scrollTop': 0
 
// 1/1000秒でスピード調整
            }, 300);
         
// デフォルトイベントのキャンセル
        return false;
    });
});



$('#vegas').vegas({
    slides: [
      { src: 'img/main_img01.jpg' },
      { src: 'img/main_img02.jpg' },
      { src: 'img/main_img03.png' }
    ],
     transition: 'zoomIn',
     overlay: 'overlays/09.png'
  });

  //  バーガーメニュー
$('#hamburger').click(function(){
  $('#line1').toggleClass('line_1');
  $('#line2').toggleClass('line_2');
  $('#line3').toggleClass('line_3');
  $('nav').toggleClass('in');
});


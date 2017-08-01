var $ = require('jquery');

var keyDownCode = 0;
$('#message').keydown(function(e) {
  keyDownCode = e.which;  // 押下されたキーのコードをとっておく(日本語変換確定の場合keyupと異なるコード)
});
$('#message').keyup(function(e) {
  if ( 13 == e.which && e.which == keyDownCode ) {
    // 日本語入力確定済みかつinputにフォーカスのある状態でエンターキー押下したときの処理
    func1();
    return false;
  }
  $('#message').change();  // 1文字ごとの変化を監視処理したい場合、changeイベントを発生させる
});
$('#message').change(function() {
  if('' === $(this).val() && currentId) {
    // inputテキストが空欄になった
    func2();
  } else if('' !== $(this).val()) {
    // inputテキストが空欄ではない(変換途上の文字列含む)
    func3();
  }
});

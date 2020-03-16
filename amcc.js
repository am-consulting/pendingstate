$(document).ready(function() {
	// caution
	/*
	$('div#twittercode').after("<div align='center' id='caution'><p><a class='btn btn-default' href='https://am-consulting.co.jp'>Site Top</a>&ensp;<a class='btn btn-default' href='https://am-consulting.co.jp/aboutus.html'>法人概要/代表プロフィール</a>&ensp;<a class='btn btn-default' href='https://am-consulting.co.jp/disclaimer.html'>Disclaimer</a>&ensp;<a class='btn btn-default' class='btn btn-default' href='https://am-consulting.co.jp/notice.html'>お知らせ</a>&ensp;<a class='btn btn-default' href='https://am-consulting.co.jp/primedate.html'>素数日カレンダー</a>&ensp;<a class='btn btn-default' href='https://am-consulting.co.jp/consumptiontax.html'>3党合意以降における消費税増税に関わる時系列推移</a>&ensp;<a class='btn btn-default' href='https://am-consulting.co.jp/nihontoukeinenkanshuyoushihyou.html'>日本統計年鑑主要指標の時系列推移</a>&ensp;<a class='btn btn-default' href='https://am-consulting.co.jp/keywordsearch.html'>キーワード検索リンク集</a>&ensp;<a class='btn btn-default' href='https://am-consulting.co.jp/qa/caution.html#redchart' target='_blank'>背景が赤色で塗りつぶされた時系列チャートについて</a>&ensp;<a class='btn btn-default' href='https://am-consulting.co.jp/qa/caution.html#dailytimeseries' target='_blank'>時系列経済金融日次データの扱いについて</a></p></div><br><style>div#caution{overflow-x: auto;white-space: nowrap;}</style>");
	*/
	$('div#twittercode').after("<ul id=\"accordion\" class=\"accordion\"><li><div class=\"link\"><i class=\"fa fa-bars\"></i>Main Menu<i class=\"fa fa-chevron-down\"></i></div><ul class=\"submenu\"><li><a href='https://am-consulting.co.jp'>Site Top</a></li><li><a href='https://am-consulting.co.jp/aboutus.html' target='_blank'>法人概要/代表取締役プロフィール</a></li><li><a href='https://am-consulting.co.jp/disclaimer.html' target='_blank'>Disclaimer</a></li><li><a href='https://am-consulting.co.jp/notice.html' target='_blank'>お知らせ</a></li><li><a href='https://am-consulting.co.jp/countrydata.html' target='_blank'>『WORLD FACTBOOK』と『World Economic Outlook』で見るカントリーデータ</a></li><li><a href='https://am-consulting.co.jp/qa/useconomy.html' target='_blank'>要は米国、つまりは米国、総ては米国-米国のファンダメンタルズ-</a></li><li><a href='https://am-consulting.co.jp/qa/useconomy2.html' target='_blank'>Mr.President(@realDonaldTrump), I don’t think so. A strong economic environment can never be achieved by just one person.</a></li><li><a href='https://am-consulting.co.jp/primedate.html' target='_blank'>素数日カレンダー</a></li><li><a href='https://am-consulting.co.jp/consumptiontax.html' target='_blank'>3党合意以降における消費税増税に関わる時系列推移</a></li><li><a href='https://am-consulting.co.jp/nihontoukeinenkanshuyoushihyou.html' target='_blank'>日本統計年鑑主要指標の時系列推移</a></li><li><a href='https://am-consulting.co.jp/keywordsearch.html' target='_blank'>キーワード検索リンク集</a></li><li><a href='https://am-consulting.co.jp/qa/caution.html#redchart' target='_blank'>背景が赤色で塗りつぶされた時系列チャートについて</a></li><li><a href='https://am-consulting.co.jp/qa/caution.html#dailytimeseries' target='_blank'>時系列経済金融日次データの扱いについて</a></li><li><a href='https://saecanet.com/environment/sapporoversustokyo.html' target='_blank'>札幌対東京 涼しいのはどちらだ?!</a></li><li><a href='https://am-consulting.co.jp/qa/copper.html' target='_blank'>実需工業用金属の雄【銅】の時系列推移</a></li><li><a href='https://am-consulting.co.jp/qa/preownedcondoprice.html' target='_blank'>都心6区中古マンション等価格の分析</a></li><li><a href='https://am-consulting.co.jp/shijiritsu.html' target='_blank'>内閣支持率/政党支持率</a></li></ul></li></ul>");
	
	// caution
});

// add id to table
/*
$('table').attr('id', function(i) {
	return 'amcctbl'+(i+1);
});
*/

// replace strings in a table
/*
$(window).on("load resize",function() {
  $('table').each(function() {
    var tableText = $(this).html();
    tableText = tableText.replace(/単位:/g, "単位 ");
    tableText = tableText.replace(/ウエイト:/g, "ウエイト ");
    tableText = tableText.replace(/:\(/g, "(");
    $(this).html(tableText);
    var w = $(window).width();
    var x = 1300;if (w <= x) {
      var tableText = $(this).html();
      tableText = tableText.replace(/([^:0-9]?):([^0-9(//)].+)/g, "$1:<br>$2");
      tableText = tableText.replace(/([^,]?[^0-9]),([^0-9].+)/g, "$1,<br>$2");
      tableText = tableText.replace(/([^\(]?)\((.+)/g, "$1<br>($2");
      tableText = tableText.replace(/(.+)\((.+)/g, "$1<br>($2");
      tableText = tableText.replace(/\+([^0-9])/g, "+<br>$1");
      tableText = tableText.replace(/([^、]+)、(.+)/g, "$1、<br>$2");
      $(this).html(tableText);
    } else {
      var tableText = $(this).html();
      tableText = tableText.replace(/<br>/g, "");
      $(this).html(tableText);
    }
    var tableText = $(this).html();
    tableText = tableText.replace(/^\s/gm, "");
    tableText = tableText.replace(/(<br>){2,}/g, "<br>");
    tableText = tableText.replace(/^(\s|\n|\r)*<br>/gm, "");
    $(this).html(tableText);
  });
});
*/
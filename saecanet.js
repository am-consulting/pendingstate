$(document).ready(function() {
	$('div#twittercode').after("<ul id=\"accordion\" class=\"accordion\"><li><div class=\"link\"><i class=\"fa fa-bars\"></i>Main Menu<i class=\"fa fa-chevron-down\"></i></div><ul class=\"submenu\"><li><a href='https://saecanet.com'>Site Top</a></li><li><a href='https://am-consulting.co.jp/aboutus.html' target='_blank'>法人概要/代表取締役プロフィール</a></li><li><a href='https://am-consulting.co.jp/disclaimer.html' target='_blank'>Disclaimer</a></li><li><a href='https://am-consulting.co.jp/notice.html' target='_blank'>お知らせ</a></li><li><a href='https://saecanet.com/environment/sapporoversustokyo.html' target='_blank'>札幌対東京 涼しいのはどちらだ?!</a></li></ul></li></ul>");
});

/*
// replace strings in a table
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
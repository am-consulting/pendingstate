$(document).ready(function() {
	$('div#twittercode').after("<ul id=\"accordion\" class=\"accordion\"><li><div class=\"link\"><i class=\"fa fa-bars\"></i>Main Menu<i class=\"fa fa-chevron-down\"></i></div><ul class=\"submenu\"><li><a href='https://laws.am-consulting.co.jp/'>Site Top</a></li><li><a href='https://am-consulting.co.jp/aboutus.html' target='_blank'>法人概要/代表取締役プロフィール</a></li><li><a href='https://am-consulting.co.jp/disclaimer.html' target='_blank'>Disclaimer</a></li><li><a href='https://am-consulting.co.jp/notice.html' target='_blank'>お知らせ</a></li><li><a href='https://laws.am-consulting.co.jp/japanesealllaws.html' target='_blank'>日本の法令その概要</a></li></ul></li></ul>");
});

$(document).ready(function() {
	// link
	$('div#link').append("<div class='section level3 row'><div id='linkLeft' class='section level4 col-md-9'><div id=\"amccmenu\"><table id=\"amccmenutable\"><tr><td><a href=\"https://am-consulting.co.jp\"> <img src=\"https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fam-consulting.co.jp\" alt=\"https://am-consulting.co.jp\" width=\"450\"/> </a></td><td><a href=\"https://laws.am-consulting.co.jp/\" target=\"_blank\"> <img src=\"https://s0.wordpress.com/mshots/v1/https%3A%2F%2Flaws.am-consulting.co.jp%2F\" alt=\"https://laws.am-consulting.co.jp/\" width=\"450\"/> </a></td><td><a href=\"https://saecanet.com\" target=\"_blank\"> <img src=\"https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fsaecanet.com\" alt=\"https://www.saecanet.com\" width=\"450\"/> </a></td></tr><tr><td><a href=\"https://twitter.com/amc_corporation\" target=\"_blank\"> <img src=\"https://s0.wordpress.com/mshots/v1/https%3A%2F%2Ftwitter.com%2Famc_corporation\" alt=\"https://twitter.com/amc_corporation\" width=\"450\"/> </a></td><td><a href=\"http://twilog.org/amc_corporation\" target=\"_blank\"> <img src=\"https://s0.wordpress.com/mshots/v1/http%3A%2F%2Ftwilog.org%2Famc_corporation\" alt=\"http://twilog.org/amc_corporation\" width=\"450\"/> </a></td><td><a href=\"https://www.youtube.com/user/michiomitake\" target=\"_blank\"> <img src=\"https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fwww.youtube.com%2Fuser%2Fmichiomitake\" alt=\"https://www.youtube.com/user/michiomitake\" width=\"450\"/> </a></td></tr></table></div></div><div id='linkRight' class='section level4 col-md-3'><a class='twitter-timeline' data-height='98%' data-theme='dark' href='https://twitter.com/amc_corporation?ref_src=twsrc%5Etfw'>Tweets by amc_corporation</a> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>");
	// link
	
	
	// note
	$('div#note').append("<div class='section level3 row'><div id='noteLeft' class='section level4 col-md-9'><ul><li>表中「法令条文」欄のテキストは e-Gov https://www.e-gov.go.jp/index.html からのコピーを利用しています。</li><li>本ページから得た情報(以降「本情報」)を利用する際は、毎回必ず、官報で本情報の正確性を確認する必要があります。</li><li>本情報を根拠とした各種申請、設計、施工、契約、取引等の一切を禁止します。</li><li>複数のキーワードで検索する際は、半角スペースで区切って下さい。</li><li><a href='https://laws.am-consulting.co.jp/japanesealllaws.html' target='_blank'>日本の法令その概要</a></li></ul></div><div id='noteRight' class='section level4 col-md-3'><a class='twitter-timeline' data-height='98%' data-theme='dark' href='https://twitter.com/amc_corporation?ref_src=twsrc%5Etfw'>Tweets by amc_corporation</a> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>");
	// note

	// twitter code
	$('div#twittercode').after("<div align='center'><b>複数のキーワードで検索する際は、\"半角スペース\"で区切って下さい。</b></div>");
	// twitter code
	

	// datatables
    $("div").on("shown.bs.tab", function (e) {
    console.log( 'show tab' );
    $($.fn.dataTable.tables(true)).DataTable()
    .columns.adjust()
    .responsive.recalc();
    });
    $('table.lawdatatables').DataTable({
    "dom"            : '<"top"pf>rt<"bottom"il><"clear">',
    "order"          : [[0,"asc"]],
    "lengthMenu"     : [[5,20,40,-1],[5,20,40,"All"]],
    "searching"      : true,
    "paging"         : true,
    "ordering"       : true,
    "info"           : true,
    "scrollX"        : true,
    "retrieve"       : true,
    "searchHighlight": true,
    "fixedColumns"   : {leftColumns: 0},
    "search"         : {"regex": true}
    });
	$('table.lawdatatablesindex').DataTable({
    "dom"            : '<"top"pf>rt<"bottom"il><"clear">',
    "order"          : [[0,"asc"]],
    "lengthMenu"     : [[15,5,40,-1],[15,5,40,"All"]],
    "searching"      : true,
    "paging"         : true,
    "ordering"       : true,
    "info"           : true,
    "scrollX"        : true,
    "retrieve"       : true,
    "searchHighlight": true,
    "fixedColumns"   : {leftColumns: 0},
    "search"         : {"regex": true}
    });
	// datatables
	
	});

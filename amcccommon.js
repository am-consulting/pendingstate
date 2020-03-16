// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
///////////////////////////////////////////////////


/*
$(document).ready(function() {
    var interval = setInterval(function() {
        var momentNow = moment();
        $('#date-part').html(momentNow.format('YYYY MMMM DD') + ' '
                            + momentNow.format('dddd')
                             .substring(0,3).toUpperCase());
        $('#time-part').html(momentNow.format('A hh:mm:ss'));
    }, 100);
    
    $('#stop-interval').on('click', function() {
        clearInterval(interval);
    });
});
*/
///////////////////////////////////////////////////


function MakeNegative() {
/* Reference Reference http://www.hanselman.com/blog/MakingNegativeNumbersTurnRedUsingCSSAndJavascript.aspx */
  TDs = document.getElementsByTagName('td');
  for (var i=0; i<TDs.length; i++) {
    var temp = TDs[i];
    if (temp.firstChild.nodeValue.replace(/(\r\n|\n|\r|\s)/gm,"").indexOf('-') == 0) temp.className = "negative";
  }
}
///////////////////////////////////////////////////

/*
$(document).ready(function() {
	$('div#minor-content-right').append("<a class='twitter-timeline' data-height='98%' data-theme='dark' href='https://twitter.com/amc_corporation?ref_src=twsrc%5Etfw'>Tweets by amc_corporation</a> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>");
});
*/
///////////////////////////////////////////////////


$(document).ready(function() {
	// momentjs
	// $('div#section').before("<div class='momentjs'><div id='date-part'></div><div id='time-part'></div></div>"); 
	// momentjs
	
	
	// contact
	// $('div#contact').append("<div class='section level3 row'><div id='contactLeft' class='section level4 col-md-9'><div id='amccmenu'><table id='amccmenutable'><tr><td><a href='https://contact.am-consulting.co.jp' target=\"_blank\">https://contact.am-consulting.co.jpに移動します<!--<br><img src='https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fcontact.am-consulting.co.jp' alt='https://am-consulting.co.jp' width='450'/>--></a></td></tr></table></div></div><div id='contactRight' class='section level4 col-md-3'><a class='twitter-timeline' data-height='98%' data-theme='dark' href='https://twitter.com/amc_corporation?ref_src=twsrc%5Etfw'>Tweets by amc_corporation</a> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div></div>");
	// contact

	
	// notice
	// $('div#notice').append("<div class='section level3 row'><div id='noticeLeft' class='section level4 col-md-9'><style>hr.double {border-top: 3px double;}</style><hr class='double'><p><b>タイトル</b>:Webサイトレイアウト変更のお知らせ</p><p><b>掲載日</b>:2019年03月31日</p><hr class='double'><p>2019年03月29日付けでWebサイト( https://am-cosulting.co.jp )のレイアウトを変更いたしました。今後ともよろしくお願いいたします。</p><br><br><hr class='double'><p><b>タイトル</b>:定款変更のお知らせ</p><p><b>掲載日</b>:2018年03月07日</p><hr class='double'><p>2018年03月01日付けで定款の「目的」を以下の通りに変更いたしました。今後ともよろしくお願いいたします。<br>*<a href='https://app.box.com/s/wke1js2lo1f2wn0oiyy0v8qtyu75616f' target='_blank'>法務局提出テキストファイル。文字コードはUTF-8に変換。</a></p><ul><li>「目的」<ol><li>国内外の不動産の所有、管理及び賃貸</li><li>国内外の公社債、株式、投資信託、上場商品、金融派生商品への投資</li><li>国内外の美術工芸品、宝石、貴金属への投資</li><li>国内外の投資事業有限責任組合への出資</li><li>国内外の新規技術、政治制度、経済状況、法令体系、金融システム、通貨事情の調査</li><li>前各号に附帯関連する一切の事業</li></ol>*「原因年月日」平成30年3月1日変更</li></ul><br><br><hr class='double'><p><b>タイトル</b>:共通費関連ページおよびアプリケーションの更新停止について</p><p><b>掲載日</b>:2018年03月07日</p><hr class='double'>2018年03月10日をもちまして、<ul><li>弊社管理Webサイトで公開しております公共建築工事共通費および公共土木工事共通費に関連するページの更新を停止いたします。</li><li>以下のアプリケーションの更新を停止いたします。<ol><li><a href='https://play.google.com/store/apps/details?id=jp.co.amconsulting001&hl=ja' target='_blank'>ID：001 公共建築工事共通費計算</a></li><li><a href='https://play.google.com/store/apps/details?id=jp.co.amconsulting004&hl=ja' target='_blank'>ID：004 公共土木工事共通費計算</a></li></ol></li></ul><p>弊社公開コンテンツの中でも特に公共建築工事共通費および公共土木工事共通費に関連するページは非常に多くの方々にご利用を頂いておりましたこと深謝いたします。</p></div><div id='noticeRight' class='section level4 col-md-3'><a class='twitter-timeline' data-height='98%' data-theme='dark' href='https://twitter.com/amc_corporation?ref_src=twsrc%5Etfw'>Tweets by amc_corporation</a> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div></div>");
	// notice
	
	
	// disclaimer
	// $('div#disclaimer').append("<div class='section level3 row'><div id='disclaimerLeft' class='section level4 col-md-9'>ASSET MANAGEMENT CONSULTING CORPORATION PROVIDES ITS CONTENTS ON THIS WEB SITE (THE \"SITE\") SUBJECT TO THE FOLLOWING TERMS AND CONDITIONS (THE \"TERMS\"). AND BY ACCESSING OR USING THE SITE, YOU AGREE TO THE TERMS. WE MAY PERIODICALLY CHANGE THE TERMS, SO PLEASE CHECK BACK FROM TIME TO TIME.<br><br>&nbsp;&nbsp;1.&nbsp;&nbsp;THE SITE IS OPERATED BY ASSET MANAGEMENT CONSULTING CORPORATION AND ALL CONTENTS AND FUNCTIONALITIES ON THE SITE (THE \"SITE CONTENT\") ARE OWNED AND RESERVED BY ASSET MANAGEMENT CONSULTING CORPORATION OR ITS LICENSORS.<br><br>&nbsp;&nbsp;2.&nbsp;&nbsp;THE SITE CONTENT ARE PROVIDED TO THE USER \"AS IS\", EITHER EXPRESS OR IMPLIED, WITHOUT WARRANTY, GUARANTEE, REPRESENTATION AND LIABILITY OF ANY KIND. ASSET MANAGEMENT CONSULTING CORPORATION SHALL NOT BE LIABLE FOR ANY DAMAGES THAT HAVE BEEN CAUSED BY OR IN CONNECTION WITH THE USE OF THE SITE. IN ANY CASE ASSET MANAGEMENT CONSULTING CORPORATION SHALL NOT BE RESPONSIBLE FOR AND DISCLAIMS ANY LIABILITY FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL AND SPECIAL DAMAGES, THAT HAVE BEEN CAUSED BY OR IN CONNECTION WITH THE USE OF THE SITE.<br><br>&nbsp;&nbsp;3.&nbsp;&nbsp;THE SITE CONTENT SHALL NOT CREATE ANY GUARANTEE OR REPRESENTATION OF ANY KIND OR ANY LIABILITY OF ASSET MANAGEMENT CONSULTING CORPORATION AND SHALL NOT RELIEVE THE USER FROM UNDERTAKING ITS OWN INVESTIGATIONS AND CONFIRMATIONS.<br><br>&nbsp;&nbsp;4.&nbsp;&nbsp;WITHOUT LIABILITY WHATSOEVER ASSET MANAGEMENT CONSULTING CORPORATION MAY WITHOUT NOTICE MODIFY AND/OR DISCONTINUE OPERATION OF ALL OR PORTIONS OF THE SITE AT ANY TIME IN ITS SOLE DISCRETION, AND ASSUMES NO RESPONSIBILITY TO UPDATE THE SITE.<br><br>&nbsp;&nbsp;5.&nbsp;&nbsp;LINKS TO THIRD-PARTY SITES DO NOT CONSTITUTE AN ENDORSEMENT OF SUCH THIRD-PARTY SITES BY ASSET MANAGEMENT CONSULTING CORPORATION AND ASSET MANAGEMENT CONSULTING CORPORATION IS NOT RESPONSIBLE FOR THE AVAILABILITY OF THESE SITES OR THEIR CONTENTS.<br><br>&nbsp;&nbsp;6.&nbsp;&nbsp;ANY CLAIMS OR SUITS ASSOCIATED WITH THE SITE OR ITS USE SHALL BE GOVERNED AND CONSTRUED IN ACCORDANCE WITH THE LAWS OF JAPAN.</div><div id='disclaimerRight' class='section level4 col-md-3'><a class='twitter-timeline' data-height='98%' data-theme='dark' href='https://twitter.com/amc_corporation?ref_src=twsrc%5Etfw'>Tweets by amc_corporation</a> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div></div>");
	// disclaimer
	
	
	// twitter code
	$('div#header').after("<div align='center' id='twittercode'><a href='https://twitter.com/amc_corporation?ref_src=twsrc%5Etfw' class='twitter-follow-button' data-show-count='false'>Follow @amc_corporation</a><script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>&nbsp;&nbsp;&nbsp;<a href='https://twitter.com/share' class='twitter-share-button' data-via='amc_corporation'>Tweet</a></div>");
	// twitter code
	
	
	// footer
	$('body').append("<div id='amccfooter01' align='center'><a href='https://am-consulting.co.jp' target='_blank'>アセット･マネジメント･コンサルティング株式会社 https://am-consulting.co.jp</a></div>");
	// footer
	
	
	// asset management consulting corporation
	// $('div#amcctab').append("<div class='section level3 row'><div id='amcctabLeft' class='section level4 col-md-9'><h4>法人概要</h4><ul><li><b>商号</b>&nbsp;&nbsp;アセット・マネジメント・コンサルティング株式会社</li></ul><ul><li><b>代表取締役</b>&nbsp;&nbsp;三竹 道雄/Mitake Michio</li></ul><ul><li><b>設立</b>&nbsp;&nbsp;2006年01月11日/平成18年01月11日</li></ul><ul><li><b>資本金</b>&nbsp;&nbsp;1,000万円</li></ul><ul><li><b>事業目的</b><ol><li>国内外の不動産の所有、管理及び賃貸</li><li>国内外の公社債、株式、投資信託、上場商品、金融派生商品への投資</li><li>国内外の美術工芸品、宝石、貴金属への投資</li><li>国内外の投資事業有限責任組合への出資</li><li>国内外の新規技術、政治制度、経済状況、法令体系、金融システム、通貨事情の調査</li><li>前各号に附帯関連する一切の事業</li></ol></li><a href='https://app.box.com/s/wke1js2lo1f2wn0oiyy0v8qtyu75616f' target='_blank'>*目的変更登記申請法務局提出テキストファイル</a></ul><ul><li><b>独自ドメイン</b><ol><li>am-consulting.co.jp</li><li>saecanet.com</li></ol></li></ul><ul><li><b>SNS等アカウント</b><ol><li>twitter&nbsp;:&nbsp;<a href='https://twitter.com/amc_corporation' target='_blank'>https://twitter.com/amc_corporation</a></li><li>twilog&nbsp;:&nbsp;<a href='https://twilog.org/amc_corporation' target='_blank'>https://twilog.org/amc_corporation</a></li><li>youtube&nbsp;:&nbsp;<a href='https://www.youtube.com/user/michiomitake' target='_blank'>https://www.youtube.com/user/michiomitake</a></li></ol></li></ul><ul><li><b>運営Webサイト</b><ol><li><a href='https://am-consulting.co.jp' target='_blank'>アセット・マネジメント･コンサルティング株式会社</a></li><li><a href='https://saecanet.com' target='_blank'>SaECaNet-Science and Engineering Cafe on the Net-</a></li><li><a href='https://laws.am-consulting.co.jp/' target='_blank'>法令条文検索/法令検索</a></li></ol></li></ul><ul><li><b>Contact</b>&nbsp;&nbsp;<a href='https://contact.am-consulting.co.jp' target=\"_blank\">https://contact.am-consulting.co.jpに移動します</a></li></ul><h4>代表取締役プロフィール(*リンク先は卒業証明書、学位授与証明書、免許証等)</h4><ul><li><b>氏名</b>&nbsp;&nbsp;三竹 道雄/Mitake Michio</li></ul><ul><li><b>学歴</b><ol><li>明治大学農学部農芸化学科卒業<a href='https://app.box.com/s/hzmpfotia2hadocsbfa1wcof2037bxmf' target='_blank'>(卒業証明書)</a></li><li>関東学院大学工学部第二部建設工学科建築系卒業(*学士入学)<a href='https://app.box.com/s/9hdsw5kb2nblai37zcced6fkzcildcdw' target='_blank'>(卒業証明書)</a></li><li>北陸先端科学技術大学院大学知識科学研究科知識科学専攻博士前期課程修了<a href='https://app.box.com/s/w3umkatu8ao6e27j9jo8pjh8m8d6f184' target='_blank'>(学位授与証明書)</a></li><li>学士(農学)、<a href='https://jglobal.jst.go.jp/detail?JGLOBAL_ID=200902157815877959#%7B%22category%22%3A%220%22%2C%22keyword%22%3A%22%E4%B8%89%E7%AB%B9%E9%81%93%E9%9B%84%22%7D' target='_blank'>学士(工学)</a>、<a href='https://dspace.jaist.ac.jp/dspace/simple-search?query=三竹道雄' target='_blank'>修士(知識科学)</a></li></ol>	</li></ul></p><p><ul><li><b>職歴</b><ol><li>建築物の維持管理計画策定業務(建築基準法、消防法、電気事業法、建築物における衛生的環境の確保に関する法律その他の建築関連法規に基づく法定点検および自主点検(常駐および巡回点検計画)の年間計画策定とコスト算出業務)および建築物セキュリティ設計業務(パッシブセンサー、電気錠、マグネットセンサー、パニックオープンシステム等を用いた遠隔監視システムの設計).</li><li>公共道路(一般道路、高速道路)・トンネル・橋梁の電気設備(受電設備、照明設備(主として低圧ナトリウムランプ)、消防設備、換気設備(ジェットファン)および情報設備)の設計および工事費積算業務.<br><b>担当地域</b>&nbsp;:&nbsp;長野県、三重県、高知県.</li><li>公共排水処理施設の設計・工事監理業務(土木(液状化対策、土工、掘削工、地盤改良工その他)、建築(排水処理施設建屋、管理棟設計)、電気設備(高圧受変電設備、配電設備、消防設備、監視制御設備、弱電設備、落雷対策その他)、機械設備(マンホールポンプ選定、水中・陸上ポンプ選定)、排水処理設備(生物膜法、浮遊生物法)、バイオマス利活用施設(コンポスト設備)等の設計統括業務)、工事費積算業務および会計検査対応.<br><b>担当地域</b>&nbsp;:&nbsp;青森県、岩手県、秋田県、福島県、群馬県、千葉県、長野県、静岡県、鳥取県、愛媛県.</li><li>エンジニアリングレポート作成・各種工場のインフラ設備(特別高圧受変電設備、非常用自家発電機、無停電電源装置（UPS）、定電圧定周波数装置(CVCF)、パージガス供給設備、冷温水発生設備、サーバー機器等)の耐震性能調査および改善提案報告書・アスベスト含有建材有無およびPCB含有設備有無の判定業務.</li><li>以上の業務に従事後、2006年01月11日、アセット・マネジメント・コンサルティング株式会社を設立.</li></ol></li></ul><ul><li><b>国家資格</b><ol><li>一級建築士(登録番号：第288254号.平成12年登録)<a href='https://app.box.com/s/b76m7hdnglb4xqrhjz6pwu64l3xc5yvk' target='_blank'>(免許証)</a></li><li>第三種電気主任技術者(第28-3433号.平成4年免状交付)<a href='https://app.box.com/s/duhurn3634ni6luf891g066sr21ekrb5' target='_blank'>(免状)</a></li></ol></li></ul><ul><li><b>管理建築士講習修了者</b><ol><li>修了年月日&nbsp;:&nbsp;平成21年12月15日</li><li>修了証番号：第092F-21157X号<a href='https://app.box.com/s/04l3awigzp697tf1f1tu9vj1dehicky6' target='_blank'>(修了証)</a></li></ol></li></ul><ul><li><b>出生地</b>&nbsp;&nbsp;<a href='https://www.google.com/maps/place/%E3%80%92150-0012+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E5%BA%83%E5%B0%BE%EF%BC%94%E4%B8%81%E7%9B%AE%EF%BC%91%E2%88%92%EF%BC%92%EF%BC%92/@35.6545287,139.7157959,17z/data=!3m1!4b1!4m5!3m4!1s0x60188b6ec2bf26b7:0xdf5dfc87603963f6!8m2!3d35.6545244!4d139.7179846' target='_blank'>東京都渋谷区広尾4-1-22</a></li></ul></p><p><ul><li><b>国籍</b>&nbsp;&nbsp;日本</li></div><div id='amcctabRight' class='section level4 col-md-3'><a class='twitter-timeline' data-height='98%' data-theme='dark' href='https://twitter.com/amc_corporation?ref_src=twsrc%5Etfw'>Tweets by amc_corporation</a> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div></div>");
	// asset management consulting corporation
	

	// primedate
	// $('div.momentjs').after("<div align='center'><a href='https://am-consulting.co.jp/analysis/primedate.html' class='uri' target='_blank'>今日は素数日?</a></div>");
	// primedate

	});


// https://codepen.io/Creaticode/pen/ecAmo
$(document).ready(function() {
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('.accordion'), false);
});
});

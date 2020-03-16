// tabs
$(document).ready(function(){$('div#section').append("<div id='amcctab' class='section level2'><h2>About us</h2></div>");})
$(document).ready(function(){$('div#amcctab').after("<div id='disclaimer' class='section level2'><h2>Disclaimer</h2></div>");})
$(document).ready(function(){$('div#disclaimer').after("<div id='note' class='section level2'><h2>Note</h2></div>");})
$(document).ready(function(){$('div#note').after("<div id='link' class='section level2'><h2>Link</h2></div>");})

// back to top
$(document).ready(function(){$('body').before("<button onclick='topFunction()' id='myBtn' title='Go to top'>Top</button>");})

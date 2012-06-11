function trim(s)
{
  s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");
	return s;
}

//"background_page": "background.html",

var title_hook = $("#overview-top").find("h1");
var movie_name = trim(title_hook.html().split("<span")[0]);

var full_link = "<a href=\"http://thepiratebay.se/search/" + movie_name + "/7\"><img src=\"" + chrome.extension.getURL('icon.png') + "\" height=\"16\"></a>";

title_hook.prepend(full_link);

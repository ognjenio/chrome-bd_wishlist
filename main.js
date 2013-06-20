var boxes = $(".tabModules .bookSmall");

for (var i = 0; i < boxes.length; i++)
{
  var cur = $(boxes[i]);


  var hook = $(cur.find(".moduleContent"));

  var title = cur.find("h3 a").text();
  var isbn = cur.find("h3 a").attr('href').split('/')[cur.find("h3 a").attr('href').split('/').length-1];

  var full_link = "<br/><span class=\"linkSurround button wishList loggedin\"><a href=\"http://www.bookdepository.co.uk/account/addtowishlist/isbn/" + isbn + "\" title=\"Add " + title + " to wishlist\"><em>Add to wishlist</em></a></span><br/>";
  hook.append(full_link);
}

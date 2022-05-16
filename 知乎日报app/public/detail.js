document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll('a[href^="http://daily.zhihu.com/story/"]');
  var length = links.length;
  if (length) {
    for (var i = 0; i < length; ++i) {
      var link = links[i];
      link.href = link.href.replace('http://daily.zhihu.com/story/', 'zhihudaily://story/');
    }
  }
});

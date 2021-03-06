<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery UI 自动完成（Autocomplete） - 可滚动的结果</title>
  <link rel="stylesheet" href="//apps.bdimg.com/libs/jqueryui/1.10.4/css/jquery-ui.min.css">
  <script src="js/jquery-3.1.0.min.js"></script>
  <script src="//apps.bdimg.com/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>

  <script>
    $(function() {
      var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
      $( "#tags" ).autocomplete({
        source: availableTags
      });
    });
  </script>
</head>
<body>

<div class="ui-widget">
  <label for="tags">标签：</label>
  <input id="tags">
</div>


</body>
</html>
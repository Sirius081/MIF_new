<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <meta charset="utf-8">
  <title>Bootstrap 实例 - 基本的按钮下拉菜单</title>

  <link href="css/bootstrap.css" rel='stylesheet' type='text/css'/>
  <link href="css/bootstrap.min.css" rel='stylesheet' type='text/css'/>
  <link href="css/common.css" rel="stylesheet"/>
  <link href="css/spider.css" rel="stylesheet"/>
  <link rel="stylesheet" type="text/css" href="css/jquery-ui-1.10.4.custom.css" />
  <link rel="stylesheet" type="text/css" href="css/ui.jqgrid.css" />

  <script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/sub-menu.js"></script>
</head>
<body>

<div class="btn-group">
  <button type="button" class="btn btn-default dropdown-toggle"
          data-toggle="dropdown">
    默认 <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="#">功能</a></li>
    <li><a href="#">另一个功能</a></li>
    <li><a href="#">其他</a></li>
    <li class="divider"></li>
    <li><a href="#">分离的链接</a></li>
  </ul>
</div>
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">原始
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="#">功能</a></li>
    <li><a href="#">另一个功能</a></li>
    <li><a href="#">其他</a></li>
    <li class="divider"></li>
    <li><a href="#">分离的链接</a></li>
  </ul>
</div>

</body>
</html>

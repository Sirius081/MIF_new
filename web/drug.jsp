<%--
  Created by IntelliJ IDEA.
  User: song
  Date: 2017/3/27
  Time: 21:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
  <meta name="description" content=""/>
  <meta name="author" content=""/>
  <!--[if IE]>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <![endif]-->
  <title>Luzhou Medical Fund Supervisory Platform</title>
  <!-- BOOTSTRAP CORE STYLE  -->
  <link href="css/bootstrap.css" rel="stylesheet"/>
  <!-- FONT AWESOME STYLE  -->
  <link href="css/common.css" rel="stylesheet"/>
  <link href="css/font-awesome.css" rel="stylesheet"/>
  <!-- CUSTOM STYLE  -->

  <link href="css/spider.css" rel="stylesheet"/>
  <link href="css/style.css" rel="stylesheet"/>
  <!-- GOOGLE FONT -->
  <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
  <link rel="stylesheet" type="text/css" href="css/ui.jqgrid.css"/>
  <link rel="stylesheet" type="text/css" href="css/jquery-ui-1.10.4.custom.css"/>
  <link rel="stylesheet" type="text/css" href="css/theme.css"/>

  <script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/common.js"></script>
  <script type="text/javascript" src="js/sub-menu.js"></script>
  <script type="text/javascript" src="js/grid.locale-cn.js" charset="utf-8"></script>
  <script type="text/javascript" src="js/jquery.jqGrid.min.js" charset="utf-8"></script>
  <script type="text/javascript" src="js/jquery-ui.min.js"></script>
  <script type="text/javascript" src="js/echarts.common.min.js"></script>


</head>
<body onload="loadtop10()">
<!--header start-->
<header class="head-section">
  <div class="navbar navbar-default navbar-static-top container">
    <div class="navbar-header">
      <button class="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.html">泸州市<span>医保基金</span>监督平台</a>
      <p>Luzhou Medical Fund Supervisory Platform</p>
    </div>
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li>
          <a href="index.jsp">主页</a>
        </li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-close-others="false" data-delay="0" data-hover=
                  "dropdown" data-toggle="dropdown" href="#">汇总分析 <i class="fa fa-angle-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="payment.jsp">基金收入模块</a>
            </li>
            <li>
              <a href="expense.jsp">基金支出模块</a>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-close-others="false" data-delay="0" data-hover=
                  "dropdown" data-toggle="dropdown" href="#">收支建模<i class="fa fa-angle-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="predict.jsp">收支走向预测</a>
            </li>
            <li>
              <a href="charge.jsp">基金缴费模型</a>
            </li>
            <li>
              <a href="cost.jsp">医疗待遇支付模型</a>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-close-others="false" data-delay="0" data-hover=
                  "dropdown" data-toggle="dropdown" href="#">费用管理<i class="fa fa-angle-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="region.jsp">区县</a>
            </li>
            <li>
              <a href="hospital.jsp">医院</a>
            </li>
            <li>
              <a href="disease.jsp">病种</a>
            </li>
            <li>
              <a href="drug.jsp">药品</a>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-close-others="false" data-delay="0" data-hover=
                  "dropdown" data-toggle="dropdown" href="#">异常检测 <i class="fa fa-angle-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="outlier_detection.jsp">住院异常检测</a>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-close-others="false" data-delay="0" data-hover=
                  "dropdown" data-toggle="dropdown" href="#">建模方法介绍 <i class="fa fa-angle-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="gm11.jsp">灰度预测模型</a>
            </li>
            <li>
              <a href="e_smoothing.jsp">指数平滑法</a>
            </li>
            <li>
              <a href="arima.jsp">ARIMA</a>
            </li>
          </ul>
        </li>
        <li><input class="form-control search" placeholder=" Search" type="text"></li>
      </ul>
    </div>
  </div>
</header>
<!--header end-->
</br>
<!--切换标签页面-->
<div id="content1">
  <!--切换标签页面-->
  <div id="manager">
    <div id="source_table_content">
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <div class="panel-body">
            <div class="panel panel-info">
              <div class="panel-heading">
                Top10
              </div>
              <div class="panel-body">
                <form id="queryPredict" action="disease_details.jsp" method="get">
                  <span class="label1">保险：</span>
                  <select id="identity" class="select_relative">
                    <option value="1">职工</option>
                    <option value="2">居民</option>
                  </select>
                  <span class="label1">按年份：</span>
                  <select id="year" class="select_relative">
                    <option>2010</option>
                    <option>2011</option>
                    <option>2012</option>
                    <option>2013</option>
                    <option>2014</option>
                    <option>2015</option>
                  </select>
                  <input id="query1" class="query" type="button" onclick="updatetop10()" value="查询"/>

                  <div class="grid_relative">
                    <table id="grid-table"></table>
                    <!--jqGrid 浏览导航栏所在-->
                    <div id="grid-pager"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <div class="panel-body">
            <div class="panel panel-info">
              <div class="panel-heading">
                详细信息
              </div>
              <span class="label1">保险：</span>
              <select id="identity1" class="select_relative">
                <option value="1">职工</option>
                <option value="2">居民</option>
              </select>
              <span class="label1">按年份： </span>
              <select id="drugyear" class="select_relative">
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
              </select>
              <span class="label1">按药品名称：</span>
              <style>.ui-autocomplete {
                max-height: 100px;
                overflow-y: auto; /* 防止水平滚动条 */
                overflow-x: hidden;
                width: 20px;
                background-color: #ffff00
              }</style>
              <input type="text" id="drugname" class="input2">
              <input id="query2" class="query" type="submit" onclick="selectResult()" value="查询"/>
              <input id="query3" class="query" type="button" onclick="back()" value="返回"/>
              <div class="grid_relative1">
                <table id="grid-table2"></table>

                <!--jqGrid 浏览导航栏所在-->
                <div id="grid-pager2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<footer class="footer-small">
  <div class="container">
    <div class="col-md-12">
      <div class="copyright"> <p>&copy; Copyright -泸州市医疗保险管理局</p></div>
    </div>
  </div>
  </div>
</footer>

<script type="text/javascript" src="js/drug.js" charset="utf-8"></script>
<script type="text/javascript" src="js/spider.js"></script>
<script type="text/javascript" src="js/plot_forecast.js"></script>
<script type="text/javascript" src="js/display.js"></script>
</body>
</html>

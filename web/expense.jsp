<%--
  Created by IntelliJ IDEA.
  User: song
  Date: 2017/3/28
  Time: 17:04
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
  <title>FREE RESPONSIVE HORIZONTAL ADMIN</title>
  <!-- BOOTSTRAP CORE STYLE  -->
  <link href="css/bootstrap.css" rel="stylesheet"/>
  <!-- FONT AWESOME STYLE  -->
  <link href="css/font-awesome.css" rel="stylesheet"/>
  <!-- CUSTOM STYLE  -->
  <link href="css/common.css" rel="stylesheet"/>
  <link href="css/spider.css" rel="stylesheet"/>
  <link href="css/style.css" rel="stylesheet"/>
  <script type="text/javascript" src="js/common.js"></script>
  <!-- GOOGLE FONT -->
  <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
  <script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>

</head>
<body>
<div class="navbar navbar-inverse set-radius-zero">
  <div class="container">
    <div class="header_bg">
      <div class="logo">
        <span class="font-style">泸州市医保基金监管平台</span>
      </div>
      <div class="right-div">
        <a href="#" class="btn btn-danger pull-right">about</a>
      </div>
    </div>
  </div>
</div>
</div>
<!-- LOGO HEADER END-->

<section class="menu-section">
  <div class="container">
    <div class="row ">
      <div class="col-md-12">
        <div class="navbar-collapse collapse ">
          <ul id="menu-top" class="nav navbar-nav navbar-right">
            <li><a href="index.html">主页</a></li>
            <li>
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">统计分析 <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="payment.jsp">基金收入模块</a>
                </li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="expense.jsp">费用支出模块</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">收支建模 <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="predict.jsp">收支走向预测</a>
                </li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="charge.jsp">基金缴费模型</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="cost.jsp">医疗待遇支付模型</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">异常检测 <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="ui.html">区县</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="hospital1.jsp">医院</a>
                </li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="ui.html">病种</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">药品</a></li>
              </ul>
            </li>
            <li><a href="index.html">联系我们</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- MENU SECTION END-->
<div class="content-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-sm-5 col-xs-12">
        <div class="panel-body">
          <form id="queryPredict" name="form1">
            <span style="font-size:25px">选择保险类型：</span>
            <select  id="identity" class="form-control select_style">
              <option ></option>
              <option value="1">城镇职工</option>
              <option value="2">城镇居民</option>
            </select>
            <span style="font-size:25px">选择内容：</span>
            <select name="feesDetail" id="feesDetail" class="form-control select_style"
                    onChange="getCity()">
              <option ></option>
              <option   value="feesDetail">医院等级</option>
              <option   value="ageGroup">参保人群</option>
            </select>
            <span style="font-size:25px">选择查看：</span>
            <select id="selectBy" name="selectBy" class="form-control select_style"
                    style="width:200px;margin-left: 100px">
            </select>
            <input id="query" class="btn" type="button" value="查询" onclick="plot_statistic()"
                   style="font-size: 20px; margin-left: 100px;margin-top:20px "/>
          </form>
        </div>
      </div>
      <!--图形展示-->
      <div class="col-md-7 col-sm-7 col-xs-12">
        <div id="detail-information" class="plotsize">
        </div>
      </div>
    </div>
  </div>
</div>
<!-- CONTENT-WRAPPER SECTION END-->
<section class="footer-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12" align="center">
        Copyright &copy; 华东师范大学.<a target="_blank" href="http://www.ecnu.edu.cn/"></a>
      </div>
    </div>
  </div>
</section>

<script type="text/javascript" src="js/expense.js" charset="utf-8"></script>
</body>
</html>
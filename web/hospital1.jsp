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
    <title>FREE RESPONSIVE HORIZONTAL ADMIN</title>
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

    <script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/common.js"></script>
    <script type="text/javascript" src="js/sub-menu.js"></script>
    <script type="text/javascript" src="js/grid.locale-cn.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/jquery.jqGrid.min.js" charset="utf-8"></script>

</head>
<body onload="loadtop10()">
<div class="navbar navbar-inverse set-radius-zero">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html">
                <img src="img/logo.png"/>
            </a>
            <div class="right-div">
                <a href="#" class="btn btn-danger pull-right">关于平台</a>
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
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="ui.html">参保信息模块</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">住院缴费信息模块</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">收支建模 <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="ui.html">收支走向预测</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">基金缴费模型</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">医疗待遇支付模型</a></li>
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

</br></br></br>
<!--切换标签页面-->

<div  id="content1">

    </br></br></br>

    <!--切换标签页面-->


    <div id="manager">
        <div id="source_table_content">
        <div class="row">
            <div class="col-md-5 col-sm-5 col-xs-12">
                <div class="panel-body">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            top10
                        </div>
                        <div class="panel-body">
                            <form id="queryPredict">
                                <span class="label1">按年份：</span>
                                <select id="year" class="select_relative">
                                    <option>2010</option>
                                    <option>2011</option>
                                    <option>2012</option>
                                    <option>2013</option>
                                    <option>2014</option>
                                    <option>2015</option>
                                </select>
                                <select id="orderBy" class="select_relative1">
                                    <option value="fees">费用</option>
                                    <option value="groupfees">统筹支付</option>
                                    <option value="m_count">门诊人次</option>
                                    <option value="h_count">住院人次</option>
                                </select>
                                <input id="query1" class="query" type="button" onclick="updatetop10()" value="查询"/>

                                <div class="grid_relative" >

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
                <div class="alert alert-info text-center">
                    <span class="label1">按年份：</span>
                    <select id="hospitalyear" class="select_relative">
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                    </select>
                    <span class="label1">按医院等级：</span>
                    <select id="hospitallevel" class="select_relative">
                        <option>无等级</option>
                        <option>一级</option>
                        <option>二级</option>
                        <option>三级</option>
                        <option>社区</option>
                    </select>
                    <span class="label1">按医疗机构代码：</span>
                    <input type="text" class="input1" id="hospitalnum">
                    <input id="query2" class="query" type="button" onclick="selectResult()" value="查询"/>


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
<section class="footer-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12" align="center">
                Copyright &copy; 华东师范大学.<a target="_blank" href="http://www.ecnu.edu.cn/"></a>
            </div>
        </div>
    </div>
</section>

<script type="text/javascript" src="js/hospital.js" charset="utf-8"></script>
<script type="text/javascript" src="js/spider.js"></script>
<script type="text/javascript" src="js/plot_forecast.js"></script>
<script type="text/javascript" src="js/display.js"></script>
</body>
</html>

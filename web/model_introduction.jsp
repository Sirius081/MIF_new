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
<div class="navbar navbar-inverse set-radius-zero">
    <div class="container">
        <div class="header_bg">
            <div class="logo">
                <span class="font-style">泸州市医保基金监管平台</span>
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
                        <li><a href="index.jsp">主页</a></li>
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
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="charge.jsp">基金缴费模型</a>
                                </li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="cost.jsp">医疗待遇支付模型</a>
                                </li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="charge_cost.jsp">收支模型</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">费用管理 <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="region.jsp">区县</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="hospital.jsp">医院</a>
                                </li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="disease.jsp">病种</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="drug.jsp">药品</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="factor.jsp">费用支出影响因素</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- MENU SECTION END-->

</br>
<!--切换标签页面-->
<div id="content1" style="text-align: center">
    <head style="font-size:50px "><p style="text-align: center;font-size:30px" >本系统中使用了以下模型：</p></head>
    <!--切换标签页面-->
    <br/>
    <br/>
    <p style="text-align: center;font-size:20px" ><a href="http://www.jianshu.com/p/b2b280883ed1" target="view_window">灰度预测模型</a></p>
    <p style="text-align: center;font-size:20px" ><a href="http://www.jianshu.com/p/6fb0408b3f54" target="view_window">Holt Winter 指数平滑模型</a></p>
    <p style="text-align: center;font-size:20px" ><a href="http://www.jianshu.com/p/9a05472b0e7d" target="view_window">ARIMA时间序列模型</a></p>
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

</body>
</html>

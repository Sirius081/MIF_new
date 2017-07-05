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
    <script type="text/javascript" src="js/echarts.common.min.js"></script>
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
                        <li><a href="outlier_detection.jsp" >异常检测</a></li>

                        <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">建模方法介绍 <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="e_smoothing.jsp">指数平滑法</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="arima.jsp">ARIMA方法</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="gm11.jsp">灰度预测模型</a></li>
                            </ul>
                        </li>
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
            <div class="col-md-7 col-sm-7 col-xs-12">
                <div class="panel-body">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            医疗待遇支付模型
                        </div>
                        <div class="panel-body">
                            <form id="queryPredict">
          <span class="label1">一级在职人员：起付线
          <input type="text" id="line10" value="500" class="input2">&nbsp;&nbsp;&nbsp;&nbsp;报销比例
          <input type="text" id="ratio10" value="90" class="input2">%</span>
            <br/>
            <span class="label1">一级退休人员：起付线
          <input type="tet" id="line11" value="400" class="input2">&nbsp;&nbsp;&nbsp;&nbsp;报销比例
          <input type="text" id="ratio11" value="96" class="input2">%</span>
                                <br/>
          <span class="label1">二级在职人员：起付线
          <input type="text" id="line20" value="600" class="input2">&nbsp;&nbsp;&nbsp;&nbsp;报销比例
          <input type="text" id="ratio20" value="85" class="input2">%</span>
            <br/>
          <span class="label1">二级退休人员：起付线
          <input type="text" id="line21" value="500" class="input2">&nbsp;&nbsp;&nbsp;&nbsp;报销比例
          <input type="text" id="ratio21" value="92" class="input2">%</span>
                                <br/>
          <span class="label1">三级在职人员：起付线
          <input type="text" id="line30" value="700" class="input2">&nbsp;&nbsp;&nbsp;&nbsp;报销比例
          <input type="text" id="ratio30" value="80" class="input2">%</span>
            <br/>
          <span class="label1">三级退休人员：起付线
          <input type="text" id="line31" value="600" class="input2">&nbsp;&nbsp;&nbsp;&nbsp;报销比例
          <input type="text" id="ratio31" value="88" class="input2">%</span>
                                <br/>
          <span class="label1">社区在职人员：起付线
          <input type="text" id="line40" value="500" class="input2">&nbsp;&nbsp;&nbsp;&nbsp;报销比例
          <input type="text" id="ratio40" value="90" class="input2">%</span>
            <br/>
          <span class="label1">社区退休人员：起付线
          <input type="text" id="line41" value="400" class="input2">&nbsp;&nbsp;&nbsp;&nbsp;报销比例
          <input type="text" id="ratio41" value="96" class="input2">%</span>
                                <br/>
                                <input id="query1" class="btn btn-primary" type="button" onclick="selectresult()"
                                       value="查询"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="reset" class="btn btn-primary">重置</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <!--图形展示-->
            <div class="col-md-5 col-sm-5 col-xs-5">
                <div id="detail-information">

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
                Copyright &copy;泸州市医疗保险管理局.<a target="_blank" href="http://www.ecnu.edu.cn/"></a>
            </div>
        </div>
    </div>
</section>

<script src="assets/js/jquery-1.10.2.js"></script>
<!-- BOOTSTRAP SCRIPTS  -->
<script src="assets/js/bootstrap.js"></script>
<script type="text/javascript" src="js/cost.js" charset="utf-8"></script>
<script type="text/javascript" src="js/spider.js"></script>
<script type="text/javascript" src="js/plot_forecast.js"></script>
</body>
</html>

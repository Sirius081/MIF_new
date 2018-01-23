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
                        <li>
                            <a href="hospital_anomaly_detection.jsp">医院异常检测</a>
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
                            <a href="dbscan.jsp">DBSCAN聚类分析方法</a>
                        </li>
                        <li>
                            <a href="lof.jsp">局部异常因子(LOF)算法</a>
                        </li>
                        <li>
                            <a href="context_method.jsp">基于context的异常检测</a>
                        </li>
                    </ul>
                </li>
                <li><input class="form-control search" placeholder=" Search" type="text"></li>
            </ul>
        </div>
    </div>
</header>
<!--header end-->

<div class="content-wrapper">
    <div class="container">
        <div class="row">
            <div class="col-md-5 col-sm-5 col-xs-5">
                <div class="panel-body">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            统筹基金收入预测
                        </div>
                        <span class="panel-body">
                            <form id="queryPredict2">
                                <span class="label1">缴费上限：
                                    <input class="input2" id="ceil" value='3' type="text"/>倍平均工资</span></br>
                                <span class="label1">
                                    缴费下限：
                                    <input class="input2" id="floor" value="1" type="text"/>倍平均工资
                                </span><br/>
                                <span class="label1">
                                    缴费比例：
                                    <input id="ratio" class="input2" value="9" type="text"/>%</span><br/><br/>
                                <input id="query2" class="btn btn-primary" type="button" onclick="predictIncome()"
                                       value="查询"/>
                                <button type="reset" class="btn btn-primary">重置</button>
                                </br></br></br></br></br></br>
                            </form>
                            </span>
                    </div>
                </div>
            </div>
            <div class="col-md-7 col-sm-7 col-xs-12">
                <div class="panel-body">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            统筹费用支出预测
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
                                <input id="query1" class="btn btn-primary" type="button" onclick="predictCost()"
                                       value="查询"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="reset" class="btn btn-primary">重置</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!--图形展示-->
        </div>
    </div>
    <div id="content2">
        <div class="row">
            <div id="detail-information">
            </div>
        </div>
    </div>
</div>
</div>

<!--small footer start -->
<footer class="footer-small">
    <div class="container">
        <div class="col-md-12">
            <div class="copyright"> <p>&copy; Copyright -泸州市医疗保险管理局</p></div>
        </div>
    </div>
    </div>
</footer>
<!--small footer end-->

<script src="assets/js/jquery-1.10.2.js"></script>
<!-- BOOTSTRAP SCRIPTS  -->
<script src="assets/js/bootstrap.js"></script>
<script type="text/javascript" src="js/charge_cost.js" charset="utf-8"></script>
<script type="text/javascript" src="js/spider.js"></script>
<script type="text/javascript" src="js/plot_forecast.js"></script>
</body>
</html>

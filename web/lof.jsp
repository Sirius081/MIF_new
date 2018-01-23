<%--
  Created by IntelliJ IDEA.
  User: C'est La Vie
  Date: 2017/11/6
  Time: 10:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Developed By M Abdur Rokib Promy">
    <meta name="author" content="cosmic">
    <meta name="keywords" content="Bootstrap 3, Template, Theme, Responsive, Corporate, Business">
    <link rel="shortcut icon" href="img/favicon.png">


    <title>
        Luzhou Medical Fund Supervisory Platform
    </title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/theme.css" rel="stylesheet">
    <link href="css/bootstrap-reset.css" rel="stylesheet">


    <!--external css-->
    <link href="assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/flexslider.css"/>
    <link href="assets/bxslider/jquery.bxslider.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="assets/owlcarousel/owl.carousel.css">
    <link rel="stylesheet" href="assets/owlcarousel/owl.theme.css">

    <link href="css/superfish.css" rel="stylesheet" media="screen">
    <link rel="stylesheet" href="css/seq-slider/sequencejs-theme.apple-style.css" />
    <link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
    <!--
  <link href='http://fonts.googleapis.com/css?family=Roboto+Slab' rel='stylesheet' type='text/css'>
  -->

    <!-- Custom styles for this template -->
    <link rel="stylesheet" type="text/css" href="css/component.css">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/style-responsive.css" rel="stylesheet" />


    <!--
  <link rel="stylesheet" media="screen" href="css/slider/sequencejs-theme.modern-slide-in.css" />
  -->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 tooltipss and media queries -->
    <!--[if lt IE 9]>
    <script src="js/html5shiv.js">
    </script>
    <script src="js/respond.min.js">
    </script>
    <![endif]-->
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
                        </li>f
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
                        <li>
                            <a href="arima.jsp">ARIMA</a>
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
<!--breadcrumbs start-->
<div class="breadcrumbs">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-sm-4">
                <h1>建模方法-局部异常因子(LOF)算法</h1>
            </div>
            <div class="col-lg-8 col-sm-8">
                <ol class="breadcrumb pull-right">
                </ol>
            </div>
        </div>
    </div>
</div>
<!--breadcrumbs end-->

<!-- MENU SECTION END-->
<div class="container privacy-terms">
    <div class="row">
        <div class="col-md-12">
            <div class="show-content">
                <h3>1 局部异常因子（LOF）算法概念</h3>
                <p></p>
                <p>局部异常因子算法LOF（Local Outlier Factor）是一种基于距离的异常检测算法。</p>

                <p>用视觉直观的感受一下，如下图所示，对于C1集合的点，整体间距、密度、分散情况较为均匀一致，可以认为是同一簇；对于C2集合的点，同样可认为是一簇。o1、o2点相对孤立，可以认为是异常点或离散点。现在的问题是，如何实现算法的通用性，可以满足C1和C2这种密度分散情况迥异的集合的异常点识别。LOF可以实现这样的目标。</p>

                <div class="image-package">
                    <img src="images/lof.jpg"
                         alt="144"/>

                </div>

                <hr>
                <h3>2 LOF算法相关定义<br></h3>
                <p></p>
                <h4>(1)d(p,o)：两点p和o之间的距离；</h4>
                <br>
                <h4>(2)k-distance：第k距离  </h4>
                <p>对于点p的第k距离dk(p)定义如下：dk(p)=d(p,o)，并且满足：</p>
                <p>a) 在集合中至少有不包括p在内的k个点o,∈C{x≠p}， 满足d(p,o,)≤d(p,o)；</p>
                <p>b) 在集合中最多有不包括p在内的k−1个点o,∈C{x≠p}，满足d(p,o,)<d(p,o)；p的第k距离，也就是距离p第k远的点的距离，不包括p。</p>
                <br>
                <h4>(3)k-distance neighborhood of p：第k距离邻域</h4>
                <p>点p的第k距离邻域Nk(p)，就是p的第k距离即以内的所有点，包括第k距离。因此p的第k邻域点的个数 |Nk(p)| ≥ k。</p>
                <br>
                <h4>(4)reach-distance：可达距离  </h4>
                <p>点o到点p的第k可达距离定义为：reach−distancek(p,o)=max{k−distance(o),d(p,o)}  也就是说，点o到点p的第k可达距离，至少是o的第k距离，或者是o、p间的真实距离。</p>
                <br>
                <h4>(5)local reachability density：局部可达密度  <br></h4>
                <h4>点ｐ的局部可达密度表示为：</h4>
                <h3><b>lrdk(p)=1/(∑o∈Nk(p)reach−distk(p,o)/|Nk(p)|)</b><br></h3>
                <p>表示点p的第k邻域内点到p的平均可达距离的倒数。</p>
                <p>注意，是p的邻域点Nk(p)到p的可达距离，不是p到Nk(p)的可达距离。这个值的含义可以这样理解，首先这代表一个密度，密度越高，我们认为越可能属于同一簇，密度越低，越可能是离群点。如果p和周围邻域点是同一簇，那么可达距离越可能为较小的dk(o)，导致可达距离之和较小，密度值较高；如果p和周围邻居点较远，那么可达距离可能都会取较大值d(p,o)，导致密度较小，越可能是离群点。 </p>
                <br>
                <h4>(6)local outlier factor：局部离群因子　　<br></h4>
                <h4>点p的局部离群因子表示为：</h4>
                <h3><b>LOFk(p)=∑o∈Nk(p) lrdk(o)/lrdk(p)/|Nk(p)|=∑o∈Nk(p) （lrdk(o)/|Nk(p)|）/lrdk(p)</b><br></h3>
                <p>表示点p的邻域点Nk(p)的局部可达密度与点p的局部可达密度之比的平均数。</p>
                <p>如果这个比值越接近1，说明p的其邻域点密度差不多，p可能和邻域同属一簇；如果这个比值越小于1，说明p的密度高于其邻域点密度，p为密集点；如果这个比值越大于1，说明p的密度小于其邻域点密度，p越可能是异常点。</p>
                <p></p>

                <hr>
                <h3>3 局部异常因子算法思想</h3>
                <br>
                <p></p>

                <p>根据以上相关概念介绍，lof的思想主要是通过比较每个点p和其邻域点的密度来判断该点是否为异常点，如果点p的密度越低，越可能被认定是异常点。至于密度，是通过点之间的距离来计算的，点之间距离越远，密度越低，距离越近，密度越高，完全符合我们的理解。而且，因为lof对密度的是通过点的第k邻域来计算，而不是全局计算，因此得名为“局部”异常因子，这样，对于图1中的两种数据集C1和C2，LOF完全可以正确处理，而不会因为数据密度分散情况不同而错误的将正常点判定为异常点。</p>


                <hr>


                <p>参考文献：</p>

                <p>[1] HAN Jia Wei， KAMBER M.数据挖掘概念与技术[M]．范明，孟晓峰，译．北京：机械工业出版社，2001．</p>

                <p>[2] Markus M. Breunig†, Hans-Peter Kriegel†, Raymond T. Ng‡, Jörg Sander†, LOF: Identifying Density-Based Local Outliers</p>

            </div>
            <!--图形展示-->
        </div>
    </div>
</div>
<!-- CONTENT-WRAPPER SECTION END-->
<!--small footer start -->
<footer class="footer-small">
    <div class="container">
        <div class="col-md-12">
            <div class="copyright"> <p>&copy; Copyright -泸州市医疗保险管理局</p></div>
        </div>
    </div>
</footer>
<!--small footer end-->

<!-- js placed at the end of the document so the pages load faster -->
<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/hover-dropdown.js"></script>
<script defer src="js/jquery.flexslider.js"></script>
<script type="text/javascript" src="assets/bxslider/jquery.bxslider.js"></script>
<script src="js/jquery.easing.min.js"></script>
<script src="js/link-hover.js"></script>
<!--common script for all pages-->
<script src="js/common-scripts.js"></script>
<script src="js/wow.min.js"></script>
<script>
    wow = new WOW(
            {
                boxClass:     'wow',      // default
                animateClass: 'animated', // default
                offset:       0          // default
            }
    )
    wow.init();
</script>
</body>
</html>

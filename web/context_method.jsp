<%--
  Created by IntelliJ IDEA.
  User: songsong
  Date: 2017/12/5
  Time: 20:22
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

    <title>Luzhou Medical Fund Supervisory Platform</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/theme.css" rel="stylesheet">
    <link href="css/bootstrap-reset.css" rel="stylesheet">
    <!--external css-->
    <link href="assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/flexslider.css"/>
    <link href="assets/bxslider/jquery.bxslider.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/animate.css">
    <link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>


    <!-- Custom styles for this template -->
    <link href="css/style.css" rel="stylesheet">
    <link href="css/style-responsive.css" rel="stylesheet" />

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 tooltipss and media queries -->
    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.min.js"></script>
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
                            <a href="arima.jsp">ARIMA</a>
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
            <div class="col-lg-7 col-sm-7">
                <h1>建模方法-基于context（上下文）的异常检测</h1>
            </div>
            <div class="col-lg-5 col-sm-5">
                <ol class="breadcrumb pull-right">
                </ol>
            </div>
        </div>
    </div>
</div>
<!--breadcrumbs end-->

<!--container start-->

<!-- privacy -->
<div class="container privacy-terms">
    <div class="row">
        <div class="col-md-12">
            <p>与一般的异常检测不同，基于context（上下文）的异常检测方法认为：一个样本只在某个特定的场景下才被认为是异常点。例如某小区住房均价100000元／平米，若该小区位于荒郊野外，则该小区的房价可视为异常；而如果该小区位于陆家嘴，则该房价属于正常。在这个例子中，小区的地理位置（上下文）决定了房子的均价是否异常。</p>
            <p>骗保的检测同样依赖于上下文。一次住院最终的费用受病种、病情、病人的家庭收入、医院等级等等因素影响，这些因素可看作是一次住院的上下文。若不考虑上下文，孤立的检测住院费用，会导致结果出现很大偏差。例如简单的按照住院总花费高低来判断是否有骗保是不合理的，因为病人的病情可能较重，本来就需要花费较多的费用。因此，我们检测骗保需要结合具体的上下文信息。</p>
            <p>基于context的异常检测方法有很多，典型的做法是以context信息作为特征、以样本的属性作为标签来训练一个回归模型，然后基于模型的预测值计算出样本的异常值。然而现实世界的应用中经常缺乏足够上下文信息（例如未知因素），导致训练出来的回归模型不可靠。另一种方法是使用上下文信息找出样本的邻居（与这个样本比较相近的样本），再根据该样本及其邻居的属性得出样本的异常值。在骗保检测的场景中，我们根据一次住院的上下文信息（病种、病情、医院等级等），找出与该次住院情况类似的其他住院，再在这些住院中比较相关费用，以此评估该次住院的费用是否正常。</p>
            <p>本系统中异常检测的对象有两个：医院和住院。对于医院，主要检测其均次住院费用是否异常；对于住院，主要检测其总费用是否异常。二者使用的方法大致相同，下面以住院异常检测为例，介绍建模方法。</p>
            <h3>1. 住院的向量表示</h3>
            <p>数学模型的输入必须是模型可识别的模式--数字，因此建模的第一步是使用数字向量来表示一次住院。一次住院可以由医院信息、病人信息和药品诊疗信息组成，这将构成一个超高维度的向量。高纬度会给建模造成很多不良影响，例如运算量大，数据稀疏等。因此，我们使用深度神经网络来得出住院的向量表示，其具有低维、稠密的优点。</p>
            <<img src="images/representation_learning.jpg">
            <p>该神经网络的输入是住院的搞维向量表示，输出为住院总费用的级别（按费用高低分成高中低三级），最后使用最后一个隐层的输出作为该住院的向量表示。</p>
            <p>与其他降维方法相比，深度神经网络具有以下优点</p>
                <p>1. 与主成分分析（pca）相比，深度神经网络是有监督的降维，更容易获得可用的低维表示。</p>
                <p>2. 与线性判别分析（lda）相比，深度神经网络中包含了非线性的变换，模型的表达能力大大增加。</p>
            <h3>2.向量间距离的度量</h3>
            <p>为了找出一次住院的“邻居”，我们需要有一个合适的度量来表示住院向量之间的距离。这里我们使用了基于马氏距离的度量学习（metric learning）。</p>
            <p>马氏距离的定义如下：</p>
            <img src="images/m_dis.jpg">
            <p>其中M可以是任意的半正定矩阵，它是度量学习中要学习的主要参数。M可以分解成两个两个矩阵的乘积：</p>
            <img src="images/m_fa.jpg">
            <p>所以度量学习的目标函数可以定义为最小化回归误差，参数为矩阵A，优化算法可使用常用的梯度下降，其梯度为：</p>
            <img src="images/gradi.jpg">
            <h3>3.异常值的计算</h3>
            <p>我们首先用深度神经网络计算出每一次住院的向量，再根据度量学习计算出向量两两之间的距离从而得出每一次住院的邻居，然后使用对邻居的加权平均的算出每一次住院费用的预测值。加权平均的方法如下：</p>
            <img src="images/kernal_knn.jpg">
            <p>其中Wij是服从高斯分布权重：</p>
            <img src="images/normal_weight.jpg">
            <p>最终，使用预测值和真实值之间差的绝对值作为其异常值。该值越高，该次住院越有可能发生了异常骗保。</p>
            <p> &nbsp; </p>
        </div>
    </div>
</div>
<!--container end-->
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

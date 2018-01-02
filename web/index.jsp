<%--
  Created by IntelliJ IDEA.
  User: songsong
  Date: 2017/11/28
  Time: 21:55
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
  <link rel="stylesheet" href="assets/owlcarousel/owl.carousel.css">
  <link rel="stylesheet" href="assets/owlcarousel/owl.theme.css">

  <link href="css/superfish.css" rel="stylesheet" media="screen">
  <link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
  <!-- <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'> -->


  <!-- Custom styles for this template -->
  <link rel="stylesheet" type="text/css" href="css/component.css">
  <link href="css/style.css" rel="stylesheet">
  <link href="css/style-responsive.css" rel="stylesheet" />

  <link rel="stylesheet" type="text/css" href="css/parallax-slider/parallax-slider.css" />
  <script type="text/javascript" src="js/parallax-slider/modernizr.custom.28468.js">
  </script>

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

<!-- Sequence Modern Slider -->
<div id="da-slider" class="da-slider">

  <%--<div class="da-slide">--%>
    <%--<div class="container">--%>
      <%--<div class="row">--%>
        <%--<div class="col-md-12">--%>
          <%--<h2>--%>
            <%--<i>CLEAN &amp; FRESH</i>--%>
            <%--<br>--%>
            <%--<i>RESPONSIVE</i>--%>
            <%--<br>--%>
            <%--<i>DESIGN</i>--%>
          <%--</h2>--%>
          <%--<p>--%>
            <%--<i>Lorem ipsum dolor amet</i>--%>
            <%--<br />--%>
            <%--<i>veniam omnis</i>--%>
          <%--</p>--%>
          <%--<a href="#" class="btn btn-info btn-lg da-link">--%>
            <%--Read more--%>
          <%--</a>--%>
          <%--&lt;%&ndash;<div class="da-img">&ndash;%&gt;--%>
            <%--&lt;%&ndash;<img src="img/index_1.jpg" alt="image01" />&ndash;%&gt;--%>
          <%--&lt;%&ndash;</div>&ndash;%&gt;--%>
        <%--</div>--%>
      <%--</div>--%>
    <%--</div>--%>
  </div>


  <div class="da-slide">
    <%--<div class="container">--%>
      <%--<div class="row">--%>
        <%--<div class="col-md-12">--%>
          <%--<h2>--%>
            <%--<i>RESPONSIVE VIDEO</i>--%>
            <%--<br />--%>
            <%--<i>SUPPORT AND</i>--%>
            <%--<br />--%>
            <%--<i>MANY MORE</i>--%>
          <%--</h2>--%>
          <%--<p>--%>
            <%--<i>Lorem ipsum dolor amet</i>--%>
            <%--<br />--%>
            <%--<i>tempor incididunt ut</i>--%>
          <%--</p>--%>
          <%--<a href="#" class="btn btn-info btn-lg da-link">--%>
            <%--Read more--%>
          <%--</a>--%>
          <%--<div class="da-img">--%>
            <%--<img src="img/parallax-slider/images/3.png" alt="image01" />--%>
          <%--</div>--%>
        <%--</div>--%>
      <%--</div>--%>
    <%--</div>--%>
  </div>


  <div class="da-slide">
    <%--<div class="container">--%>
      <%--<div class="row">--%>
        <%--<div class="col-md-12">--%>
          <%--<h2>--%>
            <%--<i>USING BEST WEB</i>--%>
            <%--</br>--%>
            <%--<i>SOLUTIONS WITH</i>--%>
            <%--</br>--%>
            <%--<i>HTML5/CSS3</i>--%>
          <%--</h2>--%>
          <%--<p>--%>
            <%--<i>Lorem ipsum dolor amet</i>--%>
            <%--<br />--%>
            <%--<i>tempor incididunt ut</i>--%>
            <%--<br />--%>
            <%--<i>veniam omnis </i>--%>
          <%--</p>--%>
          <%--<a href="#" class="btn btn-info btn-lg da-link">--%>
            <%--Read more--%>
          <%--</a>--%>
          <%--<div class="da-img">--%>
            <%--<img src="img/parallax-slider/images/1.png" alt="image01" />--%>
          <%--</div>--%>
        <%--</div>--%>
      <%--</div>--%>
    <%--</div>--%>
  </div>
</div>
<div class="container">
  <div class="row mar-b-50">
    <div class="col-md-12">
      <div class="text-center feature-head wow fadeInDown">
        <h1 class="">
          系统模块简介
        </h1>
      </div>
      <div class="feature-box">
        <div class="col-md-3 col-sm-3 text-center wow fadeInUp">
          <div class="feature-box-heading">
            <em>
              <img src="images/1.png" alt="" width="100" height="100">
            </em>
            <h4>
              <b>汇总分析</b>
            </h4>
          </div>
          <p class="text-center">
            对以往数据从基金收入和基金支出两个方面进行透视化展示。
          </p>
        </div>
        <div class="col-md-3 col-sm-3 text-center wow fadeInUp">
          <div class="feature-box-heading">
            <em>
              <img src="images/2.png" alt="" width="100" height="100">
            </em>
            <h4>
              <b>收支建模</b>
            </h4>
          </div>
          <p class="text-center">
            预测基金未来收支走向，同时建立基金缴费模型和医疗待遇支付模型。
          </p>
        </div>
        <div class="col-md-3 col-sm-3 text-center wow fadeInUp">
          <div class="feature-box-heading">
            <em>
              <img src="images/3.png" alt="" width="100" height="100">
            </em>
            <h4>
              <b>费用管理</b>
            </h4>
          </div>
          <p class="text-center">
            对医疗费用的支出，从参保人、医院、病种、药品等多个维度进行分析。
          </p>
        </div>
        <div class="col-md-3 col-sm-3 text-center wow fadeInUp">
          <div class="feature-box-heading">
            <em>
              <img src="images/31.png" alt="" width="100" height="100">
            </em>
            <h4>
              <b>异常检测</b>
            </h4>
          </div>
          <p class="text-center">
            对分解住院和过度医疗等医疗欺诈行为进行检测，同时展示异常检测的结果。
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!--property start-->
<div class="property gray-bg">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-sm-6 text-center wow fadeInLeft">
        <img src="images/risk.jpg" alt="">
      </div>
      <div class="col-lg-6 col-sm-6 wow fadeInRight">
        <h1>
          风险防控
        </h1>
        <p>基金运行中可能面临的风险</p>
        <hr>
        <p>
          <i class="fa fa-check fa-lg pr-10">
          </i>
          了解政策体制风险包括缴费比例、支付比例、起付线、报销比例等因素对医保基金的收支平衡的影响,为医保政策调控提供在线模拟测算平台，主要是针对现有的政策进行微调，观察基金收支未来的走向，为政策的调控提供可靠依据。
        </p>
        <p>
          <i class="fa fa-check fa-lg pr-10">
          </i>
          加强基金运营风险的管理，在基金筹资方面，考虑参保人员年龄结构的变动、退休年龄、在职离退比、平均工资等对基金收入的影响；在支出分析方面，根据以收定支的原则，对医保基金的支付趋势进行预测，同时从区县、医院、病种、药品多个不同维度对医保基金的支出进行透视化分析，从而帮助决策者对每一笔医保基金的使用过程有更加全面的了解。
        </p>
        <p>
          <i class="fa fa-check fa-lg pr-10">
          </i>
          针对部分医疗机构、医生、参保人员由于利益驱动引发的医疗欺诈行为带来的风险进行检测，建立各种违规筛选模型，为审核监督提供重点监督管理对象，从而减少由于欺诈行为导致的基金的损失。
        </p>
        <hr>
      </div>
    </div>
  </div>
</div>

<!--recent work start-->
<div class="bg-lg">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 recent">
        <h3 class="recent-work">
          骗保行为类型
        </h3>
        <p>常见的几种骗保行为</p>
        <div id="owl-demo" class="owl-carousel owl-theme wow fadeIn">
          <div class="item view view-tenth">
            <img src="images/outlier1.jpg" alt="work Image">
          </div>
          <div class="item view view-tenth">
            <img src="images/outlier2.jpg" alt="work Image">
          </div>
          <div class="item view view-tenth">
            <img src="images/outlier3.jpg" alt="work Image">
          </div>
          <div class="item view view-tenth">
            <img src="images/outlier4.jpg" alt="work Image">
          </div>
          <div class="item view view-tenth">
            <img src="images/outlier5.jpg" alt="work Image">
          </div>
          <div class="item view view-tenth">
            <img src="images/outlier6.jpg" alt="work Image">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--recent work end-->
</div>

<div id="home-services">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>
          建模方法介绍
        </h2>
      </div>

      <div class="col-md-4">
        <div class="h-service">
          <div class="icon-wrap ico-bg round-fifty wow fadeInDown">
            <i class="fa fa-question">
            </i>
          </div>
          <div class="h-service-content wow fadeInUp">
            <h3>
              灰度预测模型
            </h3>
            <p>
              灰度预测模型（Gray Forecast Model）是通过利用少量的、不完全的信息，建立数学模型并做出预测的一种预测方法。
              <br>
              <a href="gm1.jsp">
                更多
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="h-service">
          <div class="icon-wrap ico-bg round-fifty wow fadeInDown">
            <i class="fa fa-h-square">
            </i>
          </div>
          <div class="h-service-content wow fadeInUp">
            <h3>
              指数平滑法
            </h3>
            <p>
              指数平滑法是一种结合当前信息和过去信息的方法，新旧信息的权重由一个可调整的参数控制的时间序列模型。
              <br>
              <a href="e_smoothing.jsp">
                更多
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="h-service">
          <div class="icon-wrap ico-bg round-fifty wow fadeInDown">
            <i class="fa fa-users">
            </i>
          </div>
          <div class="h-service-content wow fadeInUp">
            <h3>
              ARIMA
            </h3>
            <p>
              ARIMA模型是指在将非平稳时间序列转化为平稳时间序列过程中，将因变量仅对它的滞后值以及随机误差项的现值和滞后值进行回归所建立的模型。
              <br>
              <a href="arima.jsp">
                更多
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- /row -->

  </div>
  <!-- /container -->

</div>
<!-- service end -->
<div class="hr">
  <span class="hr-inner"></span>
</div>
<!--container end-->

<!--footer start-->
<footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-sm-3 address wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
        <h1>
          contact info
        </h1>
        <address>
          <p><i class="fa fa-home pr-10"></i>Address: No.XXXXXX street</p>
          <p><i class="fa fa-globe pr-10"></i>Mars city, Country </p>
          <p><i class="fa fa-mobile pr-10"></i>Mobile : (123) 456-7890 </p>
          <p><i class="fa fa-phone pr-10"></i>Phone : (123) 456-7890 </p>
          <p><i class="fa fa-envelope pr-10"></i>Email :   <a href="javascript:;">support@example.com</a></p>
        </address>
      </div>
      <div class="col-lg-3 col-sm-3 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".3s">
        <h1>latest tweet</h1>
        <div class="tweet-box">
          <i class="fa fa-twitter"></i>
          <em>
            Please follow
            <a href="javascript:;">@example</a>
            for all future updates of us!
            <a href="javascript:;">twitter.com/acme</a>
          </em>
        </div>
        <div class="tweet-box">
          <i class="fa fa-twitter"></i>
          <em>
            Please follow
            <a href="javascript:;">@example</a>
            for all future updates of us!
            <a href="javascript:;">twitter.com/acme</a>
          </em>
        </div>
        <div class="tweet-box">
          <i class="fa fa-twitter"></i>
          <em>
            Please follow
            <a href="javascript:;">@example</a>
            for all future updates of us!
            <a href="javascript:;">twitter.com/acme</a>
          </em>
        </div>
      </div>
      <div class="col-lg-3 col-sm-3">
        <div class="page-footer wow fadeInUp" data-wow-duration="2s" data-wow-delay=".5s">
          <h1>
            Our Company
          </h1>
          <ul class="page-footer-list">
            <li>
              <i class="fa fa-angle-right"></i>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <i class="fa fa-angle-right"></i>
              <a href="faq.html">Support</a>
            </li>
            <li>
              <i class="fa fa-angle-right"></i>
              <a href="service.html">Service</a>
            </li>
            <li>
              <i class="fa fa-angle-right"></i>
              <a href="privacy-policy.html">Privacy Policy</a>
            </li>
            <li>
              <i class="fa fa-angle-right"></i>
              <a href="career.html">We are Hiring</a>
            </li>
            <li>
              <i class="fa fa-angle-right"></i>
              <a href="terms.html">Term & condition</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-sm-3">
        <div class="text-footer wow fadeInUp" data-wow-duration="2s" data-wow-delay=".7s">
          <h1>
            Text Widget
          </h1>
          <p>
            This is a text widget.Lorem ipsum dolor sit amet.
            This is a text widget.Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
<!-- footer end -->
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

<!-- js placed at the end of the document so the pages load faster
<script src="js/jquery.js">
</script>
-->
<script src="js/jquery-1.8.3.min.js">
</script>
<script src="js/bootstrap.min.js">
</script>
<script type="text/javascript" src="js/hover-dropdown.js">
</script>
<script defer src="js/jquery.flexslider.js">
</script>
<script type="text/javascript" src="assets/bxslider/jquery.bxslider.js">
</script>
<script type="text/javascript" src="js/jquery.parallax-1.1.3.js">
</script>
<script src="js/wow.min.js">
</script>
<script src="assets/owlcarousel/owl.carousel.js">
</script>
<script src="js/jquery.easing.min.js">
</script>
<script src="js/link-hover.js">
</script>
<script src="js/superfish.js">
</script>
<script type="text/javascript" src="js/parallax-slider/jquery.cslider.js">
</script>
<script type="text/javascript">
  $(function() {

    $('#da-slider').cslider({
      autoplay    : true,
      bgincrement : 100
    });

  });
</script>

<!--common script for all pages-->
<script src="js/common-scripts.js">
</script>
<script type="text/javascript">
  jQuery(document).ready(function() {
    $('.bxslider1').bxSlider({
      minSlides: 5,
      maxSlides: 6,
      slideWidth: 360,
      slideMargin: 2,
      moveSlides: 1,
      responsive: true,
      nextSelector: '#slider-next',
      prevSelector: '#slider-prev',
      nextText: 'Onward →',
      prevText: '← Go back'
    });

  });


</script>


<script>
  $('a.info').tooltip();

  $(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider) {
        $('body').removeClass('loading');
      }
    });
  });

  $(document).ready(function() {

    $("#owl-demo").owlCarousel({
      items : 4

    });

  });
  jQuery(document).ready(function(){
    jQuery('ul.superfish').superfish();
  });
  new WOW().init();
</script>
</body>
</html>
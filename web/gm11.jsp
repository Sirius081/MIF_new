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

<!--breadcrumbs start-->
<div class="breadcrumbs">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-sm-4">
        <h1>建模方法-灰度预测模型</h1>
      </div>
      <div class="col-lg-8 col-sm-8">
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
      <p>常用的预测方法（如回归分析），需要较大的样本，如果样本较小，常造成较大的误差，使预测目标失效。灰度预测模型（Gray Forecast Model）是通过利用少量的、不完全的信息，建立数学模型并做出预测的一种预测方法。本文将对这种预测模型进行详细介绍。由于部分公式书写麻烦，本文直接插入了公式图片。</p>
      <h3>1. 灰度系统理论</h3>
      <p><strong>灰度系统理论</strong>是由华中理工大学邓聚龙教授于1982年提出并发展而成的解决灰色系统的理论和方法，该方法将一般的系统论、信息论和控制论的观点与数学方法结合在一起。首先看一下灰度理论中的几个概念。</p>
      <h4>1.1 灰度系统</h4>
      <p><strong>灰度系统</strong>是指“部分信息已知，部分未知”的“小样本”，“贫信息”的不确定性系统。系统中各因素间有不确定的关系。<br>作为两个极端，如果系统中信息完全确定，则成为<strong>白色系统</strong>；相反，信息完全不确定的系统为<strong>黑色系统</strong>，只能通过它与外界的联系来加以观测研究。区别白色和黑色系统的重要标志是系统中各因素之间是否具有确定关系。</p>
      <h4>1.2 灰度系统的特点</h4>
      <p>灰色系统可以充分利用已知信息寻求系统的运动规律，使用灰色数学处理不确定量，使之量化，因此，灰色系统理论能够处理贫信息或小样本的系统。</p>
      <p> &nbsp; </p>
      <h3>2. 灰色预测方法</h3>
      <p>灰度预测法是对灰色系统进行预测的方法。通过关联分析和数据处理来寻找系统变动的规律，生成有较强规律性的数据序列。然后用来预测两种不同的目标，一种是预测某时刻的特征量来预测未来发展趋势。另一种是固定特征量阈值，通过分析特征量出现时刻的规律，预测未来达到阈值的时间点。</p>
      <h4>2.1 灰色预测类型</h4>
      <p>(1) <em>数列预测</em>。用观察到的反映预测对象特征的时间序列构造灰色预测模型，预测未来某一时刻的特征量，或达到某一特征量的时间。<br>(2) <em>灾变或异常值预测</em>。利用灰度模型预测异常值出现的特定时间。<br>(3) <em>季节灾变或异常值预测</em>。预测灾变或异常值发生在一年内哪个时间区间或季节内。<br>(4) <em>拓扑预测</em>。将原始数据做曲线，在曲线上按照阈值寻找发生的所有时间点，并以该时间点构成的序列构建预测模型，建立模型预测该阈值的时间点。<br>(5) <em>系统预测</em>。 通过对系统行为特征指标建立一组相关联的灰度预测模型，预测系统中众多变量间的相互协调关系的变化。</p>
      <hr>
      <p> &nbsp; </p>
      <p>下面我们对具体的集中预测模型进行介绍。</p>
      <h3>3. GM(1,1)模型</h3>
      <h4>3.1 数据/数列生成</h4>
      <p>我们获取到的未作处理的数据被称为<strong>原始数列</strong>，按照某种要求经过处理后生成的数列为<strong>生成数列</strong>，我们可以从中发现原始数列中没有表现出的内在规律。<br>常用的数据处理方法有累加生成、累减生成、均值生成。<br>(1) 累加生成<br>通过依次累加某时刻之前的数据得到新的数列，记为AGO(Accumulating Ceneration Operator)。<br>设x^(0)为原始序列，既有<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24x%5E%7B(0)%7D=%5Bx%5E%7B(0)%7D(1),x%5E%7B(0)%7D(2),...,x%5E%7B(0)%7D(n)%5D%24" data-original-src="http://latex.codecogs.com/svg.latex?$x%5E%7B(0)%7D=%5Bx%5E%7B(0)%7D(1),x%5E%7B(0)%7D(2),...,x%5E%7B(0)%7D(n)%5D$"><br><div class="image-caption"></div>
    </div>
      <p>按照下列公式生成新的累加数列：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24x%5E%7B(1)%7D(k)=%5Csum_%7Bi=1%7D%5E%7Bk%7Dx%5E%7B(0)%7D(i);k=1,2,...,n%24" data-original-src="http://latex.codecogs.com/svg.latex?$x%5E%7B(1)%7D(k)=%5Csum_%7Bi=1%7D%5E%7Bk%7Dx%5E%7B(0)%7D(i);k=1,2,...,n$"><br><div class="image-caption"></div>
    </div>
      <p>则称x^(1)为x^(0)的一次累加生成数列：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24x%5E%7B(1)%7D=%5Bx%5E%7B(1)%7D(1),x%5E%7B(1)%7D(2),...,x%5E%7B(1)%7D(n)%5D%24" data-original-src="http://latex.codecogs.com/svg.latex?$x%5E%7B(1)%7D=%5Bx%5E%7B(1)%7D(1),x%5E%7B(1)%7D(2),...,x%5E%7B(1)%7D(n)%5D$"><br><div class="image-caption"></div>
    </div>
      <p>类似的有r次累加生成：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24x%5E%7B(r)%7D(k)=%5Csum_%7Bi=1%7D%5E%7Bk%7Dx%5E%7B(r-1)%7D(i);k=1,2,...,n%24" data-original-src="http://latex.codecogs.com/svg.latex?$x%5E%7B(r)%7D(k)=%5Csum_%7Bi=1%7D%5E%7Bk%7Dx%5E%7B(r-1)%7D(i);k=1,2,...,n$"><br><div class="image-caption"></div>
    </div>
      <p>(2)累减生成<br>对原始数列的数据依次作前后两个数据相减的运算，记为IAGO(Inverse Accumulating Ceneration Operator)。累减生成可以将累加生成序列还原成非生成序列。<br>我们设x^(1)为原始序列，则有<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24x%5E%7B(1)%7D=%5Bx%5E%7B(1)%7D(1),x%5E%7B(1)%7D(2),...,x%5E%7B(1)%7D(n)%5D%24" data-original-src="http://latex.codecogs.com/svg.latex?$x%5E%7B(1)%7D=%5Bx%5E%7B(1)%7D(1),x%5E%7B(1)%7D(2),...,x%5E%7B(1)%7D(n)%5D$"><br><div class="image-caption"></div>
    </div>
      <p>如果令：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24x%5E%7B(0)%7D(k)=x%5E%7B(1)%7D(k)-x%5E%7B(1)%7D(k-1)%24" data-original-src="http://latex.codecogs.com/svg.latex?$x%5E%7B(0)%7D(k)=x%5E%7B(1)%7D(k)-x%5E%7B(1)%7D(k-1)$"><br><div class="image-caption"></div>
    </div>
      <p>则可生成一次累减序列x^(0)：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24x%5E%7B(0)%7D=%5Bx%5E%7B(0)%7D(1),x%5E%7B(0)%7D(2),...,x%5E%7B(0)%7D(n)%5D%24" data-original-src="http://latex.codecogs.com/svg.latex?$x%5E%7B(0)%7D=%5Bx%5E%7B(0)%7D(1),x%5E%7B(0)%7D(2),...,x%5E%7B(0)%7D(n)%5D$"><br><div class="image-caption"></div>
    </div>
      <p>更一般地，有：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24x%5E%7B(r-1)%7D(k)=x%5E%7B(r)%7D(k)-x%5E%7B(r)%7D(k-1)%24" data-original-src="http://latex.codecogs.com/svg.latex?$x%5E%7B(r-1)%7D(k)=x%5E%7B(r)%7D(k)-x%5E%7B(r)%7D(k-1)$"><br><div class="image-caption"></div>
    </div>
      <p>均值生成序列分为邻均值生成和非邻均值生成两种，就暂时不在本文详细介绍了，以后再补充。</p>
      <p> &nbsp; </p>
      <h4>3.2模型建立</h4>
      <p>给定观测数据序列<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24x%5E%7B(0)%7D=%5Bx%5E%7B(0)%7D(1),x%5E%7B(0)%7D(2),...,x%5E%7B(0)%7D(n)%5D%24" data-original-src="http://latex.codecogs.com/svg.latex?$x%5E%7B(0)%7D=%5Bx%5E%7B(0)%7D(1),x%5E%7B(0)%7D(2),...,x%5E%7B(0)%7D(n)%5D$"><br><div class="image-caption"></div>
    </div>
      <p>经过一次累加后，得到序列：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24x%5E%7B(1)%7D=%5Bx%5E%7B(1)%7D(1),x%5E%7B(1)%7D(2),...,x%5E%7B(1)%7D(n)%5D%24" data-original-src="http://latex.codecogs.com/svg.latex?$x%5E%7B(1)%7D=%5Bx%5E%7B(1)%7D(1),x%5E%7B(1)%7D(2),...,x%5E%7B(1)%7D(n)%5D$"><br><div class="image-caption"></div>
    </div>
      <p>设x^(1)满足一阶常微分方程<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24%7Bdx%5E%7B(1)%7D%7D/%7Bdt%7D+ax%5E%7B(1)%7D=u%24" data-original-src="http://latex.codecogs.com/svg.latex?$%7Bdx%5E%7B(1)%7D%7D/%7Bdt%7D+ax%5E%7B(1)%7D=u$"><br><div class="image-caption"></div>
    </div>
      <p>其中a是发展灰数或发展系数，u为内生控制灰数或灰作用量，是对系统的常定输入。该方程满足当初始条件为：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24when:t=t_%7B0%7D,x%5E%7B(1)%7D=x%5E%7B(1)%7D(t_0)%24" data-original-src="http://latex.codecogs.com/svg.latex?$when:t=t_%7B0%7D,x%5E%7B(1)%7D=x%5E%7B(1)%7D(t_0)$"><br><div class="image-caption"></div>
    </div>
      <p>则有解为：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24x%5E%7B(1)%7D(t)=%5C%5Bx%5E%7B(1)%7D(t_0)-u/a%5C%5De%5E%7B-a(t-t_0)%7D+u/a%24" data-original-src="http://latex.codecogs.com/svg.latex?$x%5E%7B(1)%7D(t)=%5C%5Bx%5E%7B(1)%7D(t_0)-u/a%5C%5De%5E%7B-a(t-t_0)%7D+u/a$"><br><div class="image-caption"></div>
    </div>
      <p>对等间距取样的离散值,则有<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24when:t_0=1%5C%5C%5C%5Cx%5E%7B(1)%7D(k+1)=%5C%5Bx%5E%7B(1)%7D(1)-u/a%5C%5De%5E%7B-ak%7D+u/a%24" data-original-src="http://latex.codecogs.com/svg.latex?$when:t_0=1%5C%5C%5C%5Cx%5E%7B(1)%7D(k+1)=%5C%5Bx%5E%7B(1)%7D(1)-u/a%5C%5De%5E%7B-ak%7D+u/a$"><br><div class="image-caption"></div>
    </div>
      <p>由于x^(1)对t求导涉及x^(1)的两个时刻值，因此，x^(1)(i)取前后两个时刻的平均代替更合理。即有：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%241/2%5C%5Bx%5E%7B(r)%7D(i)+x%5E%7B(r)%7D(i-1)%5C%5D,(i=2,3,...,N)%24" data-original-src="http://latex.codecogs.com/svg.latex?$1/2%5C%5Bx%5E%7B(r)%7D(i)+x%5E%7B(r)%7D(i-1)%5C%5D,(i=2,3,...,N)$"><br><div class="image-caption"></div>
    </div>
      <p>写成矩阵表达的形式为：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24%5Cbegin%7Bbmatrix%7Dx%5E%7B(0)%7D(2)%5C%5Cx%5E%7B(0)%7D(3)%5C%5C...%5C%5Cx%5E%7B(0)%7D(N)%5Cend%7Bbmatrix%7D=%5Cbegin%7Bbmatrix%7D-1/2%5C%5Bx%5E%7B(1)%7D(2)+x%5E%7B(1)%7D(1)%5C%5D&amp;1%5C%5C-1/2%5C%5Bx%5E%7B(1)%7D(3)+x%5E%7B(1)%7D(2)%5C%5D&amp;1%5C%5C...%5C%5C-1/2%5C%5Bx%5E%7B(1)%7D(N)+x%5E%7B(1)%7D(N-1)%5C%5D&amp;1%5Cend%7Bbmatrix%7D%5Cbegin%7Bbmatrix%7Da%5C%5Cu%5Cend%7Bbmatrix%7D%24" data-original-src="http://latex.codecogs.com/svg.latex?$%5Cbegin%7Bbmatrix%7Dx%5E%7B(0)%7D(2)%5C%5Cx%5E%7B(0)%7D(3)%5C%5C...%5C%5Cx%5E%7B(0)%7D(N)%5Cend%7Bbmatrix%7D=%5Cbegin%7Bbmatrix%7D-1/2%5C%5Bx%5E%7B(1)%7D(2)+x%5E%7B(1)%7D(1)%5C%5D&amp;1%5C%5C-1/2%5C%5Bx%5E%7B(1)%7D(3)+x%5E%7B(1)%7D(2)%5C%5D&amp;1%5C%5C...%5C%5C-1/2%5C%5Bx%5E%7B(1)%7D(N)+x%5E%7B(1)%7D(N-1)%5C%5D&amp;1%5Cend%7Bbmatrix%7D%5Cbegin%7Bbmatrix%7Da%5C%5Cu%5Cend%7Bbmatrix%7D$"><br><div class="image-caption"></div>
    </div>
      <p>如果用符号代表上式的向量或矩阵，则有<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24y=BU%24" data-original-src="http://latex.codecogs.com/svg.latex?$y=BU$"><br><div class="image-caption"></div>
    </div>
      <p>其中，<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%24U=%5Ba,u%5D%5E%7BT%7D%5C%5C%5C%5Cy=%5Bx%5E%7B(0)%7D(2),x%5E%7B(0)%7D(3),...,x%5E%7B(0)%7D(N)%5D%5E%7BT%7D%5C%5C%5C%5CB=%5Cbegin%7Bbmatrix%7D-1/2%5C%5Bx%5E%7B(1)%7D(2)+x%5E%7B(1)%7D(1)%5C%5D&amp;1%5C%5C-1/2%5C%5Bx%5E%7B(1)%7D(3)+x%5E%7B(1)%7D(2)%5C%5D&amp;1%5C%5C...%5C%5C-1/2%5C%5Bx%5E%7B(1)%7D(N)+x%5E%7B(1)%7D(N-1)%5C%5D&amp;1%5Cend%7Bbmatrix%7D%24" data-original-src="http://latex.codecogs.com/svg.latex?$U=%5Ba,u%5D%5E%7BT%7D%5C%5C%5C%5Cy=%5Bx%5E%7B(0)%7D(2),x%5E%7B(0)%7D(3),...,x%5E%7B(0)%7D(N)%5D%5E%7BT%7D%5C%5C%5C%5CB=%5Cbegin%7Bbmatrix%7D-1/2%5C%5Bx%5E%7B(1)%7D(2)+x%5E%7B(1)%7D(1)%5C%5D&amp;1%5C%5C-1/2%5C%5Bx%5E%7B(1)%7D(3)+x%5E%7B(1)%7D(2)%5C%5D&amp;1%5C%5C...%5C%5C-1/2%5C%5Bx%5E%7B(1)%7D(N)+x%5E%7B(1)%7D(N-1)%5C%5D&amp;1%5Cend%7Bbmatrix%7D$"><br><div class="image-caption"></div>
    </div>
      <p>利用最小二乘法估计上式，可得：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%5Chat%7BU%7D=%5Cbegin%7Bbmatrix%7D%5Chat%7Ba%7D%5C%5C%5Chat%7Bu%7D%5Cend%7Bbmatrix%7D=(B%5E%7BT%7DB)%5E%7B-1%7DB%5E%7BT%7Dy" data-original-src="http://latex.codecogs.com/svg.latex?%5Chat%7BU%7D=%5Cbegin%7Bbmatrix%7D%5Chat%7Ba%7D%5C%5C%5Chat%7Bu%7D%5Cend%7Bbmatrix%7D=(B%5E%7BT%7DB)%5E%7B-1%7DB%5E%7BT%7Dy"><br><div class="image-caption"></div>
    </div>
      <p>将上式得到的估计值a和u带入求离散解的公式，得到时间响应方程<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%5Chat%7Bx%5E%7B(1)%7D%7D(k+1)=%5Bx%5E%7B(1)%7D(1)-%5Cfrac%7B%5Chat%7Bu%7D%7D%7B%5Chat%7Ba%7D%7D%5De%5E%7B-%5Chat%7Ba%7Dk%7D+%5Cfrac%7B%5Chat%7Bu%7D%7D%7B%5Chat%7Ba%7D%7D" data-original-src="http://latex.codecogs.com/svg.latex?%5Chat%7Bx%5E%7B(1)%7D%7D(k+1)=%5Bx%5E%7B(1)%7D(1)-%5Cfrac%7B%5Chat%7Bu%7D%7D%7B%5Chat%7Ba%7D%7D%5De%5E%7B-%5Chat%7Ba%7Dk%7D+%5Cfrac%7B%5Chat%7Bu%7D%7D%7B%5Chat%7Ba%7D%7D"><br><div class="image-caption"></div>
    </div>
      <p>当k=1,2,...,N-1时，由上式计算得到的结果是拟合值，当k&gt;=N时，结果为预测值。这是相对于一次累加序列的拟合值，用后减运算还原，就可得原始序列的拟合值和预测值。</p>
      <p> &nbsp; </p>
      <h3>3.3 精度检验</h3>
      <p>(1) 残差检验：预测得到的一次累加序列进行累减计算，得到原始序列估计值，再计算其与原始序列的绝对残差序列和相对残差序列。<br>残差：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?E(k)=x%5E%7B(0)%7D(k)-%5Chat%7Bx%5E%7B(0)%7D%7D(k),k=2,3,...N;" data-original-src="http://latex.codecogs.com/svg.latex?E(k)=x%5E%7B(0)%7D(k)-%5Chat%7Bx%5E%7B(0)%7D%7D(k),k=2,3,...N;"><br><div class="image-caption"></div>
    </div>
      <p>相对残差：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?e(k)=%5Bx%5E%7B(0)%7D(k)-%5Chat%7Bx%5E%7B(0)%7D%7D(k)%5D/x%5E%7B(0)%7D(k),k=2,3,...N;" data-original-src="http://latex.codecogs.com/svg.latex?e(k)=%5Bx%5E%7B(0)%7D(k)-%5Chat%7Bx%5E%7B(0)%7D%7D(k)%5D/x%5E%7B(0)%7D(k),k=2,3,...N;"><br><div class="image-caption"></div>
    </div>
      <p>(2) 后验差检验：分别计算<br>原始序列x^(0)的均值：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%5Cbar%7BX%7D=%5Cfrac%7B1%7D%7BN%7D%5Csum_%7Bk=1%7D%5E%7BN%7Dx%5E%7B(0)%7D(k)" data-original-src="http://latex.codecogs.com/svg.latex?%5Cbar%7BX%7D=%5Cfrac%7B1%7D%7BN%7D%5Csum_%7Bk=1%7D%5E%7BN%7Dx%5E%7B(0)%7D(k)"><br><div class="image-caption"></div>
    </div>
      <p>原始序列x^(0)的方差：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?S_1=%5Csqrt%7B%5Cfrac%7B1%7D%7BN%7D%5Csum_%7Bk=1%7D%5E%7BN%7D%5Bx%5E%7B(0)%7D(k)-%5Cbar%7BX%7D%5D%5E2%7D" data-original-src="http://latex.codecogs.com/svg.latex?S_1=%5Csqrt%7B%5Cfrac%7B1%7D%7BN%7D%5Csum_%7Bk=1%7D%5E%7BN%7D%5Bx%5E%7B(0)%7D(k)-%5Cbar%7BX%7D%5D%5E2%7D"><br><div class="image-caption"></div>
    </div>
      <p>残差的均值：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%5Cbar%7BE%7D=%5Cfrac%7B1%7D%7BN-1%7D%5Csum_%7Bk=2%7D%5E%7BN%7DE(k)" data-original-src="http://latex.codecogs.com/svg.latex?%5Cbar%7BE%7D=%5Cfrac%7B1%7D%7BN-1%7D%5Csum_%7Bk=2%7D%5E%7BN%7DE(k)"><br><div class="image-caption"></div>
    </div>
      <p>残差的方差：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?S_2=%5Csqrt%7B%5Cfrac%7B1%7D%7BN-1%7D%5Csum_%7Bk=2%7D%5E%7BN%7D%5BE(k)-%5Cbar%7BE%7D%5D%5E2%7D" data-original-src="http://latex.codecogs.com/svg.latex?S_2=%5Csqrt%7B%5Cfrac%7B1%7D%7BN-1%7D%5Csum_%7Bk=2%7D%5E%7BN%7D%5BE(k)-%5Cbar%7BE%7D%5D%5E2%7D"><br><div class="image-caption"></div>
    </div>
      <p>后验差比值：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?C=%5Cfrac%7BS_2%7D%7BS_1%7D" data-original-src="http://latex.codecogs.com/svg.latex?C=%5Cfrac%7BS_2%7D%7BS_1%7D"><br><div class="image-caption"></div>
    </div>
      <p>小误差概率：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?P=P%5C%7B%7CE(k)-%5Cbar%7BE%7D%7C%3C0.6745S_1%5C%7D" data-original-src="http://latex.codecogs.com/svg.latex?P=P%5C%7B%7CE(k)-%5Cbar%7BE%7D%7C%3C0.6745S_1%5C%7D"><br><div class="image-caption"></div>
    </div>
      <p>对比精度等级对照表，如下表所示。<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%5Cbegin%7Barray%7D%7Bc%7Clcr%7Dlevel&amp;%5Ctext%7BP%7D&amp;%5Ctext%7BC%7D&amp;%5Ctext%7BLevel%7D%5C%5C%5Chline1&amp;%7B%5Ctextgreater0.95%7D&amp;%7B%5Ctextless0.35%7D&amp;Good%5C%5C2&amp;%7B%5Ctextgreater0.80%7D&amp;%7B%5Ctextless0.45%7D&amp;Qualified%5C%5C3&amp;%7B%5Ctextgreater0.70%7D&amp;%7B%5Ctextless0.5%7D&amp;Barely-passing%5C%5C4&amp;%5Cleq0.70&amp;%5Cgeq0.65&amp;Unqualified%5Cend%7Barray%7D" data-original-src="http://latex.codecogs.com/svg.latex?%5Cbegin%7Barray%7D%7Bc%7Clcr%7Dlevel&amp;%5Ctext%7BP%7D&amp;%5Ctext%7BC%7D&amp;%5Ctext%7BLevel%7D%5C%5C%5Chline1&amp;%7B%5Ctextgreater0.95%7D&amp;%7B%5Ctextless0.35%7D&amp;Good%5C%5C2&amp;%7B%5Ctextgreater0.80%7D&amp;%7B%5Ctextless0.45%7D&amp;Qualified%5C%5C3&amp;%7B%5Ctextgreater0.70%7D&amp;%7B%5Ctextless0.5%7D&amp;Barely-passing%5C%5C4&amp;%5Cleq0.70&amp;%5Cgeq0.65&amp;Unqualified%5Cend%7Barray%7D"><br><div class="image-caption"></div>
    </div>
      <p>评价模型的指标C越小越好，P越大越好，一般按照Max{P的level,C的level}来确定模型的精度级别。<br>(3) 关联度检验<br>关联度分析时根据因素之间发展态势的相似或相异程度，分析事物动态关联的特征和程度。后期再作补充。</p>
      <hr>
      <p>由于灰度预测模型是给予一阶常微分方程建立的，故被称为一阶一元灰色模型，记为GM(1,1)。特别注意，原始数据中如果有负数，需要先进行“数据整体提升”处理，再做一次累加，避免累加时正负抵消。</p>
      <hr>
      <p> &nbsp; </p>
      <h3>4. GM(1,1)残差模型</h3>
      <p>如果用原始时间序列建立的GM(1,1)模型检验不合格或精度不理想时，要对建立的模型进行残差修正，可以提高模型的预测精度。<br>我们设<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%5Cvarepsilon%5E%7B(0)%7D=(%5Cvarepsilon%5E%7B(0)%7D(1),%5Cvarepsilon%5E%7B(0)%7D(2),...,%5Cvarepsilon%5E%7B(0)%7D(n))" data-original-src="http://latex.codecogs.com/svg.latex?%5Cvarepsilon%5E%7B(0)%7D=(%5Cvarepsilon%5E%7B(0)%7D(1),%5Cvarepsilon%5E%7B(0)%7D(2),...,%5Cvarepsilon%5E%7B(0)%7D(n))"><br><div class="image-caption"></div>
    </div>
      <p>其中，我们称<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%5Cvarepsilon(k)=x%5E%7B(0)%7D(k)-%5Chat%7Bx%7D%5E%7B(1)%7D(k)" data-original-src="http://latex.codecogs.com/svg.latex?%5Cvarepsilon(k)=x%5E%7B(0)%7D(k)-%5Chat%7Bx%7D%5E%7B(1)%7D(k)"><br><div class="image-caption"></div>
    </div>
      <p>为X^(1)的残差序列。若存在k0满足如下条件<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?*1.%5Cforall%7Bk%7D%5Cgek_0,%5Cvarepsilon%5E%7B(0)%7D(k)%5Ctextless0*or*%5Cvarepsilon%5E%7B(0)%7D%5Ctextgreater0;%5C%5C%5C%5C****2.when:n-k_0%5Cge4;" data-original-src="http://latex.codecogs.com/svg.latex?*1.%5Cforall%7Bk%7D%5Cgek_0,%5Cvarepsilon%5E%7B(0)%7D(k)%5Ctextless0*or*%5Cvarepsilon%5E%7B(0)%7D%5Ctextgreater0;%5C%5C%5C%5C****2.when:n-k_0%5Cge4;"><br><div class="image-caption"></div>
    </div>
      <p>则称<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?(%7C%5Cvarepsilon%5E%7B(0)%7D(k_0)%7C,%7C%5Cvarepsilon%5E%7B(0)%7D(k_0+1)%7C,...,%7C%5Cvarepsilon%5E%7B(0)%7D(n)%7C)" data-original-src="http://latex.codecogs.com/svg.latex?(%7C%5Cvarepsilon%5E%7B(0)%7D(k_0)%7C,%7C%5Cvarepsilon%5E%7B(0)%7D(k_0+1)%7C,...,%7C%5Cvarepsilon%5E%7B(0)%7D(n)%7C)"><br><div class="image-caption"></div>
    </div>
      <p>为可建模残差尾段，仍记为<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?(%5Cvarepsilon%5E%7B(0)%7D(k_0),%5Cvarepsilon%5E%7B(0)%7D(k_0+1),...,%5Cvarepsilon%5E%7B(0)%7D(n))" data-original-src="http://latex.codecogs.com/svg.latex?(%5Cvarepsilon%5E%7B(0)%7D(k_0),%5Cvarepsilon%5E%7B(0)%7D(k_0+1),...,%5Cvarepsilon%5E%7B(0)%7D(n))"><br><div class="image-caption"></div>
    </div>
      <p>对其进行一次累加，得到序列<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?(%5Cvarepsilon%5E%7B(1)%7D(k_0),%5Cvarepsilon%5E%7B(1)%7D(k_0+1),...,%5Cvarepsilon%5E%7B(1)%7D(n))" data-original-src="http://latex.codecogs.com/svg.latex?(%5Cvarepsilon%5E%7B(1)%7D(k_0),%5Cvarepsilon%5E%7B(1)%7D(k_0+1),...,%5Cvarepsilon%5E%7B(1)%7D(n))"><br><div class="image-caption"></div>
    </div>
      <p>利用GM(1,1)建模后的时间响应式为：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%5Cvarepsilon%5E%7B(1)%7D(k+1)=(%5Cvarepsilon%5E%7B(0)%7D(k_0)-%5Cfrac%7B%5Chat%7Bu%7D%7D%7B%5Chat%7Ba%7D%7D)e%5E%7B%5B-a(k-k_0)%5D%7D+%5Cfrac%7B%5Chat%7Bu%7D%7D%7B%5Chat%7Ba%7D%7D,%7Bk%7D%5Cge%7Bk_%7B0%7D%7D" data-original-src="http://latex.codecogs.com/svg.latex?%5Cvarepsilon%5E%7B(1)%7D(k+1)=(%5Cvarepsilon%5E%7B(0)%7D(k_0)-%5Cfrac%7B%5Chat%7Bu%7D%7D%7B%5Chat%7Ba%7D%7D)e%5E%7B%5B-a(k-k_0)%5D%7D+%5Cfrac%7B%5Chat%7Bu%7D%7D%7B%5Chat%7Ba%7D%7D,%7Bk%7D%5Cge%7Bk_%7B0%7D%7D"><br><div class="image-caption"></div>
    </div>
      <p>则残差尾段的模拟序列为：<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%5Chat%7B%5Cvarepsilon%7D%5E%7B(0)%7D=(%5Chat%7B%5Cvarepsilon%7D%5E%7B(0)%7D(k_0),%5Chat%7B%5Cvarepsilon%7D%5E%7B(0)%7D(k_0+1),...,%5Chat%7B%5Cvarepsilon%7D%5E%7B(0)%7D(n))" data-original-src="http://latex.codecogs.com/svg.latex?%5Chat%7B%5Cvarepsilon%7D%5E%7B(0)%7D=(%5Chat%7B%5Cvarepsilon%7D%5E%7B(0)%7D(k_0),%5Chat%7B%5Cvarepsilon%7D%5E%7B(0)%7D(k_0+1),...,%5Chat%7B%5Cvarepsilon%7D%5E%7B(0)%7D(n))"><br><div class="image-caption"></div>
    </div>
      <p>其中<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%5Chat%7B%5Cvarepsilon%7D%5E%7B(0)%7D(k+1)=-%5Chat%7Ba%7D(%5Chat%7B%5Cvarepsilon%7D%5E%7B(0)%7D(k_0)-%5Cfrac%7B%5Chat%7Bu%7D%7D%7B%5Chat%7Ba%7D%7D)e%5E%7B%5B-%5Chat%7Ba%7D(k-k_0)%5D%7D,k%5Cge%7Bk_0%7D" data-original-src="http://latex.codecogs.com/svg.latex?%5Chat%7B%5Cvarepsilon%7D%5E%7B(0)%7D(k+1)=-%5Chat%7Ba%7D(%5Chat%7B%5Cvarepsilon%7D%5E%7B(0)%7D(k_0)-%5Cfrac%7B%5Chat%7Bu%7D%7D%7B%5Chat%7Ba%7D%7D)e%5E%7B%5B-%5Chat%7Ba%7D(k-k_0)%5D%7D,k%5Cge%7Bk_0%7D"><br><div class="image-caption"></div>
    </div>
      <p>如果用上式修正X^(1)，则称修正后的时间响应式为<br></p><div class="image-package">
      <img src="http://latex.codecogs.com/svg.latex?%5Chat%7B%5Cvarepsilon%7D%5E%7B(1)%7D(k+1)=%5Cleft%5C%7B%5Cbegin%7Barray%7D%7Bll%7D(x%5E%7B(0)%7D(1)-%5Cfrac%7Bu%7D%7Ba%7D)e%5E%7B-ak%7D+%5Cfrac%7Bu%7D%7Ba%7D,k%5Ctextless%7Bk_0%7D;(1)%5C%5C%5C%5C(x%5E%7B(0)%7D(1)-%5Cfrac%7Bu%7D%7Ba%7D)e%5E%7B-ak%7D+%5Cfrac%7Bu%7D%7Ba%7D%5Cpm%5Chat%7Ba%7D(%5Cvarepsilon%5E%7B(0)%7D(k_0)-%5Cfrac%7B%5Chat%7Bu%7D%7D%7B%5Chat%7Ba%7D%7D)e%5E%7B%5B-%5Chat%7Ba%7D(k-k_0)%5D%7D,k%5Cge%7Bk_0%7D;(2)%5Cend%7Barray%7D%5Cright." data-original-src="http://latex.codecogs.com/svg.latex?%5Chat%7B%5Cvarepsilon%7D%5E%7B(1)%7D(k+1)=%5Cleft%5C%7B%5Cbegin%7Barray%7D%7Bll%7D(x%5E%7B(0)%7D(1)-%5Cfrac%7Bu%7D%7Ba%7D)e%5E%7B-ak%7D+%5Cfrac%7Bu%7D%7Ba%7D,k%5Ctextless%7Bk_0%7D;(1)%5C%5C%5C%5C(x%5E%7B(0)%7D(1)-%5Cfrac%7Bu%7D%7Ba%7D)e%5E%7B-ak%7D+%5Cfrac%7Bu%7D%7Ba%7D%5Cpm%5Chat%7Ba%7D(%5Cvarepsilon%5E%7B(0)%7D(k_0)-%5Cfrac%7B%5Chat%7Bu%7D%7D%7B%5Chat%7Ba%7D%7D)e%5E%7B%5B-%5Chat%7Ba%7D(k-k_0)%5D%7D,k%5Cge%7Bk_0%7D;(2)%5Cend%7Barray%7D%5Cright."><br><div class="image-caption"></div>
    </div>
      <p>因此为残差修正GM(1,1)模型，简称残差GM(1,1)</p>
      <p> &nbsp; </p>
      <h3>5. GM(n,h)模型</h3>
      <p>GM(n,h)模型是微分方程模型，可用于对描述对象做长期、连续、动态的反映。从原则上讲，某一灰色系统无论内部机制如何，只要能将系统原始数据表示为原始时间序列，并保证值非负，则可用GM模型对系统表示和预测。</p>
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

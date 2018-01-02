<%--
  Created by IntelliJ IDEA.
  User: songsong
  Date: 2017/12/5
  Time: 20:48
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
        <h1>建模方法-ARIMA</h1>
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
      <hr>
      <h3>1 概念</h3>

      <p> ARIMA模型，全称为自回归积分滑动平均模型（Autoregressive Integrated Moving Average
        Model），是由博克思(Box)和詹金斯(Jenkins)于20世纪70年代初提出的一种时间序列预测方法。ARIMA模型是指在将非平稳时间序列转化为平稳时间序列过程中，将因变量仅对它的滞后值以及随机误差项的现值和滞后值进行回归所建立的模型。</p>
      <blockquote><p>注：时间序列模型适用于做短期预测，即统计序列过去的变化模式还未发生根本性变化。<br></p></blockquote>
      <hr>
      <h3>2 基本思想</h3>
      <p>
        ARIMA模型的基本思想是：将预测对象随时间推移而形成的数据序列视为一个随机序列，用一定的数学模型来近似描述这个序列。这个模型一旦被识别后就可以从时间序列的过去值及现在值来预测未来值。现代统计方法、计量经济模型在某种程度上已经能够帮助企业对未来进行预测。<br>
      </p>
      <hr>
      <h3>3 原理</h3>
      <p> ARIMA(p,d,q)
        称为差分自回归移动平均模型，根据原序列是否平稳以及回归中所含部分的不同，包括移动平均过程(MA)、自回归过程(AR)、自回归移动平均过程(ARMA)和自回归滑动平均混合过程(ARIMA)。</p>
      <blockquote>
        <p>移动平均过程（MA(q)）<br></p>

        <p>自回归过程（AR(p)）<br></p>

        <p>自回归移动平均过程（ARMA(p,q)）<br></p>

        <p>自回归积分滑动平均过程 （ARIMA(p,d,q)）</p>
      </blockquote>
      <p> AR是自回归，p为自回归项；MA为移动平均，q为移动平均项数，d为时间序列变为平稳时间序列时所做的差分次数。</p><h4>3.1 模型预测步骤</h4>
      <blockquote>
        <p>1.获取被观测系统时间序列数据；</p>

        <p>2.对数据绘图，观测是否为平稳时间序列；对于非平稳时间序列要先进行<b>d阶差分运算</b>，化为平稳时间序列；若为平稳序列，则直接用ARMA(p,q)模型。</p>

        <p>3.经过第二步处理，已经得到平稳时间序列。要对平稳时间序列分别求得其<b>自相关系数ACF</b>和<b>偏自相关系数PACF</b>，通过对自相关图和偏自相关图的分析，得到最佳的<b>阶层
          p</b>和<b>阶数
          q </b>；</p>

        <p>4.由以上得到的d、q、p，得到ARIMA模型。然后开始对得到的模型进行模型检验。以证实所得模型确实与所观察到的数据特征相符。若不相符，重新回到第3步。</p>
      </blockquote>
      <hr>
      <p> &nbsp; </p>
      <h3>4 预测实例</h3>

      <p> 目前常用的数据分析语言为R和python，本文先采用Python在测试数据上实现预测过程。在后期编辑阶段补充R语言的实现过程。</p><h4>4.1 获取数据</h4>

      <p> 具有周期性（7天）的测试数据，即每连续的7个数据属于一个周期内，具体数据如下所示：<br></p>
      <blockquote><p>
        10930,10318,10595,10972,7706,6756,9092,10551,9722,10913,11151,8186,6422,6337,11649,11652,10310,12043,7937,6476,9662,9570,9981,9331,9449,6773,6304,9355,10477,10148,10395,11261,8713,7299,10424,10795,11069,11602,11427,9095,7707,10767,12136,12812,12006,12528,10329,7818,11719,11683,12603,11495,13670,11337,10232,13261,13230,15535,16837,19598,14823,11622,19391,18177,19994,14723,15694,13248,9543,12872,13101,15053,12619,13749,10228,9725,14729,12518,14564,15085,14722,11999,9390,13481,14795,15845,15271,14686,11054,10395</p>
      </blockquote>
      <p>绘制测试数据的时间序列图，如图1所示：</p>
      <blockquote>
        <p>dta=pd.Series(dta)<br></p>

        <p>dta.index = pd.Index(sm.tsa.datetools.dates_from_range('2001','2100'))<br></p>

        <p>dta.plot(figsize=(12,8))<br></p>
      </blockquote>
      <p><br></p>

      <div class="image-package">
        <img src="//upload-images.jianshu.io/upload_images/2588401-0f962524dead526a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
             data-original-src="http://upload-images.jianshu.io/upload_images/2588401-0f962524dead526a.png?imageMogr2/auto-orient/strip"
             data-image-slug="0f962524dead526a" data-width="719" data-height="479"><br>

        <div class="image-caption">图1 数据的时间序列图</div>
      </div>
      <p> &nbsp; </p>
      <h4>4.2 时间序列的差分</h4>

      <p> ARIMA 模型对时间序列的要求是平稳型。因此，当你得到一个非平稳的时间序列时，首先要做的即是做时间序列的差分，直到得到一个平稳时间序列。<br></p>

      <p> 平稳：就是围绕着一个常数上下波动且波动范围有限，即有常数均值和常数方差。如果有明显的趋势或周期性，那它通常不是平稳序列。一般有三种方法：</p>
      <blockquote>
        <p>（1）直接画出时间序列的趋势图，看趋势判断。<br></p>

        <p>（2）画自相关和偏自相关图：平稳的序列的自相关图（Autocorrelation）和偏相关图（Partial Correlation）要么拖尾，要么是截尾。<br></p>

        <p>（3）单位根检验：检验序列中是否存在单位根，如果存在单位根就是非平稳时间序列。</p>
      </blockquote>
      <p>
        不平稳序列可以通过差分转换为平稳序列。d阶差分就是相距d期的两个序列值之间相减。如果一个时间序列经过差分运算后具有平稳性，则该序列为差分平稳序列，可以使用ARIMA模型进行分析。如果你对时间序列做d次差分才能得到一个平稳序列，那么可以使用ARIMA(p,d,q)模型，其中d是差分次数。</p>
      <blockquote>
        <p>fig = plt.figure(figsize=(12,8))<br></p>

        <p>ax1= fig.add_subplot(111)<br></p>

        <p>diff1 = dta.diff(1) #一阶差分序列转化<br></p>

        <p>diff1.plot(ax=ax1)<br></p>
      </blockquote>
      <p><br></p>

      <div class="image-package">
        <img src="//upload-images.jianshu.io/upload_images/2588401-e038da84ff3dfea1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
             data-original-src="http://upload-images.jianshu.io/upload_images/2588401-e038da84ff3dfea1.png?imageMogr2/auto-orient/strip"
             data-image-slug="e038da84ff3dfea1" data-width="1467" data-height="534"><br>

        <div class="image-caption">图2 一阶、二阶差分后的时间序列趋势图</div>
      </div>
      <blockquote>
        <p>fig = plt.figure(figsize=(12,8))<br></p>

        <p>ax2= fig.add_subplot(111)<br></p>

        <p>diff2 = dta.diff(2) #二阶差分序列转化<br></p>

        <p>diff2.plot(ax=ax2)<br></p>
      </blockquote>
      <p> 一阶差分的时间序列的均值和方差已经基本平稳，二阶差分后的时间序列与一阶差分相差不大，并且二者随着时间推移，时间序列的均值和方差保持不变。因此可以将差分次数d设置为1。</p>

      <p> 稳定性的标准非常严格，可以通过两种方式判断。</p>

      <p> (1) 如果时间序列随着时间产生恒定的统计特征，根据实际目的我们可以假设该序列是稳定的。如下：</p>
      <blockquote>
        <p>a. 恒定的平均数<br></p>

        <p>b. 恒定的方差</p>

        <p>c. 不随时间变化的自协方差</p>
      </blockquote>
      <p> (2)针对平稳的检验，叫“ADF单位根平稳型检验”，这是一种检查数据稳定性的统计<a href="http://lib.csdn.net/base/softwaretest"
                                                     target="_blank">测试</a>。无效假设：时间序列是不稳定的。测试结果由测试统计量和一些置信区间的临界值组成。如果“测试统计量”少于“临界值”，我们可以拒绝无效假设，并认为序列是稳定的。本文暂时不做讨论，以后会更新。<br>
      </p>
      <p> &nbsp; </p>
      <h4>4.3 确定合适的 <i>p </i>和 <i>q</i> 值</h4>

      <p>经过第2步，我们已经得到了一个稳定的时间序列，现在需要获得p和q，从而确定选择使用哪种模型更合适。</p>

      <p><h5>4.3.1 绘制平稳时间序列的自相关图和偏自相关图。</h5></p>
      <blockquote>
        <p>dta= dta.diff(1)<br></p>

        <p>fig = plt.figure(figsize=(12,8))</p>

        <p>ax1=fig.add_subplot(211)<br></p>

        <p>fig = sm.graphics.tsa.plot_acf(dta,lags=40,ax=ax1) #lags代表阶数<br></p>

        <p>ax2 = fig.add_subplot(212)<br></p>

        <p>fig = sm.graphics.tsa.plot_pacf(dta,lags=40,ax=ax2)</p>
      </blockquote>
      <div class="image-package">
        <img src="//upload-images.jianshu.io/upload_images/2588401-5a8cb5ba57ad7b50.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
             data-original-src="http://upload-images.jianshu.io/upload_images/2588401-5a8cb5ba57ad7b50.png?imageMogr2/auto-orient/strip"
             data-image-slug="5a8cb5ba57ad7b50" data-width="708" data-height="486"><br>

        <div class="image-caption">图3 自相关图、偏相关图</div>
      </div>
      <p>通过观察图3中的acf图和pacf图，可以得到：</p>

      <p>* 自相关图显示滞后有三个阶超出了置信边界（第一条线代表起始点，不在滞后范围内）；<br></p>

      <p>* 偏相关图显示在滞后1至7阶（lags 1,2,…，7）时的偏自相关系数超出了置信边界，从lag 7之后偏自相关系数值缩小至0</p>

      <p>则有以下模型可以供选择：</p>

      <p>1. ARMA(0,1)模型：即自相关图在滞后1阶之后缩小为0，且偏自相关缩小至0，则是一个阶数q=1的移动平均模型；<br></p>

      <p>2. ARMA(7,0)模型：即偏自相关图在滞后7阶之后缩小为0，且自相关缩小至0，则是一个阶层p=7的自回归模型；</p>

      <p>3. ARMA(7,1)模型：即使得自相关和偏自相关都缩小至零。则是一个混合模型。</p>

      <p>4. …其他供选择的模型。</p>

      <p><b>补充</b>：(1) 分析得到的自相关图和偏自相关图，确定用AR(p)模型还是MA(q)模型亦或是ARMA(p，q)模型依据为</p>

      <div class="image-package">
        <img src="//upload-images.jianshu.io/upload_images/2588401-cdea6261f44483a6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
             data-original-src="http://upload-images.jianshu.io/upload_images/2588401-cdea6261f44483a6.png?imageMogr2/auto-orient/strip"
             data-image-slug="cdea6261f44483a6" data-width="784" data-height="321"><br>

        <div class="image-caption">表1 ARMA模型定阶的基本原则</div>
      </div>
      <p>(2) 若都拖尾，得到ARMA(p，q)模型，自相关图有几个在两倍标准差之外就能确定p，偏自相关图突出两倍标准差的确定q。</p>
      <p> &nbsp; </p>
      <p><h4>4.3.2 模型选择/参数选择</h4></p>

      <p>
        对于上述可供选择的模型，通常采用AIC或者SBC来判断得到的p和q参数值的好坏。我们知道：增加自由参数的数目提高了拟合的优良性，AIC鼓励数据拟合的优良性但是尽量避免出现过度拟合(Overfitting)的情况。所以优先考虑的模型应是AIC值最小的那一个。赤池信息准则的方法是寻找可以最好地解释数据但包含最少自由参数的模型。不仅仅包括AIC准则，目前选择模型常用如下准则：<br>
      </p>
      <blockquote>
        <p>AIC=-2 ln(L) + 2 k 中文名字：赤池信息量 akaike information criterion</p>

        <p>BIC=-2 ln(L) + ln(n)*k 中文名字：贝叶斯信息量 bayesian information criterion<br></p>

        <p>HQ=-2 ln(L) + ln(ln(n))*k hannan-quinn criterion<br></p>

        <p>SBC=-2*ln（模型中的极大似然函数值）+ln（n）（模型中的未知参数的个数）</p>
      </blockquote>
      <p>
        SBC是对AIC的修正，并且这四个指标越小则表示模型参数越好。构造这些统计量所遵循的统计思想是一致的，就是在考虑拟合残差的同时，依自变量个数施加“惩罚”。但要注意的是，这些准则不能说明某一个模型的精确度，也即是说，对于三个模型Ａ，Ｂ，Ｃ，我们能够判断出Ｃ模型是最好的，但不能保证Ｃ模型能够很好地刻画数据，因为有可能三个模型都是糟糕的。</p>

      <p>在本文中ARMA(7,0)的aic，bic，hqic均最小，因此是最佳模型。<br></p>
      <blockquote>
        <p>arma_mod20 = sm.tsa.ARMA(dta,(7,0)).fit()<br></p>

        <p>print(arma_mod20.aic,arma_mod20.bic,arma_mod20.hqic)<br></p>
      </blockquote>
      <p> &nbsp; </p>
      <h4>4.4 模型检验</h4>

      <p>在指数平滑模型下，观察ARIMA模型的残差是否是平均值为0且方差为常数的正态分布（服从零均值、方差不变的正态分布），同时也要观察连续残差是否（自）相关。<br></p>

      <h4>4.4.1 自相关图</h4>

      <p>对ARMA(7,0)模型所产生的残差做自相关图。 </p>
      <blockquote>
        <p>fig = sm.graphics.tsa.plot_acf(resid.values.squeeze(), lags=40, ax=ax1)</p>

        <p>fig = sm.graphics.tsa.plot_pacf(resid, lags=40, ax=ax2)</p>
      </blockquote>
      <div class="image-package">
        <img src="//upload-images.jianshu.io/upload_images/2588401-e000d0296e6ea878.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
             data-original-src="http://upload-images.jianshu.io/upload_images/2588401-e000d0296e6ea878.png?imageMogr2/auto-orient/strip"
             data-image-slug="e000d0296e6ea878" data-width="779" data-height="542"><br>

        <div class="image-caption">图4 残差自相关、偏自相关图</div>
      </div>
      <p> &nbsp; </p>
      <h4>4.4.2 D-W检验</h4>

      <p>德宾-沃森（Durbin-Watson）检验。德宾-沃森检验,简称D-W检验，是目前检验自相关性最常用的方法，但它只使用于检验一阶自相关性。因为自相关系数ρ的值介于-1和1之间，所以
        0≤DW≤４。并且DW＝O＝＞ρ＝１　　 即存在正自相关性<br></p>

      <p>DW＝４＜＝＞ρ＝－１　即存在负自相关性</p>

      <p>DW＝２＜＝＞ρ＝０　　即不存在（一阶）自相关性</p>

      <p>
        因此，当DW值显著的接近于O或４时，则存在自相关性，而接近于２时，则不存在（一阶）自相关性。这样只要知道ＤＷ统计量的概率分布，在给定的显著水平下，根据临界值的位置就可以对原假设Ｈ０进行检验。</p>
      <blockquote><p>sm.stats.durbin_watson(arma_mod20.resid.values)<br></p></blockquote>
      <p>检验结果是2.02424743723，说明不存在自相关性。<br></p>
      <p> &nbsp; </p>
      <h4>4.5 模型预测</h4>

      <p>利用确定好的模型，预测未来十年的情况。</p>
      <blockquote>
        <p>predict_sunspots = arma_mod20.predict('2090', '2100', dynamic=True)<br></p>

        <p>print(predict_sunspots)</p>

        <p>fig, ax = plt.subplots(figsize=(12, 8))</p>

        <p>ax = dta.ix['2001':].plot(ax=ax)</p>

        <p>predict_sunspots.plot(ax=ax)</p>
      </blockquote>
      <p>前面90个数据为测试数据，最后10个为预测数据；从图形来，预测结果较为合理。</p>

      <div class="image-package">
        <img src="//upload-images.jianshu.io/upload_images/2588401-de1310db7f447ca2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
             data-original-src="http://upload-images.jianshu.io/upload_images/2588401-de1310db7f447ca2.png?imageMogr2/auto-orient/strip"
             data-image-slug="de1310db7f447ca2" data-width="795" data-height="528"><br>
        <div class="image-caption">图5 历史数据与预测结果</div>
      </div>
      <p> &nbsp; </p>
      <h3>参考文献资料</h3>

      <p>[1] ARIMA模型. 百度百科.</p>

      <p>[2] <a href="http://blog.csdn.net/u013527419/article/details/52822666"
                target="_blank">时间序列分析--ARIMA模型</a>.
        http://blog.csdn.net/u013527419/article/details/52822666.<br>
      </p>

      <p>[3] <a href="http://blog.csdn.net/u010414589/article/details/49622625" target="_blank">[python]
        时间序列分析之ARIMA</a>. http://blog.csdn.net/u010414589/article/details/49622625.</p>

      <p>[4] <a href="http://blog.csdn.net/desilting/article/details/39013825"
                target="_blank">Arima预测模型（R语言）</a>.
        http://blog.csdn.net/desilting/article/details/39013825.</p>
      <p>[5] Jonathan D. Cryer.时间序列分析及应用. 原书第二版. </p>
      <p>[6] ARIMA时间序列建模过程—步骤和python代码. http://www.jianshu.com/p/cced6617b423.</p>
      <hr>
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

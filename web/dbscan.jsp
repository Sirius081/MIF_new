<%--
  Created by IntelliJ IDEA.
  User: C'est La Vie
  Date: 2017/11/6
  Time: 10:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
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
            <div class="col-md-12 col-sm-7 col-xs-12">
                <div class="panel-body">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            dbscan聚类算法介绍
                        </div>
                        <div class="panel-body">
                            <div class="author">
                                <a class="avatar" href="/u/173108d3e759">
                                    <img src="images/nick.jpg" width="165" height="80"
                                         alt="14"/>
                                </a>

                                <div class="info">
                                    <span class="tag">作者</span>
                                    <span class="name"><a href="/u/173108d3e759">NICK</a></span>
                                    <!-- 关注用户按钮 -->
                                    <div data-author-follow-button></div>
                                    <!-- 文章数据信息 -->
                                    <div class="meta">
                                        <!-- 如果文章更新时间大于发布时间，那么使用 tooltip 显示更新时间 -->
                                        <span class="publish-time" data-toggle="tooltip" data-placement="bottom"
                                              title="最后编辑于 2017.11.6 20:15  ">2017.11.6 20:15*</span>
                                        <span class="wordage">字数 2063</span>
                                    </div>
                                </div>
                                <!-- 如果是当前作者，加入编辑按钮 -->
                            </div>
                            <!-- -->
                            <!-- 文章内容 -->
                            <div class="show-content">
                                <h3>1 DBSCAN算法相关概念</h3>

                                <p>
                                    DBSCAN(Density-Based Spatial Clustering of Applications with Noise，具有噪声的基于密度的聚类方法)是一种基于密度的聚类算法，这类密度聚类算法一般假定类别可以通过样本分布的紧密程度决定。同一类别的样本，他们之间是紧密相连的。也就是说，在该类别任意样本周围不远处一定有同类别的样本存在。</p>

                                <p>DBSCAN算法中有两个重要的参数：E和MinPts，前者为定义密度时的邻域半径，后者为定义核心点时的阈值。DBSCAN具体的描述定义如下：</p>
                                <p>1）Ε-邻域：给定对象半径为Ε内的区域称为该对象的Ε邻域；</p>
                                <p>2)核心对象：如果给定对象Ε领域内的样本点数大于等于MinPts，则称该对象为核心对象；</p>
                                <p>3）密度直达：对于样本集合D，如果样本点q在p的Ε领域内，并且p为核心对象，那么对象q从对象p直接密度可达。</p>
                                <p>4）密度可达：对于样本集合D，给定一串样本点p1,p2….pn，p= p1,q= pn,假如对象pi从pi-1直接密度可达，那么对象q从对象p密度可达。</p>
                                <p>5）密度相连：存在样本集合D中的一点o，如果对象o到对象p和对象q都是密度可达的，那么p和q密度相联。</p>
                                <p>可以发现，密度可达是密度直达的传递闭包，并且这种关系是非对称的。密度相连是对称关系。DBSCAN目的是找到密度相连对象的最大集合。从下图可以很容易看出并理解上述定义，图中MinPts=5，红色的点都是核心对象，因为其E-邻域至少有5个样本。黑色的样本是非核心对象。所有核心对象密度直达的样本在以红色核心对象为中心的超球体内，如果不在超球体内，则不能密度直达。图中用绿色箭头连起来的核心对象组成了密度可达的样本序列。在这些密度可达的样本序列的E-邻域内所有的样本相互都是密度相连的。</p>


                                <div class="image-package">
                                    <img src="images/dbscan.jpg"
                                         alt="144"/>

                                </div>


                                <hr>
                                <h3>2 DBSCAN密度聚类思想<br>
                                </h3>

                                <p>DBSCAN的聚类定义很简单：由密度可达关系导出的最大密度相连的样本集合，即为我们最终聚类的一个类别，或者说一个簇。这个DBSCAN的簇里面可以有一个或者多个核心对象。如果只有一个核心对象，则簇里其他的非核心对象样本都在这个核心对象的E-邻域里；如果有多个核心对象，则簇里的任意一个核心对象的E-邻域中一定有一个其他的核心对象，否则这两个核心对象无法密度可达。这些核心对象的E-邻域里所有的样本的集合组成的一个DBSCAN聚类簇。</p>
                                <p>那么怎么才能找到这样的簇样本集合呢？DBSCAN使用的方法很简单，它任意选择一个没有类别的核心对象作为种子，然后找到所有这个核心对象能够密度可达的样本集合，即为一个聚类簇。接着继续选择另一个没有类别的核心对象去寻找密度可达的样本集合，这样就得到另一个聚类簇。一直运行到所有核心对象都有类别为止。</p>
                                <p>以上就是DBSCAN算法的主要内容，有几个问题值得我们注意。</p>
                                <p>第一个是一些异常样本点或者说少量游离于簇外的样本点，这些点不在任何一个核心对象在周围，在DBSCAN中，我们一般将这些样本点标记为噪音点。</p>
                                <p>第二个是距离的度量问题，即如何计算某样本和核心对象样本的距离。在DBSCAN中，一般采用最近邻思想，采用某一种距离度量来衡量样本距离，比如欧式距离。这和KNN分类算法的最近邻思想完全相同。对应少量的样本，寻找最近邻则可以直接去计算所有样本的距离。</p>
                                <p>第三个是某些样本可能到两个核心对象的距离都小于E，但是这两个核心对象由于不是密度直达，又不属于同一个聚类簇，那么如果界定这个样本的类别呢？一般来说，此时DBSCAN采用先来先到，先进行聚类的类别簇会标记这个样本为它的类别。</p>
                                <hr>
                                <h3>3 DBSAN聚类算法步骤</h3>

                                <p>下面为DBSCAN聚类算法的具体描述过程 。</p>

                                <p>输入: 包含n个对象的数据库，半径E，最少数目MinPts;</p>
                                <p>输出: 所有生成的簇，达到密度要求。</p>
                                <p>(1) 检测数据库中尚未检查过的对象p，如果p未被处理(归为某个簇或者标记为噪声)，则检查其邻域，若包含的对象数不小于MinPts，建立新簇C，将其中的所有点加入候选集N；</p>
                                <p>(2) 对候选集N 中所有尚未被处理的对象q，检查其邻域，若至少包含MinPts个对象，则将这些对象加入N；如果q 未归入任何一个簇，则将q 加入C；</p>
                                <p>(3) 重复步骤2)，继续检查N 中未处理的对象，当前候选集N为空；</p>
                                <p>(4) 重复步骤1)~3)，直到所有对象都归入了某个簇或标记为噪声。</p>
                                <hr>
                                <h3>4 DBSCAN小结</h3>

                                <p>和传统的K-Means算法相比，DBSCAN最大的不同就是不需要输入类别数k，当然它最大的优势是可以发现任意形状的聚类簇，而不是像K-Means，一般仅仅使用于凸的样本集聚类。同时它在聚类的同时还可以找出异常点。那么我们什么时候需要用DBSCAN来聚类呢？一般来说，如果数据集是稠密的，并且数据集不是凸的，那么用DBSCAN会比K-Means聚类效果好很多。如果数据集不是稠密的，则不推荐用DBSCAN来聚类。</p>

                                <p><br></p>
                                <p>下面对DBSCAN算法的优缺点做一个总结。</p>
                                <p>DBSCAN的主要优点有：</p>
                                <p>1） 可以对任意形状的稠密数据集进行聚类，相对的，K-Means之类的聚类算法一般只适用于凸数据集。</p>
                                <p>2） 可以在聚类的同时发现异常点，对数据集中的异常点不敏感。</p>
                                <p>3） DBSCAN对于数据库中样本的顺序不敏感，即Pattern的输入顺序对结果的影响不大。但是，对于处于簇类之间边界样本，可能会根据哪个簇类优先被探测到而其归属有所摆动。</p>

                                <p><br></p>
                                <p>DBSCAN的主要缺点有：</p>
                                <p>1）如果样本集的密度不均匀、聚类间距差相差很大时，聚类质量较差，这时用DBSCAN聚类一般不适合。</p>
                                <p>2） 如果样本集较大时，聚类收敛时间较长，此时可以对搜索最近邻时建立的KD树进行规模限制来改进。</p>
                                <p>3） 调参相对于传统的K-Means之类的聚类算法稍复杂，主要需要对距离阈值E，邻域样本数阈值MinPts联合调参，不同的参数组合对最后的聚类效果有较大影响。</p>
                                <p><br></p>

                                <p><br></p>

                                <p>参考文献：</p>

                                <p>[1] M. Ester, H. Kriegel, J. Sander, X. Xu, A density-based algorithm for discovering clusters in large spatial databases with noise,  www.dbs.informatik.uni-muenchen.de/cgi-bin/papers?query=--CO
                                    </p>

                                <p>[2] M. Daszykowski, B. Walczak, D. L. Massart, Looking for Natural Patterns in Data. Part 1: Density Based Approach</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--图形展示-->
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
</body>
</html>

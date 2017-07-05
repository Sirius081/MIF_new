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
            <div class="col-md-12 col-sm-7 col-xs-12">
                <div class="panel-body">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            指数平滑法介绍
                        </div>
                        <div class="panel-body">
                            <div class="author">
                                <a class="avatar" href="/u/173108d3e759">
                                    <img src="//upload.jianshu.io/users/upload_avatars/2588401/d9cd0d53-90d3-413b-bc80-3e4d453ddbfb.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144"
                                         alt="144"/>
                                </a>

                                <div class="info">
                                    <span class="tag">作者</span>
                                    <span class="name"><a href="/u/173108d3e759">风逝流沙</a></span>
                                    <!-- 关注用户按钮 -->
                                    <div data-author-follow-button></div>
                                    <!-- 文章数据信息 -->
                                    <div class="meta">
                                        <!-- 如果文章更新时间大于发布时间，那么使用 tooltip 显示更新时间 -->
                    <span class="publish-time" data-toggle="tooltip" data-placement="bottom"
                          title="最后编辑于 2017.06.20 17:05">2017.06.20 16:02*</span>
                                        <span class="wordage">字数 1305</span>
                                    </div>
                                </div>
                                <!-- 如果是当前作者，加入编辑按钮 -->
                            </div>
                            <!-- -->
                            <!-- 文章内容 -->
                            <div class="show-content">
                                <h3>1 指数平滑法</h3>

                                <p>
                                    移动平均模型在解决时间序列问题上简单有效，但它们的计算比较难，因为不能通过之前的计算结果推算出加权移动平均值。此外，移动平均法不能很好的处理数据集边缘的数据变化，也不能应用于现有数据集的范围之外。因此，移动平均法的预测效果相对较差。</p>

                                <p>指数平滑法(exponential
                                    smoothing)是一种简单的计算方案，可以有效的避免上述问题。按照模型参数的不同，指数平滑的形式可以分为一次指数平滑法、二次指数平滑法、三次指数平滑法。其中一次指数平滑法针对没有趋势和季节性的序列，二次指数平滑法针对有趋势但是没有季节特性的时间序列，三次指数平滑法则可以预测具有趋势和季节性的时间序列。术语“Holt-Winter”指的是三次指数平滑。</p>
                                <hr>
                                <h3>2 Holt-Winter分类<br>
                                </h3>

                                <p>Holt-Winter指数平滑法按照季节性分量的计算方式不同，可以分为累加式季节性分量和累乘式季节性分量。两种不同的分量对应的时间序列计算等式和预测公式均不同，稍后我们会详细介绍。</p>
                                <hr>
                                <h3>3 一次指数平滑法</h3>

                                <p>指数平滑法是一种结合当前信息和过去信息的方法，新旧信息的权重由一个可调整的参数控制，各种变形的区别之处在于其“混合”的过去信息量的多少和参数的个数。</p>

                                <p>
                                    常见的有单指数平滑、双指数平滑。它们都只有一个加权因子，但是双指数平滑使用相同的参数将但指数平滑进行两次，适用于有线性趋势的序列。单指数平滑实质上就是自适应预期模型，适用于序列值在一个常数均值上下随机波动的情况，无趋势及季节要素的情况，单指数平滑的预测对所有未来的观测值都是常数。</p>

                                <p>一次指数平滑的递推关系公式：</p>

                                <div class="image-package">
                                    <img src="//upload-images.jianshu.io/upload_images/2588401-68f1137f352c755d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
                                         data-original-src="http://upload-images.jianshu.io/upload_images/2588401-68f1137f352c755d.png?imageMogr2/auto-orient/strip"
                                         data-image-slug="68f1137f352c755d" data-width="219" data-height="28"><br>

                                    <div class="image-caption"></div>
                                </div>
                                <p>
                                    其中，s_i是第i步经过平滑的值，x_i是这个时间的实际数据。alpha是加权因子，取值范围为[0,1]，它控制着新旧信息之间的权重平衡。当alpha接近1时，我们就只保留当前数据点(即完全没有对序列做平滑操作)，当alpha接近0时，我们只保留前面的平滑值，整个曲线是一条水平的直线。在该方法中，越早的平滑值作用越小，从这个角度看，指数平滑法像拥有无限记忆且权值呈指数级递减的移动平均法。 </p>

                                <p>一次指数平滑法的预测公式为：</p>

                                <p><br></p>

                                <div class="image-package">
                                    <img src="//upload-images.jianshu.io/upload_images/2588401-bcd26cc9152fa82e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
                                         data-original-src="http://upload-images.jianshu.io/upload_images/2588401-bcd26cc9152fa82e.png?imageMogr2/auto-orient/strip"
                                         data-image-slug="bcd26cc9152fa82e" data-width="104" data-height="36"><br>

                                    <div class="image-caption"></div>
                                </div>
                                <p>因此，一次指数平滑法得到的预测结果在任何时候都是一条直线。并不适合于具有总体趋势的时间序列，如果用来处理有总体趋势的序列，平滑值将滞后于原始数据，除非alpha的值非常接近1，但这样使得序列不够平滑。</p>
                                <hr>
                                <h3>4 二次指数平滑法</h3>

                                <p>二次指数平滑法保留了平滑信息和趋势信息，使得模型可以预测具有趋势的时间序列。二次指数平滑法有两个等式和两个参数：</p>

                                <p><br></p>

                                <div class="image-package">
                                    <img src="//upload-images.jianshu.io/upload_images/2588401-a203bc56e5e52a83.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
                                         data-original-src="http://upload-images.jianshu.io/upload_images/2588401-a203bc56e5e52a83.png?imageMogr2/auto-orient/strip"
                                         data-image-slug="a203bc56e5e52a83" data-width="275" data-height="50"><br>

                                    <div class="image-caption"></div>
                                </div>
                                <p>
                                    t_i代表平滑后的趋势，当前趋势的未平滑值是当前平滑值s_i和上一个平滑值s_{i-1}的差。s_i为当前平滑值，是在一次指数平滑基础上加入了上一步的趋势信息t_{i-1}。利用这种方法做预测，就取最后的平滑值，然后每增加一个时间步长，就在该平滑值上增加一个t_{i}：</p>

                                <p><br></p>

                                <div class="image-package">
                                    <img src="//upload-images.jianshu.io/upload_images/2588401-505b6b8b17559a8d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
                                         data-original-src="http://upload-images.jianshu.io/upload_images/2588401-505b6b8b17559a8d.png?imageMogr2/auto-orient/strip"
                                         data-image-slug="505b6b8b17559a8d" data-width="150" data-height="24"><br>

                                    <div class="image-caption"></div>
                                </div>
                                <p>在计算的形式上这种方法与三次指数平滑法类似，因此，二次指数平滑法也被称为无季节性的Holt-Winter平滑法。</p>
                                <hr>
                                <h3>5 Holt-Winter指数平滑法</h3>

                                <p>三次指数平滑法相比二次指数平滑，增加了第三个量来描述季节性。累加式季节性对应的等式为：</p>

                                <div class="image-package">
                                    <img src="//upload-images.jianshu.io/upload_images/2588401-ade7304cc52531b9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
                                         data-original-src="http://upload-images.jianshu.io/upload_images/2588401-ade7304cc52531b9.png?imageMogr2/auto-orient/strip"
                                         data-image-slug="ade7304cc52531b9" data-width="345" data-height="100"><br>

                                    <div class="image-caption"></div>
                                </div>
                                <p>累乘式季节性对应的等式为：</p>

                                <div class="image-package">
                                    <img src="//upload-images.jianshu.io/upload_images/2588401-1b8901b59187a564.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
                                         data-original-src="http://upload-images.jianshu.io/upload_images/2588401-1b8901b59187a564.png?imageMogr2/auto-orient/strip"
                                         data-image-slug="1b8901b59187a564" data-width="303" data-height="129"><br>

                                    <div class="image-caption"></div>
                                </div>
                                <p>其中p_i为周期性的分量，代表周期的长度。x_{i+h}为模型预测的等式。</p>

                                <p><br></p>

                                <p><br></p>

                                <p>参考文献：</p>

                                <p>[1] 时间序列挖掘-预测算法-三次指数平滑法(Holt-Winters). http://www.dataguru.cn/article-3235-1.html.</p>

                                <p>[2] <a href="http://blog.csdn.net/howardge/article/details/42076781" target="_blank">R语言与数据分析之九：时间内序列--HoltWinters指数平滑法</a>.
                                    http://blog.csdn.net/howardge/article/details/42076781.</p>

                                <p>[3] <a href="http://www.cnblogs.com/xuanlvshu/p/5451974.html" target="_blank">Holt-Winters原理和初始值的确定</a>.
                                    http://www.cnblogs.com/xuanlvshu/p/5451974.html.</p>
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

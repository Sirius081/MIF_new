<%--
  Created by IntelliJ IDEA.
  User: song
  Date: 2017/1/13
  Time: 14:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--
  Created by IntelliJ IDEA.
  User: sirius
  Date: 16-7-26
  Time: 下午5:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="zh-cn">
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

</head><body>
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
              <a href="typography.html">基金收入模块</a>
            </li>
            <li>
              <a href="button.html">基金支出模块</a>
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
              <a href="blog.html">异常检测</a>
            </li>
            <li>
              <a href="blog-two-col.html">Blog two column</a>
            </li>
            <li>
              <a href="blog-detail.html">Blog Single Image</a>
            </li>
            <li>
              <a href="blog-detail-video.html">Blog single video</a>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-close-others="false" data-delay="0" data-hover=
                  "dropdown" data-toggle="dropdown" href="#">建模方法介绍 <i class="fa fa-angle-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="gm1.jsp">灰度预测模型</a>
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
<div  id="content2">
  <!--切换标签页面-->
    <div id="source_table_content" style="">
      <div class="wrap" >
        <form id="queryPredict">
          <!--右部显示详细信息-->
            <div id="detail-information">
            </div>
          <%--<span style="font-size:25px" >选择模型：</span>--%>
          <%--<select id="select_model" class="form-control select_style" ></select>--%>
          <%--<span style="font-size:25px">选择变量：</span>--%>
          <%--<select id="select_variable" class="form-control select_style" style="width:200px;margin-left: 100px"></select>--%>
          <%--<input id="query" class="btn" type="button" value="查询" style="font-size: 20px; margin-left: 100px;margin-top:20px "/>--%>
        </form>
    </div>
  </div>
</div>
  <script src="js/echarts.common.min.js"></script>
  <script type="text/javascript">
    $(document).ready(function(){
      $.ajax({
        url:'/MIF/init',
        type:'get',
        dataType:'json',
        success:function(data){
          var model_select=$("#select_model");
          $.each(data.modelList,function(i,item){
            model_select.append("<option style='font-size: 20px' value='"+item.key+"'>"+item.value+"</option>");
          });
          var model_select=$("#select_variable");
          $.each(data.variableList,function(i,item){
            model_select.append("<option value='"+item.key+"'>"+item.value+"</option>");
          });
        }
      });

//            var model_selected=$("#select_model").val();
      var model_selected=1;//1=gm11,2=holtwinter,3=multiregression,4=arima

      var params="&model="+model_selected;
      $.ajax({
        url:'/MIF/query',
        type:'get',
        data:params,
        dataType:'json',
        success:function(data){
          $(data).each(function(i,value){
            plot(value);
          });
        }
      });

    });
  </script>
<!--small footer start -->
<footer class="footer-small">
  <div class="container">
    <div class="col-md-12">
      <div class="copyright"> <p>&copy; Copyright -泸州市医疗保险管理局</p></div>
    </div>
  </div>
  </div>
</footer>

<script type="text/javascript" src="js/spider.js"></script>
<script type="text/javascript" src="js/plot_forecast.js"></script>

</body>
</html>

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
<div class="navbar navbar-inverse set-radius-zero">
  <div class="container">
    <div class="header_bg">
      <div class="logo">
        <span class="font-style">泸州市医保基金监管平台</span>
      </div>
      <div class="right-div">
        <a href="#" class="btn btn-danger pull-right">about</a>
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
              </ul>
            </li>
            <li>
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">异常检测 <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="ui.html">区县</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="hospital.jsp">医院</a>
                </li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="ui.html">病种</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">药品</a></li>
              </ul>
            </li>
            <li><a href="index.html">联系我们</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<div  id="content">

  </br></br></br>

  <!--切换标签页面-->


  <div id="manager1">
    <div id="source_table_content" style="">
      <div class="wrap" >
        <form id="queryPredict">
          <span style="font-size:25px" >选择模型：</span>
          <select id="select_model" class="form-control select_style" ></select>
          <span style="font-size:25px">选择变量：</span>
          <select id="select_variable" class="form-control select_style" style="width:200px;margin-left: 100px"></select>
          <input id="query" class="btn" type="button" value="查询" style="font-size: 20px; margin-left: 100px;margin-top:20px "/>
        </form>
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
          $("#query").click(function(){
            var model_selected=$("#select_model").val();
            var variable_selected=$("#select_variable").val();
            var params="&model="+model_selected+"&variable="+variable_selected;
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
        });
      </script>
    </div>
  </div>

  <!--右部显示详细信息-->
  <div id="well">
    <div id="detail-information">
    </div>
  </div>
</div>
<section class="footer-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12" align="center">
        Copyright &copy; 华东师范大学.<a target="_blank" href="http://www.ecnu.edu.cn/"></a>
      </div>
    </div>
  </div>
</section>

<script type="text/javascript" src="js/spider.js"></script>
<script type="text/javascript" src="js/plot_forecast.js"></script>

</body>
</html>

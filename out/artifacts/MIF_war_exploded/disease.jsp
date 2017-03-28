<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="zh-cn">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>泸州市医保基金预测可视化平台</title>
  <link href="css/bootstrap.min.css" rel='stylesheet' type='text/css'/>
  <link href="css/bootstrap.css" rel='stylesheet' type='text/css'/>
  <link href="css/common.css" rel="stylesheet"/>
  <link href="css/spider.css" rel="stylesheet"/>
  <link rel="stylesheet" type="text/css" href="css/ui.jqgrid.css" />
  <link rel="stylesheet" type="text/css" href="css/jquery-ui-1.10.4.custom.css" />
  <link rel="stylesheet" type="text/css" href="css/theme.css" />


  <script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/common.js"></script>
  <script type="text/javascript" src="js/sub-menu.js"></script>
  <script type="text/javascript" src="js/grid.locale-cn.js"  charset="utf-8"></script>
  <script type="text/javascript"src="js/jquery.jqGrid.min.js"  charset="utf-8"></script>

  <!--自动刷新页面，3分钟一刷新-->
  <!--<meta http-equiv="refresh" content="100">-->

</head>
<body onload="loadtop10()">
<div class="header_bg">
  <div class="logo">
    <span class="font-style">泸州市医保基金预测平台</span>
  </div>
  <div>
    <nav>
      <div class="btn-group" id="btn-group1">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">收支模型
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu" id="menu1">
          <li><a href="predict.jsp">收支预测</a></li>
          <li><a href="charge.jsp">基金缴费模型</a></li>
          <li><a href="cost.jsp">医疗待遇支付模型</a></li>
        </ul>
      </div>
      <div class="btn-group" id="btn-group2">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">费用管理
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu">
          <li><a href="drug.jsp">药品费用管理</a></li>
          <li><a href="disease.jsp">病种费用管理</a></li>
          <li><a href="hospital.jsp">医院费用管理</a></li>
        </ul>
      </div>

  </nav>
    </nav>
  </div>
</div>

<div  id="content1">

  </br></br></br>

  <!--切换标签页面-->


  <div id="manager">
    <div id="source_table_content">
      <div>
        <form id="queryPredict">

            <div class="col-md-12">

              <div class="col-md-5" style="height:500px;box-shadow:inset 1px -1px 1px #76c7c0, inset -1px 1px 1px #76c7c0;">
                <span class="label1" >按年份：</span>
                <select id="year" class="select_relative" >
                  <option value="2010">2010</option>
                  <option>2011</option>
                  <option>2012</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                </select>
                <select id="orderBy" class="select_relative1" >
                  <option value="fees">费用</option>
                  <option value="groupfees">统筹支付</option>
                  <option value="s_count">人次</option>
                </select>
                <input id="query" class="query" type="button" onclick="updatetop10()" value="查询"/>
                <div class="grid_relative">
                  <table id="grid-table"></table>
                  <!--jqGrid 浏览导航栏所在-->
                  <div id="grid-pager"></div>
                </div>
              </div>

              <div class="col-md-7" style="height:500px;box-shadow: inset 1px -1px 1px #76c7c0, inset -1px 1px 1px#76c7c0;">
                <div class="row">
                  <div class="col-md-12" style="height:100px;box-shadow: inset 1px -1px 1px #76c7c0, inset -1px 1px 1px #76c7c0;">
                    <span class="label1" >按年份：</span>
                    <select id="diseaseyear" class="select_relative" >
                      <option>2010</option>
                      <option>2011</option>
                    </select>
                    <span class="label1" >按病种：</span>
                    <input type="text" id="diseasename" class="input">
                    <input id="query2" class="query" type="button" onclick="selectResult()" value="查询"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12" style="height:400px; box-shadow: inset 1px -1px 1px #76c7c0, inset -1px 1px 1px #76c7c0;">
                    <div class="grid_relative1">
                      <table  id="grid-table2"></table>
                      <!--jqGrid 浏览导航栏所在-->
                      <div id="grid-pager2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </form>
      </div>
    </div>
  </div>


</div>
<div class="footer1_bg">
  <div class="copy">
    <p class="link">Copyright &copy; 华东师范大学.<a target="_blank" href="http://www.ecnu.edu.cn/"></a></p>
  </div>
</div>

<script type="text/javascript" src="js/disease.js" charset="utf-8"></script>
<script type="text/javascript" src="js/spider.js"></script>
<script type="text/javascript" src="js/plot_forecast.js"></script>
<script type="text/javascript" src="js/display.js"></script>
</body>
</html>

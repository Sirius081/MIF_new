<%--
  Created by IntelliJ IDEA.
  User: song
  Date: 2017/1/13
  Time: 14:58
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="zh-cn">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>泸州市医保基金预测可视化平台</title>
  <link href="css/bootstrap.min.css" rel='stylesheet' type='text/css'/>
  <link href="css/bootstrap.css" rel='stylesheet' type='text/css'/>
  <link href="css/common.css" rel="stylesheet"/>
  <link href="css/spider.css" rel="stylesheet"/>
  <script type="text/javascript" src="js/echarts.common.min.js"></script>
  <script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/common.js"></script>
  <script type="text/javascript" src="js/sub-menu.js"></script>


  <!--自动刷新页面，3分钟一刷新-->
  <!--<meta http-equiv="refresh" content="100">-->

</head>
<body>
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

<div  id="content">

  </br></br></br>

  <!--切换标签页面-->


  <div id="manager1">
    <div id="source_table_content" style="">
      <div class="wrap" >
        <form id="queryPredict">
          <span class="label1" >按年份：</span>
          <select id="year">
            <option value="2016">2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
          </select>
          <input id="query1" class="query"type="button" onclick="selectresult()" value="查询"/>
          <br/>
          <span class="label1" >一级在职人员：起付线
          <input type="text" id="line10" value="500" class="input">报销比例
          <input type="text" id="ratio10" value="90" class="input">
            <br/>
          一级退休人员：起付线
          <input type="text" id="line11" value="400" class="input">报销比例
          <input type="text" id="ratio11" value="96" class="input"></span>
          <br/>
          <span class="label1" >二级在职人员：起付线
          <input type="text" id="line20" value="600" class="input">报销比例
          <input type="text" id="ratio20" value="85" class="input">
            <br/>
          二级退休人员：起付线
          <input type="text" id="line21" value="500" class="input">报销比例
          <input type="text" id="ratio21" value="92" class="input"></span>
          <br/>
          <span class="label1" >三级在职人员：起付线
          <input type="text" id="line30" value="700" class="input">报销比例
          <input type="text" id="ratio30" value="80" class="input">
            <br/>
          三级退休人员：起付线
          <input type="text" id="line31" value="600" class="input">报销比例
          <input type="text" id="ratio31" value="88" class="input"></span>
          <br/>
          <span class="label1" >社区在职人员：起付线
          <input type="text" id="line40" value="500" class="input">报销比例
          <input type="text" id="ratio40" value="90" class="input">
            <br/>
          社区退休人员：起付线
          <input type="text" id="line41" value="400" class="input">报销比例
          <input type="text" id="ratio41" value="96" class="input"></span>
          <br/>
          <br>
          <span class="label1" >医疗费用支出金额：</span>
          <input type="text" id="result" class="input1">&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;万元&nbsp;)
        </form>
      </div>
    </div>
  </div>
  <!--右部显示详细信息-->
  <div id="well">
    <div id="detail-information"></div>
  </div>
</div>
</div>
<div class="footer1_bg">
  <div class="copy">
    <p class="link">Copyright &copy; 华东师范大学.<a target="_blank" href="http://www.ecnu.edu.cn/"></a></p>
  </div>
</div>
<script type="text/javascript" src="js/cost.js" charset="utf-8"></script>
<script type="text/javascript" src="js/spider.js"></script>
<script type="text/javascript" src="js/plot_forecast.js"></script>

</body>
</html>

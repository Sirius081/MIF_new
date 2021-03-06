<%--
  Created by IntelliJ IDEA.
  User: song
  Date: 2017/1/13
  Time: 14:58
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
          <li><a href="charge1.jsp">基金缴费模型</a></li>
          <li><a href="cost1.jsp">医疗待遇支付模型</a></li>
        </ul>
      </div>
      <div class="btn-group" id="btn-group2">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">费用管理
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu">
          <li><a href="drug.jsp">药品费用管理</a></li>
          <li><a href="disease1.jsp">病种费用管理</a></li>
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
          </select>
          <input id="query1" class="query" type="button" onclick="selectresult()" value="查询"/>
            <br/>
          <span class="label1">平均工资：</span>
          <input type="text" id="avgwage" class="input">
          <br/>
          <span class="label1">缴费基数上限：</span>
          <input type="text"  id="ceil" class="input">
          <br/>
          <span class="label1"  >缴费基数下限：</span>
            <input type="text" id="floor" class="input">
          <br/>
          <span class="label1"  >缴费比例：</span>
          <input type="text" id="ratio1" class="input">
          <input type="text" id="ratio2" class="input">
          <br>
          <span class="label1"  >基金缴费金额：</span>
          <input type="text" id="result" class="input1">&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;万元&nbsp;)
          <br/>
        </form>
      </div>
    </div>
  </div>

<div id="well">
  <div id="detail-information">
  </div>
</div>
</div>
</div>
<div class="footer1_bg">
  <div class="copy">
    <p class="link">Copyright &copy; 华东师范大学.<a target="_blank" href="http://www.ecnu.edu.cn/"></a></p>
  </div>
</div>
<script type="text/javascript" src="js/charge.js" charset="utf-8"></script>
<script type="text/javascript" src="js/spider.js"></script>
<script type="text/javascript" src="js/plot_forecast.js"></script>

</body>
</html>

<%--
  Created by IntelliJ IDEA.
  User: song
  Date: 2017/1/13
  Time: 12:52
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script type="text/javascript" src="js/echarts.common.min.js"></script>
<script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/common.js"></script>
<script type="text/javascript" src="js/sub-menu.js"></script>
<html>
<head>
    <title></title>
</head>
<body>
<div id="detail">title</div>
<script>
  var line = echarts.init(document.getElementById('detail'));
  option = {
    title: {
      text: '堆叠区域图'
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data:['基金收入','基金支出']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        data : ['2006','2007','2008','2009','2010','2011','2012'
          ,'2013','2014','2015','2016','2017','2018','2019','2020']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'基金收入',
        type:'line',
        stack: '总量1',
        data:[28138,32647,43342,49445,57940,67845,71924,114512,117924,139027,144046.7,167089.1,191742.1,218017.9,244912.7
        ]
      },

      {
        name:'基金支出',
        type:'line',
        stack: '总量2',
        data:[12679,19805,25829,35186,48708,60951,72716,90335,96118,116651,142689.6,168167.7,196129.9,226695.6,249887.4
        ]
      }
    ]
  };
       line.setOption(option);
</script>
</body>
</html>

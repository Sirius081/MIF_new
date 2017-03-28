<%--
  Created by IntelliJ IDEA.
  User: song
  Date: 2017/2/21
  Time: 14:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
</head>
<body>
<div id="myChart"></div>
<script type="text/javascript" src="js/echarts.common.min.js"></script>
<script type="text/javascript">
  /*
   * 按需加载
   * 引入echart.js依赖的zrender.js, 再引入echart.js
   */

  /***/

          //渲染ECharts图表
  //图表渲染的容器对象
  var chartContainer = document.getElementById("myChart");
            //加载图表
  var myChart = echarts.init(chartContainer);
  var option = {
    title : {
      text: '未来一周气温变化',
      subtext: '测试数据'
    },
    tooltip : {
      trigger: 'axis'//item  axis
    },
    legend: {
      data:['最高气温','最低气温']
    },
    toolbox: {
      show : true,
      feature : {
        mark : {show: true},
        dataView : {show: true, readOnly: false},
        magicType : {show: true, type: ['line', 'bar']},
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    calculable : true,
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        data : ['周一','周二','周三','周四','周五','周六','周日']
      }
    ],
    yAxis : [
      {
        type : 'value',
        axisLabel : {
          formatter: '{value} °C'
        },
        splitNumber:10
      }
    ],
    series : [
      {
        name:'最高气温',
        type:'line',
        data:[11, 11, 15, 13, 12, 13, 10],
        markPoint : {
          data : [
            {type : 'max', name: '最大值'},
            {type : 'min', name: '最小值'}
          ]
        },
        markLine : {
          data : [
            {type : 'average', name: '平均值'}
          ]
        }
      },
      {
        name:'最低气温',
        type:'line',
        data:[1, -2, 2, 5, 3, 2, 0],
        markPoint : {
          data : [
            {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
          ]
        },
        markLine : {
          data : [
            {type : 'average', name : '平均值'}
          ]
        }
      }
    ]
  };
  myChart.setOption(option);

</script>
</body>
</html>

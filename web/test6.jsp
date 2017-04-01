
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width" />
  <title>Index</title>
  <script type="text/javascript" src="js/echarts.js"></script>
</head>
<body style="padding:100px;">
<div id="priceChart" style="width:700px;height:400px"> </div>
<script type="text/javascript">
  var priceChart = echarts.init(document.getElementById("priceChart"))
  var option = {
    //timeline基本配置都写在baseoption 中
    baseOption: {
      timeline: {
        //loop: false,
        axisType: 'category',
        show: true,
        autoPlay: true,
        playInterval: 1000,
        data: ['1', '2', '3']
      },
      grid: { containLabel: true },
      xAxis: [{
        type: 'category',
        name: '企业',
      }, ],
      yAxis: { type: 'value', name: 'Mwh' },
      series: [
        {
          type: 'line',
        },
      ],
      tooltip: {}
    },
    //变量则写在options中
    options:[
      {
        xAxis: [{
          data: ['能化国际电力股份有限公司', '大唐国际发电公司', '北京华夏发电公司']
        }],
        title: {
          text: '电量使用总计',
          subtext: '单位:Mwh'
        },
        series: [
          {
            data: [120, 450, 140]
          },
        ]
      },
      {
        xAxis: [{
          data: ['能化国际电力股份有限公司', '大唐国际发电公司', '北京华夏发电公司']
        }],
        title: {
          text: '电量使用总计',
          subtext: '单位:Mwh'
        },
        series: [
          {
            data: [530, 130, 780]
          },
        ]
      },
      {
        xAxis: [{
          data: ['能化国际电力股份有限公司', '大唐国际发电公司', '北京华夏发电公司']
        }],
        title: {
          text: '电量使用总计',
          subtext: '单位:Mwh'
        },
        series: [
          {
            data: [560, 350, 180]
          },

        ]
      },
    ]
  }
  priceChart.setOption(option);
</script>
</body>
</html>

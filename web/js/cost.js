/**
 * Created by song on 2017/1/16.
 */
function selectresult()
{
    var line10=$("#line10").val();
    var ratio10=$("#ratio10").val();
    var line11=$("#line11").val();
    var ratio11=$("#ratio11").val();
    var line20=$("#line20").val();
    var ratio20=$("#ratio20").val();
    var line21=$("#line21").val();
    var ratio21=$("#ratio21").val();
    var line30=$("#line30").val();
    var ratio30=$("#ratio30").val();
    var line31=$("#line31").val();
    var ratio31=$("#ratio31").val();
    var line40=$("#line40").val();
    var ratio40=$("#ratio40").val();
    var line41=$("#line41").val();
    var ratio41=$("#ratio41").val();
    var params='&line10='+line10+'&ratio10='+ratio10+'&line11='+line11+'&ratio11='+ratio11
        +'&line20='+line20+'&ratio20='+ratio20+'&line21='+line21+'&ratio21='+ratio21
        +'&line30='+line30+'&ratio30='+ratio30+'&line31='+line31+'&ratio31='+ratio31
        +'&line40='+line40+'&ratio40='+ratio40+'&line41='+line41+'&ratio41='+ratio41;
    $.ajax({
        url:'/MIF/cost/query',
        type:'get',
        data:params,
        dataType:'json',
        success:function(data){
            if(line10!='500' || ratio10!='90' || line11!='400' || ratio11!='96'||
                line20!='600' || ratio20!='85' || line21!='500' || ratio21!='92'||
                line30!='700' || ratio30!='80' || line31!='600' || ratio31!='88'||
                line40!='500' || ratio40!='90' || line41!='400' || ratio41!='96')
            {
                var line = echarts.init(document.getElementById('detail-information'))
                option = {
                    title: {
                        text: '医疗待遇支付模型（单位：万元）'
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        show: true,
                        x: 'right',
                        y: 'top',
                        data:['改变之前','改变之后']
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
                            data : ['2016','2017','2018','2019','2020']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'改变之前',
                            type:'line',
                            stack: '总量1',
                            data: data.result.slice(0,5)
                        },
                        {
                            name:'改变之后',
                            type:'line',
                            stack: '总量2',
                            data:data.result.slice(5,10)
                        }
                    ]
                }
                //为echarts对象加载数据
                line.setOption(option);
            }
            else
            {
                var line = echarts.init(document.getElementById('detail-information'));
                option = {
                    title: {
                        text: '医疗待遇支付模型（单位：万元）'
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        show: true,
                        x: 'right',
                        y: 'top',
                        data:['改变之前']
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
                            data : ['2016','2017','2018','2019','2020']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name: '改变之前',
                            type: 'line',
                            stack: '总量1',
                            data: data.result.slice(0, 5)
                        }
                    ]
                };
                //为echarts对象加载数据
                line.setOption(option);
            }
        }
    });
}

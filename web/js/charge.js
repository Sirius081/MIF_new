/**
 * Created by song on 2017/1/15.
 */
function selectresult()
{
    var ceil=$("#ceil").val();
    var floor=$("#floor").val();
    var ratio=$("#ratio").val();
    var params='&ceil='+ceil+'&floor='+floor+'&ratio='+ratio;
    $.ajax({
        url:'/MIF/charge/query',
        type:'get',
        data:params,
        dataType:'json',
        success:function(data) {
            if(ceil!='3' || floor!='1' || ratio!='9'){
                var line = echarts.init(document.getElementById('detail-information'));
                option = {
                    title: {
                        text: '泸州市医保基金预测（单位：万元）'
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
                };
                //为echarts对象加载数据
                line.setOption(option);
            }
            else
            {
                var line = echarts.init(document.getElementById('detail-information'));
                option = {
                    title: {
                        text: '泸州市医保基金预测（单位：万元）'
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

/**
 * Created by song on 2017/1/15.
 */
function selectresult()
{
    var year=$("#year").val();
    var avgWage=$("#avgwage").val();
    var ceil=$("#ceil").val();
    var floor=$("#floor").val();
    var ratio1=$("#ratio1").val();
    var ratio2=$("#ratio2").val();
    var params="&year="+year+'&avgwage='+avgWage+'&ceil='+ceil+'&floor='+floor+'&ratio1='+ratio1+'&ratio2='+ratio2;
    $.ajax({
        url:'/MIF/charge/query',
        type:'get',
        data:params,
        dataType:'json',
        success:function(data) {
            if (data.result.length > 1) {
                var line = echarts.init(document.getElementById('detail-information'));
                option = {
                    title: {
                        text: '泸州市医保基金预测'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['缴费比例']
                    },
                    yAxis: {
                        type: 'value',
                        min: data.result[0]

                    },
                    series: []
                };
                option.series.push({
                    name: '缴费金额',
                    type: 'line',
                    stack: '总量',
                    data: data.result
                });
                line.setOption(option);
            }
            else {
                document.getElementById("result").value = data.result;
            }
        }
    });
}

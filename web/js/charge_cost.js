/**
 * Created by song on 2017/5/22.
 */
var line = echarts.init(document.getElementById('detail-information'));
var option = {
    title: {
        text: '泸州市医保统筹基金收支预测（单位：万元）'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        show: true,
        x: 'right',
        y: 'top',
        data:["统筹账户收入","统筹账户支出"]
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
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['2016', '2017', '2018', '2019', '2020']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: []
}
var flag1=0;
function predictIncome()
{
    var ceil=$("#ceil").val();
    var floor=$("#floor").val();
    var ratio=$("#ratio").val();
    var params='&ceil='+ceil+'&floor='+floor+'&ratio='+ratio;
    $.ajax({
        url:'/MIF/charge/queryGroup',
        type:'get',
        data:params,
        dataType:'json',
        success:function(data) {
            if(flag1==0) {
                option.series.push({
                    name: "统筹账户收入",
                    type: 'line',
                    data: data.result
                })
                flag1=1;
            }
            else
                option.series[0].data=data.result              //更新series对应的序列的值
            line.setOption(option);
        }
    });
}
var flag2=0;
function predictCost()
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
        url:'/MIF/cost/queryGroup',
        type:'get',
        data:params,
        dataType:'json',
        success:function(data){
            if(flag2==0) {
                option.series.push({
                    name: "统筹账户支出",
                    type: 'line',
                    data: data.result
                })
                flag2=1;
            }
            else
                option.series[1].data=data.result              //更新series对应的序列的值
            line.setOption(option);
            }
    });
}

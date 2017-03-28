/**
 * Created by song on 2017/1/16.
 */
function selectresult()
{
    var year=$("#year").val();
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
    var params="&year="+year+'&line10='+line10+'&ratio10='+ratio10+'&line11='+line11+'&ratio11='+ratio11
        +'&line20='+line20+'&ratio20='+ratio20+'&line21='+line21+'&ratio21='+ratio21
        +'&line30='+line30+'&ratio30='+ratio30+'&line31='+line31+'&ratio31='+ratio31
        +'&line40='+line40+'&ratio40='+ratio40+'&line41='+line41+'&ratio41='+ratio41;
    $.ajax({
        url:'/MIF/cost/query',
        type:'get',
        data:params,
        dataType:'json',
        success:function(data){
            var line = echarts.init(document.getElementById('detail-information'));
            option = {
                title: {
                    text: '泸州市医疗保险项目医疗待遇支付预测'
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
                    data: ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020']
                },
                yAxis: {
                    type: 'value'

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
            document.getElementById("result").value = data.cost;
        }
    });
}

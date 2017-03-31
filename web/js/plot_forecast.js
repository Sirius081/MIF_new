function plot(forecastList){
    var line = echarts.init(document.getElementById('detail-information'));
    var option = {
        title: {
            text: '堆叠区域图',
            textStyle:{
                fontSize:30
            }
        },

        tooltip : {
            trigger: 'axis'
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
                data : []
            }
        ],
        yAxis : [
             {
                type : 'value'
            }
        ],
        series : [
        ]
    };
    var data=[];
    var years=[];
    forecastList=forecastList.forecastList
    for(var o in forecastList){
        years.push(forecastList[o].time);
        data.push(forecastList[o].value);
    }
    var variable=forecastList[1].variable;
    //设置折线数据
    option.series.push({
        name:variable,
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:data
    });
    option.title.text='泸州市医保基金'+variable+'预测(单位：万元)';
    //设置x轴 名称：年份
    option.xAxis[0].data=years;
    line.setOption(option);
}



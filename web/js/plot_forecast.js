function plot(forecastList){
    var line = echarts.init(document.getElementById('detail-information'));
    incomeList=forecastList.incomeList
    costList=forecastList.costList
    var income=[];
    var cost=[];
    for(var o in incomeList){
        income.push(incomeList[o].value);
    }
    for(var o in costList){
        cost.push(costList[o].value);
    }

    option = {
        title: {
            text: '医保基金收入与支出走势预测'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            show: true,
            x: 'right',
            y: 'top',
            data:['收入','支出']
        },
        toolbox: {
            feature: {

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
                name:'收入',
                type:'line',
                stack: '总量1',
                data: income
            },

            {
                name:'支出',
                type:'line',
                stack: '总量2',
                data:cost
            }
        ]
    };

    //为echarts对象加载数据
    line.setOption(option);

}



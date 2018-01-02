/**
 * Created by songsong on 2017/12/22.
 */
function load(){
    var identity = $("#identity").val();
    var param = '&identity=' +'1';
    //收支走向
    $.ajax({
            url: '/MIF/statistic/totalTrend',
            type: 'get',
            data: param,
            dataType: 'json',
            success: function (data) {
                    var income = [];     ///只展示其中的几列
                    var cost = [];
                    for (var i = 0; i < data.tts.length; i++) {
                        income.push((parseFloat(data.tts[i].income)/10000).toFixed(2));
                        cost.push(-(parseFloat(data.tts[i].cost)/10000).toFixed(2));
                    }
                //收支走向
                var line = echarts.init(document.getElementById('charge_cost'));
                option = {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['支出', '收入']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    yAxis : [
                        {
                            type : 'category',
                            axisTick : {show: false},
                            data : ['2006','2007','2008','2009','2010','2011','2012'
                                ,'2013','2014','2015']
                        }
                    ],
                    series : [
                        {
                            name:'收入',
                            type:'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show:true
                                }
                            },
                            data:income
                        },
                        {
                            name:'支出',
                            type:'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'left'
                                }
                            },
                            data:cost
                        }
                    ]
                };
                    //为echarts对象加载数据
                line.setOption(option);

                //平均工资
                var line = echarts.init(document.getElementById('avgWage'));
                var wage = [];
                for (var i = 0; i < data.tts.length; i++) {
                    wage.push(data.tts[i].avgwage);
                }
                option = {
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        show: true,
                        x: 'right',
                        y: 'top',
                        data:['平均工资',]
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
                                ,'2013','2014','2015']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'平均工资',
                            type:'line',
                            stack: '总量1',
                            data: wage
                        }
                    ]
                };
                //为echarts对象加载数据
                line.setOption(option);

                //参保人数
                var line = echarts.init(document.getElementById('numbers'));
                var numbers = [];
                for (var i = 0; i < data.tts.length; i++) {
                    numbers.push(data.tts[i].numbers);
                }
                option = {
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        show: true,
                        x: 'right',
                        y: 'top',
                        data:['参保人数']
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
                                ,'2013','2014','2015']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'参保人数',
                            type:'line',
                            stack: '总量1',
                            data: numbers
                        }
                    ]
                };
                //为echarts对象加载数据
                line.setOption(option);

                //在职离退人数
                var line = echarts.init(document.getElementById('working_retired'));
                var working = [];     ///只展示其中的几列
                var retired = [];
                for (var i = 0; i < data.tts.length; i++) {
                    working.push(data.tts[i].working);
                    retired.push(data.tts[i].retired);
                }
                option = {
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['在职人数','离退人数']
                    },
                    toolbox: {
                        show : true,
                        feature : {
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
                            data : ['2006','2007','2008','2009','2010','2011','2012'
                                ,'2013','2014','2015']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'离退人数',
                            type:'bar',
                            data:retired
                        },
                        {
                            name:'在职人数',
                            type:'bar',
                            data:working
                        }
                    ]
                };
                //为echarts对象加载数据
                line.setOption(option);

                //年龄结构
                var param = '&identity=' +'1';
                var line= echarts.init(document.getElementById('age_group'));
                $.ajax({
                        url: '/MIF/statistic/ageDistribution',
                        type: 'get',
                        data: param,
                        dataType: 'json',
                        success: function (data) {
                            var newjson = [];                             ///只展示其中的几列
                            for (var i = 0; i < data.ads.length; i++) {
                                newjson.push(data.ads[i].c_count);
                            }
                            var dataMap = {};
                            function dataFormatter(obj) {
                                var pList = ['20岁以下', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100岁以上']
                                for (var year = 2006; year <= 2015; year++) {
                                    var max = 0;
                                    var sum = 0;
                                    temp = obj[year];
                                    for (var i = 0, l = temp.length; i < l; i++) {
                                        max = Math.max(max, temp[i]);
                                        sum += temp[i];
                                        obj[year][i] = {
                                            name: pList[i],
                                            value: temp[i]
                                        }
                                    }
                                    obj[year + 'max'] = Math.floor(max / 100) * 100;
                                    obj[year + 'sum'] = sum;
                                }
                                return obj;
                            }
                            dataMap.c_count = dataFormatter({
                                //max : 26600,
                                2015: newjson.slice(90, 100),
                                2014: newjson.slice(80, 90),
                                2013: newjson.slice(70, 80),
                                2012: newjson.slice(60, 70),
                                2011: newjson.slice(50, 60),
                                2010: newjson.slice(40, 50),
                                2009: newjson.slice(30, 40),
                                2008: newjson.slice(20, 30),
                                2007: newjson.slice(10, 20),
                                2006: newjson.slice(0, 10)
                            });
                            option = {
                                baseOption: {
                                    timeline: {
                                        axisType: 'category',
                                        autoPlay: true,
                                        playInterval: 1000,
                                        data: [
                                            '2006-01-01', '2007-01-01', '2008-01-01',
                                            '2009-01-01',
                                            '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01',
                                            '2015-01-01'
                                        ],
                                        label: {
                                            formatter: function (s) {
                                                return (new Date(s)).getFullYear();
                                            }
                                        }
                                    },
                                    tooltip: {},
                                    legend: {
                                        x: 'center',
                                        data: ['参保人数']
                                    },
                                    calculable: true,
                                    grid: {
                                        top: 80,
                                        bottom: 100,
                                        tooltip: {
                                            trigger: 'axis',
                                            axisPointer: {
                                                type: 'shadow',
                                                label: {
                                                    show: true,
                                                    formatter: function (param) {
                                                        return param.value.replace('\n', '');
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    xAxis: [
                                        {
                                            'type': 'category',
                                            'axisLabel': {'interval': 0},
                                            'data': [
                                                '20岁以下', '\n20-30', '30-40', '\n40-50', '50-60', '\n60-70', '70-80', '\n80-90', '90-100', '\n100岁以上'
                                            ],
                                            splitLine: {show: false}
                                        }
                                    ],
                                    yAxis: [
                                        {
                                            type: 'value',
                                            name: '各年龄段参保人数'
                                        }
                                    ],
                                    series: [
                                        {name: '参保人数', type: 'bar'},
                                    ]
                                },
                                options: [
                                    {
                                        series: [
                                            {data: dataMap.c_count['2006']}

                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2007']}

                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2008']}

                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2009']}

                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2010']}

                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2011']}

                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2012']},
                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2013']}

                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2014']}
                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2015']}

                                        ]
                                    }
                                ]
                            };
                            line.setOption(option);
                        }
                    }
                );
            }
        }
    );
}
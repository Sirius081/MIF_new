/**
 * Created by song on 2017/3/28.
 */
function getCity() {
    var city = [
        ['基金收入', '费用支出', '平均工资', '参保人数', '在职与离退状况'],
        ['年龄分布'],
    ];
    //获得省份下拉框的对象
    var identity = document.form1.identity;
    var sltProvince = document.form1.totalTrend;
    //获得城市下拉框的对象
    var sltCity = document.form1.selectBy;

    //得到对应省份的城市数组
    var provinceCity = city[sltProvince.selectedIndex - 1];

    //清空城市下拉框，仅留提示选项
    sltCity.length = 0;
    //将城市数组中的值填充到城市下拉框中
    if (identity.selectedIndex == 1) {
        if (sltProvince.selectedIndex == 1) {
            sltCity[0] = new Option(provinceCity[0], "income");
            sltCity[1] = new Option(provinceCity[1], "cost");
            sltCity[2] = new Option(provinceCity[2], "avgwage");
            sltCity[3] = new Option(provinceCity[3], "numbers");
            sltCity[4] = new Option(provinceCity[4], "state");
        }
        else {
            sltCity[0] = new Option(provinceCity[0], "c_count");
        }
    }
    else {
        if (sltProvince.selectedIndex == 1) {
            sltCity[0] = new Option(provinceCity[0], "income");
            sltCity[1] = new Option(provinceCity[1], "cost");
            sltCity[2] = new Option(provinceCity[3], "numbers");
        }
        else {
            sltCity[0] = new Option(provinceCity[0], "c_count");
        }
    }

}
function plot_statistic() {
    var identity = $("#identity").val();
    var totalTrend = $("#totalTrend").val();
    var selectBy = $("#selectBy").val();
    var param = '&identity=' + identity;
    if (totalTrend == 'totalTrend') {
        var line = echarts.init(document.getElementById('detail-information'));
        $.ajax({
                url: '/MIF/statistic/totalTrend',
                type: 'get',
                data: param,
                dataType: 'json',
                success: function (data) {
                    if (selectBy == 'state') {
                        var working = [];     ///只展示其中的几列
                        var retired = [];
                        for (var i = 0; i < data.tts.length; i++) {
                            working.push(data.tts[i].working);
                            retired.push(data.tts[i].retired);
                        }
                        option = {
                            title: {
                                text: '2006-2015年在职与离退人数变化'
                            },
                            tooltip : {
                                trigger: 'axis'
                            },
                            legend: {
                                show: true,
                                x: 'right',
                                y: 'top',
                                data:['在职人数','离退人数']
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
                                    name:'在职人数',
                                    type:'line',
                                    stack: '总量1',
                                    data: working
                                },

                                {
                                    name:'离退人数',
                                    type:'line',
                                    stack: '总量2',
                                    data:retired
                                }
                            ]
                        };

                        //为echarts对象加载数据
                        line.setOption(option);
                    }
                    else {
                        ///只展示其中的几列
                        var newjson = [];     //数组
                        for (var i = 0; i < data.tts.length; i++) {
                            //newjson[i] = new Object();
                            newjson.push(data.tts[i][selectBy]);
                        }
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
                                data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']
                            },
                            yAxis: {
                                type: 'value'

                            },
                            series: []
                        };
                        option.series.push({
                            type: 'line',
                            stack: '总量',
                            data: newjson
                        });
                        line.setOption(option);
                    }
                }
            }
        );
    }
    else if (totalTrend == 'ageGroup') {
        var line = echarts.init(document.getElementById('detail-information'));
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
                    //var json=JSON.stringify(newjson);
                    //alert(json)
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
                                            formatter: function (params) {
                                                return params.value.replace('\n', '');
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


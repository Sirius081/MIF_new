/**
 * Created by song on 2017/3/29.
 */
function getCity() {
    var city = [
        ['统筹费用支出', '人次', '药品费用'],
        ['人次分布','费用分布'],
    ];
    //获得省份下拉框的对象
    var sltProvince = document.form1.feesDetail;
    //获得城市下拉框的对象
    var sltCity = document.form1.selectBy;

    //得到对应省份的城市数组
    var provinceCity = city[sltProvince.selectedIndex-1];

    //清空城市下拉框，仅留提示选项
    sltCity.length = 0;

    //将城市数组中的值填充到城市下拉框中
    //将城市数组中的值填充到城市下拉框中
    if (sltProvince.selectedIndex==1){
        sltCity[0] = new Option(provinceCity[0], "groupfees");
        sltCity[1] = new Option(provinceCity[1], "count");
        sltCity[2] = new Option(provinceCity[2], "drugfees");
    }
    else
    {
        sltCity[0] = new Option(provinceCity[0], "count");
        sltCity[1] = new Option(provinceCity[1], "fees");
    }
}

function plot_statistic() {
    var identity = $("#identity").val();
    var feesDetail = $("#feesDetail").val();
    var selectBy = $("#selectBy").val();
    var param = '&identity=' + identity;
    var line = echarts.init(document.getElementById('detail-information'));
    if (feesDetail == 'feesDetail') {
        $.ajax({
                url: '/MIF/statistic/feesDetail',
                type: 'get',
                data: param,
                dataType: 'json',
                success: function (data) {
                    if (selectBy=='count'){
                        var newjson = [];                             ///只展示其中的几列
                        for (var i = 0; i < data.fds.length; i++) {
                            newjson[i] = new Object();
                            newjson[i].year = data.fds[i].year;
                            newjson[i].grade = data.fds[i].grade;
                            newjson[i].m_count= data.fds[i].m_count;
                            newjson[i].h_count= data.fds[i].h_count;
                        }
                    }
                    else if (selectBy=='groupfees'){
                        var newjson = [];                             ///只展示其中的几列
                        for (var i = 0; i < data.fds.length; i++) {
                            newjson[i] = new Object();
                            newjson[i].year = data.fds[i].year;
                            newjson[i].grade = data.fds[i].grade;
                            newjson[i].m_fees= data.fds[i].m_fees;
                            newjson[i].h_fees= data.fds[i].h_fees;
                            newjson[i].fees= data.fds[i].m_fees+data.fds[i].h_fees;
                        }
                        alert(newjson[0].fees);
                    }
                    else if (selectBy=='drugfees'){
                        var newjson = [];                             ///只展示其中的几列
                        for (var i = 0; i < data.fds.length; i++) {
                            newjson[i] = new Object();
                            newjson[i].year = data.fds[i].year;
                            newjson[i].grade = data.fds[i].grade;
                            newjson[i].drugfees= data.fds[i].drugfees;
                        }
                    }
                }
            }
        );
    }
    else if (feesDetail == 'ageGroup') {
        $.ajax({
                url: '/MIF/statistic/ageDistribution',
                type: 'get',
                data: param,
                dataType: 'json',
                success: function (data) {
                    if(selectBy=='count')
                    {
                        var m_count = [];                             ///只展示其中的几列
                        var h_count = [];
                        //var newjson=[];
                        for (var i = 0; i < data.ads.length; i++) {
                            //newjson[i] = new Object();
                            //newjson[i].year = data.ads[i].year;
                            //newjson[i].ageId = data.ads[i].ageId;
                            //newjson[i].m_fees = data.ads[i].m_fees;
                            //newjson[i].h_fees = data.ads[i].h_fees;
                            m_count.push(data.ads[i].m_count);
                            h_count.push(data.ads[i].h_count);
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
                        dataMap.m_count = dataFormatter({
                            //max : 26600,
                            2015: m_count.slice(90, 100),
                            2014: m_count.slice(80, 90),
                            2013: m_count.slice(70, 80),
                            2012: m_count.slice(60, 70),
                            2011: m_count.slice(50, 60),
                            2010: m_count.slice(40, 50),
                            2009: m_count.slice(30, 40),
                            2008: m_count.slice(20, 30),
                            2007: m_count.slice(10, 20),
                            2006: m_count.slice(0, 10)
                        });
                        dataMap.h_count = dataFormatter({
                            //max : 26600,
                            2015: h_count.slice(90, 100),
                            2014: h_count.slice(80, 90),
                            2013: h_count.slice(70, 80),
                            2012: h_count.slice(60, 70),
                            2011: h_count.slice(50, 60),
                            2010: h_count.slice(40, 50),
                            2009: h_count.slice(30, 40),
                            2008: h_count.slice(20, 30),
                            2007: h_count.slice(10, 20),
                            2006: h_count.slice(0, 10)
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
                                    data: ['住院人次','门诊人次']
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
                                        name: '各年龄段就医人次'
                                    }
                                ],
                                series: [
                                    {name: '住院人次', type: 'bar'},
                                    {name: '门诊人次', type: 'bar'},
                                ]
                            },
                            options: [
                                {
                                    series: [
                                        {data: dataMap.m_count['2006']},
                                        {data: dataMap.h_count['2006']}
                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_count['2007']},
                                        {data: dataMap.h_count['2007']}
                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_count['2008']},
                                        {data: dataMap.h_count['2008']}
                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_count['2009']},
                                        {data: dataMap.h_count['2009']}

                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_count['2010']},
                                        {data: dataMap.h_count['2010']}

                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_count['2011']},
                                        {data: dataMap.h_count['2011']}

                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_count['2012']},
                                        {data: dataMap.h_count['2012']}
                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_count['2013']},
                                        {data: dataMap.h_count['2013']}

                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_count['2014']},
                                        {data: dataMap.h_count['2014']}
                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_count['2015']},
                                        {data: dataMap.h_count['2015']}
                                    ]
                                }
                            ]
                        };
                        line.setOption(option);
                    }
                    else if(selectBy=='fees')
                    {
                        var m_fees = [];                             ///只展示其中的几列
                        var h_fees = [];
                        //var newjson=[];
                        for (var i = 0; i < data.ads.length; i++) {
                            //newjson[i] = new Object();
                            //newjson[i].year = data.ads[i].year;
                            //newjson[i].ageId = data.ads[i].ageId;
                            //newjson[i].m_fees = data.ads[i].m_fees;
                            //newjson[i].h_fees = data.ads[i].h_fees;
                            m_fees.push(data.ads[i].m_fees);
                            h_fees.push(data.ads[i].h_fees);
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
                        dataMap.m_fees = dataFormatter({
                            //max : 26600,
                            2015: m_fees.slice(90, 100),
                            2014: m_fees.slice(80, 90),
                            2013: m_fees.slice(70, 80),
                            2012: m_fees.slice(60, 70),
                            2011: m_fees.slice(50, 60),
                            2010: m_fees.slice(40, 50),
                            2009: m_fees.slice(30, 40),
                            2008: m_fees.slice(20, 30),
                            2007: m_fees.slice(10, 20),
                            2006: m_fees.slice(0, 10)
                        });
                        dataMap.h_fees = dataFormatter({
                            //max : 26600,
                            2015: h_fees.slice(90, 100),
                            2014: h_fees.slice(80, 90),
                            2013: h_fees.slice(70, 80),
                            2012: h_fees.slice(60, 70),
                            2011: h_fees.slice(50, 60),
                            2010: h_fees.slice(40, 50),
                            2009: h_fees.slice(30, 40),
                            2008: h_fees.slice(20, 30),
                            2007: h_fees.slice(10, 20),
                            2006: h_fees.slice(0, 10)
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
                                    data: ['住院费用','门诊费用']
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
                                        name: '各年龄段统筹费用支出情况'
                                    }
                                ],
                                series: [
                                    {name: '住院费用', type: 'bar'},
                                    {name: '门诊费用', type: 'bar'},
                                ]
                            },
                            options: [
                                {
                                    series: [
                                        {data: dataMap.m_fees['2006']},
                                        {data: dataMap.h_fees['2006']}
                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_fees['2007']},
                                        {data: dataMap.h_fees['2007']}
                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_fees['2008']},
                                        {data: dataMap.h_fees['2008']}
                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_fees['2009']},
                                        {data: dataMap.h_fees['2009']}

                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_fees['2010']},
                                        {data: dataMap.h_fees['2010']}

                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_fees['2011']},
                                        {data: dataMap.h_fees['2011']}

                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_fees['2012']},
                                        {data: dataMap.h_fees['2012']}
                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_fees['2013']},
                                        {data: dataMap.h_fees['2013']}

                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_fees['2014']},
                                        {data: dataMap.h_fees['2014']}
                                    ]
                                },
                                {
                                    series: [
                                        {data: dataMap.m_fees['2015']},
                                        {data: dataMap.h_fees['2015']}
                                    ]
                                }
                            ]
                        };
                        line.setOption(option);
                    }
                }
            }
        );
    }
}

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
        alert("hello")
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
                            name: '缴费金额',
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
//function plot_statistic() {
//    var totalTrend = $("#totalTrend").val();
//    var year = $("#year").val();
//    var param = '&totalTrend=' + totalTrend + '&year=' + year;;
//    var myChart = echarts.init(document.getElementById('detail-information'));
//    //定义图表option
//    var option = {
//        //标题，每个图表最多仅有一个标题控件，每个标题控件可设主副标题
//        title: {
//            //主标题文本，'\n'指定换行
//            text: '2013年广州降水量与蒸发量统计报表',
//            //主标题文本超链接
//            link: 'http://www.tqyb.com.cn/weatherLive/climateForecast/2014-01-26/157.html',
//            //副标题文本，'\n'指定换行
//            subtext: 'www.stepday.com',
//            //副标题文本超链接
//            sublink: 'http://www.stepday.com/myblog/?Echarts',
//            //水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
//            x: 'left',
//            //垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
//            y: 'top'
//        },
//        //提示框，鼠标悬浮交互时的信息提示
//        tooltip: {
//            //触发类型，默认（'item'）数据触发，可选为：'item' | 'axis'
//            trigger: 'axis'
//        },
//        //图例，每个图表最多仅有一个图例
//        legend: {
//            //显示策略，可选为：true（显示） | false（隐藏），默认值为true
//            show: true,
//            //水平安放位置，默认为全图居中，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
//            x: 'center',
//            //垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
//            y: 'top',
//            //legend的data: 用于设置图例，data内的字符串数组需要与sereis数组内每一个series的name值对应
//            data: ['蒸发量','降水量']
//        },
//        //工具箱，每个图表最多仅有一个工具箱
//        toolbox: {
//            //显示策略，可选为：true（显示） | false（隐藏），默认值为false
//            show: true,
//            //启用功能，目前支持feature，工具箱自定义功能回调处理
//            feature: {
//                //辅助线标志
//                mark: {show: true},
//                //dataZoom，框选区域缩放，自动与存在的dataZoom控件同步，分别是启用，缩放后退
//                dataZoom: {
//                    show: true,
//                    title: {
//                        dataZoom: '区域缩放',
//                        dataZoomReset: '区域缩放后退'
//                    }
//                },
//                //数据视图，打开数据视图，可设置更多属性,readOnly 默认数据视图为只读(即值为true)，可指定readOnly为false打开编辑功能
//                dataView: {show: true, readOnly: true},
//                //magicType，动态类型切换，支持直角系下的折线图、柱状图、堆积、平铺转换
//                magicType: {show: true, type: ['line', 'bar']},
//                //restore，还原，复位原始图表
//                restore: {show: true},
//                //saveAsImage，保存图片（IE8-不支持）,图片类型默认为'png'
//                saveAsImage: {show: true}
//            }
//        },
//        //是否启用拖拽重计算特性，默认关闭(即值为false)
//        calculable: true,
//        //直角坐标系中横轴数组，数组中每一项代表一条横轴坐标轴，仅有一条时可省略数值
//        //横轴通常为类目型，但条形图时则横轴为数值型，散点图时则横纵均为数值型
//        xAxis: [
//            {
//                //显示策略，可选为：true（显示） | false（隐藏），默认值为true
//                show: true,
//                //坐标轴类型，横轴默认为类目型'category'
//                type: 'category',
//                //类目型坐标轴文本标签数组，指定label内容。 数组项通常为文本，'\n'指定换行
//                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
//            }
//        ],
//        //直角坐标系中纵轴数组，数组中每一项代表一条纵轴坐标轴，仅有一条时可省略数值
//        //纵轴通常为数值型，但条形图时则纵轴为类目型
//        yAxis: [
//            {
//                //显示策略，可选为：true（显示） | false（隐藏），默认值为true
//                show: true,
//                //坐标轴类型，纵轴默认为数值型'value'
//                type: 'value',
//                //分隔区域，默认不显示
//                splitArea: {show: true}
//            }
//        ],
//
//        //sereis的数据: 用于设置图表数据之用。series是一个对象嵌套的结构；对象内包含对象
//        series: [
//            {
//                //系列名称，如果启用legend，该值将被legend.data索引相关
//                name: '蒸发量',
//                //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
//                type: 'bar',
//                //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
//                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
//                //系列中的数据标注内容
//                markPoint: {
//                    data: [
//                        {type: 'max', name: '最大值'},
//                        {type: 'min', name: '最小值'}
//                    ]
//                }
//            },
//            {
//                //系列名称，如果启用legend，该值将被legend.data索引相关
//                name: '降水量',
//                //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
//                type: 'bar',
//                //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
//                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
//                //系列中的数据标注内容
//                markPoint: {
//                    data: [
//                        {type: 'max', name: '最大值'},
//                        {type: 'min', name: '最小值'}
//                    ]
//                },
//                //系列中的数据标线内容
//                markLine: {
//                    data: [
//                        {type: 'average', name: '平均值'}
//                    ]
//                }
//            }
//        ]
//    };
//    //为echarts对象加载数据
//    myChart.setOption(option);
//}
//function plot_statistic() {
//    var totalTrend = $("#totalTrend").val();
//    var year = $("#year").val();
//    var param = '&totalTrend=' + totalTrend + '&year=' + year;
//    var myChart = echarts.init(document.getElementById('detail-information'));
//    var option = {
//        baseOption: {
//            timeline: {
//                axisType: 'category',
//                show: true,
//                autoPlay: true,
//                playInterval: 1000,
//                data: ['1', '2', '3']
//            },
//            grid: {containLabel: true},
//            xAxis: [{
//                type: 'category',
//                name: '��ҵ'
//            },],
//            yAxis: {type: 'value', name: 'Mwh'},
//            series: [
//                {
//                    type: 'line'
//                },
//            ],
//            tooltip: {}
//        },
//        options: [
//            {
//                xAxis: [{
//                    data: ['2012', '2013', '2014']
//                }],
//                title: {
//                    text: '年龄分布',
//                    subtext: '年龄分布'
//                },
//                series: [
//                    {
//                        data: [120, 450, 140]
//                    },
//                ]
//            },
//            {
//                xAxis: [{
//                    data: ['2012', '2013', '2014']
//                }],
//                title: {
//                    text: '年龄分布',
//                    subtext: '年龄分布'
//                },
//                series: [
//                    {
//                        data: [530, 130, 780]
//                    },
//                ]
//            },
//            {
//                xAxis: [{
//                    data: ['2012', '2013', '2014']
//                }],
//                title: {
//                    text: '年龄分布',
//                    subtext: '年龄分布'
//                },
//                series: [
//                    {
//                        data: [560, 350, 180]
//                    },
//
//                ]
//            },
//        ]
//    };
//    alert(year);
//    myChart.setOption(option);
//}

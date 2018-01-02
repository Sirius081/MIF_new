/**
 * Created by song on 2017/3/29.
 */

function loadDrug(){
    initLoad();
}

function initLoad(){
    var param = '&identity=' + '1';
    var line = echarts.init(document.getElementById('detail-information'));
    $.ajax({
            url: '/MIF/statistic/feesDetail',
            type: 'get',
            data: param,
            dataType: 'json',
            success: function (data) {
                var drugfees = [];                             ///只展示其中的几列
                for (var i = 0; i < data.fds.length; i++) {
                    if (data.fds[i].year > '2012') {
                        drugfees.push(data.fds[i].drugfees);
                    }
                }
                var option = {
                    //标题，每个图表最多仅有一个标题控件，每个标题控件可设主副标题
                    title: {
                        //主标题文本，'\n'指定换行
                        text: '2013-2015各个等级医院药品费支出',
                        x: 'left',
                        y: 'top'
                    },
                    //提示框，鼠标悬浮交互时的信息提示
                    tooltip: {
                        trigger: 'axis'
                    },
                    //图例，每个图表最多仅有一个图例
                    legend: {
                        //显示策略，可选为：true（显示） | false（隐藏），默认值为true
                        show: true,
                        x: 'right',
                        y: 'top',
                        data: ['2013年', '2014年', '2015年']
                    },
                    //工具箱，每个图表最多仅有一个工具箱
                    toolbox: {
                        //显示策略，可选为：true（显示） | false（隐藏），默认值为false
                        show: true,
                        //启用功能，目前支持feature，工具箱自定义功能回调处理
                        feature: {
                            //辅助线标志
                            mark: {show: true},
                            //dataZoom，框选区域缩放，自动与存在的dataZoom控件同步，分别是启用，缩放后退
                            dataZoom: {
                                show: true,
                                title: {
                                    dataZoom: '区域缩放',
                                    dataZoomReset: '区域缩放后退'
                                }
                            },
                            //数据视图，打开数据视图，可设置更多属性,readOnly 默认数据视图为只读(即值为true)，可指定readOnly为false打开编辑功能
                            dataView: {show: true, readOnly: true},
                            //magicType，动态类型切换，支持直角系下的折线图、柱状图、堆积、平铺转换
                            magicType: {show: true, type: ['line', 'bar']},
                            //restore，还原，复位原始图表
                            restore: {show: true},
                            //saveAsImage，保存图片（IE8-不支持）,图片类型默认为'png'
                            saveAsImage: {show: true}
                        }
                    },
                    //是否启用拖拽重计算特性，默认关闭(即值为false)
                    calculable: true,
                    //直角坐标系中横轴数组，数组中每一项代表一条横轴坐标轴，仅有一条时可省略数值
                    //横轴通常为类目型，但条形图时则横轴为数值型，散点图时则横纵均为数值型
                    xAxis: [
                        {
                            //显示策略，可选为：true（显示） | false（隐藏），默认值为true
                            show: true,
                            //坐标轴类型，横轴默认为类目型'category'
                            type: 'category',
                            //类目型坐标轴文本标签数组，指定label内容。 数组项通常为文本，'\n'指定换行
                            data: ['一级', '二级', '三级', '无等级', '异地', '社区']
                        }
                    ],
                    //直角坐标系中纵轴数组，数组中每一项代表一条纵轴坐标轴，仅有一条时可省略数值
                    //纵轴通常为数值型，但条形图时则纵轴为类目型
                    yAxis: [
                        {
                            //显示策略，可选为：true（显示） | false（隐藏），默认值为true
                            show: true,
                            //坐标轴类型，纵轴默认为数值型'value'
                            type: 'value',
                            //分隔区域，默认不显示
                            splitArea: {show: true}
                        }
                    ],
                    //sereis的数据: 用于设置图表数据之用。series是一个对象嵌套的结构；对象内包含对象
                    series: [
                        {
                            //系列名称，如果启用legend，该值将被legend.data索引相关
                            name: '2013年',
                            //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
                            type: 'bar',
                            //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
                            data: drugfees.slice(0, 6)
                            //系列中的数据标注内容
                        },
                        {
                            //系列名称，如果启用legend，该值将被legend.data索引相关
                            name: '2014年',
                            //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
                            type: 'bar',
                            //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
                            data: drugfees.slice(6, 12)
                            //系列中的数据标注内容
                        },
                        {
                            //系列名称，如果启用legend，该值将被legend.data索引相关
                            name: '2015年',
                            //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
                            type: 'bar',
                            //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
                            data: drugfees.slice(12, 18)
                        }
                    ]
                };
                //为echarts对象加载数据
                line.setOption(option);
            }
        }
    );
    var param = '&identity=' + '1';
    $.ajax({
            url: '/MIF/statistic/feesDetail',
            type: 'get',
            data: param,
            dataType: 'json',
            success: function (data) {
                    var m_count = [];                             ///只展示其中的几列
                    var h_count = [];
                    for (var i = 0; i < data.fds.length; i++) {
                        if (data.fds[i].year >= '2006' && data.fds[i].year < '2016' && data.fds[i].grade =='三级') {
                            m_count.push(data.fds[i].m_count);
                            h_count.push(data.fds[i].h_count);
                        }
                    }
                    var line = echarts.init(document.getElementById('detail-information1'));
                    var timeData = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'];
                    option = {
                        title: {
                            text: '住院和门诊人次',
                            subtext: '数据来自泸州医保局',
                            x: 'center'
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                animation: false
                            }
                        },
                        legend: {
                            data: ['住院人次', '门诊人次'],
                            x: 'left'
                        },
                        toolbox: {
                            feature: {
                                dataZoom: {
                                    yAxisIndex: 'none'
                                },
                                restore: {},
                                saveAsImage: {}
                            }
                        },
                        axisPointer: {
                            link: {xAxisIndex: 'all'}
                        },
                        dataZoom: [
                            {
                                show: true,
                                realtime: true,
                                start: 30,
                                end: 70,
                                xAxisIndex: [0, 1]
                            },
                            {
                                type: 'inside',
                                realtime: true,
                                start: 30,
                                end: 70,
                                xAxisIndex: [0, 1]
                            }
                        ],
                        grid: [{
                            left: 50,
                            right: 50,
                            height: '35%'
                        }, {
                            left: 50,
                            right: 50,
                            top: '55%',
                            height: '35%'
                        }],
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                axisLine: {onZero: true},
                                data: timeData
                            },
                            {
                                gridIndex: 1,
                                type: 'category',
                                boundaryGap: false,
                                axisLine: {onZero: true},
                                data: timeData,
                                position: 'top'
                            }
                        ],
                        yAxis: [
                            {
                                name: '住院人次',
                                type: 'value'
                            },
                            {
                                gridIndex: 1,
                                name: '门诊人次',
                                type: 'value',
                                inverse: true
                            }
                        ],
                        series: [
                            {
                                name: '住院人次',
                                type: 'line',
                                symbolSize: 10,
                                hoverAnimation: false,
                                data: h_count
                            },
                            {
                                name: '门诊人次',
                                type: 'line',
                                xAxisIndex: 1,
                                yAxisIndex: 1,
                                symbolSize: 10,
                                hoverAnimation: false,
                                data: m_count
                            }
                        ]
                    };
                    line.setOption(option);
            }
        }
    );
}
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
    if (feesDetail == 'feesDetail') {
        $.ajax({
                url: '/MIF/statistic/feesDetail',
                type: 'get',
                data: param,
                dataType: 'json',
                success: function (data) {
                    if (selectBy=='count'){
                        var line = echarts.init(document.getElementById('detail-information'));
                        var m_count = [];                             ///只展示其中的几列
                        var h_count = [];
                        for (var i = 0; i < data.fds.length; i++) {
                            if(data.fds[i].year>'2009')
                            {
                                m_count.push(data.fds[i].m_count);
                                h_count.push(data.fds[i].h_count);
                            }
                        }
                        var dataMap = {};
                        function dataFormatter(obj) {
                            var pList = ['一级', '二级', '三级', '无等级', '异地', '社区']
                            for (var year = 2010; year <= 2015; year++) {
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
                            2015: m_count.slice(30, 36),
                            2014: m_count.slice(24, 30),
                            2013: m_count.slice(18, 24),
                            2012: m_count.slice(12, 18),
                            2011: m_count.slice(6, 12),
                            2010: m_count.slice(0, 6)
                        });
                        dataMap.h_count = dataFormatter({
                            //max : 26600,
                            2015: h_count.slice(30, 36),
                            2014: h_count.slice(24, 30),
                            2013: h_count.slice(18, 24),
                            2012: h_count.slice(12, 18),
                            2011: h_count.slice(6, 12),
                            2010: h_count.slice(0, 6)
                        });
                        option = {
                            baseOption: {
                                timeline: {
                                    axisType: 'category',
                                    autoPlay: true,
                                    playInterval: 1000,
                                    data: [
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
                                    data: ['门诊人次','住院人次']
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
                                        'data': ['一级', '二级', '三级', '无等级', '异地', '社区'],
                                        splitLine: {show: false}
                                    }
                                ],
                                yAxis: [
                                    {
                                        type: 'value',
                                        name: '各等级医院就医人次'
                                    }
                                ],
                                series: [
                                    {name: '门诊人次', type: 'bar'},
                                    {name: '住院人次', type: 'bar'},
                                ]
                            },
                            options: [
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
                    else if (selectBy=='groupfees'){
                        var line = echarts.init(document.getElementById('detail-information'));
                        var m_fees = [];                             ///只展示其中的几列
                        var h_fees = [];
                        for (var i = 0; i < data.fds.length; i++) {
                            if(data.fds[i].year>'2009')
                            {
                                m_fees.push(data.fds[i].m_fees);
                                h_fees.push(data.fds[i].h_fees);
                            }
                        }
                        var dataMap = {};
                        function dataFormatter(obj) {
                            var pList = ['一级', '二级', '三级', '无等级', '异地', '社区']
                            for (var year = 2010; year <= 2015; year++) {
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
                            2015: m_fees.slice(30, 36),
                            2014: m_fees.slice(24, 30),
                            2013: m_fees.slice(18, 24),
                            2012: m_fees.slice(12, 18),
                            2011: m_fees.slice(6, 12),
                            2010: m_fees.slice(0, 6)
                        });
                        dataMap.h_fees = dataFormatter({
                            2015: h_fees.slice(30, 36),
                            2014: h_fees.slice(24, 30),
                            2013: h_fees.slice(18, 24),
                            2012: h_fees.slice(12, 18),
                            2011: h_fees.slice(6, 12),
                            2010: h_fees.slice(0, 6)
                        });
                        option = {
                            baseOption: {
                                timeline: {
                                    axisType: 'category',
                                    autoPlay: true,
                                    playInterval: 1000,
                                    data: [
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
                                    data: ['门诊费用','住院费用']
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
                                        'data': ['一级', '二级', '三级', '无等级', '异地', '社区'],
                                        splitLine: {show: false}
                                    }
                                ],
                                yAxis: [
                                    {
                                        type: 'value',
                                        name: '各等级医院统筹费用支出'
                                    }
                                ],
                                series: [
                                    {name: '门诊费用', type: 'bar'},
                                    {name: '住院费用', type: 'bar'},
                                ]
                            },
                            options: [
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
                    else if (selectBy=='drugfees'){
                        var drugfees= [];                             ///只展示其中的几列
                        for (var i = 0; i < data.fds.length; i++) {
                            if(data.fds[i].year>'2012')
                            {
                                drugfees.push(data.fds[i].drugfees);
                            }
                        }
                        option = {
                            //标题，每个图表最多仅有一个标题控件，每个标题控件可设主副标题
                            title: {
                                //主标题文本，'\n'指定换行
                                text: '2013-2015各个等级医院药品费支出',
                                x: 'left',
                                y: 'top'
                            },
                            //提示框，鼠标悬浮交互时的信息提示
                            tooltip: {
                                trigger: 'axis'
                            },
                            //图例，每个图表最多仅有一个图例
                            legend: {
                                //显示策略，可选为：true（显示） | false（隐藏），默认值为true
                                show: true,
                                x: 'right',
                                y: 'top',
                                data: ['2013年', '2014年','2015年']
                            },
                            //工具箱，每个图表最多仅有一个工具箱
                            toolbox: {
                                //显示策略，可选为：true（显示） | false（隐藏），默认值为false
                                show: true,
                                //启用功能，目前支持feature，工具箱自定义功能回调处理
                                feature: {
                                    //辅助线标志
                                    mark: {show: true},
                                    //dataZoom，框选区域缩放，自动与存在的dataZoom控件同步，分别是启用，缩放后退
                                    dataZoom: {
                                        show: true,
                                        title: {
                                            dataZoom: '区域缩放',
                                            dataZoomReset: '区域缩放后退'
                                        }
                                    },
                                    //数据视图，打开数据视图，可设置更多属性,readOnly 默认数据视图为只读(即值为true)，可指定readOnly为false打开编辑功能
                                    dataView: {show: true, readOnly: true},
                                    //magicType，动态类型切换，支持直角系下的折线图、柱状图、堆积、平铺转换
                                    magicType: {show: true, type: ['line', 'bar']},
                                    //restore，还原，复位原始图表
                                    restore: {show: true},
                                    //saveAsImage，保存图片（IE8-不支持）,图片类型默认为'png'
                                    saveAsImage: {show: true}
                                }
                            },
                            //是否启用拖拽重计算特性，默认关闭(即值为false)
                            calculable: true,
                            //直角坐标系中横轴数组，数组中每一项代表一条横轴坐标轴，仅有一条时可省略数值
                            //横轴通常为类目型，但条形图时则横轴为数值型，散点图时则横纵均为数值型
                            xAxis: [
                                {
                                    //显示策略，可选为：true（显示） | false（隐藏），默认值为true
                                    show: true,
                                    //坐标轴类型，横轴默认为类目型'category'
                                    type: 'category',
                                    //类目型坐标轴文本标签数组，指定label内容。 数组项通常为文本，'\n'指定换行
                                    data: ['一级', '二级', '三级', '无等级','异地', '社区']
                                }
                            ],
                            //直角坐标系中纵轴数组，数组中每一项代表一条纵轴坐标轴，仅有一条时可省略数值
                            //纵轴通常为数值型，但条形图时则纵轴为类目型
                            yAxis: [
                                {
                                    //显示策略，可选为：true（显示） | false（隐藏），默认值为true
                                    show: true,
                                    //坐标轴类型，纵轴默认为数值型'value'
                                    type: 'value',
                                    //分隔区域，默认不显示
                                    splitArea: {show: true}
                                }
                            ],
                            //sereis的数据: 用于设置图表数据之用。series是一个对象嵌套的结构；对象内包含对象
                            series: [
                                {
                                    //系列名称，如果启用legend，该值将被legend.data索引相关
                                    name: '2013年',
                                    //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
                                    type: 'bar',
                                    //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
                                    data: drugfees.slice(0,6),
                                    //系列中的数据标注内容
                                    markPoint: {
                                        data: [
                                            {type: 'max', name: '最大值'},
                                            {type: 'min', name: '最小值'}
                                        ]
                                    }
                                },
                                {
                                    //系列名称，如果启用legend，该值将被legend.data索引相关
                                    name: '2014年',
                                    //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
                                    type: 'bar',
                                    //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
                                    data: drugfees.slice(6,12),
                                    //系列中的数据标注内容
                                    markPoint: {
                                        data: [
                                            {type: 'max', name: '最大值'},
                                            {type: 'min', name: '最小值'}
                                        ]
                                    }
                                },
                                {
                                    //系列名称，如果启用legend，该值将被legend.data索引相关
                                    name: '2015年',
                                    //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
                                    type: 'bar',
                                    //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
                                    data: drugfees.slice(12,18)
                                    //系列中的数据标注内容
                                }
                            ]
                        };
                        //为echarts对象加载数据
                        line.setOption(option);
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
                        var line = echarts.init(document.getElementById('detail-information'));
                        var m_count = [];                             ///只展示其中的几列
                        var h_count = [];
                        for (var i = 0; i < data.ads.length; i++) {
                            m_count.push(data.ads[i].m_count);
                            h_count.push(data.ads[i].h_count);
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
                        dataMap.m_count = dataFormatter({
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
                                    data: ['门诊人次','住院人次']
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
                                    {name: '门诊人次', type: 'bar'},
                                    {name: '住院人次', type: 'bar'},
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
                        var line = echarts.init(document.getElementById('detail-information'));
                        var m_fees = [];                             ///只展示其中的几列
                        var h_fees = [];
                        for (var i = 0; i < data.ads.length; i++) {
                            m_fees.push(data.ads[i].m_fees);
                            h_fees.push(data.ads[i].h_fees);
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
                                    data: ['门诊费用','住院费用']
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
                                    {name: '门诊费用', type: 'bar'},
                                    {name: '住院费用', type: 'bar'},
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

function getDetails(){
    var identity = $("#identity1").val();
    var feesDetail = $("#feesDetail1").val();
    var selectBy = $("#selectBy1").val();
    var param = '&identity=' + identity;
    $.ajax({
            url: '/MIF/statistic/feesDetail',
            type: 'get',
            data: param,
            dataType: 'json',
            success: function (data) {
                if (selectBy=='人次'){
                    var m_count = [];                             ///只展示其中的几列
                    var h_count = [];
                    for (var i = 0; i < data.fds.length; i++) {
                        if(data.fds[i].year>='2006'&&data.fds[i].year<'2016'&&data.fds[i].grade==feesDetail )
                        {
                            m_count.push(data.fds[i].m_count);
                            h_count.push(data.fds[i].h_count);
                        }
                    }
                    var line = echarts.init(document.getElementById('detail-information1'));
                    var timeData = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'];
                    option = {
                        title: {
                            text: '住院和门诊人次',
                            subtext: '数据来自泸州医保局',
                            x: 'center'
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                animation: false
                            }
                        },
                        legend: {
                            data:['住院人次','门诊人次'],
                            x: 'left'
                        },
                        toolbox: {
                            feature: {
                                dataZoom: {
                                    yAxisIndex: 'none'
                                },
                                restore: {},
                                saveAsImage: {}
                            }
                        },
                        axisPointer: {
                            link: {xAxisIndex: 'all'}
                        },
                        dataZoom: [
                            {
                                show: true,
                                realtime: true,
                                start: 30,
                                end: 70,
                                xAxisIndex: [0, 1]
                            },
                            {
                                type: 'inside',
                                realtime: true,
                                start: 30,
                                end: 70,
                                xAxisIndex: [0, 1]
                            }
                        ],
                        grid: [{
                            left: 50,
                            right: 50,
                            height: '35%'
                        }, {
                            left: 50,
                            right: 50,
                            top: '55%',
                            height: '35%'
                        }],
                        xAxis : [
                            {
                                type : 'category',
                                boundaryGap : false,
                                axisLine: {onZero: true},
                                data: timeData
                            },
                            {
                                gridIndex: 1,
                                type : 'category',
                                boundaryGap : false,
                                axisLine: {onZero: true},
                                data: timeData,
                                position: 'top'
                            }
                        ],
                        yAxis : [
                            {
                                name : '住院人次',
                                type : 'value'
                            },
                            {
                                gridIndex: 1,
                                name : '门诊人次',
                                type : 'value',
                                inverse: true
                            }
                        ],
                        series : [
                            {
                                name:'住院人次',
                                type:'line',
                                symbolSize:10,
                                hoverAnimation: false,
                                data:h_count
                            },
                            {
                                name:'门诊人次',
                                type:'line',
                                xAxisIndex: 1,
                                yAxisIndex: 1,
                                symbolSize:10,
                                hoverAnimation: false,
                                data: m_count
                            }
                        ]
                    };
                    line.setOption(option);
                }
                else if (selectBy=='统筹费用支出'){
                    var line = echarts.init(document.getElementById('detail-information1'));
                    var m_fees = [];                             ///只展示其中的几列
                    var h_fees = [];
                    for (var i = 0; i < data.fds.length; i++) {
                        if(data.fds[i].year>'2009'&&data.fds[i].grade==feesDetail )
                        {
                            m_fees.push(data.fds[i].m_fees);
                            h_fees.push(data.fds[i].h_fees);
                        }
                    }
                    option = {
                        title : {
                            text: feesDetail+'医院'+selectBy+"变化如下所示"
                        },
                        tooltip : {
                            trigger: 'axis'
                        },
                        legend: {
                            data:['门诊费用','住院费用']
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
                                data : ['2010','2011','2012','2013','2014','2015']
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value'
                            }
                        ],
                        series : [
                            {
                                name:'门诊费用',
                                type:'bar',
                                data:m_fees
                            },
                            {
                                name: '住院费用',
                                type: 'bar',
                                data: h_fees
                            }
                        ]
                    };
                    line.setOption(option);
                }
                else if (selectBy=='药品费'){
                    var drugfees= [];                             ///只展示其中的几列
                    for (var i = 0; i < data.fds.length; i++) {
                        if(data.fds[i].year>='2006'&&data.fds[i].year<'2016'&&data.fds[i].grade==feesDetail )
                        drugfees.push(data.fds[i].drugfees);
                    }
                    var line = echarts.init(document.getElementById('detail-information1'));
                    option = {
                        title: {
                            text: '药品费变化情况如下所示：'
                        },
                        tooltip : {
                            trigger: 'axis'
                        },
                        legend: {
                            show: true,
                            x: 'right',
                            y: 'top',
                            data:['药品费']
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
                                data : ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015']
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value'
                            }
                        ],
                        series : [
                            {
                                name:'药品费',
                                type:'line',
                                data: drugfees
                            }
                        ]
                    };
                    //为echarts对象加载数据
                    line.setOption(option);
                }
            }
        }
    );
}
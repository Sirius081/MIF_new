/**
 * Created by songsong on 2018/1/17.
 */
function load(){
    //平均工资
    var line = echarts.init(document.getElementById('avgWage'));
    var wage = [45965,51705,58163,65427,73598];
    option = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            show: true,
            x: 'center',
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
                data : ['2016','2017','2018','2019','2020']
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

    //在职离退人数
    var line = echarts.init(document.getElementById('working_retired'));
    var working = [314983,
        321876,
        327890,
        331901,
        335805,
    ];
    var retired = [165908,
        177260,
        184867,
        192890,
        203768,
    ];
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
                data : ['2016','2017','2018','2019','2020']
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
}
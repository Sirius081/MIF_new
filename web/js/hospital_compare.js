/**
 * Created by songsong on 2018/1/2.
 */
function loadDetails() {
    var url=decodeURI(location.href);
    var i=url.indexOf('?');
    if(i==-1)return;
    var querystr=url.substr(i+1);
    var arr1=querystr.split('&');
    var arr2=new Object();
    for  (i in arr1){
        var ta=arr1[i].split('=');
        arr2[ta[0]]=ta[1];
    }
    //获得前一个页面的参数
    var h_name1=arr2['h_name1'];
    var h_name2=arr2['h_name2']
    var param1 = '&h_name=' + h_name1;
    var param2 = '&h_name=' + h_name2;
    var line = echarts.init(document.getElementById('detail-information'))
    option = {
        title: {
            text: '医院均次统筹费用变化（按年份）'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            show: true,
            x: 'right',
            y: 'top',
            data: ['均次统筹费用变化']
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
                data: [2010, 2011, 2012, 2013, 2014, 2015]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: []
    }
    $.ajax({
        url: '/MIF/hospital/detectAvgGroup',
        type: 'get',
        data: param1,
        dataType: 'json',
        success: function (data) {
            var map1 = {
                '2010': 0,
                '2011': 0,
                '2012': 0,
                '2013': 0,
                '2014': 0,
                '2015': 0
            }
            //var disease = sortByKey(data.diseases, 'year');  //对获得到的结果按照年份进行排序
            for (var i = 0; i < data.hospitalADs.length; i++) {
                map1[data.hospitalADs[i].year] = data.hospitalADs[i].actual
            }

            option.series.push({
                name: h_name1,
                type: 'line',
                stack: '总量1',
                data: [map1[2010], map1[2011], map1[2012], map1[2013], map1[2014], map1[2015]]
            })
            line.setOption(option);
        }
    });
    $.ajax({
        url: '/MIF/hospital/detectAvgGroup',
        type: 'get',
        data: param2,
        dataType: 'json',
        success: function (data) {
            var map2 = {
                '2010': 0,
                '2011': 0,
                '2012': 0,
                '2013': 0,
                '2014': 0,
                '2015': 0
            }
            for (var i = 0; i < data.hospitalADs.length; i++) {
                map2[data.hospitalADs[i].year] = data.hospitalADs[i].actual
            }
            option.series.push({
                    name: h_name2,
                    type: 'line',
                    data: [map2[2010], map2[2011], map2[2012], map2[2013], map2[2014], map2[2015]]
                }
            )
            line.setOption(option);
        }
    });
}
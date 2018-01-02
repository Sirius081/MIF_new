/**
 * Created by songsong on 2018/1/2.
 */
function loadDetails(){
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
    var identity=arr2['identity']
    var year=arr2['year'];
    var name=arr2['name'];
    var param = "&identity=" + identity + "&year=" + 0 + "&name=" + name;
    $.ajax({
        url: '/MIF/drug/query',
        type: 'get',
        data: param,
        dataType: 'json',
        success: function (data) {
            var map = {}
            var year = ['2010','2011','2012','2013','2014','2015'];
            var drugfees = []
            for(var i='2010';i<'2016';i++)
                map[i]=0
            for (var i = 0; i < data.drugs.length; i++) {
                if (data.drugs[i].year > '2005' && data.drugs[i].year < '2016') {
                    drugfees.push(data.drugs[i].drugfees)
                    map[data.drugs[i].year] = data.drugs[i].drugfees;
                }
            }
            var line = echarts.init(document.getElementById('detail-information'))
            option = {
                title: {
                    text: name+'统筹费用支出变化（按年份）'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    show: true,
                    x: 'right',
                    y: 'top',
                    data: ['统筹费用支出变化']
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
                        data: year
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '统筹费用支出',
                        type: 'line',
                        stack: '总量1',
                        data: [map['2010'],map['2011'],map['2012'],map['2013'],map['2014'],map['2015']]
                    }
                ]
            }
            //为echarts对象加载数据
            line.setOption(option);
        }
    });
}
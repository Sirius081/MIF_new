/**
 * Created by song on 2017/3/29.
 */
function getCity() {
    var city = [
        ['统筹费用支出', '人次', '药品费用'],
        ['人次年龄分布','统筹费用年龄分布'],
    ];
    //获得省份下拉框的对象
    var sltProvince = document.form1.totalTrend;
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
        var line = echarts.init(document.getElementById('detail-information'));
        $.ajax({
                url: '/MIF/statistic/feesDetail',
                type: 'get',
                data: param,
                dataType: 'json',
                success: function (data) {
                    if (selectBy=='count'){
                        var newjson = [];                             ///只展示其中的几列
                        for (var i = 0; i < data.fds.length; i++) {
                            newjson[i] = new FeesDetail();
                            newjson[i].year = data.tts[i].year;
                            newjson[i].grade = data.tts[i].grade;
                            newjson[i].m_count= data.tts[i].m_count;
                            newjson[i].h_count= data.tts[i].h_count;
                        }
                    }
                    else if (selectBy=='groupfees'){
                        var newjson = [];                             ///只展示其中的几列
                        for (var i = 0; i < data.fds.length; i++) {
                            newjson[i] = new FeesDetail();
                            newjson[i].year = data.tts[i].year;
                            newjson[i].grade = data.tts[i].grade;
                            newjson[i].m_fees= data.tts[i].m_fees;
                            newjson[i].h_fees= data.tts[i].h_fees;
                        }
                    }
                    else if (selectBy=='drugfees'){
                        var newjson = [];                             ///只展示其中的几列
                        for (var i = 0; i < data.fds.length; i++) {
                            newjson[i] = new FeesDetail();
                            newjson[i].year = data.tts[i].year;
                            newjson[i].grade = data.tts[i].grade;
                            newjson[i].drugfees= data.tts[i].drugfees;
                        }
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
                    if(selectBy=='count')
                    {
                        var newjson = [];                             ///只展示其中的几列
                        for (var i = 0; i < data.ads.length; i++) {
                            newjson[i] = new AgeDistribution();
                            newjson[i].year = data.ads[i].year;
                            newjson[i].ageId = data.ads[i].ageId;
                            newjson[i].m_count = data.ads[i].m_count;
                            newjson[i].h_count = data.ads[i].h_count;
                        }

                    }
                    else if(selectBy=='fees')
                    {
                        var newjson = [];                             ///只展示其中的几列
                        for (var i = 0; i < data.ads.length; i++) {
                            newjson[i] = new AgeDistribution();
                            newjson[i].year = data.ads[i].year;
                            newjson[i].ageId = data.ads[i].ageId;
                            newjson[i].m_fees = data.ads[i].m_fees;
                            newjson[i].h_fees = data.ads[i].h_fees;
                        }
                    }
                }
            }
        );
    }
}

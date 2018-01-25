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
    var year=arr2['year'];
    var identity=arr2['identity']
    var h_name=arr2['h_name']
    var grade=arr2['grade']
    var r_avggroupfees=arr2['avg_hgroupfees']
    var param = "&identity=" + identity + '&grade=' + grade + '&h_name=' + h_name + '&year=' + year;
    var param1 = '&h_name=' + h_name;
    $.ajax({
        url: '/MIF/hospital/getDetails',
        type: 'get',
        data: param,
        dataType: 'json',
        success: function (data) {
            var newjson = [];                             ///只展示其中的几列
            for (var i = 0; i < data.diseaseHospitals.length; i++) {
                newjson[i] = new Object();
                newjson[i].year = data.diseaseHospitals[i].year;
                newjson[i].h_name = data.diseaseHospitals[i].h_name;
                newjson[i].grade = data.diseaseHospitals[i].grade;
                newjson[i].d_name = data.diseaseHospitals[i].d_name;
                newjson[i].h_groupfees = data.diseaseHospitals[i].h_groupfees;
                newjson[i].avg_hgroupfees = data.diseaseHospitals[i].avg_hgroupfees;
                newjson[i].h_count = data.diseaseHospitals[i].h_count;
                newjson[i].fake_name = data.diseaseHospitals[i].fake_name;
            }
            var grid_selector = "#grid-table2";
            var pager_selector = "#grid-pager2";
            $('#grid-table2').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table2").jqGrid({
                data: newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份', '医院名', '代码', "医院等级", "疾病名称", "住院统筹支付", "均次住院统筹费用", "住院人次"],
                colModel: [
                    {name: 'year', index: "year", width: "5%", align: "center", editable: true},
                    {name: 'fake_name', index: 'fake_name', width: "35%", align: "center", editable: true},
                    {name: 'h_name', index: 'h_name', width: "0%", align: "center", editable: true},
                    {name: 'grade', index: 'grade', width: "5%", align: "center", editable: true},
                    {name: 'd_name', index: 'd_name', width: "15%", align: "center", editable: true},
                    {
                        name: 'h_groupfees',
                        index: 'h_groupfees',
                        width: "15%",
                        align: "center",
                        editable: true,
                        sorttype: 'integer',
                        formatter: 'integer'
                    },
                    {
                        name: 'avg_hgroupfees',
                        index: 'avg_hgroupfees',
                        width: "15%",
                        align: "center",
                        editable: true,
                        sorttype: 'integer',
                        formatter: 'integer'
                    },
                    {
                        name: 'h_count',
                        index: 'h_count',
                        width: "10%",
                        align: "center",
                        editable: true,
                        sorttype: 'integer',
                        formatter: 'integer'
                    },
                ],
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                viewrecords: true,
                multiselect: true,
                altRows: true, //设置为交替行表格,默认为false
                loadonce: true,
                multiboxonly: true, //是否只能点击复选框多选
                autowidth: true //自动宽
            });
        }
    });
    var param2 = "&identity=" + identity + '&grade=' + grade+'&year=' + year+'&h_name='+"";
    var line = echarts.init(document.getElementById('detail-information'))
    $.ajax({
        url: '/MIF/hospital/query',
        type: 'get',
        data: param2,
        dataType: 'json',
        success: function (data) {
            var fees1=0;                     //费用区间段划分
            var fees2=0;
            var fees3=0;
            var fees4=0;
            var fees5=0;
            var fees6=0;
            var fees7=0;
            var fees8=0;
            var fees9=0;
            var fees10=0;
            var fees11=0;
            for (var i = 0; i < data.hospitals.length; i++) {
                var avg_hgroupfees = parseInt(data.hospitals[i].avg_hgroupfees);
                if(avg_hgroupfees<1000)
                    fees1=fees1+1;
                else if(avg_hgroupfees>=1000&&avg_hgroupfees<2000)
                    fees2=fees2+1;
                else if(avg_hgroupfees>=2000&&avg_hgroupfees<3000)
                    fees3=fees3+1;
                else if(avg_hgroupfees>=3000&&avg_hgroupfees<4000)
                    fees4=fees4+1;
                else if(avg_hgroupfees>=4000&&avg_hgroupfees<5000)
                    fees5=fees5+1;
                else if(avg_hgroupfees>=5000&&avg_hgroupfees<6000)
                    fees6=fees6+1;
                else if(avg_hgroupfees>=6000&&avg_hgroupfees<7000)
                    fees7=fees7+1;
                else if(avg_hgroupfees>=7000&&avg_hgroupfees<8000)
                    fees8=fees8+1;
                else if(avg_hgroupfees>=8000&&avg_hgroupfees<9000)
                    fees9=fees9+1;
                else if(avg_hgroupfees>=9000&&avg_hgroupfees<10000)
                    fees10=fees10+1;
                else if(avg_hgroupfees>=10000)
                    fees11=fees11+1;
            }
            //获得当前选中的医院的均次统筹费用支出
            var groupfees=parseInt(r_avggroupfees);
            //找出当前所选医院所属区间范围
            var flag=0;
            if(groupfees<1000)
                flag='0-1000';
            else if(groupfees>=1000&&groupfees<2000)
                flag='1000-2000';
            else if(groupfees>=2000&&groupfees<3000)
                flag='2000-3000';
            else if(groupfees>=3000&&groupfees<4000)
                flag='3000-4000';
            else if(groupfees>=4000&&groupfees<5000)
                flag='4000-5000';
            else if(groupfees>=5000&&groupfees<6000)
                flag='5000-6000';
            else if(groupfees>=6000&&groupfees<7000)
                flag='6000-7000';
            else if(groupfees>=7000&&groupfees<8000)
                flag='7000-8000';
            else if(groupfees>=8000&&groupfees<9000)
                flag='8000-9000';
            else if(groupfees>=9000&&groupfees<10000)
                flag='9000-10000';
            else if(groupfees>=10000)
                flag='10000以上';
            var dataMap={'0-1000':fees1,
                '1000-2000':fees2,
                '2000-3000':fees3,
                '3000-4000':fees4,
                '4000-5000':fees5,
                '5000-6000':fees6,
                '6000-7000':fees7,
                '7000-8000':fees8,
                '8000-9000':fees9,
                '9000-10000':fees10,
                '10000以上':fees11
            }
            var y_value=dataMap[flag];
            option = {
                title: {
                    text: year+'年'+grade+'医院均次统筹费用分布频率图'
                },
                color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                        data : ['0-1000', '1000-2000', '2000-3000', '3000-4000', '4000-5000',
                            '5000-6000', '6000-7000', '7000-8000', '8000-9000', '9000-10000', '10000以上'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {type : 'value'}],
                series : [
                    {

                        name: '均次统筹支付费用人次',
                        type: 'bar',
                        barWidth: '60%',
                        data: [fees1, fees2, fees3, fees4, fees5, fees6, fees7, fees8, fees9, fees10, fees11],
                        markPoint: {
                            data: [
                                { name: '当前医院均次统筹费用', value: groupfees, xAxis: flag, yAxis:y_value},
                            ]
                        }
                    }
                ]
            };
            line.setOption(option);
        }
    });
    $.ajax({
        url: '/MIF/hospital/detectAvgGroup',
        type: 'get',
        data: param1,
        dataType: 'json',
        success: function (data) {
            var year = [];
            var fees = [];
            for (var i = 0; i < data.hospitalADs.length; i++) {
                year.push(data.hospitalADs[i].year);
                fees.push(data.hospitalADs[i].actual);
            }
            var line = echarts.init(document.getElementById('detail-information1'))
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
                        name: '均次统筹费用',
                        type: 'line',
                        stack: '总量1',
                        data: fees
                    }
                ]
            }
            line.setOption(option);
        }
    });
}

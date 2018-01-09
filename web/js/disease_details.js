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
    var diseaseyear=arr2['year'];
    var identity=arr2['identity']
    var d_name=arr2['d_name']
    var param =  "&identity="+identity+"&year="+diseaseyear+"&d_name="+d_name;
    $.ajax({
        url: '/MIF/disease/getDetails',
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
                newjson[i].h_fees = data.diseaseHospitals[i].h_fees;
                newjson[i].h_groupfees = data.diseaseHospitals[i].h_groupfees;
                newjson[i].avg_hgroupfees = data.diseaseHospitals[i].avg_hgroupfees;
                newjson[i].m_count = data.diseaseHospitals[i].m_count;
                newjson[i].h_count = data.diseaseHospitals[i].h_count;
            }
            var grid_selector = "#grid-table2";
            var pager_selector = "#grid-pager2";
            $('#grid-table2').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table2").jqGrid({
                data: newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份','编号',"医院等级","疾病名称","住院统筹支付","均次统筹支付","住院人次"],
                colModel:
                    [
                        { name: 'year', index: "year", width: "5%",align:"center", editable: true},
                        { name: 'h_name', index: 'h_name', width: "35%",align:"center",editable: true },
                        { name: 'grade', index: 'grade', width: "5%",align:"center", editable: true},
                        { name: 'd_name', index: 'd_name', width: "15%",align:"center",editable: true},
                        { name: 'h_groupfees', index: 'h_groupfees', width: "15%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                        { name: 'avg_hgroupfees', index: 'avg_hgroupfees', width: "15%", align:"center",editable: true,sorttype:'integer',formatter:'integer'},
                        { name: 'h_count', index: 'h_count', width: "10%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
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
            $("#grid-table2").jqGrid('navGrid','#grid-pager2',{del:false,add:false,edit:false},{},{},{},{multipleSearch:true});
            //统筹费用支出进行区间段划分
            var fees1=0;
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
            //绘制该病种费用分布直方图
            for (var i = 0; i < data.diseaseHospitals.length; i++) {
                var avg_hgroupfees = parseInt(data.diseaseHospitals[i].avg_hgroupfees);
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
            var line= echarts.init(document.getElementById('detail-information'))
            option = {
                title: {
                    text: diseaseyear+'年'+d_name+'均次统筹费用支出频率图'
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
                        data: [fees1, fees2, fees3, fees4, fees5, fees6, fees7, fees8, fees9, fees10, fees11]
                    }
                ]
            };
            line.setOption(option);
            ///绘制该疾病历年均次统筹费用支出折线图
            var param = "&identity="+identity+"&name="+d_name;
            $.ajax({
                url:'/MIF/disease/diseaseTrend',
                type:'get',
                data:param,
                dataType:'json',
                success:function(data) {
                    var map={}
                    var year=[];
                    var avg_hgroupfees=[]
                    var disease = sortByKey(data.diseases, 'year');  //对获得到的结果按照年份进行排序
                    for (var i = 0; i < disease.length; i++) {
                        year.push(data.diseases[i].year);
                        avg_hgroupfees.push(data.diseases[i].avg_hgroupfees)
                        map[data.diseases[i].year]=data.diseases[i].avg_hgroupfees;
                    }
                    var line = echarts.init(document.getElementById('detail-information1'));
                    option = {
                        title: {
                            text: d_name+'均次统筹费用变化（按年份）'
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
                                data: avg_hgroupfees
                            }
                        ]
                    }
                    //为echarts对象加载数据
                    line.setOption(option);
                }
            });
        }
    });
}

//对获得到的数据按照年份进行排序
function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
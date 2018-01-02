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
    var r_name=arr2['r_name']

    var param="&identity="+identity+'&r_name='+r_name+'&year='+year;
    $.ajax({
        url: '/MIF/region/getDetails',
        type: 'get',
        data: param,
        dataType: 'json',
        success: function (data) {
            var newjson = [];                             ///只展示其中的几列
            for (var i = 0; i < data.hospitals.length; i++) {
                newjson[i] = new Object();
                newjson[i].year = data.hospitals[i].year;
                newjson[i].h_name = data.hospitals[i].h_name;
                newjson[i].grade = data.hospitals[i].grade;
                newjson[i].h_groupfees =data.hospitals[i].h_groupfees;
                newjson[i].avg_hgroupfees =data.hospitals[i].avg_hgroupfees;
                newjson[i].m_groupfees =data.hospitals[i].h_groupfees;
                newjson[i].avg_mgroupfees =data.hospitals[i].avg_mgroupfees;
                newjson[i].m_count =data.hospitals[i].m_count;
                newjson[i].h_count = data.hospitals[i].h_count;
            }
            var grid_selector = "#grid-table";
            var pager_selector = "#grid-pager";
            $('#grid-table').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table").jqGrid({
                data: newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份','医疗机构代码',"医院等级","住院统筹支付","均次住院统筹支付","门诊统筹支付","均次门诊统筹支付","住院人次","门诊人次"],
                colModel:
                    [
                        { name: 'year', index: "year", width: "4%",align:"center", editable: true},
                        { name: 'h_name', index: 'h_name', width: "28%",align:"center",editable: true },
                        { name: 'grade', index: 'grade', width: "8%",align:"center", editable: true},
                        { name: 'h_groupfees', index: 'fees', width: "10%", align:"center",editable: true,sorttype:'integer',formatter:'integer'},
                        { name: 'avg_hgroupfees', index: 'avg_hgroupfees', width: "12%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                        { name: 'm_groupfees', index: 'm_groupfees', width: "10%", align:"center",editable: true,sorttype:'integer',formatter:'integer'},
                        { name: 'avg_mgroupfees', index: 'avg_mfees', width: "12%", align:"center",editable: true,sorttype:'integer',formatter:'integer'},
                        { name: 'h_count', index: 'h_count', width: "8%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                        { name: 'm_count', index: 'm_count', width: "8%",align:"center", editable: true,sorttype:'integer',formatter:'integer'}

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

            $("#grid-table").jqGrid('navGrid','#grid-pager',{del:false,add:false,edit:false},{},{},{},{multipleSearch:true});
            ///绘制该区县历年统筹费用支出折线图
            var line= echarts.init(document.getElementById('detail-information'))
            var param = "&identity="+identity+"&r_name="+r_name;
            $.ajax({
                url:'/MIF/region/query',
                type:'get',
                data:param,
                dataType:'json',
                success:function(data) {
                    var map={}
                    var year=[];
                    var h_groupfees=[]
                    for (var i = 0; i < data.regions.length; i++) {
                        if(data.regions[i].year>'2005' && data.regions[i].year<'2016'){
                            year.push(data.regions[i].year);
                            h_groupfees.push(data.regions[i].h_groupfees)
                            map[data.regions[i].year]=data.regions[i].h_groupfees;
                        }
                    }
                    option = {
                        title: {
                            text: r_name+'统筹费用支出变化（按年份）'
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
                                name: '均次统筹费用',
                                type: 'line',
                                stack: '总量1',
                                data: h_groupfees
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

/**
 * Created by song on 2017/4/6.
 */
function loadtop10(){
    selectResult();
}
function selectResult()
{
    var identity=$("#identity1").val();
    var year=$("#regionyear").val();
    var r_name=$("#regionname").val();
    var param="&identity="+identity+'&r_name='+r_name+'&year='+year;
    $.ajax({
        url:'/MIF/region/query',
        type:'get',
        data:param,
        dataType:'json',
        success:function(data){
            var newjson=[];                             ///只展示其中的几列
            var h_groupfees=[];
            var region_name=[];
            var map={};
            for(var i = 0; i <data.regions.length; i++){
                newjson[i] = new Object();
                newjson[i].year = data.regions[i].year;
                newjson[i].r_name = data.regions[i].name;
                region_name.push(data.regions[i].name.substring(0,10))
                newjson[i].h_fees = data.regions[i].h_fees;
                newjson[i].h_groupfees = data.regions[i].h_groupfees;
                newjson[i].avg_hgroupfees = data.regions[i].avg_hgroupfees;
                newjson[i].m_fees = data.regions[i].m_fees;
                newjson[i].m_groupfees = data.regions[i].m_groupfees;
                newjson[i].avg_mgroupfees = data.regions[i].avg_mgroupfees;
                newjson[i].m_count = data.regions[i].m_count;
                newjson[i].h_count = data.regions[i].h_count;
                h_groupfees.push(parseInt(data.regions[i].h_groupfees)+parseInt(data.regions[i].m_groupfees))
                map[data.regions[i].name.substring(0,10)]=parseInt(data.regions[i].h_groupfees)+parseInt(data.regions[i].m_groupfees)
            };
            var grid_selector = "#grid-table";
            var pager_selector = "#grid-pager";
            var line = echarts.init(document.getElementById('detail-information'))
            $('#grid-table').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table").jqGrid({
                data:newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份','区县代码',"住院费用","住院统筹支付","均次住院统筹支出","门诊费用","门诊统筹支付","均次门诊统筹支出","门诊人次","住院人次"],
                colModel:
                    [
                        { name: 'year', index: "year", width: "5%",align:"center", editable: true},
                        { name: 'r_name', index: 'r_name', width: "24%",align:"center",editable: true },
                        { name: 'h_fees', index: 'h_fees', width: "10%", align:"center",editable: true,sorttype:'integer',formatter:'integer'},
                        { name: 'h_groupfees', index: 'h_groupfees', width: "10%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                        { name: 'avg_hgroupfees', index: 'avg_hgroupfees', width: "10%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                        { name: 'm_fees', index: 'm_fees', width: "10%", align:"center",editable: true,sorttype:'integer',formatter:'integer'},
                        { name: 'm_groupfees', index: 'm_groupfees', width: "10%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                        { name: 'avg_mgroupfees', index: 'avg_mgroupfees', width: "10%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                        { name: 'm_count', index: 'm_count', width: "8%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                        { name: 'h_count', index: 'h_count', width: "8%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                    ],
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                autowidth: true, //自动宽
                loadComplete: function() {
                    var grid = $("#grid-table");
                    var ids = grid.getDataIDs();
                    for (var i = 0; i <=ids.length; i++) {
                        grid.setRowData ( ids[i], false, {height: 20+i*1.15} );
                    }
                    $("#grid-table").closest(".ui-jqgrid-bdiv").css({ 'overflow-x' : 'scroll' });
                    $("#grid-table").closest(".ui-jqgrid-bdiv").css({ 'overflow-y' : 'scroll' });
                    ///绘制各个区县占比图
                },

                onSelectRow: function(id,status,e){
                    var row = $("#grid-table").jqGrid('getRowData',id);
                    var r_name=row.r_name;
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
                                    //var region = sortByKey(data.regions, 'year');  //对获得到的结果按照年份进行排序
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
            });
            option = {
                title : {
                    text:year+ '年各区县统筹费用支出占比情况(各区县名称取其前10位)',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x:"left",
                    data: region_name
                },
                series : [
                ]
            };
            for(var i=0;i<data.regions.length;i++)
            {
                option.series.push({
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    data:[]
                })
               option.series[0].data[i]={name:data.regions[i].name.substring(0,10),value:data.regions[i].h_groupfees}
            }
            //为echarts对象加载数据
            var line = echarts.init(document.getElementById('detail-information'))
            line.setOption(option);
            $("#grid-table").jqGrid('navGrid','#grid-pager',{del:false,add:false,edit:false},{},{},{},{multipleSearch:true});
        }
    });
}

function back()
{
    window.location.reload();
    selectResult();
}
//自动补全功能的实现
var availableTags = []
function queryByDrugname(){
    $.ajax({
        url:'/MIF/region/query',
        type:'get',
        async:false,
        dataType:'json',
        success:function(data){
            var regionname=[];                             ///只展示其中的几列
            for(var i = 0; i <data.regions.length; i++){
                regionname.push(data.regions[i].name);
            }
            //对区县名进行去重
            var arr =[]
            for(var i=0,l=regionname.length;i<l;i++){
                if(arr.indexOf(regionname[i])==-1){
                    arr.push(regionname[i])
                }
            }
            availableTags =arr;
        }
    });
}
$(function() {
    queryByDrugname();
    $("#regionname").autocomplete({
        source: availableTags
    });
});

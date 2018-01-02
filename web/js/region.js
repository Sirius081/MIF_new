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
                    window.location.href='region_details.jsp?identity='+identity +'&year='+ year+'&r_name='+r_name;
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

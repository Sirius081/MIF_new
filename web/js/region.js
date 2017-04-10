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
            for(var i = 0; i <data.regions.length; i++){
                newjson[i] = new Object();
                newjson[i].year = data.regions[i].year;
                newjson[i].r_name = data.regions[i].name;
                newjson[i].h_fees = data.regions[i].h_fees;
                newjson[i].h_groupfees = data.regions[i].h_groupfees;
                newjson[i].m_fees = data.regions[i].m_fees;
                newjson[i].m_groupfees = data.regions[i].m_groupfees;
                newjson[i].m_count = data.regions[i].m_count;
                newjson[i].h_count = data.regions[i].h_count;
            }
            var grid_selector = "#grid-table";
            var pager_selector = "#grid-pager";
            $('#grid-table').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table").jqGrid({
                data:newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份','区县代码',"住院费用","住院统筹支付","门诊费用","门诊统筹支付","门诊人次","住院人次"],
                colModel:
                    [
                        { name: 'year', index: "year", width: "5%",align:"center", editable: true},
                        { name: 'r_name', index: 'r_name', width: "24%",align:"center",editable: true },
                        { name: 'h_fees', index: 'h_fees', width: "10%", align:"center",editable: true},
                        { name: 'h_groupfees', index: 'h_groupfees', width: "10%",align:"center", editable: true},
                        { name: 'm_fees', index: 'm_fees', width: "10%", align:"center",editable: true},
                        { name: 'm_groupfees', index: 'm_groupfees', width: "10%",align:"center", editable: true},
                        { name: 'm_count', index: 'm_count', width: "8%",align:"center", editable: true},
                        { name: 'h_count', index: 'h_count', width: "8%",align:"center", editable: true},
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
                },
                onCellSelect:function(rowid,iCol,cellcontent,e){
                    var r_name=cellcontent;
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
                                        { name: 'h_groupfees', index: 'fees', width: "10%", align:"center",editable: true},
                                        { name: 'avg_hgroupfees', index: 'avg_hgroupfees', width: "12%",align:"center", editable: true},
                                        { name: 'm_groupfees', index: 'm_groupfees', width: "10%", align:"center",editable: true},
                                        { name: 'avg_mgroupfees', index: 'avg_mfees', width: "12%", align:"center",editable: true},
                                        { name: 'h_count', index: 'h_count', width: "8%",align:"center", editable: true},
                                        { name: 'm_count', index: 'm_count', width: "8%",align:"center", editable: true}

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
                }
            });
        }
    });
}

function back()
{
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
            availableTags = regionname;
        }
    });
}
$(function() {
    queryByDrugname();
    $("#regionname").autocomplete({
        source: availableTags
    });
});
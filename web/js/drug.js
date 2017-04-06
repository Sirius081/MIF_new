/**
 * Created by song on 2017/1/13.
 */
function loadtop10(){
    updatetop10();
    selectResult();
}
function updatetop10(){
    var year=$("#year").val();
    var params="&year="+year;
    $.ajax({
        url:'/MIF/drug/getTop10',
        type:'get',
        data:params,
        dataType:'json',
        success:function(data){
            var newjson=[];                             ///只展示其中的几列
            for(var i = 0; i <data.drugs.length; i++){
                newjson[i] = new Object();
                newjson[i].year = data.drugs[i].year;
                newjson[i].name = data.drugs[i].name;
                newjson[i].fees = data.drugs[i].fees;
            }
            var grid_selector = "#grid-table";
            var pager_selector = "#grid-pager";
            $('#grid-table').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table").jqGrid({
                data:newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份','名称','费用'],
                colModel:
                    [
                        { name: 'year', index: 'id', width: 40,align:"center",editable: true},
                        { name: 'name', index: 'name', width: 120,align:"center",editable: true },
                        { name: 'fees', index: 'year', width: 80,align:"center", editable: true}
                    ],
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                rowList: [10, 20, 30], //用于改变显示行数的下拉列表框的元素数组。
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                altRows: true, //设置为交替行表格,默认为false
                multiselect: true, //是否多选
                multiboxonly: true, //是否只能点击复选框多选
                caption: "top10", //表名
                autowidth: true,//自动宽
                loadComplete: function() {
                    var grid = $("#grid-table");
                    var ids = grid.getDataIDs();
                    for (var i = 0; i <=ids.length; i++) {
                        grid.setRowData ( ids[i], false, {height: 20+i*1.15} );
                    }
                }
            });
            $('#grid-table').closest("div.ui-jqgrid-view")
                            .children("div.ui-jqgrid-titlebar")
                            .css("text-align", "center")
                            .children("span.ui-jqgrid-title")
                            .css("float", "none");

        }
    });
}

function selectResult(){
    var year=$("#drugyear").val();
    var name=$("#drugname").val();
    var params="year="+year+"&name="+name;
    alert(params)
    $.ajax({
        url:'/MIF/drug/query',
        type:'get',
        data:params,
        dataType:'json',
        success:function(data){
            var newjson=[];                             ///只展示其中的几列
            for(var i = 0; i <data.drugs.length; i++){
                newjson[i] = new Object();
                newjson[i].year = data.drugs[i].year;
                newjson[i].name = data.drugs[i].name;
                newjson[i].fees = data.drugs[i].fees;
            }
            var grid_selector = "#grid-table2";
            var pager_selector = "#grid-pager2";
            $('#grid-table2').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table2").jqGrid({
                data:newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份','名称','费用'],
                colModel:
                    [
                        { name: 'year', index: 'year', width: "20%",align:"center", editable: true},
                        { name: 'name', index: 'name', width:"40%",align:"center",editable: true },
                        { name: 'fees', index: 'fees', width: "40%",align:"center", editable: true}
                    ],
                rowNum: 10, //每页显示记录数
                rowList: [10, 20, 30], //用于改变显示行数的下拉列表框的元素数组。
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                viewrecords: true,
                multiselect: true,
                subGrid: true,
                altRows: true, //设置为交替行表格,默认为false
                loadonce:true,
                multiboxonly: true, //是否只能点击复选框多选
                caption: "详细信息", //表名
                autowidth: true, //自动宽
                onCellSelect:function(rowid,iCol,cellcontent,e){
                    var name=cellcontent;
                    var params="year="+year+"&name="+name;
                    alert(params)
                    $.ajax({
                        url: '/MIF/drug/query',
                        type: 'get',
                        data: params,
                        dataType: 'json',
                        success: function (data) {
                            var newjson = [];                             ///只展示其中的几列
                            for (var i = 0; i < data.drugs.length; i++) {
                                newjson[i] = new Object();
                                newjson[i].name = data.drugs[i].name;
                                newjson[i].fees = data.drugs[i].fees;
                            }
                            var grid_selector = "#grid-table2";
                            var pager_selector = "#grid-pager2";
                            $('#grid-table2').jqGrid('GridUnload');          ///刷新grid框架
                            $("#grid-table2").jqGrid({
                                data: newjson,
                                datatype: "local",
                                height: "auto",
                                colNames: [ '名称', '费用'],
                                colModel: [
                                    {name: 'name', index: 'name', width: "40%", align: "center", editable: true},
                                    {name: 'fees', index: 'fees', width: "40%", align: "center", editable: true}
                                ],
                                rowNum: 10, //每页显示记录数
                                rowList: [10, 20, 30], //用于改变显示行数的下拉列表框的元素数组。
                                pager: pager_selector, //分页、按钮所在的浏览导航栏
                                viewrecords: true,
                                multiselect: true,
                                subGrid: true,
                                altRows: true, //设置为交替行表格,默认为false
                                loadonce: true,
                                multiboxonly: true, //是否只能点击复选框多选
                                caption: "详细信息", //表名
                                autowidth: true ,//自动宽
                                subGridRowExpanded: function(subgrid_id, row_id) {
                                    alert("hello")
                                    var subgrid_table_id, pager_id;
                                    subgrid_table_id = subgrid_id+"_t";
                                    pager_id = "p_"+subgrid_table_id;
                                    $("#"+subgrid_id).html("<table id='"+subgrid_table_id+"' class='scroll'></table><div id='"+pager_id+"' class='scroll'></div>");
                                    $("#"+subgrid_table_id).jqGrid({
                                        data:newjson,
                                        datatype: "local",
                                        colNames: ['年份','名称','费用'],
                                        colModel:
                                            [
                                                { name: 'year', index: 'id', width:200,align:"center", editable: true},
                                                { name: 'name', index: 'name', width:150,align:"center",editable: true },
                                                { name: 'fees', index: 'year', width: 100,align:"center", editable: true}
                                            ],
                                        rowNum:5,
                                        pager: pager_id,
                                        height: '100%'
                                    });
                                    jQuery("#"+subgrid_table_id).jqGrid('navGrid',"#"+pager_id,{edit:false,add:false,del:false})
                                }
                            });
                        }
                    });
                },
                loadComplete: function() {
                    $("#grid-table2").closest(".ui-jqgrid-bdiv").css({ 'overflow-y' : 'scroll' });
                }
            });
            $("#grid-table2").jqGrid('navGrid','#grid-pager2',{del:false,add:false,edit:false},{},{},{},{multipleSearch:true});
            $('#grid-table2').closest("div.ui-jqgrid-view")
                .children("div.ui-jqgrid-titlebar")
                .css("text-align", "center")
                .children("span.ui-jqgrid-title")
                .css("float", "none");

        }
    });
}



////var availableTags = []
////function queryByDrugname(){
////    $.ajax({
////        url:'/MIF/drug/queryByDrugname',
////        type:'get',
////        async:false,
////        dataType:'json',
////        success:function(data){
////            availableTags = data.relatedDrugs;
////        }
////    });
////}
////
////$(function() {
////    queryByDrugname();
////    alert(availableTags)
////    $("#drugname").autocomplete({
////        source: availableTags
////    });
//});
//







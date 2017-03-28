/**
 * Created by song on 2017/1/13.
 */
//页面一加载显示top10
function loadtop10(){
    updatetop10();
    selectResult();
}

function updatetop10()
{
    var year=$("#year").val();
    var orderBy =$("#orderBy").val();
    var params="&year="+year+'&orderBy='+orderBy;
    $.ajax({
        url:'/MIF/disease/getTop10',
        type:'get',
        data:params,
        dataType:'json',
        success:function(data){
            var newjson=[];                             ///只展示其中的几列
            for(var i = 0; i <data.diseases.length; i++){
                newjson[i] = new Object();
                newjson[i].year = data.diseases[i].year;
                newjson[i].name = data.diseases[i].name;
                newjson[i].fees = data.diseases[i].fees;
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
                        { name: 'year', index: "year", width: 40,align:"center", editable: true},
                        { name: 'name', index: 'name', width: 100,align:"center",editable: true },
                        { name: 'fees', index: 'fees', width: 100,align:"center", editable: true}

                    ],
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                rowList: [10, 20, 30], //用于改变显示行数的下拉列表框的元素数组。
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                caption: "top10", //表名
                autowidth: true, //自动宽
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

function selectResult()
{
    var diseaseyear=$("#diseaseyear").val();
    var diseasename=$("#diseasename").val();
    var param = "year="+diseaseyear+"&name="+diseasename;
    $.ajax({
        url:'/MIF/disease/query',
        type:'get',
        data:param,
        dataType:'json',
        success:function(data){
            var newjson=[];
            for(var i = 0; i <data.diseases.length; i++){
                newjson[i] = new Object();
                newjson[i].year = data.diseases[i].year;
                newjson[i].name = data.diseases[i].name;
                newjson[i].fees = data.diseases[i].fees;
                newjson[i].group = data.diseases[i].group;
                newjson[i].count = data.diseases[i].count;
            }
            var grid_selector = "#grid-table2";
            var pager_selector = "#grid-pager2";
            $('#grid-table2').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table2").jqGrid({
                data:newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份','名称','费用',"统筹支付","人次"],
                colModel:
                    [
                        { name: 'year', index: "year", width: 40, editable: true,align:"center"},
                        { name: 'name', index: 'name', width: 150,editable: true,align:"center" },
                        { name: 'fees', index: 'fees', width: 100, editable: true,align:"center"},
                        { name: 'group', index: 'group', width: 100, editable: true,align:"center"},
                        { name: 'count', index: 'count', width: 40, editable: true,align:"center"}
                    ],
                pgbuttons:true,
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                rowList: [10, 20, 30], //用于改变显示行数的下拉列表框的元素数组。
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                caption: "详细信息", //表名
                autowidth: true,
                loadComplete: function() {
                    var grid = $("#grid-table2");
                    var ids = grid.getDataIDs();
                    for (var i = 0; i <=ids.length; i++) {
                        grid.setRowData ( ids[i], false, {height: 20+i*1.15} );
                    }
                }
            });
            $('#grid-table2').closest("div.ui-jqgrid-view")
                .children("div.ui-jqgrid-titlebar")
                .css("text-align", "center")
                .children("span.ui-jqgrid-title")
                .css("float", "none");

        }
    });
}

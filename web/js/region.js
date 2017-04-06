/**
 * Created by song on 2017/4/6.
 */
function loadtop10(){
    updatetop10();
    selectResult();
}
function updatetop10(){
    var identity=$("#identity").val();
    var year=$("#year").val();
    var params="&identity="+identity+"&year="+year;
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
                newjson[i].drugfees = data.drugs[i].drugfees;
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
                        { name: 'year', index: 'year', width: 40,align:"center",editable: true},
                        { name: 'name', index: 'name', width: 120,align:"center",editable: true },
                        { name: 'drugfees', index: 'drugfees', width: 80,align:"center", editable: true}
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
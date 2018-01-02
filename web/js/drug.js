/**
 * Created by song on 2017/1/13.
 */
function loadtop10() {
    updatetop10();
    selectResult();
}
function updatetop10() {
    var identity = $("#identity").val();
    var year = $("#year").val();
    var params = "&identity=" + identity + "&year=" + year;
    $.ajax({
        url: '/MIF/drug/getTop10',
        type: 'get',
        data: params,
        dataType: 'json',
        success: function (data) {
            var newjson = [];                             ///只展示其中的几列
            for (var i = 0; i < data.drugs.length; i++) {
                newjson[i] = new Object();
                newjson[i].year = data.drugs[i].year;
                newjson[i].name = data.drugs[i].name;
                newjson[i].drugfees = data.drugs[i].drugfees;
            }
            var grid_selector = "#grid-table";
            var pager_selector = "#grid-pager";
            $('#grid-table').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table").jqGrid({
                data: newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份', '名称', '费用'],
                colModel: [
                    {name: 'year', index: 'year', width: "20%", align: "center", editable: true},
                    {name: 'name', index: 'name', width: "40%", align: "center", editable: true},
                    {
                        name: 'drugfees',
                        index: 'drugfees',
                        width: "40%",
                        align: "center",
                        editable: true,
                        sorttype: 'integer',
                        formatter: 'integer'
                    }
                ],
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                altRows: true, //设置为交替行表格,默认为false
                multiselect: true, //是否多选
                multiboxonly: true, //是否只能点击复选框多选
                autowidth: true,//自动宽
                scroll: "auto",      //设置竖直滚动条的滑动
                loadComplete: function () {
                    var grid = $("#grid-table");
                    var ids = grid.getDataIDs();
                    for (var i = 0; i <= ids.length; i++) {
                        grid.setRowData(ids[i], false, {height: 20 + i * 1.15});
                    }
                }
            });
            $('#grid-table').closest("div.ui-jqgrid-view")
                .children("div.ui-jqgrid-titlebar")
                .css("text-align", "center")
                .children("span.ui-jqgrid-title")
                .css("float", "none");
            $("#grid-table").closest(".ui-jqgrid-bdiv").css({'overflow-y': 'scroll'});
            $("#grid-table").closest(".ui-jqgrid-bdiv").css({'overflow-x': 'scroll'});
        }
    });
}

function selectResult() {
    var identity = $("#identity1").val();
    var year = $("#drugyear").val();
    var name = $("#drugname").val();
    var params = "&identity=" + identity + "&year=" + year + "&name=" + name;
    $.ajax({
        url: '/MIF/drug/query',
        type: 'get',
        data: params,
        dataType: 'json',
        success: function (data) {
            var newjson = [];                             ///只展示其中的几列
            for (var i = 0; i < data.drugs.length; i++) {
                newjson[i] = new Object();
                newjson[i].year = data.drugs[i].year;
                newjson[i].name = data.drugs[i].name;
                newjson[i].drugfees = data.drugs[i].drugfees;
            }
            var grid_selector = "#grid-table2";
            var pager_selector = "#grid-pager2";
            $('#grid-table2').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table2").jqGrid({
                data: newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份', '名称', '药品费'],
                colModel: [
                    {name: 'year', index: 'year', width: "20%", align: "center", editable: true},
                    {name: 'name', index: 'name', width: "40%", align: "center", editable: true},
                    {
                        name: 'drugfees',
                        index: 'drugfees',
                        width: "40%",
                        align: "center",
                        editable: true,
                        sorttype: 'integer',
                        formatter: 'integer'
                    }
                ],
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                viewrecords: true,
                multiselect: true,
                altRows: true, //设置为交替行表格,默认为false
                loadonce: true,
                multiboxonly: true, //是否只能点击复选框多选
                autowidth: true, //自动宽
                loadComplete: function () {
                    $("#grid-table2").closest(".ui-jqgrid-bdiv").css({'overflow-x': 'scroll'});
                    $("#grid-table2").closest(".ui-jqgrid-bdiv").css({'overflow-y': 'scroll'});
                },
                onSelectRow: function (id, status, e) {
                    var row = $("#grid-table2").jqGrid('getRowData', id);
                    var name = row.name;
                    window.location.href='drug_details.jsp?identity='+identity+'&year='+0+'&name='+name;
                }
            });
            $("#grid-table2").jqGrid('navGrid', '#grid-pager2', {
                del: false,
                add: false,
                edit: false
            }, {}, {}, {}, {multipleSearch: true});
            $('#grid-table2').closest("div.ui-jqgrid-view")
                .children("div.ui-jqgrid-titlebar")
                .css("text-align", "center")
                .children("span.ui-jqgrid-title")
                .css("float", "none");

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
function queryByDrugname() {
    var identity = $("#identity1").val();
    var name = $("#drugname").val();
    var params = "&identity=" + identity + "&year=" + 0 + "&name=" + name;
    $.ajax({
        url: '/MIF/drug/query',
        type: 'get',
        data: params,
        async: false,
        dataType: 'json',
        success: function (data) {
            var drugname = [];                             ///只展示其中的几列
            for (var i = 0; i < data.drugs.length; i++) {
                drugname.push(data.drugs[i].name);
            }
            //对drug名进行去重
            var arr = []
            for (var i = 0, l = drugname.length; i < l; i++) {
                if (arr.indexOf(drugname[i]) == -1) {
                    arr.push(drugname[i])
                }
            }
            availableTags = arr;
        }
    });
}
$(function () {
    queryByDrugname();
    $("#drugname").autocomplete({
        source: availableTags
    });
});

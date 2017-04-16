/**
 * Created by song on 2017/1/15.
 */
/**
 * Created by song on 2017/1/13.
 */
//页面一加载显示top10
function loadtop10() {
    updatetop10();
    selectResult();
}

function updatetop10() {
    var identity = $("#identity").val();
    var year = $("#year").val();
    var orderBy = $("#orderBy").val();
    var params = "&identity=" + identity + "&year=" + year + "&orderBy=" + orderBy;
    $.ajax({
        url: '/MIF/hospital/getTop10',
        type: 'get',
        data: params,
        dataType: 'json',
        success: function (data) {
            var newjson = [];                             ///只展示其中的几列
            for (var i = 0; i < data.hospitals.length; i++) {
                newjson[i] = new Object();
                newjson[i].h_name = data.hospitals[i].h_name;
                newjson[i].year = data.hospitals[i].year;
                newjson[i].h_fees = data.hospitals[i][orderBy];
            }
            var grid_selector = "#grid-table";
            var pager_selector = "#grid-pager";
            $('#grid-table').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table").jqGrid({
                data: newjson,
                datatype: "local",
                height: "auto",
                colNames: ['编号', '年份', '费用'],
                colModel: [
                    {name: 'h_name', index: 'h_name', width: 320, align: "center", editable: true},
                    {name: 'year', index: "year", width: 40, align: "center", editable: true},
                    {
                        name: "h_fees",
                        index: "h_fees",
                        width: 150,
                        align: "center",
                        sorttype: 'integer',
                        formatter: 'integer'
                    },
                ],
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                multiselect: true, //是否多选
                multiboxonly: true, //是否只能点击复选框多选
                autowidth: false,
                shrinkToFit: false,
                width: 450,
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
            //自应高度

        }
    });
}


function selectResult() {
    var identity = $("#identity1").val();
    var year = $("#hospitalyear").val();
    var grade = $("#hospitallevel").val();
    var h_name = $("#hospitalnum").val();
    var param = "&identity=" + identity + '&grade=' + grade + '&h_name=' + h_name + '&year=' + year;
    $.ajax({
        url: '/MIF/hospital/query',
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
                newjson[i].h_fees = data.hospitals[i].h_fees;
                newjson[i].h_groupfees = data.hospitals[i].h_groupfees;
                newjson[i].m_count = data.hospitals[i].m_count;
                newjson[i].h_count = data.hospitals[i].h_count;
            }
            var grid_selector = "#grid-table2";
            var pager_selector = "#grid-pager2";
            $('#grid-table2').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table2").jqGrid({
                data: newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份', '医疗机构代码', "医院等级", "住院费用", "住院统筹支付", "门诊人次", "住院人次"],
                colModel: [
                    {name: 'year', index: "year", width: "10%", align: "center", editable: true},
                    {name: 'h_name', index: 'h_name', width: "40%", align: "center", editable: true},
                    {name: 'grade', index: 'grade', width: "10%", align: "center", editable: true},
                    {
                        name: 'h_fees',
                        index: 'h_fees',
                        width: "10%",
                        align: "center",
                        editable: true,
                        sorttype: 'integer',
                        formatter: 'integer'
                    },
                    {
                        name: 'h_groupfees',
                        index: 'h_groupfees',
                        width: "10%",
                        align: "center",
                        editable: true,
                        sorttype: 'integer',
                        formatter: 'integer'
                    },
                    {
                        name: 'm_count',
                        index: 'm_count',
                        width: "10%",
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
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                autowidth: true, //自动宽
                multiselect: true, //是否多选
                loadComplete: function () {
                    var grid = $("#grid-table2");
                    var ids = grid.getDataIDs();
                    for (var i = 0; i <= ids.length; i++) {
                        grid.setRowData(ids[i], false, {height: 20 + i * 1.15});
                    }
                }
                //beforeSelectRow:function(rowid, e){
                //    if(e.type == 'click'){
                //        i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                //            cm = jQuery("#grid-table2").jqGrid('getGridParam', 'colModel');
                //        return (cm[i].name == 'h_name'); //当点击的单元格的名字为cb时，才触发选择行事件
                //    }
                //    return false;
                //},
                //onSelectRow: function(id,status,e){
                //            var row = $("#grid-table2").jqGrid('getRowData',id);
                //            h_name=row.h_name;
                //            var param="&identity="+identity+'&grade='+grade+'&h_name='+h_name+'&year='+year;
                //            $.ajax({
                //                url: '/MIF/hospital/getDetails',
                //                type: 'get',
                //                data: param,
                //                dataType: 'json',
                //                success: function (data) {
                //                    var newjson = [];                             ///只展示其中的几列
                //                    for (var i = 0; i < data.diseaseHospitals.length; i++) {
                //                        newjson[i] = new Object();
                //                        newjson[i].year = data.diseaseHospitals[i].year;
                //                        newjson[i].h_name = data.diseaseHospitals[i].h_name;
                //                        newjson[i].grade = data.diseaseHospitals[i].grade;
                //                        newjson[i].d_name = data.diseaseHospitals[i].d_name;
                //                        newjson[i].h_fees = data.diseaseHospitals[i].h_fees;
                //                        newjson[i].h_groupfees =data.diseaseHospitals[i].h_groupfees;
                //                        newjson[i].h_count = data.diseaseHospitals[i].h_count;
                //                    }
                //                    var grid_selector = "#grid-table2";
                //                    var pager_selector = "#grid-pager2";
                //                    $('#grid-table2').jqGrid('GridUnload');          ///刷新grid框架
                //                    $("#grid-table2").jqGrid({
                //                        data: newjson,
                //                        datatype: "local",
                //                        height: "auto",
                //                        colNames: ['年份','医疗机构代码',"医院等级","疾病名称","住院费用","住院统筹支付","住院人次"],
                //                        colModel:
                //                            [
                //                                { name: 'year', index: "year", width: "10%",align:"center", editable: true},
                //                                { name: 'h_name', index: 'h_name', width: "20%",align:"center",editable: true },
                //                                { name: 'grade', index: 'grade', width: "10%",align:"center", editable: true},
                //                                { name: 'd_name', index: 'd_name', width: "20%",align:"center",editable: true},
                //                                { name: 'h_fees', index: 'fees', width: "15%", align:"center",editable: true,sorttype:'integer',formatter:'integer'},
                //                                { name: 'h_groupfees', index: 'h_groupfees', width: "15%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                //                                { name: 'h_count', index: 'h_count', width: "10%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                //                            ],
                //                        rowNum: 10, //每页显示记录数
                //                        pager: pager_selector, //分页、按钮所在的浏览导航栏
                //                        viewrecords: true,
                //                        multiselect: true,
                //                        altRows: true, //设置为交替行表格,默认为false
                //                        loadonce: true,
                //                        multiboxonly: true, //是否只能点击复选框多选
                //                        autowidth: true //自动宽
                //                    });
                //                }
                //            });
                //}
                //onCellSelect:function(rowid,iCol,cellcontent,e){
                //    var h_name=cellcontent;
                //    var param="&identity="+identity+'&grade='+grade+'&h_name='+h_name+'&year='+year;
                //    $.ajax({
                //        url: '/MIF/hospital/getDetails',
                //        type: 'get',
                //        data: param,
                //        dataType: 'json',
                //        success: function (data) {
                //            var newjson = [];                             ///只展示其中的几列
                //            for (var i = 0; i < data.diseaseHospitals.length; i++) {
                //                newjson[i] = new Object();
                //                newjson[i].year = data.diseaseHospitals[i].year;
                //                newjson[i].h_name = data.diseaseHospitals[i].h_name;
                //                newjson[i].grade = data.diseaseHospitals[i].grade;
                //                newjson[i].d_name = data.diseaseHospitals[i].d_name;
                //                newjson[i].h_fees = data.diseaseHospitals[i].h_fees;
                //                newjson[i].h_groupfees =data.diseaseHospitals[i].h_groupfees;
                //                newjson[i].h_count = data.diseaseHospitals[i].h_count;
                //            }
                //            var grid_selector = "#grid-table2";
                //            var pager_selector = "#grid-pager2";
                //            $('#grid-table2').jqGrid('GridUnload');          ///刷新grid框架
                //            $("#grid-table2").jqGrid({
                //                data: newjson,
                //                datatype: "local",
                //                height: "auto",
                //                colNames: ['年份','医疗机构代码',"医院等级","疾病名称","住院费用","住院统筹支付","住院人次"],
                //                colModel:
                //                    [
                //                        { name: 'year', index: "year", width: "10%",align:"center", editable: true},
                //                        { name: 'h_name', index: 'h_name', width: "20%",align:"center",editable: true },
                //                        { name: 'grade', index: 'grade', width: "10%",align:"center", editable: true},
                //                        { name: 'd_name', index: 'd_name', width: "20%",align:"center",editable: true},
                //                        { name: 'h_fees', index: 'fees', width: "15%", align:"center",editable: true,sorttype:'integer',formatter:'integer'},
                //                        { name: 'h_groupfees', index: 'h_groupfees', width: "15%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                //                        { name: 'h_count', index: 'h_count', width: "10%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                //                    ],
                //                rowNum: 10, //每页显示记录数
                //                pager: pager_selector, //分页、按钮所在的浏览导航栏
                //                viewrecords: true,
                //                multiselect: true,
                //                altRows: true, //设置为交替行表格,默认为false
                //                loadonce: true,
                //                multiboxonly: true, //是否只能点击复选框多选
                //                autowidth: true //自动宽
                //            });
                //        }
                //    });
                //}
            });
        }
    });
}
function back() {
    selectResult();
}

//自动补全功能的实现
var availableTags = []
function queryByDrugname() {
    $.ajax({
        url: '/MIF/hospital/query',
        type: 'get',
        async: false,
        dataType: 'json',
        success: function (data) {
            var h_name = [];                             ///只展示其中的几列
            for (var i = 0; i < data.hospitals.length; i++) {
                h_name.push(data.hospitals[i].h_name);
            }
            //对医疗机构名进行去重
            var arr = []
            for (var i = 0, l = h_name.length; i < l; i++) {
                if (arr.indexOf(h_name[i]) == -1) {
                    arr.push(h_name[i])
                }
            }
            availableTags = arr;
        }
    });
}
function getSelecteds() {
//获取多选到的id集合
    var ids = $("#grid-table2").jqGrid("getGridParam", "selarrrow");
//遍历访问这个集合
    $(ids).each(function (index, id) {
        //由id获得对应数据行
        alert(id);
        var row = $("#grid-table2").jqGrid('getRowData', id);
        alert("row.ID:" + row.h_name + "  " + "row.fieldName:" + row.grade);
    });
}

function getDetails() {
//获取多选到的id集合
    var identity = $("#identity1").val();
    var year = $("#hospitalyear").val();
    var grade = $("#hospitallevel").val();
    var h_name = $("#hospitalnum").val();
    var rowid = $("#grid-table2").jqGrid("getGridParam", "selrow");
    var row = $("#grid-table2").jqGrid('getRowData', rowid);
    h_name = row.h_name;
    var param = "&identity=" + identity + '&grade=' + grade + '&h_name=' + h_name + '&year=' + year;
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
                newjson[i].h_fees = data.diseaseHospitals[i].h_fees;
                newjson[i].h_groupfees = data.diseaseHospitals[i].h_groupfees;
                newjson[i].h_count = data.diseaseHospitals[i].h_count;
            }
            var grid_selector = "#grid-table2";
            var pager_selector = "#grid-pager2";
            $('#grid-table2').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table2").jqGrid({
                data: newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份', '医疗机构代码', "医院等级", "疾病名称", "住院费用", "住院统筹支付", "住院人次"],
                colModel: [
                    {name: 'year', index: "year", width: "10%", align: "center", editable: true},
                    {name: 'h_name', index: 'h_name', width: "20%", align: "center", editable: true},
                    {name: 'grade', index: 'grade', width: "10%", align: "center", editable: true},
                    {name: 'd_name', index: 'd_name', width: "20%", align: "center", editable: true},
                    {
                        name: 'h_fees',
                        index: 'fees',
                        width: "15%",
                        align: "center",
                        editable: true,
                        sorttype: 'integer',
                        formatter: 'integer'
                    },
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
}

$(function () {
    queryByDrugname();
    $("#hospitalnum").autocomplete({
        source: availableTags
    });
});

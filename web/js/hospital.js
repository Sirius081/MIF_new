/**
 * Created by song on 2017/1/15.
 */
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
    var identity=$("#identity").val();
    var year=$("#year").val();
    var orderBy =$("#orderBy").val();
    var params="&identity="+identity+"&year="+year+"&orderBy="+orderBy;
    $.ajax({
        url:'/MIF/hospital/getTop10',
        type:'get',
        data:params,
        dataType:'json',
        success:function(data){
            var newjson=[];                             ///只展示其中的几列
            for(var i = 0; i <data.hospitals.length; i++){
                newjson[i] = new Object();
                newjson[i].h_name = data.hospitals[i].h_name;
                newjson[i].year = data.hospitals[i].year;
                newjson[i].h_fees= data.hospitals[i][orderBy];
            }
            var grid_selector = "#grid-table";
            var pager_selector = "#grid-pager";
            $('#grid-table').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table").jqGrid({
                data:newjson,
                datatype: "local",
                height:"auto",
                colNames: ['编号','年份','费用'],
                colModel:
                    [
                        { name: 'h_name', index: 'h_name', width: "60%",align:"center",editable: true },
                        { name: 'year', index: "year", width: "20%",align:"center", editable: true},
                        { name: "h_fees", index: "h_fees", width: "20%",align:"center"},
                    ],
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                rowList: [10, 20, 30], //用于改变显示行数的下拉列表框的元素数组。
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                multiselect: true, //是否多选
                multiboxonly: true, //是否只能点击复选框多选
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
            columnModelData("#grid-table");
            //自应高度
            $(window).resize(function () {
                $("#grid-table").setGridHeight($(window).height() - 178);
            });
        }
    });
}


function selectResult()
{
    var identity=$("#identity1").val();
    var year=$("#hospitalyear").val();
    var grade=$("#hospitallevel").val();
    var num=$("#hospitalnum").val();
    var param="&identity="+identity+'&grade='+grade+'&num='+num+'&year='+year;
    $.ajax({
        url:'/MIF/hospital/query',
        type:'get',
        data:param,
        dataType:'json',
        success:function(data){
            var newjson=[];                             ///只展示其中的几列
            for(var i = 0; i <data.hospitals.length; i++){
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
                data:newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份','编号',"医院等级","住院费用","住院统筹支付","门诊人次","住院人次",,],
                colModel:
                    [
                        { name: 'year', index: "year", width: "10%",align:"center", editable: true},
                        { name: 'h_name', index: 'num', width: "40%",align:"center",editable: true },
                        { name: 'grade', index: 'grade', width: "10%",align:"center", editable: true},
                        { name: 'h_fees', index: 'fees', width: "10%", align:"center",editable: true},
                        { name: 'h_groupfees', index: 'h_groupfees', width: "10%",align:"center", editable: true},
                        { name: 'm_count', index: 'm_count', width: "10%",align:"center", editable: true},
                        { name: 'h_count', index: 'h_count', width: "10%",align:"center", editable: true},
                    ],
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                rowList: [10, 20, 30], //用于改变显示行数的下拉列表框的元素数组。
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                autowidth: true, //自动宽
                loadComplete: function() {
                    var grid = $("#grid-table2");
                    var ids = grid.getDataIDs();
                    for (var i = 0; i <=ids.length; i++) {
                        grid.setRowData ( ids[i], false, {height: 20+i*1.15} );
                    }
                }
            });

        }
    });
}

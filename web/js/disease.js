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
    var params="&identity="+identity+"&year="+year+'&orderBy='+orderBy;
    var diseaseName=[];
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
                diseaseName.push(data.diseases[i].name);
                newjson[i].h_fees= data.diseases[i][orderBy];
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
                        { name: 'year', index: "year", width: 20,align:"center", editable: true},
                        { name: 'name', index: 'name', width: 40,align:"center",editable: true },
                        { name: 'h_fees', index: 'h_fees', width: 40,align:"center", editable: true,sorttype:'integer',formatter:'integer'}
                    ],
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                autowidth: true, //自动宽
                scroll:"auto",
                loadComplete: function() {
                    var grid = $("#grid-table");
                    var ids = grid.getDataIDs();
                    for (var i = 0; i <=ids.length; i++) {
                        grid.setRowData ( ids[i], false, {height: 20+i*1.15} );
                    }
                    $("#grid-table").closest(".ui-jqgrid-bdiv").css({ 'overflow-x' : 'scroll' });
                    $("#grid-table").closest(".ui-jqgrid-bdiv").css({ 'overflow-y' : 'scroll' });
                    $('#grid-table').closest("div.ui-jqgrid-view")
                        .children("div.ui-jqgrid-titlebar")
                        .css("text-align", "center")
                        .children("span.ui-jqgrid-title")
                        .css("float", "none");
                }
            });
        }

    });
}

function selectResult()
{
    var identity=$("#identity1").val();
    var diseaseyear=$("#diseaseyear").val();
    var diseasename=$("#diseasename").val();
    var param =  "&identity="+identity+"&year="+diseaseyear+"&name="+diseasename;
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
                newjson[i].h_fees = data.diseases[i].h_fees;
                newjson[i].avg_hfees = data.diseases[i].avg_hfees;
                newjson[i].h_groupfees = data.diseases[i].h_groupfees;
                newjson[i].avg_groupfees = data.diseases[i].avg_groupfees;
                newjson[i].h_count = data.diseases[i].h_count;
            }
            var grid_selector = "#grid-table2";
            var pager_selector = "#grid-pager2";
            $('#grid-table2').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table2").jqGrid({
                data:newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份','名称',"住院统筹支付","均次住院统筹支付","住院人次"],
                colModel:
                    [
                        { name: 'year', index: "year", width: "10%", editable: true,align:"center"},
                        { name: 'name', index: 'name', width:  "40%",editable: true,align:"center" },
                        { name: 'h_groupfees', index: 'h_groupfees', width:  "20%", editable: true,align:"center",sorttype:'integer',formatter:'integer'},
                        { name: 'avg_groupfees', index: 'avg_groupfees', width:  "20%", editable: true,align:"center",sorttype:'integer',formatter:'integer'},
                        { name: 'h_count', index: 'h_count', width:  "10%", editable: true,align:"center",sorttype:'integer',formatter:'integer'}
                    ],
                pgbuttons:true,
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                width:680,
                autowidth: false,
                shrinkToFit:false,
                loadComplete: function() {
                    var grid = $("#grid-table2");
                    var ids = grid.getDataIDs();
                    for (var i = 0; i <=ids.length; i++) {
                        grid.setRowData ( ids[i], false, {height: 20+i*1.15} );
                    }
                    $("#grid-table").closest(".ui-jqgrid-bdiv").css({ 'overflow-x' : 'scroll' });
                    $("#grid-table").closest(".ui-jqgrid-bdiv").css({ 'overflow-y' : 'scroll' });
                },
                onCellSelect:function(rowid,iCol,cellcontent,e){
                    var d_name=cellcontent;
                    var param =  "&identity="+identity+"&year="+diseaseyear+"&d_name="+d_name;
                    $.ajax({
                        url: '/MIF/disease/getDetails',
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
                                newjson[i].h_groupfees =data.diseaseHospitals[i].h_groupfees;
                                newjson[i].avg_hgroupfees =data.diseaseHospitals[i].avg_hgroupfees;
                                newjson[i].m_count =data.diseaseHospitals[i].m_count;
                                newjson[i].h_count = data.diseaseHospitals[i].h_count;
                            }
                            var grid_selector = "#grid-table2";
                            var pager_selector = "#grid-pager2";
                            $('#grid-table2').jqGrid('GridUnload');          ///刷新grid框架
                            $("#grid-table2").jqGrid({
                                data: newjson,
                                datatype: "local",
                                height: "auto",
                                colNames: ['年份','编号',"医院等级","疾病名称","住院统筹支付","均次统筹支付","住院人次"],
                                colModel:
                                    [
                                        { name: 'year', index: "year", width: "5%",align:"center", editable: true},
                                        { name: 'h_name', index: 'h_name', width: "35%",align:"center",editable: true },
                                        { name: 'grade', index: 'grade', width: "5%",align:"center", editable: true},
                                        { name: 'd_name', index: 'd_name', width: "15%",align:"center",editable: true},
                                        { name: 'h_groupfees', index: 'h_groupfees', width: "15%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                                        { name: 'avg_hgroupfees', index: 'avg_hgroupfees', width: "15%", align:"center",editable: true,sorttype:'integer',formatter:'integer'},
                                        { name: 'h_count', index: 'h_count', width: "10%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                                    ],
                                rowNum: 10, //每页显示记录数
                                pager: pager_selector, //分页、按钮所在的浏览导航栏
                                viewrecords: true,
                                multiselect: true,
                                altRows: true, //设置为交替行表格,默认为false
                                loadonce: true,
                                multiboxonly: true, //是否只能点击复选框多选
                                caption: "详细信息", //表名
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
    var identity=$("#identity1").val();
    var diseaseyear=$("#diseaseyear").val();
    var diseasename=$("#diseasename").val();
    var param =  "&identity="+identity+"&year="+diseaseyear+"&name="+diseasename;
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
                newjson[i].h_fees = data.diseases[i].h_fees;
                newjson[i].avg_hfees = data.diseases[i].h_fees;
                newjson[i].h_groupfees = data.diseases[i].h_groupfees;
                newjson[i].avg_groupfees = data.diseases[i].avg_groupfees;
                newjson[i].h_count = data.diseases[i].h_count;
            }
            var grid_selector = "#grid-table2";
            var pager_selector = "#grid-pager2";
            $('#grid-table2').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table2").jqGrid({
                data:newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份','名称','住院费用',"均次住院费用","住院统筹支付","均次统筹支付","住院人次"],
                colModel:
                    [
                        { name: 'year', index: "year", width: 40, editable: true,align:"center"},
                        { name: 'name', index: 'name', width: 150,editable: true,align:"center"},
                        { name: 'h_fees', index: 'h_fees', width: 100, editable: true,align:"center",sorttype:'integer',formatter:'integer'},
                        { name: 'avg_hfees', index: 'avg_hfees', width: 100, editable: true,align:"center",sorttype:'integer',formatter:'integer'},
                        { name: 'h_groupfees', index: 'h_groupfees', width: 100, editable: true,align:"center",sorttype:'integer',formatter:'integer'},
                        { name: 'avg_groupfees', index: 'avg_groupfees', width: 100, editable: true,align:"center",sorttype:'integer',formatter:'integer'},
                        { name: 'h_count', index: 'h_count', width: 40, editable: true,align:"center",sorttype:'integer',formatter:'integer'}
                    ],
                pgbuttons:true,
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                caption: "详细信息", //表名
                autowidth: true,
                loadComplete: function() {
                    var grid = $("#grid-table2");
                    var ids = grid.getDataIDs();
                    for (var i = 0; i <=ids.length; i++) {
                        grid.setRowData ( ids[i], false, {height: 20+i*1.15} );
                    }
                },
                onCellSelect:function(rowid,iCol,cellcontent,e){
                    var d_name=cellcontent;
                    var param =  "&identity="+identity+"&year="+diseaseyear+"&d_name="+d_name;
                    $.ajax({
                        url: '/MIF/disease/getDetails',
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
                                newjson[i].h_groupfees =data.diseaseHospitals[i].h_groupfees;
                                newjson[i].m_count =data.diseaseHospitals[i].m_count;
                                newjson[i].h_count = data.diseaseHospitals[i].h_count;
                            }
                            var grid_selector = "#grid-table2";
                            var pager_selector = "#grid-pager2";
                            $('#grid-table2').jqGrid('GridUnload');          ///刷新grid框架
                            $("#grid-table2").jqGrid({
                                data: newjson,
                                datatype: "local",
                                height: "auto",
                                colNames: ['年份','编号',"医院等级","疾病名称","住院费用","住院统筹支付","住院人次"],
                                colModel:
                                    [
                                        { name: 'year', index: "year", width: "10%",align:"center", editable: true},
                                        { name: 'h_name', index: 'h_name', width: "20%",align:"center"},
                                        { name: 'grade', index: 'grade', width: "10%",align:"center", editable: true},
                                        { name: 'd_name', index: 'd_name', width: "20%",align:"center",editable: true},
                                        { name: 'h_fees', index: 'fees', width: "15%", align:"center",editable: true,sorttype:'integer',formatter:'integer'},
                                        { name: 'h_groupfees', index: 'h_groupfees', width: "15%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                                        { name: 'h_count', index: 'h_count', width: "10%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
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
                                autowidth: true //自动宽
                            });
                        }
                    });
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

//自动补全功能的实现
var availableTags = []
function queryByDrugname(){
    $.ajax({
        url:'/MIF/disease/query',
        type:'get',
        async:false,
        dataType:'json',
        success:function(data){
            var diseasename=[];                             ///只展示其中的几列
            for(var i = 0; i <data.diseases.length; i++){
                diseasename.push(data.diseases[i].name);
            }
            //对病种名进行去重
            var arr =[]
            for(var i=0,l=diseasename.length;i<l;i++){
                if(arr.indexOf(diseasename[i])==-1){
                    arr.push(diseasename[i])
                }
            }
            availableTags =arr;
        }
    });
}
$(function() {
    queryByDrugname();
    $("#diseasename").autocomplete({
        source: availableTags
    });
});

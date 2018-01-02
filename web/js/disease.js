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
                newjson[i].avg_hgroupfees = data.diseases[i].avg_hgroupfees;
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
                        { name: 'avg_hgroupfees', index: 'avg_hgroupfees', width:  "20%", editable: true,align:"center",sorttype:'integer',formatter:'integer'},
                        { name: 'h_count', index: 'h_count', width:  "10%", editable: true,align:"center",sorttype:'integer',formatter:'integer'}
                    ],
                pgbuttons:true,
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                width:680,
                autowidth: true,
                loadComplete: function() {
                    var grid = $("#grid-table2");
                    var ids = grid.getDataIDs();
                    for (var i = 0; i <=ids.length; i++) {
                        grid.setRowData ( ids[i], false, {height: 20+i*1.15} );
                    }
                    $("#grid-table").closest(".ui-jqgrid-bdiv").css({ 'overflow-x' : 'scroll' });
                    $("#grid-table").closest(".ui-jqgrid-bdiv").css({ 'overflow-y' : 'scroll' });
                },
                onSelectRow: function(id,status,e){
                    var row = $("#grid-table2").jqGrid('getRowData',id);
                    var d_name=row.name;
                    window.location.href='disease_details.jsp?identity='+identity +'&year='+ diseaseyear+'&d_name='+d_name;
                }
            });
            $("#grid-table2").jqGrid('navGrid','#grid-pager2',{del:false,add:false,edit:false},{},{},{},{multipleSearch:true});
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

//对获得到的数据按照年份进行排序
function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
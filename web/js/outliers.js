/**
 * Created by sirius on 17-7-4.
 */


function selectResult()
{

    $.ajax({
        url:'/MIF/outliers/init',
        type:'get',

        dataType:'json',
        success:function(data){
            var newjson=[];                             ///只展示其中的几列

            for(var i = 0; i <data.outliers.length; i++){
                newjson[i] = new Object();
                newjson[i].hospitalization_num = data.outliers[i].hospitalization_num;
                newjson[i].fee_a = data.outliers[i].fee_a;
                newjson[i].fee_b = data.outliers[i].fee_b;
                newjson[i].fee_c = data.outliers[i].fee_c;
                newjson[i].drug_fee_a = data.outliers[i].drug_fee_a;
                newjson[i].drug_fee_b = data.outliers[i].drug_fee_b;
                newjson[i].drug_fee_c = data.outliers[i].drug_fee_c;
                newjson[i].score = data.outliers[i].score;

            };
            var grid_selector = "#grid-table";
            var pager_selector = "#grid-pager";
            var line = echarts.init(document.getElementById('detail-information'))
            $('#grid-table').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table").jqGrid({
                data:newjson,
                datatype: "local",
                height: "auto",
                colNames: ['住院编号','甲类费用',"乙类费用","非基本费用","甲类药品费用","乙类药品费用","非基本药品费用","异常值"],
                colModel:
                    [
                        { name: 'hospitalization_num', index: "hospitalization_num", width: "25%",align:"center", editable: true},
                        { name: 'fee_a', index: 'fee_b', width: "10%",align:"center",editable: true ,sorttype:'float',formatter:'float',sortable:true,sortorder :"desc"},
                        { name: 'fee_b', index: 'fee_b', width: "10%", align:"center",editable: true,sorttype:'float',formatter:'float',sortable:true,sortorder :"desc"},
                        { name: 'fee_c', index: 'fee_a', width: "10%",align:"center", editable: true,sorttype:'float',formatter:'float',sortable:true,sortorder :"desc"},
                        { name: 'drug_fee_a', index: 'drug_fee_a', width: "10%",align:"center", editable: true,sorttype:'float',formatter:'float',sortable:true,sortorder :"desc"},
                        { name: 'drug_fee_b', index: 'drug_fee_b', width: "10%", align:"center",editable: true,sorttype:'float',formatter:'float',sortable:true,sortorder :"desc"},
                        { name: 'drug_fee_c', index: 'drug_fee_c', width: "10%",align:"center", editable: true,sorttype:'float',formatter:'float',sortable:true,sortorder :"desc"},
                        { name: 'score', index: 'score', width: "10%",align:"center", editable: true,sorttype:'float',formatter:'float',sortable:true,sortorder :"desc"},
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


            });
            $("#grid-table").jqGrid('navGrid','#grid-pager',{del:false,add:false,edit:false},{},{},{},{multipleSearch:true});
        }
    });
}

function back()
{
    selectResult();
}
back()
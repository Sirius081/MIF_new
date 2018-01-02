/**
 * Created by sirius on 17-7-4.
 */


function selectResult()
{
    var hospitalization_num=$("#hospitalization_num").val();
    var hospital_num=$("#hospital_num").val();

    var param="hospitalization_num="+hospitalization_num+'&hospital_num='+hospital_num;
    $.ajax({
        url:'/MIF/outliers/query',
        type:'get',
        data:param,
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
                onSelectRow: function(id,status,e){

                    var row = $("#grid-table").jqGrid('getRowData',id);
                    var hospitalization_num=row.hospitalization_num;
                    var param='&hospitalization_num='+hospitalization_num;
                    $.ajax({
                        url: '/MIF/outliers/details',
                        type: 'get',
                        data: param,
                        dataType: 'json',
                        success: function (data) {
                            var newjson = [];                             ///只展示其中的几列
                            for (var i = 0; i < data.hospitalizationDetails.length; i++) {
                                newjson[i] = new Object();
                                newjson[i].treatment_name = data.hospitalizationDetails[i].treatment_name;
                                newjson[i].price = data.hospitalizationDetails[i].price;
                                newjson[i].cnt = data.hospitalizationDetails[i].cnt;
                                newjson[i].total_fee =data.hospitalizationDetails[i].total_fee;
                                newjson[i].percentile = data.hospitalizationDetails[i].percentile+'%';
                                newjson[i].percentage = data.hospitalizationDetails[i].percentage+'%';
                            }
                            var grid_selector = "#grid-table";
                            var pager_selector = "#grid-pager";
                            $('#grid-table').jqGrid('GridUnload');          ///刷新grid框架
                            $("#grid-table").jqGrid({
                                data: newjson,
                                datatype: "local",
                                height: "auto",
                                colNames: ['名称','单价',"数量","总价","有%的人用了","超过了%的人"],
                                colModel:
                                    [
                                        { name: 'treatment_name', index: "treatment_name", width: "30%",align:"center", editable: true},
                                        { name: 'price', index: 'price', width: "15%",align:"center",editable: true,sorttype:'integer',formatter:'integer' },
                                        { name: 'cnt', index: 'cnt', width: "15%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                                        { name: 'total_fee', index: 'total_fee', width: "15%", align:"center",editable: true,sorttype:'integer',formatter:'integer'},
                                        { name: 'percentage', index: 'percentage', width: "25%", align: "center",editable: true,sorttype:'integer'},
                                        { name: 'percentile', index: 'percentile', width: "25%", align: "center",editable: true,sorttype:'integer'},


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

                            $("#grid-table").jqGrid('navGrid','#grid-pager',{del:false,add:false,edit:false},{},{},{},{multipleSearch:true});

                        }
                    });
                }


            });
            $("#grid-table").jqGrid('navGrid','#grid-pager',{del:false,add:false,edit:false},{},{},{},{multipleSearch:true});
        }
    });
}

function back()
{
    window.location.reload();
    javascript:location.reload();
    //selectResult();
}
//back()
selectResult();
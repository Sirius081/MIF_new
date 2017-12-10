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
                onSelectRow: function(id,status,e){
                    var row = $("#grid-table").jqGrid('getRowData',id);
                    var hospitalization_num=row.hospitalization_num;
                    var param="&identity="+identity+'&hospitalization_num='+hospitalization_num;
                    $.ajax({
                        url: '/MIF/outliers/getDetails',
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
                                newjson[i].h_groupfees =data.hospitals[i].h_groupfees;
                                newjson[i].avg_hgroupfees =data.hospitals[i].avg_hgroupfees;
                                newjson[i].m_groupfees =data.hospitals[i].h_groupfees;
                                newjson[i].avg_mgroupfees =data.hospitals[i].avg_mgroupfees;
                                newjson[i].m_count =data.hospitals[i].m_count;
                                newjson[i].h_count = data.hospitals[i].h_count;
                            }
                            var grid_selector = "#grid-table";
                            var pager_selector = "#grid-pager";
                            $('#grid-table').jqGrid('GridUnload');          ///刷新grid框架
                            $("#grid-table").jqGrid({
                                data: newjson,
                                datatype: "local",
                                height: "auto",
                                colNames: ['年份','医疗机构代码',"医院等级","住院统筹支付","均次住院统筹支付","门诊统筹支付","均次门诊统筹支付","住院人次","门诊人次"],
                                colModel:
                                    [
                                        { name: 'year', index: "year", width: "4%",align:"center", editable: true},
                                        { name: 'h_name', index: 'h_name', width: "28%",align:"center",editable: true },
                                        { name: 'grade', index: 'grade', width: "8%",align:"center", editable: true},
                                        { name: 'h_groupfees', index: 'fees', width: "10%", align:"center",editable: true,sorttype:'integer',formatter:'integer'},
                                        { name: 'avg_hgroupfees', index: 'avg_hgroupfees', width: "12%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                                        { name: 'm_groupfees', index: 'm_groupfees', width: "10%", align:"center",editable: true,sorttype:'integer',formatter:'integer'},
                                        { name: 'avg_mgroupfees', index: 'avg_mfees', width: "12%", align:"center",editable: true,sorttype:'integer',formatter:'integer'},
                                        { name: 'h_count', index: 'h_count', width: "8%",align:"center", editable: true,sorttype:'integer',formatter:'integer'},
                                        { name: 'm_count', index: 'm_count', width: "8%",align:"center", editable: true,sorttype:'integer',formatter:'integer'}

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
                            ///绘制该区县历年统筹费用支出折线图
                            var param = "&identity="+identity+"&r_name="+r_name;
                            $.ajax({
                                url:'/MIF/region/query',
                                type:'get',
                                data:param,
                                dataType:'json',
                                success:function(data) {
                                    var map={}
                                    var year=[];
                                    var h_groupfees=[]
                                    //var region = sortByKey(data.regions, 'year');  //对获得到的结果按照年份进行排序
                                    for (var i = 0; i < data.regions.length; i++) {
                                        if(data.regions[i].year>'2005' && data.regions[i].year<'2016'){
                                            year.push(data.regions[i].year);
                                            h_groupfees.push(data.regions[i].h_groupfees)
                                            map[data.regions[i].year]=data.regions[i].h_groupfees;
                                        }
                                    }
                                    option = {
                                        title: {
                                            text: r_name+'统筹费用支出变化（按年份）'
                                        },
                                        tooltip: {
                                            trigger: 'axis'
                                        },
                                        legend: {
                                            show: true,
                                            x: 'right',
                                            y: 'top',
                                            data: ['统筹费用支出变化']
                                        },
                                        toolbox: {
                                            feature: {
                                                saveAsImage: {}
                                            }
                                        },
                                        grid: {
                                            left: '3%',
                                            right: '4%',
                                            bottom: '3%',
                                            containLabel: true
                                        },
                                        xAxis: [
                                            {
                                                type: 'category',
                                                boundaryGap: false,
                                                data: year
                                            }
                                        ],
                                        yAxis: [
                                            {
                                                type: 'value'
                                            }
                                        ],
                                        series: [
                                            {
                                                name: '均次统筹费用',
                                                type: 'line',
                                                stack: '总量1',
                                                data: h_groupfees
                                            }
                                        ]
                                    }
                                    //为echarts对象加载数据
                                    line.setOption(option);
                                }
                            });
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
    selectResult();
}
back()
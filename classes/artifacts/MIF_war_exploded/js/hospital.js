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
                colNames: ['编号', '费用'],
                colModel: [
                    {name: 'h_name', index: 'h_name', width: "70%", align: "center", editable: true},
                    {name: "h_fees", index: "h_fees", width: "30%", align: "center", sorttype: 'integer', formatter: 'integer'},
                ],
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                multiselect: true, //是否多选
                multiboxonly: true, //是否只能点击复选框多选
                autowidth: true,
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

function selectResult()
{
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
                newjson[i].h_groupfees = data.hospitals[i].h_groupfees;
                newjson[i].avg_hgroupfees = data.hospitals[i].avg_hgroupfees;
                newjson[i].m_groupfees = data.hospitals[i].m_groupfees;
                newjson[i].avg_mgroupfees = data.hospitals[i].avg_mgroupfees;
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
                colNames: ['年份', '编号', "医院等级", "住院统筹支付", "均次住院统筹支付", "门诊统筹支付", "均次门诊统筹支付"],
                colModel: [
                    {name: 'year', index: "year", width: "5%", align: "center", editable: true},
                    {name: 'h_name', index: 'h_name', width: "35%", align: "center", editable: true},
                    {name: 'grade', index: 'grade', width: "8%", align: "center", editable: true},
                    {name: 'h_groupfees', index: 'h_groupfees', width: "12%", align: "center", editable: true, sorttype: 'integer', formatter: 'integer'},
                    {name: 'avg_hgroupfees', index: 'avg_hgroupfees', width: "14%", align: "center", editable: true, sorttype: 'integer', formatter: 'integer'},
                    {name: 'm_groupfees', index: 'm_groupfees', width: "12%", align: "center", editable: true, sorttype: 'integer', formatter: 'integer'},
                    {name: 'avg_mgroupfees', index: 'avg_mgroupfees', width: "14%", align: "center", editable: true, sorttype: 'integer', formatter: 'integer'},
                ],
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                viewrecords: true,
                altRows: true, //设置为交替行表格,默认为false
                loadonce:true,
                multiboxonly: true, //是否只能点击复选框多选
                autowidth: true, //自动宽
                multiselect:true,
                loadComplete: function() {
                    var grid = $("#grid-table2");
                    var ids = grid.getDataIDs();
                    for (var i = 0; i <=ids.length; i++) {
                        grid.setRowData ( ids[i], false, {height: 20+i*1.15} );
                    }
                    $("#grid-table").closest(".ui-jqgrid-bdiv").css({ 'overflow-x' : 'scroll' });
                    $("#grid-table").closest(".ui-jqgrid-bdiv").css({ 'overflow-y' : 'scroll' });
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
            $("#grid-table2").jqGrid('navGrid','#grid-pager2',{del:false,add:false,edit:false},{},{},{},{multipleSearch:true});
        }
    });
}
function back() {
    window.location.reload();
    selectResult();
}


function getSelecteds() {
//获取多选到的id集合
    var ids = $("#grid-table2").jqGrid("getGridParam", "selarrrow");
//遍历访问这个集合
    var h_name1="";
    var h_name2="";
    var row1 = $("#grid-table2").jqGrid('getRowData', ids[0]);
    h_name1=row1.h_name;
    var row2 = $("#grid-table2").jqGrid('getRowData', ids[1]);
    h_name2=row2.h_name;
    var param1 = '&h_name=' + h_name1;
    var param2 = '&h_name=' + h_name2;
    var year = [];
    var fees1 = [];
    var fees2=[];
    var line = echarts.init(document.getElementById('detail-information'))
    option = {
        title: {
            text: '医院均次统筹费用变化（按年份）'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            show: true,
            x: 'right',
            y: 'top',
            data: ['均次统筹费用变化']
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
                data: [2010,2011,2012,2013,2014,2015]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: []
    }
    $.ajax({
        url: '/MIF/hospital/detectAvgGroup',
        type: 'get',
        data: param1,
        dataType: 'json',
        success: function (data) {
            var map1={
                '2010':0,
                '2011':0,
                '2012':0,
                '2013':0,
                '2014':0,
                '2015':0
            }
            //var disease = sortByKey(data.diseases, 'year');  //对获得到的结果按照年份进行排序
            for (var i = 0; i < data.hospitalADs.length; i++) {
                map1[data.hospitalADs[i].year]=data.hospitalADs[i].actual
            }
            //for (var i = 0; i < hospitalAD.length; i++) {
            //    year.push(hospitalAD[i].year);
            //    fees1.push(hospitalAD[i].actual);
            //}
            option.series.push({
                name: h_name1,
                type: 'line',
                stack: '总量1',
                data: [map1[2010],map1[2011],map1[2012],map1[2013],map1[2014],map1[2015]]})
            line.setOption(option);
        }
    });
    $.ajax({
        url: '/MIF/hospital/detectAvgGroup',
        type: 'get',
        data: param2,
        dataType: 'json',
        success: function (data) {
            var map2={
                '2010':0,
                '2011':0,
                '2012':0,
                '2013':0,
                '2014':0,
                '2015':0
            }
            for (var i = 0; i < data.hospitalADs.length; i++) {
                map2[data.hospitalADs[i].year]=data.hospitalADs[i].actual
            }
            option.series.push({
                    name: h_name2,
                    type: 'line',
                    data: [map2[2010],map2[2011],map2[2012],map2[2013],map2[2014],map2[2015]]
                }
            )
            line.setOption(option);
        }
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
    var h_grade=row.grade;
    var param = "&identity=" + identity + '&grade=' + grade + '&h_name=' + h_name + '&year=' + year;
    var param1 = '&h_name=' + h_name;
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
                newjson[i].h_groupfees = data.diseaseHospitals[i].h_groupfees;
                newjson[i].avg_hgroupfees = data.diseaseHospitals[i].avg_hgroupfees;
                newjson[i].h_count = data.diseaseHospitals[i].h_count;
            }
            var grid_selector = "#grid-table2";
            var pager_selector = "#grid-pager2";
            $('#grid-table2').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table2").jqGrid({
                data: newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份', '医疗机构代码', "医院等级", "疾病名称", "住院统筹支付", "均次住院统筹费用", "住院人次"],
                colModel: [
                    {name: 'year', index: "year", width: "5%", align: "center", editable: true},
                    {name: 'h_name', index: 'h_name', width: "35%", align: "center", editable: true},
                    {name: 'grade', index: 'grade', width: "5%", align: "center", editable: true},
                    {name: 'd_name', index: 'd_name', width: "15%", align: "center", editable: true},
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
                        name: 'avg_hgroupfees',
                        index: 'avg_hgroupfees',
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
    var param2 = "&identity=" + identity + '&grade=' + grade+ '&year=' + year;
    $.ajax({
        url: '/MIF/hospital/query',
        type: 'get',
        data: param2,
        dataType: 'json',
        success: function (data) {
            var fees1=0;                     //费用区间段划分
            var fees2=0;
            var fees3=0;
            var fees4=0;
            var fees5=0;
            var fees6=0;
            var fees7=0;
            var fees8=0;
            var fees9=0;
            var fees10=0;
            var fees11=0;
            for (var i = 0; i < data.hospitals.length; i++) {
                var avg_hgroupfees = parseInt(data.hospitals[i].avg_hgroupfees);
                if(avg_hgroupfees<1000)
                    fees1=fees1+1;
                else if(avg_hgroupfees>=1000&&avg_hgroupfees<2000)
                    fees2=fees2+1;
                else if(avg_hgroupfees>=2000&&avg_hgroupfees<3000)
                    fees3=fees3+1;
                else if(avg_hgroupfees>=3000&&avg_hgroupfees<4000)
                    fees4=fees4+1;
                else if(avg_hgroupfees>=4000&&avg_hgroupfees<5000)
                    fees5=fees5+1;
                else if(avg_hgroupfees>=5000&&avg_hgroupfees<6000)
                    fees6=fees6+1;
                else if(avg_hgroupfees>=6000&&avg_hgroupfees<7000)
                    fees7=fees7+1;
                else if(avg_hgroupfees>=7000&&avg_hgroupfees<8000)
                    fees8=fees8+1;
                else if(avg_hgroupfees>=8000&&avg_hgroupfees<9000)
                    fees9=fees9+1;
                else if(avg_hgroupfees>=9000&&avg_hgroupfees<10000)
                    fees10=fees10+1;
                else if(avg_hgroupfees>=10000)
                    fees11=fees11+1;
            }
            var line1 = echarts.init(document.getElementById('detail-information1'))
            //获得当前选中的医院的均次统筹费用支出
            var groupfees=parseInt(row.avg_hgroupfees);
            //找出当前所选医院所属区间范围
            var flag=0;
            if(groupfees<1000)
                flag='0-1000';
            else if(groupfees>=1000&&groupfees<2000)
                flag='1000-2000';
            else if(groupfees>=2000&&groupfees<3000)
                flag='2000-3000';
            else if(groupfees>=3000&&groupfees<4000)
                flag='3000-4000';
            else if(groupfees>=4000&&groupfees<5000)
                flag='4000-5000';
            else if(groupfees>=5000&&groupfees<6000)
                flag='5000-6000';
            else if(groupfees>=6000&&groupfees<7000)
                flag='6000-7000';
            else if(groupfees>=7000&&groupfees<8000)
                flag='7000-8000';
            else if(groupfees>=8000&&groupfees<9000)
                flag='8000-9000';
            else if(groupfees>=9000&&groupfees<10000)
                flag='9000-10000';
            else if(groupfees>=10000)
                flag='10000以上';
            var dataMap={'0-1000':fees1,
                '1000-2000':fees2,
                '2000-3000':fees3,
                '3000-4000':fees4,
                '4000-5000':fees5,
                '5000-6000':fees6,
                '6000-7000':fees7,
                '7000-8000':fees8,
                '8000-9000':fees9,
                '9000-10000':fees10,
                '10000以上':fees11
            }
            var y_value=dataMap[flag];
            option = {
                title: {
                    text: year+'年'+h_grade+'医院均次统筹费用分布频率图'
                },
                color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['0-1000', '1000-2000', '2000-3000', '3000-4000', '4000-5000',
                            '5000-6000', '6000-7000', '7000-8000', '8000-9000', '9000-10000', '10000以上'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {type : 'value'}],
                series : [
                    {
                        name: '均次统筹支付费用分布频率',
                        type: 'bar',
                        barWidth: '60%',
                        data: [fees1, fees2, fees3, fees4, fees5, fees6, fees7, fees8, fees9, fees10, fees11],
                        markPoint: {
                            data: [
                                { name: '当前医院均次统筹费用', value: groupfees, xAxis: flag, yAxis:y_value},
                            ]
                        }
                    }
                ]
            };
            line1.setOption(option);
        }
    });
    $.ajax({
        url: '/MIF/hospital/detectAvgGroup',
        type: 'get',
        data: param1,
        dataType: 'json',
        success: function (data) {
            var year = [];
            var fees = [];
            for (var i = 0; i < data.hospitalADs.length; i++) {
                    year.push(data.hospitalADs[i].year);
                    fees.push(data.hospitalADs[i].actual);
                }
                var line = echarts.init(document.getElementById('detail-information'))
                option = {
                    title: {
                        text: '医院均次统筹费用变化（按年份）'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        show: true,
                        x: 'right',
                        y: 'top',
                        data: ['均次统筹费用变化']
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
                            data: fees
                        }
                    ]
                }
                //为echarts对象加载数据
                line.setOption(option);
            }
    });
}
//自动补全功能的实现
var availableTags = []
function queryByDrugname(){
    $.ajax({
        url:'/MIF/hospital/query',
        type:'get',
        async:false,
        dataType:'json',
        success:function(data){
            var h_name=[];                             ///只展示其中的几列
            for(var i = 0; i <data.hospitals.length; i++){
                h_name.push(data.hospitals[i].h_name);
            }
            //对医院名进行去重

            var arr =[]
            for(var i=0,l=h_name.length;i<l;i++){
                if(arr.indexOf(h_name[i])==-1){
                    arr.push(h_name[i])
                }
            }
            availableTags =arr;
        }
    });
}
$(function () {
    queryByDrugname();
    $("#hospitalnum").autocomplete({
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
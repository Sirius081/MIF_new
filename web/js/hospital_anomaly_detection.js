/**
 * Created by sirius on 18-1-9.
 */
//页面一加载显示top10

function selectResult()
{
    var identity = $("#identity1").val();
    var year = $("#hospitalyear").val();
    var grade = $("#hospitallevel").val();
    var h_name = $("#hospitalname").val();
    var param = "&identity=" + identity + '&grade=' + grade + '&h_name=' + h_name + '&year=' + year;
    $.ajax({
        url: '/MIF/hospital/queryHospitalOutlier',
        type: 'get',
        data: param,
        dataType: 'json',
        success: function (data) {
            var newjson = [];                             ///只展示其中的几列
            for (var i = 0; i < data.hospitalOutliers.length; i++) {
                newjson[i] = new Object();
                newjson[i].year = data.hospitalOutliers[i].year;
                newjson[i].h_name = data.hospitalOutliers[i].h_name;
                newjson[i].grade = data.hospitalOutliers[i].grade;
                newjson[i].h_groupfees = data.hospitalOutliers[i].h_groupfees;
                newjson[i].avg_hgroupfees = data.hospitalOutliers[i].avg_hgroupfees;
                newjson[i].m_groupfees = data.hospitalOutliers[i].m_groupfees;
                newjson[i].avg_mgroupfees = data.hospitalOutliers[i].avg_mgroupfees;
                newjson[i].score = data.hospitalOutliers[i].score;
                newjson[i].fake_name = data.hospitalOutliers[i].fake_name;
            }
            var grid_selector = "#grid-table2";
            var pager_selector = "#grid-pager2";
            $('#grid-table2').jqGrid('GridUnload');          ///刷新grid框架
            $("#grid-table2").jqGrid({
                data:newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份','医院名', '编号', "医院等级", "住院统筹支付", "均次住院统筹支付", "门诊统筹支付", "均次门诊统筹支付", "异常值"],
                colModel: [
                    {name: 'year', index: "year", width: "5%", align: "center", editable: true},
                    {name: 'fake_name', index: 'fake_name', width: "35%", align: "center", editable: true},
                    {name: 'h_name', index: 'h_name', width: "0%", align: "center", editable: true},
                    {name: 'grade', index: 'grade', width: "8%", align: "center", editable: true},
                    {name: 'h_groupfees', index: 'h_groupfees', width: "12%", align: "center", editable: true, sorttype: 'integer', formatter: 'integer'},
                    {name: 'avg_hgroupfees', index: 'avg_hgroupfees', width: "14%", align: "center", editable: true, sorttype: 'integer', formatter: 'integer'},
                    {name: 'm_groupfees', index: 'm_groupfees', width: "12%", align: "center", editable: true, sorttype: 'integer', formatter: 'integer'},
                    {name: 'avg_mgroupfees', index: 'avg_mgroupfees', width: "14%", align: "center", editable: true, sorttype: 'integer', formatter: 'integer'},
                    {name: 'score', index: 'score', width: "14%", align: "center", editable: true, sorttype: 'integer', formatter: 'integer'},
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
                },
                onSortCol: function (index, colindex, sortorder)
                {
                    //列排序事件，向server传值，值为当前的页数
                    if(index=='score'&& sortorder=='asc'){             //当点击异常检测按钮时，给出异常值的相关解释
                        $('#myModal').modal('show')          //显示模态框
                    }
                }
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
    var row1 = $("#grid-table2").jqGrid('getRowData', ids[0]);
    var h_name1=row1.h_name;
    var row2 = $("#grid-table2").jqGrid('getRowData', ids[1]);
    var h_name2=row2.h_name;
    window.location.href='hospital_compare.jsp?h_name1=' + h_name1 + '&h_name2=' + h_name2;
}

function getDetails() {
//获取多选到的id集合

    //window.location.href('hospital_details.jsp');
    var identity = $("#identity1").val();
    var year = $("#hospitalyear").val();
    var grade = $("#hospitallevel").val();
    var rowid = $("#grid-table2").jqGrid("getGridParam", "selrow");
    var row = $("#grid-table2").jqGrid('getRowData', rowid);
    var h_name = row.h_name;
    var h_grade=row.grade;
    var avg_hgroupfees=row.avg_hgroupfees
    var param = "&identity=" + identity + '&grade=' + grade + '&h_name=' + h_name + '&year=' + year;
    var param1 = '&h_name=' + h_name;
    window.location.href='hospital_ad_detail.jsp?identity=' + identity + '&grade=' + grade + '&h_name=' + h_name + '&year=' + year+'&avg_hgroupfees='+avg_hgroupfees;
}

//对获得到的数据按照年份进行排序
function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

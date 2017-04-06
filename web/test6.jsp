<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="zh-cn">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>泸州市医保基金预测可视化平台</title>
  <link href="css/bootstrap.min.css" rel='stylesheet' type='text/css'/>
  <link href="css/bootstrap.css" rel='stylesheet' type='text/css'/>
  <link href="css/common.css" rel="stylesheet"/>
  <link href="css/spider.css" rel="stylesheet"/>
  <link rel="stylesheet" type="text/css" href="css/ui.jqgrid.css" />
  <link rel="stylesheet" type="text/css" href="css/jquery-ui-1.10.4.custom.css" />
  <link rel="stylesheet" type="text/css" href="css/theme.css" />


  <script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/common.js"></script>
  <script type="text/javascript" src="js/sub-menu.js"></script>
  <script type="text/javascript" src="js/grid.locale-cn.js"  charset="utf-8"></script>
  <script type="text/javascript"src="js/jquery.jqGrid.min.js"  charset="utf-8"></script>

  <!--自动刷新页面，3分钟一刷新-->
  <!--<meta http-equiv="refresh" content="100">-->

</head>

<body>
<table id="gridTable"></table>
<div id="gridPager"></div>
<script>
  $(function()
  {
    var mydata = [
      {id:"1",userName:"polaris",gender:"男",email:"fef@163.com",QQ:"33334444",mobilePhone:"13223423424",birthday:"1985-10-01"},
      {id:"2",userName:"李四",gender:"女",email:"faf@gmail.com",QQ:"222222222",mobilePhone:"13223423",birthday:"1986-07-01"},
      {id:"3",userName:"王五",gender:"男",email:"fae@163.com",QQ:"99999999",mobilePhone:"1322342342",birthday:"1985-10-01"},
      {id:"4",userName:"马六",gender:"女",email:"aaaa@gmail.com",QQ:"23333333",mobilePhone:"132234662",birthday:"1987-05-01"},
      {id:"5",userName:"赵钱",gender:"男",email:"4fja@gmail.com",QQ:"22222222",mobilePhone:"1343434662",birthday:"1982-10-01"},
      {id:"6",userName:"小毛",gender:"男",email:"ahfi@yahoo.com",QQ:"4333333",mobilePhone:"1328884662",birthday:"1987-12-01"},
      {id:"7",userName:"小李",gender:"女",email:"note@sina.com",QQ:"21122323",mobilePhone:"13220046620",birthday:"1985-10-01"},
      {id:"8",userName:"小三",gender:"男",email:"oefh@sohu.com",QQ:"242424366",mobilePhone:"1327734662",birthday:"1988-12-01"},
      {id:"9",userName:"孙先",gender:"男",email:"76454533@qq.com",QQ:"76454533",mobilePhone:"132290062",birthday:"1989-11-21"}
    ];
    $("#grid-table").jqGrid({
      data:mydata,
      datatype: "local",
      height: "auto",
      colNames:['编号','用户名', '性别', '邮箱', 'QQ','手机号','出生日期'],
      colModel:[
        {name:'id',index:'id', width:60, sorttype:"int"},
        {name:'userName',index:'userName', width:90},
        {name:'gender',index:'gender', width:90},
        {name:'email',index:'email', width:125,sorttype:"string"},
        {name:'QQ',index:'QQ', width:100},
        {name:'mobilePhone',index:'mobilePhone', width:120},
        {name:'birthday',index:'birthday', width:100, sorttype:"date"}
      ],
      sortname:'id',
      sortorder:'asc',
      viewrecords:true,
      rowNum:10,
      multiselect:true,
      rowList:[10,20,30],
      pager:"#gridPager",
      caption: "第一个jqGrid例子",
      loadComplete: function() {
        var grid = $("#grid-table");
        var ids = grid.getDataIDs();
        for (var i = 0; i <=ids.length; i++) {
          grid.setRowData ( ids[i], false, {height: 20+i*1.15} );
        }
      }
    });

  });
</script>
</body>

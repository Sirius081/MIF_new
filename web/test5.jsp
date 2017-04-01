<%@ page contentType="text/html;charset=UTF-8" language="java" %>
 <HTML>
 <HEAD>
   <TITLE> New Document </TITLE>
  <META NAME="Generator" CONTENT="EditPlus">
   <META NAME="Author" CONTENT="">
   <META NAME="Keywords" CONTENT="">
   <META NAME="Description" CONTENT="">
   <script language="JavaScript" type="text/javascript">
      //定义了城市的二维数组，里面的顺序跟省份的顺序是相同的。通过selectedIndex获得省份的下标值来得到相应的城市数


  </script>
</HEAD>

<BODY>
 <FORM name="form1">
          <SELECT NAME="province" onChange="getCity()">
            <OPTION VALUE="0">请选择所在省份 </OPTION>
            <OPTION VALUE="直辖市">总体趋势 </OPTION>
            <OPTION VALUE="江苏省">参保人群细分 </OPTION>
       </SELECT>
        <SELECT NAME="city">
             <OPTION VALUE="0">请选择所在城市 </OPTION>
     </SELECT>
    </FORM>
</BODY>
 <script type="text/javascript" src="js/payment.js" charset="utf-8"></script>
</HTML>

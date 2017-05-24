window.S = {};
(function () {
    var S = window.S;
    var $window = $(window);
    var tempType = "";

    $(function () {

    })

    $(document).ready(function () {

        //如果需要js动态效果的话，在这里操作
    })
    //获取爬取的总文章数和已经爬取的文章数

    S.fresh = {
        $container: $('.content'),
        initialized: false,
        freshSourceTable: function () {
            if (S.dataSourceList.type != null && S.dataSourceList.type != "") {
                S.dataSourceList.request(S.dataSourceList.type);
            }
            else {
                S.dataSourceList.request('entity');
            }
        },
    }

    S.showResult = {
        $container: $('.manager'),
        initialized: false,
        type: null,
        status: null,
        request: function (type) {
            var me = this;
            $.ajax({
                url: 'showSourceTable',
                method: 'get',
                dataType: 'json',
                data: {
                    type: type
                },//参数为六个类别
                success: function (Jdata) {

                    status = Jdata.status;
                    S.dataSourceList.type = type;
                    if (status == "stop") {
                        var html = "";
                        html += "<h1 style='text-align:center'>该模块未启动</h1>";
                        html += "<h1 style='text-align:center'>您可以点击\"开始\"按钮哦~</h1>";
                        $('#source_table_content').html(html);
                    }
                    S.dataSourceList.request(S.dataSourceList.type);
                },
                error: function () {
                    var html = "";
                    html += "<h2 style='text-align:center'>sorry~</h2><h4 style='text-align:center'>后台还没有准备好数据哟~等会再试试吧~</h4><img class='sorry' id='detail_sorry'  align='center' src='img/sorry.jpg'/>";
                    $('#source_table_content').html(html);
                },
                complete: function () {

                }
            });
        },
    }

    S.controler = {
        $container: $('.manager'),
        initialized: false,
        type: null,
        state: null,
        request: function (type, state) {

            var me = this;
            $.ajax({
                url: 'controlModules',
                method: 'get',
                dataType: 'json',
                data: {
                    type: type,
                    state: state
                },//参数为六个类别
                success: function (Jdata) {
                    var message = Jdata.message;
                    if (message != "")
                        alert(message);
                    S.dataSourceList.type = type;
                    S.dataSourceList.request(S.dataSourceList.type);
                },
                error: function () {
                    var html = "";
                    html += "<h2 style='text-align:center'>sorry~</h2><h4 style='text-align:center'>后台还没有准备好数据哟~等会再试试吧~</h4><img class='sorry' id='detail_sorry'  align='center' src='img/sorry.jpg'/>";
                    $('#source_table_content').html(html);
                },
                complete: function () {

                }
            });

        }

    }

    //获取某个类别的爬虫数据,处理
    S.dataSourceList = {
        $container: $('.manager'),
        initialized: false,
        type: "",
        processingSourceName: "",
        completedDataSourceStatus: null,
        noUpdateDataSourceStatus: null,
        dataSourceStatus: null,
        clickSourceName: "",
        isCirculation: false,

        request: function (type) {

            var me = this;
            $.ajax({
                //url: 'http://58.198.176.40:8080/EduServer/dataSourceList',//在这里发ajax申请
                url: 'getDataSourceList',
                method: 'get',
                dataType: 'json',
                data: {
                    type: type
                },//参数为六个类别
                success: function (Jdata) {

                    S.dataSourceList.type = type;
                    if (tempType != S.dataSourceList.type) {
                        tempType = S.dataSourceList.type;
                        S.dataSourceList.clickSourceName = "";
                        S.dataSourceList.tempClickSourceName = "";
                        S.dataSourceList.isCirculation = false;
                    }
                    S.dataSourceList.dataSourceStatus = Jdata.dataSourceStatus;
                    S.dataSourceList.completedDataSourceStatus = Jdata.completedDataSourceStatus;
                    S.dataSourceList.noUpdateDataSourceStatus = Jdata.noUpdateDataSourceStatus;
                    var status = Jdata.status;

                    if (status == "stop") {
                        var html = "";
                        html += "<h1 style='text-align:center' >该模块未启动</h1>";
                        html += "<h1 style='text-align:center'>您可以点击\"开始\"按钮哦~</h1>";
                        $('#source_table_content').html(html);
                        S.infoDetail.get_detail(S.dataSourceList.type, null, "", "");
                    } else {
                        if (S.dataSourceList.dataSourceStatus != null && S.dataSourceList.completedDataSourceStatus != null && S.dataSourceList.noUpdateDataSourceStatus != null
                            && (S.dataSourceList.dataSourceStatus.length + S.dataSourceList.completedDataSourceStatus.length + S.dataSourceList.noUpdateDataSourceStatus.length) > 0) {//处理当前类别没有产品出现的情况
                            S.dataSourceList.freshSourceTable();
                        }
                        else {
                            if (status == "TERMINATED") {
                                var html = "";
                                html += "<h1 style='text-align:center'>该模块程序已终止!</h1>";
                                $('#source_table_content').html(html);
                            } else if (status == "RUNNABLE") {
                                var html = "";
                                html += "<h1 style='text-align:center'>该模块已启动,正在请求数据!</h1>";
                                $('#source_table_content').html(html);
                            } else {
                                var html = "";
                                html += "<h1 style='text-align:center'>该模块程序处于等待中......</h1>";
                                $('#source_table_content').html(html);
                            }
                        }

                        if (S.dataSourceList.isCirculation == true || S.dataSourceList.clickSourceName == "")
                            S.infoDetail.get_detail(S.dataSourceList.type, S.dataSourceList.processingSourceName, "", "");
                    }

                },
                error: function () {
                    var html = "";
                    html += "<h1 style='text-align:center'>该模块未启动</h1>";
                    html += "<h1 style='text-align:center'>您可以点击\"开始\"按钮哦~</h1>";
                    $('#source_table_content').html(html);
                    S.infoDetail.get_detail(S.dataSourceList.type, null, "", "");
                },
                complete: function () {

                }
            });

        },

        freshSourceTable: function () {

            var html = "";
            var processingFlag = false;
            if (S.dataSourceList.dataSourceStatus.length > 0) {
                html += "<strong><i><h4>正在处理的数据源：</h4></i></strong>";
                //html += "<ul class='nav nav-tabs'>正在处理的数据源</ul>";
                for (var i = 0; i < S.dataSourceList.dataSourceStatus.length;) {
                    html += "<ul id ='sourceTab1' class='nav nav-tabs'>";
                    var totalLength = 0;
                    for (; i < S.dataSourceList.dataSourceStatus.length;) {

                        totalLength += S.dataSourceList.dataSourceStatus[i].sourceName.length;

                        if (totalLength > 27)
                            break;

                        if (S.dataSourceList.dataSourceStatus[i].status == "processing")
                            S.dataSourceList.processingSourceName = S.dataSourceList.dataSourceStatus[i].sourceName;

                        html += "<li";

                        if (S.dataSourceList.dataSourceStatus[i].status == "processing") {
                            processingFlag = true;
                            html += "  id = 'processing' class ='active' ";
                        }

                        html += "><a href= \"" + S.dataSourceList.dataSourceStatus[i].sourceName + "\" data-toggle = 'tab' ";
                        html += " onclick='javascript:S.infoDetail.get_detail(\"";
                        html += S.dataSourceList.type + "\",\"" + S.dataSourceList.dataSourceStatus[i].sourceName + "\",\"\",\"click\")'";
                        html += ">" + S.dataSourceList.dataSourceStatus[i].sourceName + "</a></li>";
                        i++;
                    }
                    html += "</ul>";
                }
            }
            if(S.dataSourceList.completedDataSourceStatus.length > 0){
                html += "</br><strong><i><h4>已经完成处理的数据源：</h4></i></strong>";
                for (var i = 0; i < S.dataSourceList.completedDataSourceStatus.length;) {
                    html += "<ul id ='sourceTab2' class='nav nav-tabs'>";
                    var totalLength = 0;
                    for (; i < S.dataSourceList.completedDataSourceStatus.length;) {

                        totalLength += S.dataSourceList.completedDataSourceStatus[i].sourceName.length;

                        if (totalLength > 27)
                            break;

                        html += "<li><a href= \"" + S.dataSourceList.completedDataSourceStatus[i].sourceName + "\" data-toggle = 'tab' ";
                        html += " onclick='javascript:S.infoDetail.get_detail(\"";
                        html += S.dataSourceList.type + "\",\"" + S.dataSourceList.completedDataSourceStatus[i].sourceName + "\",\"\",\"click\")'";
                        html += ">";
                        html += S.dataSourceList.completedDataSourceStatus[i].sourceName;
                        html += "</a></li>";
                        i++;
                    }
                    html += "</ul>";
                }
            }
            if(S.dataSourceList.noUpdateDataSourceStatus.length > 0){
                html += "</br><strong><i><h4>无数据更新的数据源：</h4></i></strong>";
                for (var i = 0; i < S.dataSourceList.noUpdateDataSourceStatus.length;) {
                    html += "<ul id ='sourceTab3' class='nav nav-tabs'>";
                    var totalLength = 0;
                    for (; i < S.dataSourceList.noUpdateDataSourceStatus.length;) {

                        totalLength += S.dataSourceList.noUpdateDataSourceStatus[i].sourceName.length;

                        if (totalLength > 27)
                            break;

                        html += "<li><a href= \"" + S.dataSourceList.noUpdateDataSourceStatus[i].sourceName + "\" data-toggle = 'tab' ";
                        html += " onclick='javascript:S.infoDetail.get_detail(\"";
                        html += S.dataSourceList.type + "\",\"" + S.dataSourceList.noUpdateDataSourceStatus[i].sourceName + "\",\"" + S.dataSourceList.noUpdateDataSourceStatus[i].status + "\",\"click\")'";
                        html += ">" + S.dataSourceList.noUpdateDataSourceStatus[i].sourceName + "</a></li>";
                        i++;
                    }
                    html += "</ul>";
                }
            }

            if (!processingFlag) {
                html += "</br></br>";
                html += "<strong><i><h1 style='text-align:center'>正在请求数据,请稍等!</h1></i></strong>";
            }

            $('#source_table_content').html(html);

        },


    }

    S.infoDetail = {
        $container: $('.well'),
        initialized: false,
        pager: 1,//pager默认为1，显示第一到第六个爬虫。
        finalPage: null,//显示的最后一页，在申请到数据时获得数值
        pages: null,

        get_detail: function (type, sourceName, status, isclick) {

            if (isclick == "click") {
                S.dataSourceList.clickSourceName = sourceName;
                if (S.dataSourceList.clickSourceName == S.dataSourceList.processingSourceName)
                    S.dataSourceList.isCirculation = true;
                else
                    S.dataSourceList.isCirculation = false;

            }


            if (sourceName == null) {
                var html = "";
                html += "<h1 style='text-align:center'>该模块未启动</h1>";
                html += "<h1 style='text-align:center'>您可以点击\"开始\"按钮哦~</h1>";
                $('#detail-information').html(html);
                $('#page').html("");
            }
            else if (sourceName != "") {
                var me = this;
                $.ajax({
                    //url: 'http://58.198.176.40:8080/EduServer/getRefreshCrawlerList',//在这里发ajax申请
                    url: 'getCurProcessData',//在这里发ajax申请
                    method: 'get',
                    dataType: 'json',
                    data: {
                        type: type,
                        sourceName: sourceName
                    },
                    success: function (Jdata) {

                        S.infoDetail.pages = Jdata.pageList;

                        if (S.infoDetail.pages.length > 0) {

                            S.infoDetail.pager = 1;
                            S.infoDetail.finalPage = Math.ceil(S.infoDetail.pages.length / 5);
                            S.infoDetail.render(sourceName);

                        } else {

                            var html = "";
                            if (status == "noUpdate")
                                html += "<h1 style='text-align:center'>当前数据源无更新数据,看看别的网站吧!</h1>";
                            else
                                html += "<h1 style='text-align:center'>正在处理数据,请稍等!</h1>";

                            $('#detail-information').html(html);
                            $('#page').html("");
                        }

                        //if(S.dataSourceList.isCirculation == true || S.dataSourceList.clickSourceName == "") {
                        //    setTimeout("S.infoDetail.get_detail(S.dataSourceList.type,S.dataSourceList.processingSourceName,\"\")", 1000);
                        //    //S.infoDetail.get_detail(S.dataSourceList.type,S.dataSourceList.processingSourceName,"")
                        //}

                    },
                    error: function () {
                        //var html = "";
                        //html += "<h2 style='text-align:center'>sorry~</h2><h4 style='text-align:center'>后台还没有准备好数据哟~等会再试试吧~</h4><img class='sorry' id='detail_sorry'  align='center' src='img/sorry.jpg'/>";
                        //$('#detail-information').html(html);
                    },
                    complete: function () {

                    }
                });
            }
            else {
                var html = "";
                html += "<h1 style='text-align:center'>后台正在准备数据,请稍等!</h1>";
                $('#detail-information').html(html);
                $('#page').html("");
            }


        },

        prev: function (sourceName) {//点击上一页
            S.infoDetail.pager--;

            S.infoDetail.render(sourceName);
        },
        next: function (sourceName) {//点击下一页
            S.infoDetail.pager++;

            S.infoDetail.render(sourceName);
        },
        changePager: function (sourceName) {
            var html = "";
            if (S.infoDetail.pager == 1) {
                html += "<li><a href='#' onclick='' data-toggle='tab'>上一页</a></li>";
                html += "<li><a href='#' data-toggle='tab' onclick='javascript:S.infoDetail.next(\"" + sourceName + "\")'>下一页</a></li>";
            }
            else if (S.infoDetail.pager == S.infoDetail.finalPage) {
                html += "<li><a href='#' data-toggle='tab' onclick='javascript:S.infoDetail.prev(\"" + sourceName + "\")'>上一页</a></li>";
                html += "<li><a href='#' data-toggle='tab' onclick=''>下一页</a></li>";
            }
            else {
                html += "<li><a href='#' data-toggle='tab' onclick='javascript:S.infoDetail.prev(\"" + sourceName + "\")'>上一页</a></li>";
                html += "<li><a href='#' data-toggle='tab' onclick='javascript:S.infoDetail.next(\"" + sourceName + "\")'>下一页</a></li>";

            }
            $('#page').html(html);
        },
        render: function (sourceName) {

            var start = 5 * (S.infoDetail.pager - 1);
            var end = 0;
            if ((start + 4) > (S.infoDetail.pages.length - 1)) {
                end = S.infoDetail.pages.length - 1;
            }
            else {
                end = start + 4;
            }

            var html = "";
            html += "<table class='table table-hover table-bordered'><tr class='title'><th>" + sourceName + "</th></tr></table>";

            if (S.dataSourceList.type == "entity") {

                html += "<table class='table table-hover table-bordered'><tr class='title'><th width = 30%>标题</th><th width = 70%>实体</th></tr>";
                for (var i = start; i <= end; i++) {
                    html += "<tr class='table_content'><td id='title'>"
                    html += "<a target='_blank' href=\"";
                    html += S.infoDetail.pages[i].url;
                    html += "\">" + S.infoDetail.pages[i].title;
                    html += "</a></td><td id='entity'>";
                    var entityList = S.infoDetail.pages[i].entityList;
                    var entityString = "";
                    for (var j = 0; j < entityList.length; j++) {
                        entityString += entityList[j].word + "(" + entityList[j].nature + ")" + ",";
                    }
                    entityString = entityString.substring(0, entityString.length - 1);
                    html += entityString + "</td></tr>";
                }
                html += "</table>"

            }
            else if (S.dataSourceList.type == "relation") {

                html += "<table class='table table-hover table-bordered'><tr class='title'><th width = 30%>标题</th><th width = 70%>关系</th></tr>";
                for (var i = start; i <= end; i++) {
                    html += "<tr class='table_content'><td id='title'>"
                    html += "<a target='_blank' href=\"";
                    html += S.infoDetail.pages[i].url;
                    html += "\">" + S.infoDetail.pages[i].title;
                    html += "</a></td><td id='relation'>";
                    var relationList = S.infoDetail.pages[i].relationList;
                    var relationString = "";
                    for (var j = 0; j < relationList.length; j++) {
                        relationString += relationList[j].subject.word + "(" + relationList[j].subject.nature + ")"
                            + " " + relationList[j].predicate + " "
                            + relationList[j].object.word + "(" + relationList[j].object.nature + ")"
                            + ",";
                    }
                    relationString = relationString.substring(0, relationString.length - 1);
                    html += relationString + "</td></tr>";
                }
                html += "</table>"
            }
            else if (S.dataSourceList.type == "keyWord") {

                html += "<table class='table table-hover table-bordered'><tr class='title'><th width = 30%>标题</th><th width = 70%>关键词</th></tr>";
                for (var i = start; i <= end; i++) {
                    html += "<tr class='table_content'><td id='title'>"
                    html += "<a target='_blank' href=\"";
                    html += S.infoDetail.pages[i].url;
                    html += "\">" + S.infoDetail.pages[i].title;
                    html += "</a></td><td id='keyWord'>";
                    html += S.infoDetail.pages[i].keyWord;
                    html += "</td></tr>";
                }
                html += "</table>"

            }
            else if (S.dataSourceList.type == "keySentence") {

                html += "<table class='table table-hover table-bordered'><tr class='title'><th width = 20%>标题</th><th width = 80%>关键句</th></tr>";
                for (var i = start; i <= end; i++) {
                    html += "<tr class='table_content' text-align='left' height = 10%><td id='title' >"
                    html += "<a target='_blank' href=\"";
                    html += S.infoDetail.pages[i].url;
                    html += "\">" + S.infoDetail.pages[i].title;
                    html += "</a></td><td id='keySentence'>";
                    html += S.infoDetail.pages[i].keySentence;
                    html += "</td></tr>";
                }
                html += "</table>"

            } else if (S.dataSourceList.type == "invertedIndex") {

                html += "<table class='table table-hover table-bordered'><tr class='title'><th>标题</th></tr>";
                for (var i = start; i <= end; i++) {
                    html += "<tr class='table_content' text-align='left' height = 10%><td id='title' >"
                    html += "<a target='_blank' href=\"";
                    html += S.infoDetail.pages[i].url;
                    html += "\">" + S.infoDetail.pages[i].title;
                    html += "</a></td></tr>";
                }
                html += "</table>"

            }

            $('#detail-information').html(html);
            S.infoDetail.changePager(sourceName);

        }


    }

})();

            


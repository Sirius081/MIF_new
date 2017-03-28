window.S = {};
(function () {
    var S = window.S;
    var $window = $(window);

    $(function () {

    })

    $(document).ready(function () {
        //如果需要js动态效果的话，在这里操作
    })

    //获取某个类别的爬虫数据,处理
    S.crawlers = {
        $container: $('.content'),
        initialized: false,
        type: "",
        startCrawlerList : null,
        completeCrawlerList : null,
        stopCrawlerList : null,
        request: function (type) {

            var me = this;
            $.ajax({
                url: 'getCrawlerList',
                method: 'get',
                dataType: 'json',
                data: {
                    type: type
                },//参数为六个类别
                success: function (Jdata) {

                    S.crawlers.type = type;
                    startCrawlerList = Jdata.startCrawlerList;
                    completeCrawlerList = Jdata.completeCrawlerList;
                    stopCrawlerList = Jdata.stopCrawlerList;

                    if(startCrawlerList.length + completeCrawlerList.length + stopCrawlerList.length > 0){
                        S.crawlers.freshCrawlers();
                    }else{
                        var html = "";
                        html += "<strong><i><h1 style='text-align:center'>正在请求数据,请稍等!</h1></i></strong>";
                        $('#source_table_content').html(html);
                    }

                    S.infoDetail.get_detail();

                },
                error: function () {
                    var html = "";
                    html += "<h1 style='text-align:center'>后台还没有准备好哦~请稍等</h1>";
                    $('#source_table_content').html(html);
                    S.infoDetail.get_detail();
                },
                complete: function () {

                }
            });

        },

        freshCrawlers: function () {

            var html = "";
            if(startCrawlerList.length > 0){
                html += "<strong><i><h4>正在爬取的网站：</h4></i></strong>";
                for (var i = 0; i < startCrawlerList.length;) {
                    html += "<ul id ='sourceTab1' class='nav nav-tabs'>";
                    for (var rowsize = 0;rowsize < 4 && i < startCrawlerList.length;rowsize++) {
                        html += "<li id = 'crawling'";
                        if(startCrawlerList[i].exceptionInfoList.length > 0)
                            html += " class ='exception'"
                        html += "><a href= \"" + startCrawlerList[i].sourceName + "\" data-toggle = 'tab' ";
                        html += " onclick='javascript:S.infoDetail.get_detail(\"";
                        html += startCrawlerList[i].sourceName + "\",\"" + startCrawlerList[i].status + "\"," + startCrawlerList[i].pageList + "," + startCrawlerList[i].exceptionInfoList + ")'";
                        html += ">" + startCrawlerList[i].sourceName + "(" + startCrawlerList[i].totalCount + ")</a></li>";
                        i++;
                    }
                    html += "</ul>";
                }
            }
            if(completeCrawlerList.length > 0){
                html += "</br><strong><i><h4>完成爬取的网站：</h4></i></strong>";
                for (var i = 0; i < completeCrawlerList.length;) {
                    html += "<ul id ='sourceTab1' class='nav nav-tabs'>";
                    for (var rowsize = 0;rowsize < 4 && i < completeCrawlerList.length;rowsize++) {
                        html += "<li";
                        if(completeCrawlerList[i].exceptionInfoList.length > 0)
                            html += " class ='exception'"
                        html += "><a href= \"" + completeCrawlerList[i].sourceName + "\" data-toggle = 'tab' ";
                        html += " onclick='javascript:S.infoDetail.get_detail(\"";
                        html += completeCrawlerList[i].sourceName + "\",\"" + completeCrawlerList[i].status + "\"," + completeCrawlerList[i].pageList + "," + completeCrawlerList[i].exceptionInfoList + ")'";
                        html += ">" + completeCrawlerList[i].sourceName + "(" + completeCrawlerList[i].totalCount + ")</a></li>";
                        i++;
                    }
                    html += "</ul>";
                }
            }
            if(stopCrawlerList.length > 0){
                html += "</br><strong><i><h4>未启动爬取的网站：</h4></i></strong>";
                for (var i = 0; i < stopCrawlerList.length;) {
                    html += "<ul id ='sourceTab1' class='nav nav-tabs'>";
                    for (var rowsize = 0;rowsize < 4 && i < stopCrawlerList.length;rowsize++) {
                        html += "<li>";
                        html += "<a href= \"" + stopCrawlerList[i].sourceName + "\" data-toggle = 'tab' ";
                        html += " onclick='javascript:S.infoDetail.get_detail(\"";
                        html +=stopCrawlerList[i].sourceName + "\",\"" + stopCrawlerList[i].status + "\"," + stopCrawlerList[i].pageList + "," + stopCrawlerList[i].exceptionInfoList + ")'";
                        html += ">" + stopCrawlerList[i].sourceName + "(" + stopCrawlerList[i].totalCount + ")</a></li>";
                        i++;
                    }
                    html += "</ul>";
                }
            }
            $('#source_table_content').html(html);
        },

        get_detail: function (sourceName,status,pageList,exceptionInfoList) {
            


        }
    }
})();

            


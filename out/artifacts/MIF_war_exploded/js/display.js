/**
 * Created by song on 2017/1/12.
 */
function drugdisplay(druglist){
    var table="<tr><th>year</th><th>name</th><th>fees</th></tr>";
    druglist=druglist.drugs
    for(var d in druglist){
        table += "<tr><td>" + druglist[d].year + "</td>" +
        "<td>" + druglist[d].name + "</td>" +
        "<td>" + druglist[d].fees+"</td></tr>";
    }



    document.getElementById("demo").innerHTML = table;

}

$(document).ready(function () {
    $("#policy").click(function () {
        $("#sub-policy").slideToggle("slow");
    });
    $("#society").click(function () {
        $("#sub-society").slideToggle("slow");
    });


    $("#entity-button").click(function () {
        $("#entity-control-button").slideToggle("slow");
    });
    $("#relation-button").click(function () {
        $("#relation-control-button").slideToggle("slow");
    });
    $("#keyWord-button").click(function () {
        $("#keyWord-control-button").slideToggle("slow");
    });
    $("#keySentence-button").click(function () {
        $("#keySentence-control-button").slideToggle("slow");
    });
    $("#invertedIndex-button").click(function () {
        $("#invertedIndex-control-button").slideToggle("slow");
    });


    $("#entity-control-button").mouseleave(function () {
        $("#entity-control-button").slideToggle("slow");
    });
    $("#relation-control-button").mouseleave(function () {
        $("#relation-control-button").slideToggle("slow");
    });
    $("#keyWord-control-button").mouseleave(function () {
        $("#keyWord-control-button").slideToggle("slow");
    });
    $("#keySentence-control-button").mouseleave(function () {
        $("#keySentence-control-button").slideToggle("slow");
    });
    $("#invertedIndex-control-button").mouseleave(function () {
        $("#invertedIndex-control-button").slideToggle("slow");
    });

});
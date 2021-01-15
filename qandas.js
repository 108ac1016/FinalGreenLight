$(function () {

    $("a[href*=#]:not([href=#])").click(function () {
        alert("111223");
        var target = $($(this).attr("href")).offset().top;

        $("html,body").animate({ scrollTop: target }, 500);

        return false;

    });
});

$(".qaa1").click(function () {
    $("#aaa").html("營業時間7:00至22:00，2樓晚上8:00關門，1樓晚上8:30關閉與光華管連結的門。")
    $("#aaa").css("background-color", "#FFFFFF").css("background-color", "#FFEC8E")
})

$(".qaa2").click(function () {
    $("#aaa").html("假日時間二樓僅素還真營業，一樓詳見網站餐廳資訊小卡。")
    $("#aaa").css("background-color", "#FFFFFF").css("background-color", "#FFEC8E")
})
$(function(){
   page();
    picList();
})
/*主页-照片、视频模块*/
function picList(){
/*$(".teacherPicItemHref").css("left",$(".PicList").find(".teacherPicItemHref").index() * 134+"px" );*/
    /*console.log($(".teacherPicItemHref").css("left",$(".teacherPicItemHref").index(this) * 134+"px" ));*/
}
function page(){
    $("title").html("老师主页");
    $(".no-js body").css({
        "min-width":"1200px"
    })
}
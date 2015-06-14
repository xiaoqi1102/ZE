$(function(){
   hover();
   search();
    hideList();
    changeGrade();
    sorting();
    pageChoice();
    load();
/*    programHover();*/
})
/*加载老师 节目和班课内容的函数*/
function load(){
    teacherList_itemLoad("JSON/teacherList_item.json","#teacherList1");
    teacherList_itemLoad("JSON/teacherList_item2.json","#teacherList2");
    classListLoad("JSON/lessionList1.json","#lessionList1");
    programLoad("JSON/programList1.json","#programList1");
/*    programHover();*/
}
/*节目板块鼠标经过是触发的函数*/
function programHover(){
  $(".ProgramHref").on("hover",function(){
      console.log("")
  })
}
function hideList(){
    $(".findTeacherButton").bind("click",function(){
        $(".changeClass,.classList").slideToggle();
    })
}
/*当鼠标经过年级的时候加载对应的JSON数据*/
function hover(){
    $(".classList li").mouseenter(function(){
      var json = "JSON/"+$(this).attr("id")+".json";
      listHover(json);
    })
}
/*课程列表鼠标经过的时候的效果函数*/
function listHover(json){
    $(".changeClass").html("");
    $.getJSON(json,function(data){
        $.each(data,function(index,msg){
            var $html="<span><a href="+msg["href"]+">"+msg["lesson"]+"</a></span>"
            $($html).appendTo($(".changeClass"));
        })
    })
}
/*推荐老师加载函数*/
function teacherList_itemLoad(json,list){
    $(list).html("");
    $.getJSON(json,function(data){
        $.each(data,function(index,msg){
            var $html= " <div class='teacherList_item'><a class='videoHref' href="+msg["videoHref"]+"><img src="+msg["img"]+" class='teacherPhoto'><img src='img/icon/play.png' class='play '></a><p class='teacherData'><a href="+msg["myHomePage"]+" class='teacherName'>Liberty</a><span class='teachingAge'>"+msg["teachingAge"]+"年教龄"+"</span></p><p class='intruduce'>"+msg["introduction"]+"</p><p class='where'><span class='location'>"+msg["place"]+"</span></p></div>";
            $(list).append($html);
        })
    })
}
/*推荐课程加载函数*/
function classListLoad(json,list){
    $(list).html("");
    $.getJSON(json,function(data){
        $.each(data,function(index,msg){
            var $html="  <div class='lessonList_item'><a  class='videoHref' href="+msg["videoHref"]+"><img src="+msg["img"]+" class='teacherPhoto'><img src='img/icon/play.png' class='play '></a> <p class='classData'>"+msg["classTitle"]+"</p> <p class='classTime'>"+"开课："+msg["classTime"]+"</p> <p class='teachers'>"+msg["teachers"]+"</p> </div>";
            $(list).append($html);
        })
    })
}

function programLoad(json,list){
    $(list).html("");
    $.getJSON(json,function(data){
        $.each(data,function(index,msg){
            var $html=" <div class='program_item'><a href="+msg["videoHref"]+" class='ProgramHref'><img src="+msg["img"]+" class='RecommendProgram_item1_img'> <div class='programIntroduceBox'> <p class='introduce'>"+msg["introduction"]+"</p> </div></a> <p class='programName'>"+msg["programName"]+"</p> <p class='price'>"+msg["price"]+"</p> </div>"
            $(list).append($html);
        })
    })
}
function search(){
    $("#searchButton").bind("click",function(){
        $("#slidershow,.findTeacher").addClass("none");
    })
}

/*searchTeacher*/
function changeGrade(){
  $(".thisKind").bind("click",function(){
      $(".thisKind").removeClass("active");
      $(this).addClass("active");
  })
}
function sorting(){
    $(".sortKind").bind("click",function(){
        $(".sortKind").removeClass("active");
        $(this).addClass("active");
    })
}
/*分页切换函数*/
function pageChoice(){
    $(".pageNum:not(.more, .prevPage ,.nextPage)").bind("click",function(){
        $(".pageNum").removeClass("active");
        $(this).addClass("active")})
    /*点击上一页触发的函数*/
$(".prevPage").bind("click",function(){
    $(".pageNumList .active")
})
}
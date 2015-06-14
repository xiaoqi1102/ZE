$(function(){
  page();
    focus();
});
function page(){
    $("title").html("登录")
    $("body").addClass("login_bg");
    $(".content").css({
        "background":"none",
        "padding-top":"130px"
    });
    $("header").addClass("hidden");
}
function focus(){
    /*账号名输入框事件*/
    $(".login_Input").bind({
        "focus":function(){
        $(this).css("border-color","#959FA9");
    }   ,
            "blur":function(){
                $(this).css("border-color","#CED6DC");
            }
    }
    );
    $(".userId").bind("focus",function(){
        $(".label_userId").css({
            'border-color':'#959FA9',
           'background-image': 'url("img/login/user_id_in.png")'
        });
    })
    $(".userId").bind("blur",function(){
        $(".label_userId").css({
            'border-color':'#CED6DC',
            'background-image': 'url("img/login/user_id.png")'
        });
    })
/*密码框聚焦事件*/
   $(".password").bind({
       "focus":function(){
           $(".label_password").css({
               "border-color":"#959FA9",
               'background-image': 'url("img/login/password_in.png")'
           })
       },
       "blur":function(){
           $(".label_password").css({
               "border-color":"#CED6DC",
               'background-image': 'url("img/login/password.png")'
           })
       }
   })
}
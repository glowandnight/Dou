// 使用jQuery
$(function(){
    // 短信登录/注册和密码登录切换

    $(".switch-menu .left").click(function(){
        $(".switch-menu .left").attr({"class":"left selected"});
        $(".switch-menu .right").attr({"class":"right"});
        $(".MsgForm").attr({"class":"MsgForm"});
        $(".PasswordForm").attr({"class":"PasswordForm hidden"});
    })

    $(".switch-menu .right").click(function(){
        $(".switch-menu .right").attr({"class":"right selected"});
        $(".switch-menu .left").attr({"class":"left"});
        $(".PasswordForm").attr({"class":"PasswordForm"});
        $(".MsgForm").attr({"class":"MsgForm hidden"});
    })

    $(".country-code").click(function(){
        $(".choose-area").removeClass("hidden");
    })

    $(".closeW").click(function(){
        $(this).parent().parent().attr("class","choose-area hidden");
    })
})
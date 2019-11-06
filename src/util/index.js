import qs from "qs"

// 公共函数
// index页jQuery初始化
function indexInit(that) {
    $(document).ready(function () {
        // 信息向上滑动,slideUp,slideDown,fadeTo均为动画效果
        that.timer = setInterval(function () {
            $(".media").first().slideUp(500, function () {
                $(this).appendTo(".scrollbox").stop(true).fadeTo(300, 1);
            });
        }, 3000);
        that.timer2 = setInterval(function () {
            $(".media2").first().slideUp(500, function () {
                $(this).appendTo(".scrollbox2").stop(true).fadeTo(300, 1);
            });
        }, 2500);

        // 鼠标悬停，动画停止
        $(".scrollbox").mouseenter(function () {
            window.clearInterval(that.timer);
        }).mouseleave(function () {
            that.timer = setInterval(function () {
                $(".media").first().slideUp(500, function () {
                    $(this).appendTo(".scrollbox").stop(true).fadeTo(300, 1);
                });
            }, 3000);
        });
        $(".scrollbox2").mouseenter(function () {
            window.clearInterval(that.timer2);
        }).mouseleave(function () {
            that.timer2 = setInterval(function () {
                $(".media2").first().slideUp(500, function () {
                    $(this).appendTo(".scrollbox2").stop(true).fadeTo(300, 1);
                });
            }, 3000);
        });

        // 表单缩放
        // 最小化
        $(".form #minimize").click(function () {
            $(".form").animate({
                width:"150px",
                height:"50px",
            });
            $(".form #maxmize").css("display","inline");
        });
        // 最大化
        $(".form #maxmize").click(function () {
            $(".form").animate({
                width:"100%",
                height:"400px",
            });
            // 隐藏最大化按钮
            $(".form #maxmize").css("display","none");
        });

        // 当来源为其他时弹出输入框
        $("#form #selectFrom").click(function () {
            if($(this).val() == "other"){
                $(this).next("#selectFromTxt").show();
            }
        });
    });
}

// 专业介绍页jQuery初始化
function majorInit(that) {
    //上方内容展示区


    //滑播区
    $(function () {
        // 初始化
        let group = $(".slide ul li");
        let len = group.first().outerWidth();
        for(let i = 0 ; i < group.length;i++){
            group.eq(i).css("left",`${len*i}px`);
        }

        // 向左缓缓滑动
        that.timer6 = setInterval(function () {
            group = $(".slide ul li");
            group.animate({
                left:`-=${len}`
            },7000,"linear",function () {
                group.first().appendTo(".slide ul").css("left",`${len*(group.length-1)}px`);
                group.css("margin","10px");
            })
        },1000);
    });

    // 下方内容展示区
    $(function () {
        $(".showcontent2 .common_showcontent .free").mouseenter(function () {
            $(this).children(".freebackground").text("描述性文字描述性文字描述性文字描述性文字描述性文字描述性文字描述性文字描述性文字").fadeTo(500,0.5);
        }).mouseleave(function () {
            $(this).children(".freebackground").text("").fadeOut(500);
        });
    });
}

// 艺考指南页初始化
function guideInit() {
    // 广告栏初始化
    $(function () {
        $(".guide .content .adv .adv_item").css("height","466px");
    });
}

// 新闻详情页初始化
function newsInit() {
    // 广告栏初始化，必须在请求后获取高度
    $(function () {
        $(".news .content .adv .adv_item").css("height","466px");
    });
}

// marjor页数据请求
function majorReq(axios,majorstyle,that) {
    axios.get(`getMajor/${majorstyle}/id/`).then(data=>{
        that.majorLeft = data.data;
    });
    axios.get(`getMajor/${majorstyle}/`).then(data=>{
        that.majorRight = data.data;
    });
    axios.get(`getMajor/${majorstyle}/mid`).then(data=>{
        that.majorMid = data.data;
    });
    axios.get(`getMajor/${majorstyle}/down`).then(data=>{
        that.majorDown = data.data;
    });

}

// about页jQuery初始化
function aboutInit(that) {
    $(function () {
        // 初始化位置
        let group = $(".about_evi_content ul li");
        let len = group.first().outerWidth();
        for(let i = 0 ; i < group.length;i++){
            group.eq(i).css("left",`${len*i}px`);
        }
        group.eq(1).children("img").addClass("active");
        // 轮播
        that.timer = setInterval(function () {
            group = $(".about_evi_content ul li");
            group.first().clone(true).appendTo(".about_evi_content ul").css("left",`${len*(group.length)}px`);
            let group2 = $(".about_evi_content ul li");
            group2.stop(true).animate({
                left:`-=${len}`
            },500,function () {
                group2.first().remove();
                let src = group2.eq(2).children("img").attr("src");
                group2.eq(2).children("img").addClass("active").end().siblings().children("img").removeClass("active");
                $(".showaboutimg").attr("src",src);
            })
        },3000);

        // 点击图片切换
        $(".about_evi_content ul").mouseenter(function () {
            clearInterval(that.timer);
        }).mouseleave(function () {
            that.timer = setInterval(function () {
                group = $(".about_evi_content ul li");
                group.first().clone(true).appendTo(".about_evi_content ul").css("left",`${len*(group.length)}px`);
                let group2 = $(".about_evi_content ul li");
                group2.stop(true).animate({
                    left:`-=${len}`
                },500,function () {
                    group2.first().remove();
                    let src = group2.eq(2).children("img").attr("src");
                    group2.eq(2).children("img").addClass("active").end().siblings().children("img").removeClass("active");
                    $(".showaboutimg").attr("src",src);
                })
            },3000);
        });

        // 点击上一张或下一张
        let group3 = $(".about_evi_content ul li");
        let isClick = false;
        group3.click(function () {
            if(!isClick){
                isClick = true;
                // window.console.log($(this).index());
                let index = $(this).index();
                switch (index) {
                    // 上一张
                    case 0:
                        let group4 = $(".about_evi_content ul li");
                        group4.last().clone(true).prependTo(".about_evi_content ul").stop(true).css("left",`${-len}px`);
                        let group5 = $(".about_evi_content ul li");
                        group5.stop(true).animate({
                            left:`+=${len}`
                        },500,function () {
                            group5.last().remove();
                            let src = group5.eq(1).children("img").attr("src");
                            group5.eq(1).children("img").addClass("active").end().siblings().children("img").removeClass("active");
                            $(".showaboutimg").attr("src",src);
                            isClick = false;
                        });
                        break;
                    // 中间
                    case 1:
                        isClick = false;
                        break;
                    // 下一张
                    case 2:
                        let group = $(".about_evi_content ul li");
                        group.first().clone(true).appendTo(".about_evi_content ul").stop(true).css("left",`${len*(group.length)}px`);
                        let group2 = $(".about_evi_content ul li");
                        group2.stop(true).animate({
                            left:`-=${len}`
                        },500,function () {
                            group2.first().remove();
                            let src = group2.eq(2).children("img").attr("src");
                            group2.eq(2).children("img").addClass("active").end().siblings().children("img").removeClass("active");
                            // window.console.log(src);
                            $(".showaboutimg").attr("src",src);
                            isClick = false;
                        });
                        break;
                }
            }
        });
    });
}


export default {
    indexInit,
    majorInit,
    guideInit,
    newsInit,
    aboutInit
}

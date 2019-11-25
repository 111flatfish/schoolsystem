import qs from "qs"

// 公共函数
// index页jQuery初始化
function indexInit(that) {
    $(document).ready(function () {
    for(let i = 0 ; i < $(".scrollbox .media").length;i++){
        $(".scrollbox .media").eq(i).css("top",`${185*i}px`);
    };
    for(let j = 0 ; j < $(".scrollbox2 .media").length;j++){
        $(".scrollbox2 .media").eq(j).css("top",`${185*j}px`);
    };


        // 信息向上滑动,slideUp,slideDown,fadeTo均为动画效果
        that.timer = setInterval(function () {
            let group = $(".scrollbox .media");
            $(".scrollbox .media").animate({
                top:`-=185`
            });
            $(".scrollbox .media").first().hide(10,function () {
                $(this).css("top",`${185*(group.length-1)}px`).appendTo(".scrollbox").stop(true).fadeTo(300,1);
            });
        }, 3000);
        that.timer2 = setInterval(function () {
            let group2 = $(".scrollbox2 .media");
            $(".scrollbox2 .media").animate({
                top:`-=185`
            });
            $(".scrollbox2 .media").first().hide(10,function () {
                $(this).css("top",`${185*(group2.length-1)}px`).appendTo(".scrollbox2").stop(true).fadeTo(300,1);
            });
        }, 2500);

        // 鼠标悬停，动画停止
        $(".scrollbox").mouseenter(function () {
            window.clearInterval(that.timer);
        }).mouseleave(function () {
            that.timer = setInterval(function () {
                let group = $(".scrollbox .media");
                $(".scrollbox .media").animate({
                    top:`-=185`
                });
                $(".scrollbox .media").first().hide(10,function () {
                    $(this).css("top",`${185*(group.length-1)}px`).appendTo(".scrollbox").stop(true).fadeTo(300,1);
                });
            }, 3000);
        });
        $(".scrollbox2").mouseenter(function () {
            window.clearInterval(that.timer2);
        }).mouseleave(function () {
            that.timer2 = setInterval(function () {
                let group2 = $(".scrollbox2 .media");
                $(".scrollbox2 .media").animate({
                    top:`-=185`
                });
                $(".scrollbox2 .media").first().hide(10,function () {
                    $(this).css("top",`${185*(group2.length-1)}px`).appendTo(".scrollbox2").stop(true).fadeTo(300,1);
                });
            }, 2500);
        });
        //
        // 表单缩放
        // 最小化
        $(".form #minimize").click(function () {
                $(".form").hide(function () {
                    $(".form_min").show();
                });
        });
        // 最大化
        $(".form_min").click(function () {
                $(".form_min").hide(0,function () {
                    $(".form").show(200);
                });
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
function guideInit(that) {
    // 广告栏初始化
    $(function () {
        // 初始筛选为全部
        $(".searchfilter ul li").last().addClass("filterActive");
        $(".searchfilter ul li").click(function () {
            switch ($(this).text()) {
                case "最近七天":
                    that.filterArg = 7;
                    break;
                case "最近一月":
                    that.filterArg = 30;
                    break;
                case "最近半年":
                    that.filterArg = 183;
                    break;
                case "全部":
                    that.filterArg = 366;
                    break;
            }
            $(this).addClass("filterActive").siblings().removeClass("filterActive");
        });
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
    $(function () {
        // 初始化位置
        let group = $(".about_honor ul li");
        let len = 280;
        for(let i = 0 ; i < group.length;i++){
            group.eq(i).css("left",`${len*i}px`);
        }
        group.eq(1).children("img").addClass("honorActive").end().css("z-index","2005");
        // 轮播
        that.timer2 = setInterval(function () {
            group = $(".about_honor ul li");
            group.first().clone(true).appendTo(".about_honor ul").css("left",`${len*(group.length)}px`);
            let group2 = $(".about_honor ul li");
            group2.stop(true).animate({
                left:`-=${len}`
            },500,function () {
                group2.first().remove();
                group2.eq(2).children("img").addClass("honorActive").end().css("z-index","2005").siblings().children("img").removeClass("honorActive").end().css("z-index","1005");
            })
        },3000);

        // 点击图片切换
        $(".about_honor ul").mouseenter(function () {
            clearInterval(that.timer2);
        }).mouseleave(function () {
            that.timer2 = setInterval(function () {
                group = $(".about_honor ul li");
                group.first().clone(true).appendTo(".about_honor ul").css("left",`${len*(group.length)}px`);
                let group2 = $(".about_honor ul li");
                group2.stop(true).animate({
                    left:`-=${len}`
                },500,function () {
                    group2.first().remove();
                    group2.eq(2).children("img").addClass("honorActive").end().css("z-index","2005").siblings().children("img").removeClass("honorActive").end().css("z-index","1005");
                })
            },3000);
        });

        // 点击上一张或下一张
        let group3 = $(".about_honor ul li");
        let isClick = false;
        group3.click(function () {
            if(!isClick){
                isClick = true;
                // window.console.log($(this).index());
                let index = $(this).index();
                switch (index) {
                    // 上一张
                    case 0:
                        let group4 = $(".about_honor ul li");
                        group4.last().clone(true).prependTo(".about_honor ul").stop(true).css("left",`${-len}px`);
                        let group5 = $(".about_honor ul li");
                        group5.stop(true).animate({
                            left:`+=${len}`
                        },500,function () {
                            group5.last().remove();
                            group5.eq(1).children("img").addClass("honorActive").end().css("z-index","2005").siblings().children("img").removeClass("honorActive").end().css("z-index","1005");
                            // group5.eq(1).children("img").addClass("honorActive").end().siblings().children("img").removeClass("honorActive");
                            isClick = false;
                        });
                        break;
                    // 中间
                    case 1:
                        isClick = false;
                        break;
                    // 下一张
                    case 2:
                        let group = $(".about_honor ul li");
                        group.first().clone(true).appendTo(".about_honor ul").stop(true).css("left",`${len*(group.length)}px`);
                        let group2 = $(".about_honor ul li");
                        group2.stop(true).animate({
                            left:`-=${len}`
                        },500,function () {
                            group2.first().remove();
                            group2.eq(2).children("img").addClass("honorActive").end().css("z-index","2005").siblings().children("img").removeClass("honorActive").end().css("z-index","1005");
                            // window.console.log(src);
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

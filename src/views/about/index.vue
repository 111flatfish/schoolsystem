<template>
    <div class="about">
        <Header></Header>
        <Banner></Banner>
        <main class="container">
            <div class="row clearfix about_evi">
                <div class="about_evi_title">
                    <h3>教学环境</h3>
                </div>
                <div class="about_eiv_content">
                    <img src="../../../public/image/school/2.jpg" class="showaboutimg" alt="evi">
                    <ul class="about_banner">
                        <li><img src="../../../public/image/school/1.jpg" alt="school"></li>
                        <li><img src="../../../public/image/school/2.jpg" alt="school"></li>
                        <li><img src="../../../public/image/school/3.jpg" alt="school"></li>
                    </ul>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../../components/header"
    import Footer from "../../components/footer"
    import Banner from "../../components/banner"
    export default {
        name: "about",
        components:{
            Header,
            Footer,
            Banner
        }
    }

    // 表单验证
    $(function () {
        $("#form").validator({
            fields:{
                content:"required;"
            }
        });
    });

    $(function () {
        // 初始化位置
        let group = $(".about_eiv_content ul li");
        let len = group.first().outerWidth();
        for(let i = 0 ; i < group.length;i++){
            group.eq(i).css("left",`${len*i}px`);
        }
        group.eq(1).addClass("active");
        // 轮播
        let timer = setInterval(function () {
            group = $(".about_eiv_content ul li");
            group.first().clone(true).appendTo(".about_eiv_content ul").css("left",`${len*(group.length)}px`);
            let group2 = $(".about_eiv_content ul li");
            group2.animate({
                left:`-=${len}`
            },500,function () {
                group2.first().remove();
                let src = group2.eq(2).children("img").attr("src");
                group2.eq(1).addClass("active").siblings().removeClass("active");
                $(".showaboutimg").attr("src",src);
            })
        },3000);

        // 点击图片切换
        $(".about_eiv_content ul").mouseenter(function () {
            clearInterval(timer);
        }).mouseleave(function () {
            timer = setInterval(function () {
                group = $(".about_eiv_content ul li");
                group.first().clone(true).appendTo(".about_eiv_content ul").css("left",`${len*(group.length)}px`);
                let group2 = $(".about_eiv_content ul li");
                group2.animate({
                    left:`-=${len}`
                },500,function () {
                    group2.first().remove();
                    let src = group2.eq(2).children("img").attr("src");
                    group2.eq(1).addClass("active").siblings().removeClass("active");
                    $(".showaboutimg").attr("src",src);
                })
            },3000);
        });
        let group3 = $(".about_eiv_content ul li");
        let isClick = false;
        group3.click(function () {
            if(!isClick){
                isClick = true;
                // window.console.log($(this).index());
                let index = $(this).index();
                switch (index) {
                    case 0:
                        let group4 = $(".about_eiv_content ul li");
                        group4.last().clone(true).prependTo(".about_eiv_content ul").css("left",`${-len}px`);
                        let group5 = $(".about_eiv_content ul li");
                        group5.animate({
                            left:`+=${len}`
                        },500,function () {
                            group5.last().remove();
                            let src = group5.eq(1).children("img").attr("src");
                            group5.eq(1).addClass("active").siblings().removeClass("active");
                            $(".showaboutimg").attr("src",src);
                            isClick = false;
                        });
                        break;
                    case 1:
                        isClick = false;
                        break;
                    case 2:
                        let group = $(".about_eiv_content ul li");
                        group.first().clone(true).appendTo(".about_eiv_content ul").css("left",`${len*(group.length)}px`);
                        let group2 = $(".about_eiv_content ul li");
                        group2.animate({
                            left:`-=${len}`
                        },500,function () {
                            group2.first().remove();
                            let src = group2.eq(2).children("img").attr("src");
                            group2.eq(2).addClass("active").siblings().removeClass("active");
                            // window.console.log(src);
                            $(".showaboutimg").attr("src",src);
                            isClick = false;
                        });
                        break;
                }
            }
        });
    })

</script>

<style scoped>
main{
    color: #404040;
    font-weight: 400;
    margin: 20px auto;
}
.about_evi{
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.about_evi_title{
    background: url("http://cdn.ibootstrap.cn/lorempixel.com/1600/500/sports/3/default.jpg") no-repeat;
    width: 100%;
    height: 80px;
}
.about_evi_title h3{
    color: #fff;
    line-height: 80px;
    font-size: 36px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
}
.about_eiv_content{
    position: relative;
}
.about_eiv_content .showaboutimg{
    width: 100%;
    height: 600px;
}
ul{
    width: 370px;
    height: 84px;
    border: 2px solid #000;
    position:absolute;
    left: 70%;
    bottom: 10px;
    overflow: hidden;
    padding: 5px;
}
ul li img{
    width: 120px;
    height: 80px;
}
ul li {
    position: absolute;
    left: 0;
    top: 0;
}
.active{
    border: 4px solid #ffe284;
    border-radius: 4px;
}
</style>

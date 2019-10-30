<template>
    <div class="container">
       <div class="content">
           <ul>
               <li><img src="../../../public/image/teacherheader/1.jpeg" alt=""></li>
               <li><img src="../../../public/image/teacherheader/2.jpeg" alt=""></li>
               <li><img src="../../../public/image/teacherheader/3.jpg" alt=""></li>
           </ul>
       </div>
        <div class="showcurrenimg">
            <img src="../../../public/image/teacherheader/2.jpeg" alt="">
        </div>
    </div>
</template>

<script>

    export default {
        name: "test",

    }

    $(function () {
        // 初始化位置
        let group = $("ul li");
        let len = group.first().outerWidth();
        for(let i = 0 ; i < group.length;i++){
            group.eq(i).css("left",`${len*i}px`);
        }
        // 轮播
        let timer = setInterval(function () {
            group = $("ul li");
            group.first().clone(true).appendTo("ul").css("left",`${len*(group.length)}px`);
            let group2 = $("ul li");
            group2.animate({
                left:`-=${len}`
            },1000,function () {
                group2.first().remove();
                let src = group2.eq(2).children("img").attr("src");
                // window.console.log(src);
                $(".showcurrenimg img").attr("src",src);
            })
        },3000);

        // 点击图片切换
        $("ul").mouseenter(function () {
            clearInterval(timer);
        }).mouseleave(function () {
            timer = setInterval(function () {
                group = $("ul li");
                group.first().clone(true).appendTo("ul").css("left",`${len*(group.length)}px`);
                let group2 = $("ul li");
                group2.animate({
                    left:`-=${len}`
                },1000,function () {
                    group2.first().remove();
                    let src = group2.eq(2).children("img").attr("src");
                    // window.console.log(src);
                    $(".showcurrenimg img").attr("src",src);
                })
            },3000);
        });
        let group3 = $("ul li");
        let isClick = false;
        group3.click(function () {
            if(!isClick){
                isClick = true;
                window.console.log($(this).index());
                let index = $(this).index();
                switch (index) {
                    case 0:
                        let group4 = $("ul li");
                        group4.last().clone(true).prependTo("ul").css("left",`${-len}px`);
                        let group5 = $("ul li");
                        group5.animate({
                            left:`+=${len}`
                        },1000,function () {
                            group5.last().remove();
                            let src = group5.eq(1).children("img").attr("src");
                            // window.console.log(src);
                            $(".showcurrenimg img").attr("src",src);
                            isClick = false;
                        });
                        break;
                    case 1:
                        isClick = false;
                        break;
                    case 2:
                        let group = $("ul li");
                        group.first().clone(true).appendTo("ul").css("left",`${len*(group.length)}px`);
                        let group2 = $("ul li");
                        group2.animate({
                            left:`-=${len}`
                        },1000,function () {
                            group2.first().remove();
                            let src = group2.eq(2).children("img").attr("src");
                            // window.console.log(src);
                            $(".showcurrenimg img").attr("src",src);
                            isClick = false;
                        });
                        break;
                }
            }
        });
    })
</script>

<style scoped>
ul{
    width: 1210px;
    height: 300px;
    border: 2px solid #000;
    position:relative;

}
ul li img{
    width: 400px;
    height: 300px;
}
ul li {
    position: absolute;
    left: 0;
    top: 0;
}
</style>

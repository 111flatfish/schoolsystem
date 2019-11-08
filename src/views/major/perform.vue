<template>
    <div class="perform">
        <!--头部-->
        <!--轮播图-->
        <Banner v-bind:banner-data="type" v-bind:location-data="loc"></Banner>
        <!--内容-->
        <main>
            <div class="container">
                <div class="row clearfix showcontent">
                    <!--内容显示区-->
                    <div class="col-md-5">
                        <div class="show1">
                            <div class="list-group" style="padding: 15px">
                                <a href="#" class="list-group-item title">{{majorLeft.major_name}}</a>
                                <div class="content">

                                    <!--图集加内容文字-->
                                    <div class="list-group-item" v-for="item in majorLeftContent">
                                        <img v-bind:src="item[0]" alt="content">
                                        <div class="txt">
                                            <p>{{item[1]}}</p>
                                        </div>
                                    </div>
                                    <!--半透明背景-->
                                    <div class="background" style="display: block"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--内容展示区-->
                    <div class="col-md-7 show2">
                        <div>
                            <!-- Nav tabs -->
                            <!--分页导航-->
                            <ul class="nav nav-tabs" role="tablist">
                                <li role="presentation" v-for="(item,index) in majorRight"><a v-bind:href="'#content'+(index+1)" v-bind:aria-controls="'content'+(index+1)" role="tab" data-toggle="tab">{{item.major_name}}</a></li>
                            </ul>
                            <!--分页内容-->
                            <!-- Tab panes -->
                            <div class="tab-content">
                                <!--处于鼠标悬浮的分页项为active-->
                                <div role="tabpanel" class="tab-pane" v-bind:id="'content'+(index2+1)" v-for="(item,index2) in majorRight">
                                    <div class="list-group">

                                        <div class="list-group-item" v-for="subitem in majorRightContent[index2]" style="display: none">
                                            <!--图片-->
                                            <img v-bind:src="subitem[0]" alt="content">
                                            <!--文字内容-->
                                            <div class="txt">
                                                <p>{{subitem[1]}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="background"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--滑播区-->
                <div class="slide">
                    <ul class="row clearfix">
                        <li class="media" v-for="item in majorMidContent">
                            <div class="media-left">
                                <!--图片-->
                                <a href="#">
                                    <img class="media-object" v-bind:src="item[0]" alt="图片">
                                </a>
                            </div>
                            <!--文字内容-->
                            <div class="media-body">
                                <h3 class="media-heading">{{majorMid.major_name}}</h3>
                                <p>{{item[1]}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--底部内容展示区-->
                <div class="showcontent2 ">
                    <div class="row clearfix">
                        <div class="col-md-3 common_showcontent">
                            <ul>
                                <!--图片-->
                                <li class="img"><img src="../../../public/image/teacherheader/4.jpeg" alt="课包"></li>
                                <!--文字内容-->
                                <li class="content">
                                    <h4>课包名字</h4>
                                    <p>课时：{{}}周</p>
                                    <p>时长：{{}}h</p>
                                    <p>容纳量：{{}}人</p>
                                </li>
                                <!--悬浮展示描述区-->
                                <li class="free">
                                    <span>展示</span>
                                    <div class="freebackground freecontent"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </main>
        <!--底部-->

    </div>
</template>

<script>
    // 引入组件
    import Banner from "../../components/banner"

    // 引入util的函数
    import util from "../../util"

    // 引入axios
    import axiosReq from "../../util/axiosConfig"

    export default {
        name: "perform",
        // 组件传参
        props:["id"],
        // 数据
        data(){
            return{
                // banner类型
                type:"major",
                // banner位置
                loc:"title",
                // 左内容显示区
                majorLeft:[],
                majorLeftContent:[],
                // 右内容展示区
                majorRight:[],
                majorRightContent:[],
                // 中轮播区
                majorMid:[],
                majorMidContent:[],
                // 下内容展示区
                majorDown:[],
                // 轮播用的定时器
                timer:null,
                timer2:null,
                timer3:null,
                timer4:null,
                timer5:null,
                timer6:null,

                majorstyle:null

            }
        },
        // 组件
        components:{
            Banner
        },
        // 组件挂载
        mounted() {
            util.majorInit(this);

        },
        created(){
            this.majorstyle = this.$store.getters.getmajorstyle;
            let that = this;
            // 左边内容显示区请求的数据
            axiosReq.get("getMajor/id/1").then(data=>{
                this.majorLeft = data.data[0];
                let img = this.majorLeft.images_url.split(",");
                let txt = this.majorLeft.introduce.split(",");
                img.forEach((value, index)=>{
                    that.majorLeftContent.push([value,txt[index]]);
                });

                // 加载数据后进行jQuery的初始化
                that.$nextTick(function () {
                    $(function () {
                        // 初始化
                        let m = 0;
                        $(".show1 .content .list-group-item").eq(0).siblings().not(".show1 .background").hide();
                        that.timer = setInterval(function () {
                            $(".show1 .content .list-group-item").stop().eq(m).fadeTo(200,0).hide();
                            if(m == 2){
                                m = 0;
                            }else {
                                m = m+1;
                            }
                            $(".show1 .content .list-group-item").stop().eq(m).fadeTo(200,1).show();
                        },3000);
                        // 鼠标悬停
                        $(".show1 .content").mouseenter(function () {
                            clearInterval(that.timer);
                            that.timer = setInterval(function () {
                                $(".show1 .content .list-group-item").stop().eq(m).fadeTo(200,0).hide();
                                if(m == 2){
                                    m = 0;
                                }else {
                                    m = m+1;
                                }
                                $(".show1 .content .list-group-item").stop().eq(m).fadeTo(200,1).show();
                            },3000);
                        });
                    });
                });
            });
            // 中间滑动轮播图数据
            axiosReq.get("getSomeMajors/name/mid").then(data=>{
                this.majorMid = data.data[0];
                let img = this.majorMid.images_url.split(",");
                let txt = this.majorMid.introduce.split(",");
                img.forEach((value, index)=>{
                    that.majorMidContent.push([value,txt[index]]);
                });
                that.$nextTick(function () {
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
                });


            });
            // 右边展示区请求的数据
            axiosReq.get("getMajors/start/2/num/4").then(data=>{
                this.majorRight = data.data;
                for(let i = 0 ; i < that.majorRight.length;i++){
                    let img = that.majorRight[i].images_url.split(",");
                    let txt = that.majorRight[i].introduce.split(",");
                    let temp = [];
                    for(let j = 0; j < img.length;j++){
                        temp.push([img[j],txt[j]]);
                    }
                    that.majorRightContent.push(temp);
                }
                that.$nextTick(function () {
                    // 加载数据后进行jQuery的初始化
                    $(function () {
                        // 初始化
                        $(".show2 .nav-tabs li").first().addClass("active");
                        $(".show2 .tab-content .tab-pane").first().addClass("active");
                        let group = $(".show2 .tab-content .list-group");
                        let n = 0,o = 0 ,p = 0 ,q = 0;

                        // 第二多标题内容区悬停切内容
                        $(".show2 .nav-tabs li").mouseenter(function () {
                            let index =  $(this).addClass("active").siblings(this).removeClass("active").end().index();
                            $(".show2 .tab-content .tab-pane").eq(index).addClass("active").siblings(this).removeClass("active");
                        });

                        // 第二多标题内容区切图
                        for(let i = 0 ; i < group.length;i++){
                            $(".show2 .tab-content .list-group").eq(i).children().first().show().siblings().hide();
                        }

                        // 每个区添加定时器
                        that.timer2 = setInterval(function () {
                            $(".show2 .tab-content .list-group").eq(0).children().eq(n).stop(true).fadeTo(200,0).hide();
                            if(n == 2){
                                n = 0;
                            }else {
                                n = n+1;
                            }
                            $(".show2 .tab-content .list-group").eq(0).children().eq(n).stop(true).fadeTo(200,1).show();
                        },3000);
                        that.timer3 = setInterval(function () {
                            $(".show2 .tab-content .list-group").eq(1).children().eq(o).stop(true).fadeTo(200,0).hide();
                            if(o == 2){
                                o = 0;
                            }else {
                                o = o+1;
                            }
                            $(".show2 .tab-content .list-group").eq(1).children().eq(o).stop(true).fadeTo(200,1).show();
                        },3000);
                        that.timer4 = setInterval(function () {
                            $(".show2 .tab-content .list-group").eq(2).children().eq(p).stop(true).fadeTo(200,0).hide();
                            if(p == 2){
                                p = 0;
                            }else {
                                p = p+1;
                            }
                            $(".show2 .tab-content .list-group").eq(2).children().eq(p).stop(true).fadeTo(200,1).show();
                        },3000);
                        that.timer5 = setInterval(function () {
                            $(".show2 .tab-content .list-group").eq(3).children().eq(q).stop(true).fadeTo(200,0).hide();
                            if(q == 2){
                                q = 0;
                            }else {
                                q = q+1;
                            }
                            $(".show2 .tab-content .list-group").eq(3).children().eq(q).stop(true).fadeTo(200,1).show();
                        },3000);

                        // 鼠标悬停
                        $(".show2 .tab-content").mouseenter(function () {
                            // 鼠标进入清除每个定时器
                            clearInterval(that.timer2);
                            clearInterval(that.timer3);
                            clearInterval(that.timer4);
                            clearInterval(that.timer5);
                        }).mouseleave(function () {
                            // 鼠标离开添加定时器
                            that.timer2 = setInterval(function () {
                                $(".show2 .tab-content .list-group").stop(true).eq(0).children().eq(n).stop(true).fadeTo(200,0).hide();
                                if(n == 2){
                                    n = 0;
                                }else {
                                    n = n+1;
                                }
                                $(".show2 .tab-content .list-group").stop(true).eq(0).children().eq(n).stop(true).fadeTo(200,1).show();
                            },3000);
                            that.timer3 = setInterval(function () {
                                $(".show2 .tab-content .list-group").stop(true).eq(1).children().eq(o).stop(true).fadeTo(200,0).hide();
                                if(o == 2){
                                    o = 0;
                                }else {
                                    o = o+1;
                                }
                                $(".show2 .tab-content .list-group").stop(true).eq(1).children().eq(o).stop(true).fadeTo(200,1).show();
                            },3000);
                            that.timer4 = setInterval(function () {
                                $(".show2 .tab-content .list-group").stop(true).eq(2).children().eq(p).stop(true).fadeTo(200,0).hide();
                                if(p == 2){
                                    p = 0;
                                }else {
                                    p = p+1;
                                }
                                $(".show2 .tab-content .list-group").stop(true).eq(2).children().eq(p).stop(true).fadeTo(200,1).show();
                            },3000);
                            that.timer5 = setInterval(function () {
                                $(".show2 .tab-content .list-group").stop(true).eq(3).children().eq(q).stop(true).fadeTo(200,0).hide();
                                if(q == 2){
                                    q = 0;
                                }else {
                                    q = q+1;
                                }
                                $(".show2 .tab-content .list-group").stop(true).eq(3).children().eq(q).stop(true).fadeTo(200,1).show();
                            },3000);
                        });
                    });
                });


            });
            // 下方滑播图请求的数据
            axiosReq.get("getSomeMajors/name/down").then(data=>{
                this.majorDown = data.data;
            });


        },
        // 组件销毁
        destroyed() {
            clearInterval(this.timer);
            clearInterval(this.timer2);
            clearInterval(this.timer3);
            clearInterval(this.timer4);
            clearInterval(this.timer5);
            clearInterval(this.timer6);
        }
    }

</script>

<style scoped>
    main{
        background-color: #f4f5f7;
    }

    /*内容展示区1*/
    .showcontent .show1 img{
        width:100%;
        height: 100%;
    }
    .showcontent .show1 .txt{
        position: absolute;
        right: 15%;
        left: 15%;
        bottom: 10%;
        color: #fff;
        text-align: center;
        text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
        font-size: 18px;
        z-index: 1003;
    }
    .showcontent .show1{
        margin: 15px 0 15px 0;
        box-shadow: 0 0 10px 2px rgba(0,0,0,.1);
        border-radius: 4px;
        background-color: white;

    }
    .showcontent .show1 .content{
        position: relative;
    }
    .showcontent .show1 .title{
        font-size: 20px;
        font-weight: bold;
        border: none;
        padding: 20px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    }

    /*半透明背景图*/
    .background{
        position: absolute;
        left: 0;
        top: 0;
        background-color: black;
        opacity: 0.5;
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }

    /*内容展示区2*/
    .showcontent .show2{
        margin-top: 15px;
        box-shadow: 0 0 10px 2px rgba(0,0,0,.1);
        border-radius: 4px;
        background-color: white;
        overflow: hidden;
    }
    .showcontent .show2 .tab-content,.nav-tabs a{
        position: relative;
        font-size: 16px;
        font-weight: 600;
        color: #333333;
    }
    .showcontent .show2 .tab-content,.nav-tabs li:hover a{
        color: #00a1d6;
        text-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    }
    .showcontent .show2 .tab-content,.nav-tabs{
        margin: 15px 0 15px 0;
    }

    .showcontent .show2 .tab-content .tab-pane img{
        height: 500px;
        width: 100%;
    }
    .showcontent .show2 .tab-content .tab-pane .txt{
        position: absolute;
        right: 15%;
        left: 15%;
        bottom: 10%;
        color: #fff;
        text-align: center;
        text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
        font-size: 18px;
        z-index: 1003;
    }

    /*轮播区*/
    .slide {
        border: 1px solid #ccc;
        border-radius: 4px;
        margin: 50px -15px 15px 0;
        background-color: white;
        box-shadow: 0 0 10px 2px rgba(0,0,0,.1);
    }
    .slide ul{
        margin: 20px;
        position: relative;
        height: 340px;
        overflow: hidden;
    }
    .slide ul li{
        height: 340px;
        position: absolute;
        padding: 10px;
        width: 100%;
        left: 0;
        top: 0;
        margin: 10px;
        border-right: 1px solid #ccc;
    }
    .slide ul li h4{
        text-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    }
    .slide ul li p{
        font-size: 16px;
    }

    .slide .media:first-child{
        margin-top: 15px;
    }
    .slide .media img{
        width: 300px;
        height: 300px;
        border-radius: 4px;
    }
    .slide .media .media-body {
        text-align: left;
        margin-top: 10px;
        padding: 10px;
    }

    /*课包*/
    .showcontent2{
        margin-right: -15px;
    }


</style>

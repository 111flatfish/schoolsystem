<template>
    <div class="">
        <div class="row clearfix header">
            <!--logo与图标连接-->
            <div class="header_content">
                <!--logo-->
                <div class="header_logo">
                    <a href="#"><img src="../../assets/logo.png" alt="logo"></a>
                </div>
                <!--图标连接-->
                <div class="header_connect">
                    <div class="header_icon">
                        <span class="erweimaspan1"><img src="../../../public/image/header/微博logo-蓝色.png" alt="weibo">官方微博</span>
                        <img src="../../../public/image/header/二维码-官方微信号.png" alt="erweima" class="weibo" >
                        <div class="weixin">
                            <span class="erweimaspan2"><img src="../../../public/image/header/微信logo-蓝色.png" alt="weixin">微信公众号</span>
                            <img src="../../../public/image/header/二维码-官方微信号.png" alt="erweima" class="weixinerweima">
                        </div>
                    </div>
                    <!--电话-->
                    <div class="header_phone">
                        <span><img src="../../../public/image/header/电话-蓝色.png" alt="phone">400-000-0000</span>
                    </div>
                </div>
            </div>
            <!--导航条-->
            <nav class="navbar  navbar-default">
                <div class="container-fluid">
                    <!--导航条头部-->
                    <div class="navbar-header">
                        <!--缩小至920时导航按钮出现-->
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">
                            <!--品牌标签-->
                            <img src="./../../assets/logo.png" alt="logo" height="100%">
                        </a>
                    </div>

                    <!--导航条项目-->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <!--第一个导航条-->
                        <ul class="nav navbar-nav nav1">
                            <!--首页-->
                            <li>
                                <router-link tag="a" to="/index">戏传首页</router-link>
                            </li>
                            <!--戏传特色-->
                            <li>
                                <a href="#">戏传特色</a>
                            </li>
                            <!--专业介绍-->
                            <li>
                                <router-link to="/guide" tag="a">艺考干货</router-link>
                            </li>
                            <!--艺考指南-->
                            <li>
                                <router-link to="/achievement" tag="a">学院成绩</router-link>
                            </li>
                            <!--历届成绩-->
                            <li>
                                <router-link to="/message" tag="a">答疑解惑</router-link>
                            </li>
                            <!--留言板-->
                            <li>
                                <router-link to="/news" tag="a">戏传新闻</router-link>
                            </li>
                            <!--关于我们-->
                            <li>
                                <router-link to="/about" tag="a">关于我们</router-link>
                            </li>
                        </ul>
                        <!--第二个导航条-->
                        <ul class="nav navbar-nav nav2">
                            <!--播音与主持艺术专业-->
                            <li>
                                <router-link to="/major/perform" tag="a">播音与主持艺术专业</router-link>
                            </li>
                            <!--戏剧影视表演-->
                            <li>
                                <router-link to="/major/broadcasting" tag="a">戏剧影视表演</router-link>
                            </li>
                            <!--广播电视编导专业-->
                            <li>
                                <router-link to="/major/choreographer" tag="a">广播电视编导专业</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        mounted() {
            $(function () {
                $(".erweimaspan1").mouseenter(function () {
                    $(".weibo").show();
                }).mouseleave(function () {
                    $(".weibo").hide();
                });
                $(".erweimaspan2").mouseenter(function () {
                    $(".weixinerweima").show();
                }).mouseleave(function () {
                    $(".weixinerweima").hide();
                });
            });
        }
    };
</script>

<style scoped>
    .header{
        position: fixed;
        width: 100%;
        z-index: 9999;
        background-color: #fff;
        top: 0;
    }
    .header .header_content{
        position: relative;
        overflow: hidden;
        width: 100%;
    }
    /*logo*/
    .header .header_content .header_logo{
        text-align: left;
        margin-top: 15px;
        margin-left: 100px;
        display: inline-block;
        float: left;
    }
    .header .header_content .header_logo img{
        width: 210px;
        height: 70px;
    }
    /*左图标与电话*/
    .header .header_content .header_connect{
        text-align: right;
        display: inline-block;
        float: right;
        margin-top: 15px;
        margin-right: 100px;

    }
    .header .header_content .header_connect .header_icon{
        display: inline-block;
        margin-right: 30px;
        position: relative;
        z-index: 2000;
    }
    .header .header_content .header_connect .header_icon span{
        margin: 0 20px;
        color: #000;
        font-weight: bold;
    }
    /*二维码*/
    .header .header_content .header_connect .header_icon .weibo{
        position: absolute;
        left: -70px;
        top:-10px;
        width: 80px;
        height: 80px;
        z-index: 5555;
        display: none;
    }
    .header .header_content .header_connect .header_icon .weixinerweima{
        position: absolute;
        left: -70px;
        top:-10px;
        width: 80px;
        height: 80px;
        z-index: 5555;
        display: none;
    }
    .header .header_content .header_connect .header_icon .weixin span{
        margin: 0 5px;
    }
    .header .header_content .header_connect .header_icon .weixin{
        padding: 10px 0;
    }
    .header .header_content .header_connect .header_icon img{
        width: 22px;
        height: 20px;
        margin-right: 10px;
    }
    .header .header_content .header_connect .header_phone{
        display: inline-block;
        position: relative;
        top:-20px;
        right: 10px;
        color: #000;
        font-weight: bold;
    }
    .header .header_content .header_connect .header_phone img{
        width: 45px;
        height: 45px;
    }

    /*导航条*/
    .header .collapse{
        font-size: 16px;
        line-height: 60px;
        text-align: center;
        width: 100%;
    }
    .header .navbar-brand{
        display: none;
    }
    .header .navbar{
        background: #fff;
        width: 105%;
        margin-bottom: 0;
        /*border-top: 1px solid #ccc;*/

    }
    .header .navbar li{
        width: 190px;
        text-align: center;
    }
    .header .navbar a{
        height: 60px;
        line-height: 30px;
        font-size: 22px;
        text-align: center;
        font-weight: bold;
        color: #000;
        position: relative;

    }
    .header .navbar li:hover a{
        color: #00bfff;
    }
    .header .navbar li:hover a:after{
        content: "";
        width: 40px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 0;
        border-bottom: 3px solid #00bfff;
    }
    /*第一条*/
    .header .nav1{
        position: relative;
        left: 50%;
        margin-left: -665px;
        float: none;
    }
    /*第二条*/
    .header .nav2{
       position: relative;
        left: 50%;
        margin-left:-420px;
        width: 100%;

    }
    .header .nav2:before{
        content: '';
        position: absolute;
        left: -50%;
        width:150%;
        height: 100%;
        background-color: #9a9a9a;
    }
    .header .nav2 li{
        width: 280px;
    }
    .header .nav2 li a{
        color: #fff;
    }

    /*移动端适配*/
    /*大于768*/
    @media (min-width: 768px) {
        .container-fluid{
            padding:0 100px;
        }
    }
    /*小于908*/
    @media (max-width: 908px) {
        .header .navbar li{
            width: 120px;
        }
        /*第一条*/
        .header .nav1{
            margin-left: -420px;
        }
        /*第二条*/
        .header .nav2{
            margin-left:-180px;
        }
        .header .nav2 li{
            height: 80px;
        }
    }
    /*小于768*/
    @media (max-width: 768px) {
        .header .header_content{
            display: none;
        }
        .header .navbar-brand{
            display:block;
        }
        /*第一条*/
        .header .nav1{
            text-align: center;
            left: 0;
            right: 0;
            margin: 0 auto;
        }
        .header .nav1 li{
            margin: 0 auto;
        }
        /*第二条*/
        .header .nav2{
            margin-left:-180px;
        }
        .header .nav2 li{
            width: 250px;
            margin: 0 auto;
        }
    }



</style>

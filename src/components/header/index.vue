<template>
    <div class="container">
        <div class="row clearfix header">
            <!--导航条-->
            <nav class="navbar navbar-fixed-top navbar-default navbar-inverse">
                <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
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

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <!--导航条项目-->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <!--首页-->
                            <li>
                                <div class="dropdown">
                                    <router-link tag="a" to="/index" class="dropdown-toggle" href="#" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        首页
                                    </router-link>
                                    <!--子菜单-->
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another</a></li>
                                        <li><a href="#">Another</a></li>
                                        <li><a href="#">Another</a></li>
                                    </ul>
                                </div>
                            </li>
                            <!--专业介绍-->
                            <li>
                                <div class="dropdown">
                                    <router-link tag="a" to="/major/perform" class="dropdown-toggle" href="#" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        专业介绍
                                    </router-link>
                                    <!--子菜单-->
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li><router-link tag="a" to="/major/perform">表演</router-link></li>
                                        <li><router-link tag="a" to="/major/choreographer">播音</router-link></li>
                                        <li><router-link tag="a" to="/major/broadcasting">编导</router-link></li>
                                    </ul>
                                </div>
                            </li>
                            <!--艺考指南-->
                            <li>
                                <div class="dropdown">
                                    <router-link tag="a" to="/guide" class="dropdown-toggle" href="#" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        艺考指南
                                    </router-link>
                                    <!--子菜单-->
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another</a></li>
                                        <li><a href="#">Another</a></li>
                                        <li><a href="#">Another</a></li>
                                    </ul>
                                </div>
                            </li>
                            <!--历届成绩-->
                            <li>
                                <div class="dropdown">
                                    <router-link tag="a" to="/achievement" class="dropdown-toggle" href="#" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        历届成绩
                                    </router-link>
                                    <!--子菜单-->
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another</a></li>
                                        <li><a href="#">Another</a></li>
                                        <li><a href="#">Another</a></li>
                                    </ul>
                                </div>
                            </li>
                            <!--留言板-->
                            <li>
                                <div class="dropdown">
                                    <router-link tag="a" to="/message" class="dropdown-toggle" href="#" id="dropdownMenu5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        留言板
                                    </router-link>
                                    <!--子菜单-->
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another</a></li>
                                        <li><a href="#">Another</a></li>
                                        <li><a href="#">Another</a></li>
                                    </ul>
                                </div>
                            </li>
                            <!--关于我们-->
                            <li>
                                <div class="dropdown">
                                    <router-link tag="a" to="/about" class="dropdown-toggle" href="#" id="dropdownMenu6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        关于我们
                                    </router-link>
                                    <!--子菜单-->
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another</a></li>
                                        <li><a href="#">Another</a></li>
                                        <li><a href="#">Another</a></li>
                                    </ul>
                                </div>
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
        methods:{
            toMajor(value){
                if(value == 0){
                    this.$store.commit("setmajorstyle","perform");
                    this.$router.push({path:"/major/perform"});
                }else if(value == 1){
                    this.$store.commit("setmajorstyle","choreographer");
                    this.$router.push({path:"/major/choreographer"})
                }else {
                    this.$store.commit("setmajorstyle","broadcasting");
                    this.$router.push({path:"/major/broadcasting"})
                }

            }
        },
        mounted() {
            // 组件初始化
            // 导航项目悬浮时的下拉子菜单

            $(function () {
                let isfull = true;
                if($(window).width()>768) {
                    $(" .header .dropdown").hover(function () {
                        // slideDown(time):time弹出时间
                        if (isfull) {
                            $(this).children("ul").stop().slideDown(100);
                        }
                    }, function () {
                        if (isfull) {
                            $(this).children("ul").stop().slideUp(100);
                        }
                    });
                }
                $(window).resize(function () {
                    if($(window).width()<768){
                        isfull = false;
                    }else {
                        isfull = true;
                        $(" .header .dropdown").hover(function () {
                            // slideDown(time):time弹出时间
                            if (isfull) {
                                $(this).children("ul").stop().slideDown(100);
                            }
                        }, function () {
                            if (isfull) {
                                $(this).children("ul").stop().slideUp(100);
                            }
                        });
                    }
                });
            });
        }
    };
</script>

<style scoped>
    .header{
        padding-bottom: 60px;
        border-bottom: 1px solid #ccc;
    }

    .header .navbar{
        /*background: white;*/
        box-shadow: 0 1px 2px rgba(0,0,0,.1);
    }
    .header .navbar li{
        width: 110px;
        text-align: center;
    }
    .header .navbar-brand{

    }
    .header .navbar a{
        height: 60px;
        line-height: 30px;
        font-size: 16px;
        text-align: center;
    }

    .header .collapse{
        font-size: 16px;
        line-height: 60px;

    }
    .header .container-fluid{

    }

    .header .dropdown{
        text-align: center;
    }
    .header .dropdown>a{
        color: #fff;
    }
    .header .dropdown-menu li{
        width: 90px;
        text-align: center;

    }
    .header .dropdown-toggle:hover{
        color: #00a1b6;
    }
    .header .dropdown-menu{
        text-align: center;
        padding: 10px;
    }
    .header .dropdown-menu li a{
        width: 100%;
        line-height: 54px;
        color: #333333;
        padding: 5px 15px 5px 15px;
    }
    .header .dropdown-menu li a:hover{
        color: #00a1b6;
    }

    @media (min-width: 768px) {
        .header .dropdown-menu li{
            margin: 0 auto;
        }
        .container-fluid{
            padding:0 100px;
        }
    }
    @media (max-width: 908px) {
        .header .navbar li{
            width: 80px;
        }
    }



</style>

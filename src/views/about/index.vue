<template>
    <div class="about">
        <!--轮播图-->
        <Banner v-bind:banner-data="type"  v-bind:location-data="loc"></Banner>
        <main class="container">
            <!--教学环境-->
            <div class="row clearfix about_evi">
                <!--标题图-->
                <div class="about_evi_title">
                    <h3>教学环境</h3>
                </div>
                <!--内容-->
                <div class="about_evi_content">
                    <img src="../../../public/image/school/2.jpg" class="showaboutimg" alt="evi">
                    <ul class="about_banner">
                        <li><img src="../../../public/image/school/1.jpg" alt="school"></li>
                        <li><img src="../../../public/image/school/2.jpg" alt="school"></li>
                        <li><img src="../../../public/image/school/3.jpg" alt="school"></li>
                    </ul>
                </div>
            </div>
            <!--教学理念-->
            <div class="about_idea">
                <div class="about_idea_title">
                    <h3>办学理念</h3>
                </div>
                <div class="about_idea_content row clearfix">
                    <div class="col-md-4">内容</div>
                    <div class="col-md-8">
                        <!--轮播图-->
                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                            <!-- Indicators -->
                            <ol class="carousel-indicators">
                                <li style="margin: 10px;width: 15px;height: 15px;" v-bind:data-slide-to="index" data-target="#carousel-example-generic" v-for="(item,index) in classBanner"></li>
                            </ol>

                            <!-- Wrapper for slides -->
                            <div class="carousel-inner about_idea_banner" role="listbox" style="border-radius: 4px">
                                <div class="item" v-for="data in classBanner">
                                    <img v-bind:src='data.image_url' alt="classRoom">
                                </div>
                            </div>

                            <!-- Controls -->
                            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev" style="border-radius: 4px">
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next" style="border-radius: 4px">
                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <!--教学特色-->
            <div class="row clearfix about_feature">
                <div class="about_feature_title">
                    <h3>教学特色</h3>
                </div>
                <h2 style="border: 1px solid #ccc">内容</h2>
            </div>
        </main>

    </div>
</template>

<script>
    // 引入组件
    import Banner from "../../components/banner"
    // 引入util函数
    import util from "../../util"

    // 引入axios
    import axiosReq from  "../../util/axiosConfig"

    export default {
        name: "about",
        components:{
            Banner
        },
        // 数据
        data(){
            return {
                // banner类型
                type:"about",
                // banner位置
                loc:"title",

                // 教室轮播图数据
                classBanner:[],
                // jquery定时器
                timer:null,

            }
        },
        // 组件创建
        created(){
            // 请求教室轮播图数据
            axiosReq.get(`getBanner/page/about/location/classRoom`).then(data=>{
                this.classBanner = data.data;
                this.$nextTick(()=> {
                    $(function () {
                        $(".about_idea_banner .item").first().addClass("active");
                        $(".carousel-indicators li").first().addClass("active");
                    })
                })
            });
        },
        // 组件挂载
        mounted() {
            // 初始化动画
            util.aboutInit(this);
        },
        // 组件销毁
        destroyed() {
            // 清除jQuery的定时器，避免重复
            clearInterval(this.timer);
        }
    }

</script>

<style scoped>
main{
    color: #404040;
    font-weight: 400;
    margin: 20px auto;
}
/*教学环境*/
.about_evi{
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 0 3px 2px rgba(0,0,0,.2);
    padding: 10px;
    margin: 15px;
}
.about_evi_title{
    background: url("http://cdn.ibootstrap.cn/lorempixel.com/1600/500/sports/3/default.jpg") no-repeat;
    width: 100%;
    height: 80px;
    border-radius: 4px;
}
.about_evi_title h3{
    color: #fff;
    line-height: 80px;
    font-size: 36px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
    margin-top: 0;
    border-radius: 6px;
}
.about_evi_content img{
    border-radius: 4px;
}
.about_evi_content{
    position: relative;
    margin-top: 5px;
}
.about_evi_content .showaboutimg{
    width: 100%;
    height: 600px;
}
ul{
    width: 370px;
    height: 88px;
    position:absolute;
    right: 20px;
    bottom: 10px;
    overflow: hidden;
    padding: 5px;
    border: 4px solid white;
    background-color: white;
    border-radius: 4px;
}
ul li img{
    width: 120px;
    height: 80px;
    margin-right: 5px;
}
ul li {
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
}
ul li:hover{
    transform: scale(1.1);
}
.active{
    border: 6px solid #00a1b6;
    border-radius: 4px;
}



/*教学理念*/
.about_idea{
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 0 3px 2px rgba(0,0,0,.2);
    padding: 10px;
    margin: 15px;
}
.about_idea_content {
    margin: 15px 0 15px 0;

}
.about_idea_title{
    background: url("http://cdn.ibootstrap.cn/lorempixel.com/1600/500/sports/1/default.jpg") no-repeat;
    width: 100%;
    height: 80px;
    border-radius: 4px;
}
.about_idea_title h3{
    color: #fff;
    line-height: 80px;
    font-size: 36px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
    margin-top: 0;
    border-radius: 6px;
}
#carousel-example-generic{
    border-radius: 4px;
    height: 100%;
}

.about_idea_banner .item img{
    border-radius: 4px;
    width: 100%;
    height: 500px;
}
.about_idea_banner .item{
    border: none;
    border-radius: 4px;
}


/*教学特色*/
.about_feature{
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 0 3px 2px rgba(0,0,0,.2);
    padding: 10px;
    margin: 15px;
}
.about_feature_title{
    background: url("http://cdn.ibootstrap.cn/lorempixel.com/1600/500/sports/2/default.jpg") no-repeat;
    width: 100%;
    height: 80px;
    border-radius: 4px;
}
.about_feature_title h3{
    color: #fff;
    line-height: 80px;
    font-size: 36px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
    margin-top: 0;
    border-radius: 6px;
}
@media (max-width: 768px) {
    .about_evi_content .showaboutimg{
        height: 250px;
    }
    ul{
        width: 170px;
        height: 48px;
        position:absolute;
        right: 20px;
        bottom: 10px;
        overflow: hidden;
        padding: 5px;
        border: 4px solid white;
        background-color: white;
        border-radius: 4px;
    }
    ul li img{
        width: 50px;
        height: 40px;
        margin-right: 5px;
    }
    .about_idea_banner .item img{
        height: 250px;
    }
    .about_idea_content div:nth-child(2){
        padding: 0;
    }
}
</style>

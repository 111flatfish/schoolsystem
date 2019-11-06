<template>
    <div class="major">
        <!--头部-->
        <!--轮播图-->
        <Banner v-bind:banner-data="type" v-bind:location-data="loc"></Banner>
        <!--内容-->
        <main>
            <div class="container">
            <div class="row clearfix showcontent">
                        <!--内容显示区-->
                        <div class="col-md-5 show1">
                            <div>
                                <div class="list-group">
                                    <a href="#" class="list-group-item title">{{}}</a>
                                    <div class="content">
                                        <!--图集加内容文字-->
                                        <div class="list-group-item" >
                                            <img src="../../../public/image/teacherheader/1.jpeg" alt="content">
                                            <div class="txt">
                                                <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                            </div>
                                        </div>
                                        <!--半透明背景-->
                                        <div class="background"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--内容展示区-->
                        <div class="col-md-7  show2">
                            <div>
                                <!-- Nav tabs -->
                                <!--分页导航-->
                                <ul class="nav nav-tabs" role="tablist">
                                    <li role="presentation"><a href="#content1" aria-controls="content1" role="tab" data-toggle="tab">标题1</a></li>
                                    <li role="presentation"><a href="#content2" aria-controls="content2" role="tab" data-toggle="tab">标题2</a></li>
                                    <li role="presentation"><a href="#content3" aria-controls="content3" role="tab" data-toggle="tab">标题3</a></li>
                                    <li role="presentation"><a href="#content4" aria-controls="content4" role="tab" data-toggle="tab">标题4</a></li>
                                </ul>
                                <!--分页内容-->
                                <!-- Tab panes -->
                                <div class="tab-content">
                                    <!--处于鼠标悬浮的分页项为active-->
                                    <div role="tabpanel" class="tab-pane active" id="content1">
                                        <div class="list-group">
                                            <div class="list-group-item">
                                                <!--图片-->
                                                <img src="../../../public/image/teacherheader/1.jpeg" alt="content">
                                                <!--文字内容-->
                                                <div class="txt">
                                                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                                </div>
                                            </div>
                                            <div class="list-group-item">
                                                <img src="../../../public/image/teacherheader/2.jpeg" alt="content">
                                                <div class="txt">
                                                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                                </div>
                                            </div>
                                            <div class="list-group-item">
                                                <img src="../../../public/image/teacherheader/3.jpg" alt="content">
                                                <div class="txt">
                                                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane" id="content2">
                                        <div class="list-group">
                                            <div class="list-group-item">
                                                <img src="../../../public/image/teacherheader/3.jpg" alt="content">
                                                <div class="txt">
                                                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                                </div>
                                            </div>
                                            <div class="list-group-item">
                                                <img src="../../../public/image/teacherheader/2.jpeg" alt="content">
                                                <div class="txt">
                                                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                                </div>
                                            </div>
                                            <div class="list-group-item">
                                                <img src="../../../public/image/teacherheader/1.jpeg" alt="content">
                                                <div class="txt">
                                                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane" id="content3">
                                        <div class="list-group">
                                            <div class="list-group-item">
                                                <img src="../../../public/image/teacherheader/2.jpeg" alt="content">
                                                <div class="txt">
                                                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                                </div>
                                            </div>
                                            <div class="list-group-item">
                                                <img src="../../../public/image/teacherheader/1.jpeg" alt="content">
                                                <div class="txt">
                                                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                                </div>
                                            </div>
                                            <div class="list-group-item">
                                                <img src="../../../public/image/teacherheader/3.jpg" alt="content">
                                                <div class="txt">
                                                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane" id="content4">
                                        <div class="list-group">
                                            <div class="list-group-item">
                                                <img src="../../../public/image/teacherheader/1.jpeg" alt="content">
                                                <div class="txt">
                                                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                                </div>
                                            </div>
                                            <div class="list-group-item">
                                                <img src="../../../public/image/teacherheader/2.jpeg" alt="content">
                                                <div class="txt">
                                                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                                </div>
                                            </div>
                                            <div class="list-group-item">
                                                <img src="../../../public/image/teacherheader/3.jpg" alt="content">
                                                <div class="txt">
                                                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
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
                    <li class="media" v-for="item in majorMid">
                            <div class="media-left">
                                <!--图片-->
                                <a href="#">
                                    <img class="media-object" src="../../../public/image/teacherheader/1.jpeg" alt="图片">
                                </a>
                            </div>
                            <!--文字内容-->
                            <div class="media-body">
                                <h3 class="media-heading">{{item.major_name}}</h3>
                                <p>{{item.indroduce}}</p>
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
    import Header from "../../components/header"
    import Footer from "../../components/footer"
    import Banner from "../../components/banner"

    // 引入util的函数
    import util from "../../util"

    // 引入axios
    // import axiosReq from "../../util/axiosConfig"

    export default {
        name: "major",
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
                // 右内容展示区
                majorRight:[],
                // 中轮播区
                majorMid:[],
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
            Header,
            Footer,
            Banner
        },
        // 组件挂载
        mounted() {
            util.majorInit(this);
        },
        created(){
            this.majorstyle = this.$store.getters.getmajorstyle;
            window.console.log(this.majorstyle);
            //   axiosReq.get("getMajor/id/5").then(data=>{
            //         this.majorLeft = data.data;
            //   });
            // axiosReq.get("getSomeMajors/name/mid").then(data=>{
            //     this.majorLeft = data.data;
            // });
            // axiosReq.get("getMajors/start/1/num/4").then(data=>{
            //     this.majorLeft = data.data;
            // });
            // axiosReq.get("getSomeMajors/name/down").then(data=>{
            //     this.majorLeft = data.data;
            // });


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
    width:500px;
    height: 500px;
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
    margin: 15px 15px 15px 0;
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
    width: 800px;
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
    height: 600px;

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
    margin: 50px 0 15px 0;
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

</style>

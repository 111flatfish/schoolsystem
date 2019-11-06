<template>
    <div class="index">
        <!--头部-->

        <!--轮播图-->
        <Banner v-bind:banner-data="type" v-bind:location-data="loc"></Banner>
        <!--内容-->
        <main>
            <div class="container">
                <div class="row clearfix index_content">
                    <div class="row clearfix index_content_article">
                        <!--左边的介绍栏-->
                        <div class="col-md-4 column index_content_article_introduce">
                            <div class="row">
                                <!--浮窗-->
                                <div class="floatingWindow">
                                    浮窗，接入百度商桥
                                </div>
                                <!--左介绍栏内容-->
                                <ul class="scrollbox media-list">
                                    <router-link tag="li" v-for="item in teacher.slice(0,5)" v-bind:to="'/teacher/'+ item.id" class="media"  :key="item.id">
                                        <div class="media-left ">
                                            <div >
                                                <img class="media-object" v-bind:src="item.picture" alt="teacher">
                                            </div>
                                        </div>
                                        <div class="media-body">
                                            <h3 style="font-weight: bold" class="media-heading">{{item.name}}</h3>
                                            <p style="color:#99a2aa;">{{item.lable}}</p>
                                            <p style="font-size: 16px;margin-right: 10px;text-overflow: ellipsis;width: 316px;height: 90px;overflow: hidden">{{item.introduce}}</p>
                                        </div>
                                    </router-link>
                                </ul>
                            </div>
                        </div>
                        <!--中间的新闻栏-->
                        <div class="col-md-4 column index_content_article_news">
                            <div class="list-group news" >
                                <!--新闻栏-->
                                <div  class="list-group-item news_title" style="background-color: #eee;margin: 10px 0">新闻</div>
                                <div class="list-group-item news_content" v-for="item in news">
                                    <h4 class="list-group-item-heading">
                                        {{item.title}}
                                    </h4>
                                    <p class="list-group-item-text">
                                        {{item.create_time}}
                                    </p>
                                </div>
                            </div>
                            <!--文章栏-->
                            <div class="list-group article">
                                <div class="list-group-item article_title" style="background-color: #eee;margin: 10px 0">文章</div>
                                <div class="list-group-item article_content" v-for="item in article">
                                    <h4 class="list-group-item-heading">
                                        {{item.title}}
                                    </h4>
                                    <p class="list-group-item-text">
                                        {{item.create_time}}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!--右边的介绍栏-->
                        <div class="col-md-4 column index_content_article_introduce">
                            <div class="row">
                                <ul class="scrollbox2 media-list">
                                    <router-link tag="li" class="media media2" v-for="item in teacher.slice(5,10)" v-bind:to="'/teacher/'+ item.id" :key="item.id">
                                        <div class="media-left ">
                                            <a href="#">
                                                <img class="media-object" v-bind:src="item.picture" alt="teacher">
                                            </a>
                                        </div>
                                        <div class="media-body">
                                            <h3 style="font-weight: bold" class="media-heading">{{item.name}}</h3>
                                            <p style="color:#99a2aa;">{{item.lable}}</p>
                                            <p style="font-size: 16px;margin-right: 10px;text-overflow: ellipsis;width: 316px;height: 90px;overflow: hidden">{{item.introduce}}</p>
                                        </div>
                                    </router-link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!--底部-->

        <!--悬浮表单-->
        <div class="form">
                <!--头部-->
                <div class="header">
                    <span  class="txt">预约</span>
                    <span class="glyphicon glyphicon-plus" id="maxmize" style="display: none"></span>
                    <span id="minimize" class="title-button" data-title="Minimize window"><span class="glyphicon glyphicon-minus"></span></span>
                </div>
                <!--表单-->
                <form class="form-horizontal container" id="form" >
                    <!--姓名-->
                    <div class="form-group">
                        <label for="inputName3" class="col-sm-2 control-label">姓名</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" v-model="formData.user_name" name="name" id="inputName3" placeholder="Name">
                        </div>
                    </div>
                    <!--手机号-->
                    <div class="form-group">
                        <label for="inputPhone3" class="col-sm-2 control-label">手机号</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" v-model="formData.tel" name="phone" id="inputPhone3" placeholder="Phone">
                        </div>
                    </div>
                    <!--专业-->
                    <div class="form-group select">
                        <label for="selectMajor" class="col-sm-2 control-label">专业</label>
                        <div class="col-sm-10">
                            <select name="major" id="selectMajor" v-model="formData.major">
                                <option value="4">未知</option>
                                <option value="1">未知</option>
                                <option value="2">未知</option>
                                <option value="3">未知</option>
                            </select>
                        </div>

                    </div>
                    <!--来源-->
                    <div class="form-group select">
                        <label for="selectFrom" class="col-sm-2 control-label">您是从哪里知道我们的/来源</label>
                        <div class="col-sm-10">
                            <!--下拉框-->
                            <select name="from" id="selectFrom" v-model="formData.whereKnew">
                                <option value="3">未知</option>
                                <option value="1">未知</option>
                                <option value="2">未知</option>
                                <option value="other">其他</option>
                            </select>
                            <!--输入框-->
                            <input type="text" v-model="formData.whereKnew" v-if="isOther" class="form-control" name="fromtxt" id="selectFromTxt" placeholder="请输入其他来源">
                        </div>
                    </div>
                    <!--微信-->
                    <div class="form-group">
                        <label for="inputWechat3" class="col-sm-2 control-label">微信</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" name="weixin" id="inputWechat3" placeholder="Wechat">
                        </div>
                    </div>
                    <!--qq-->
                    <div class="form-group">
                        <label for="inputqq3" class="col-sm-2 control-label">QQ</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" name="qq" id="inputqq3" placeholder="QQ">
                        </div>
                    </div>
                    <!--提交按钮-->
                    <div class="form-group select">
                        <div class="col-sm-offset-2 col-sm-10">
                            <input type="submit" class="btn btn-primary">
                        </div>
                    </div>
                </form>
            </div>
    </div>
</template>

<script>
    // 引入组件
    import Banner from "../../components/banner"

    // 引入util的函数
    import util from  "../../util"
    // 引入axios
    import axiosReq from "../../util/axiosConfig"


    export default {
        name: "index",
        // 数据
        data(){
          return{
                // 来源
                from:null,
                // 专业
                major:null,
                // banner的类型
                type:"index",
                // banner位置
                loc:"title",
                // 新闻栏
                news:[],
                // 文章栏
                article:[],
                // 老师介绍栏
                teacher:[],
                // 表单数据
                formData:{
                    user_name:null,
                    email:null,
                    sex:null,
                    tel:null,
                    qq:null,
                    major:null,
                    whereKnew:null,
                },
                // 控制jquery的定时器
                timer:null,
                timer2:null,

                //表单来源是否是其他
                isOther:false

          }
        },
        // 方法
        methods:{

        },
        // 组件
        components:{
            Banner
        },
        // 组件创建
        created(){
            // 请求新闻数据
              axiosReq.get("getNews/num/5").then(data=>{
                    this.news = data.data;
              });
              // 请求文章数据
                axiosReq.get("getArticle/num/3").then(data=>{
                    this.article = data.data;
                });
                // 获取老师数据
                axiosReq.get("getTeachers/num/10").then(data=>{
                    this.teacher = data.data;
                });
        },
        // 组件挂载
        mounted() {
            let that = this;
            // 初始化jQuery动画和特效
            util.indexInit(that);
            // 表单验证
            this.$nextTick(function () {
                $("#form").validator({
                    // 验证的表单项，required:必填，integer：数字
                    fields:{
                        name:{
                            rule:"required",
                            ok:"名称可用",
                            tip:"请输入名称",
                            msg:"名称不能为空"
                        },
                        phone:{
                            rule:"required;integer(+0);mobile",
                            ok:"电话可用",
                            tip:"请输入电话号码",
                            msg:"请输入正确的电话号码"
                        },
                        weixin:"integer",
                        qq:"integer(+0)",
                        from:{
                            rule:"required",
                            msg:"请至少选择一个或输入来源"
                        },
                        // fromtxt:"required",
                        major:{
                            rule:"required",
                            ok:"已选择",
                            msg:"请选择至少一个专业"
                        }
                    },
                    // 提交
                    valid: function() {
                        axiosReq.post("appointment",that.formData).then(data=>{
                            window.console.log(that.formData);
                            window.console.log(data);
                        });
                    }
                });
            });


        },
        updated(){
            if(this.formData.whereKnew == "other"){
                this.isOther = true;
            }else if(this.formData.whereKnew == "1"||this.formData.whereKnew == "2"||this.formData.whereKnew == "3") {
                this.isOther = false;
            }else {
                this.isOther = true;
            }
        },
        // 组件销毁
        destroyed() {
                // 清除定时器，防止再次渲染时多个定时器作用在同一个元素上
                window.clearInterval(this.timer);
                window.clearInterval(this.timer2);
        }
    }

</script>

<style scoped>
    .index{
        position: relative;
    }
    .index_content_article_introduce{
        position: relative;
    }
    /*浮窗*/
    .index_content_article_introduce .floatingWindow{
        position: absolute;
        width: 100px;
        height: 100px;
        left:-100px;
        top: 200px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f8fafa;
    }

    /*滚动的老师介绍栏*/
    .scrollbox {
        padding: 10px;
        height: 930px;
    }
    .scrollbox .media .media-left img{
        width: 100px;
        height: 100px;
        border-radius: 4px;
        margin: 10px;
    }
    .scrollbox .media {
        cursor: pointer;
        border-radius: 4px;
        height: 170px;
        background-color: #eee;
    }
    .scrollbox .media-body{
        padding: 10px 0 10px 0;
        border-radius: 4px;
    }
    .scrollbox .media:hover{
        box-shadow: 0 0 4px 2px rgba(0,0,0,.1);
        color: #00a1b6;
    }
    .scrollbox .media-body h3,p{
        text-align: left;
    }

    .scrollbox2 {
        padding: 10px;
        height: 930px;
    }
    .scrollbox2 .media .media-left img{
        width: 100px;
        height: 100px;
        border-radius: 4px;
        margin: 10px;
    }
    .scrollbox2 .media {
        cursor: pointer;
        border-radius: 4px;
        height: 170px;
        background-color: #eee;
    }
    .scrollbox2 .media-body{
        padding: 10px 0 10px 0;
        border-radius: 4px;
    }
    .scrollbox2 .media:hover{
        box-shadow: 0 0 4px 2px rgba(0,0,0,.1);
        color: #00a1b6;
    }
    .scrollbox2 .media-body h3,p{
        text-align: left;
    }

    /*新闻栏*/
    .news{

        font-weight: 600 !important;
    }
    .news .news_title{
        font-size: 22px;
        color: #222;
        padding: 20px 0;
    }
    .news .list-group-item{
        border: none;
    }
    .news .list-group-item-heading{
        text-overflow: ellipsis;
        width: 430px;
        overflow: hidden;
        white-space: nowrap;
        font-weight: 600 !important;
        margin-bottom: 15px;
    }
    .news .list-group-item-text{
        text-align: center;
        font-weight: normal;
        color: #99a2aa;
    }
    .news .news_content{
        border-bottom: 2px solid #f4f5f7;
        padding: 20px 0;
        cursor: pointer;
    }
    .news .news_content:hover .list-group-item-heading{
        transition: 0.2s;
        color: #00a1d6;
    }

    /*文章栏*/
    .article{

        font-weight: 600 !important;
    }
    .article .article_title{
        font-size: 22px;
        color: #222;
        padding: 20px 0;
    }
    .article .list-group-item{
        border: none;
    }
    .article .list-group-item-heading{
        text-overflow: ellipsis;
        width: 430px;
        overflow: hidden;
        white-space: nowrap;
        font-weight: 600 !important;
        margin-bottom: 15px;
    }
    .article .list-group-item-text{
        font-weight: normal;
        color: #99a2aa;
        text-align: center;
    }
    .article .article_content{
        border-bottom: 2px solid #f4f5f7;
        padding: 20px 0;
        cursor: pointer;
    }
    .article .article_content:hover .list-group-item-heading{
        color: #00a1d6;
    }

    /*悬浮表单*/
    .form{
        background-color:#f8fafa ;
        width: 100%;
        position: fixed;
        right: 0;
        bottom:0;
        border: 1px solid #ccc;
        border-radius: 4px !important;
        box-shadow: 0 2px 15px rgba(0,0,0,.2)!important;
        z-index: 1003;
    }
    .form .header{
        font-size: 24px;
        background-color: #ffe284;
        height: 50px;
        line-height: 50px;
        padding: 0 28px 0 28px;
        margin-bottom: 15px;
    }
    .form #minimize{
        float: right;
        cursor: pointer;
    }
    .form #maxmize{
        margin-left: 10px;
        cursor: pointer;
    }
    .form .select{
        text-align: left;
    }
    .form .select select{
        height: 30px;
        line-height: 30px;
        width: 100px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 5px;
        box-sizing: border-box;
    }
    .form .select #selectFromTxt{
        margin-top: 15px;
    }
</style>

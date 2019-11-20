<template>
    <div class="index">
        <!--轮播图-->
        <Banner v-bind:banner-data="type" v-bind:location-data="loc"></Banner>
        <!--内容-->
        <main>
            <div class="container">
                <div class="row clearfix index_content">
                    <div class="row clearfix index_content_article container">
                        <!--左边的介绍栏-->
                        <div class="col-md-4  column index_content_article_introduce container">
                            <div class="row">
                                <!--浮窗-->
                                <div class="floatingWindow">
                                    浮窗，接入百度商桥
                                </div>
                                <!--左介绍栏内容-->
                                <ul class="scrollbox media-list">
                                    <router-link tag="li" v-for="item in teacher.slice(0,5)" v-bind:to="'/teacher/'+ item.id" ref="media" class="media" id="media1" :key="item.id">
                                        <div class="media-left ">
                                            <div >
                                                <a href="#">
                                                    <img class="media-object" v-bind:src="item.picture" alt="teacher">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="media-body">
                                            <h3 style="font-weight: bold" class="media-heading">{{item.name}}</h3>
                                            <p style="color:#99a2aa;">{{item.lable}}</p>
                                            <p style="font-size: 16px;margin-right: 10px;text-overflow: ellipsis;width: 100%;height: 90px;overflow: hidden;">{{item.introduce}}</p>
                                        </div>
                                    </router-link>
                                </ul>
                            </div>
                        </div>
                        <!--中间的新闻栏-->
                        <div class="col-md-4 column index_content_article_news container">
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
                        <div class="col-md-4 column index_content_article_introduce container">
                            <div class="row">
                                <ul class="scrollbox2 media-list">
                                    <router-link tag="li" class="media" id="media2" v-for="item in teacher.slice(5,10)" v-bind:to="'/teacher/'+ item.id" :key="item.id">
                                        <div class="media-left ">
                                            <a href="#">
                                                <img class="media-object" v-bind:src="item.picture" alt="teacher">
                                            </a>
                                        </div>
                                        <div class="media-body">
                                            <h3 style="font-weight: bold" class="media-heading">{{item.name}}</h3>
                                            <p style="color:#99a2aa;">{{item.lable}}</p>
                                            <p style="font-size: 16px;margin-right: 10px;text-overflow: ellipsis;width: 100%;height: 90px;overflow: hidden">{{item.introduce}}</p>
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
                <div class="row clearfix form-content">
                    <div class="col-md-2">
                        <img src="../../assets/logo.png" alt="logo">
                    </div>
                    <div class="col-md-10">
                        <p>预约报名即可享受名师专业测评，更有多重好礼送不停</p>
                        <form class="form-horizontal container" id="form" >

                            <div class="row clearfix">
                                <div class="col-md-3 form_item">
                                    <!--专业-->
                                    <div class="form-group select">
                                        <!--<label for="selectMajor" class="col-sm-2 control-label">专业</label>-->
                                        <div class="col-sm-10 control-input">
                                            <select name="major" id="selectMajor" v-model="formData.major">
                                                <option value="" selected="disabled" style="display: none">意向专业</option>
                                                <option value="未知">未知</option>
                                                <option value="未知">未知</option>
                                                <option value="未知">未知</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!--姓名-->
                                    <div class="form-group">
                                        <!--<label for="inputName3" class="col-sm-2 control-label">姓名</label>-->
                                        <div class="col-sm-10 control-input">
                                            <input type="text" class="form-control" v-model="formData.user_name" name="name" id="inputName3" placeholder="学生姓名">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 form_item">
                                    <!--qq-->
                                    <div class="form-group">
                                        <!--<label for="inputqq3" class="col-sm-2 control-label">QQ</label>-->
                                        <div class="col-sm-10 control-input">
                                            <input type="number" class="form-control" name="qq" id="inputqq3" placeholder="微信/QQ">
                                        </div>
                                    </div>
                                    <!--手机号-->
                                    <div class="form-group">
                                        <!--<label for="inputPhone3" class="col-sm-2 control-label">手机号</label>-->
                                        <div class="col-sm-10 control-input" >
                                            <input type="number" class="form-control" v-model="formData.tel" name="phone" id="inputPhone3" placeholder="手机号">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 form_item">
                                    <!--来源-->
                                    <div class="form-group select">
                                        <!--<label for="selectFrom" class="col-sm-2 control-label">来源</label>-->
                                        <div class="col-sm-10 control-input">
                                            <!--下拉框-->
                                            <select name="from" id="selectFrom" v-model="formData.whereKnew">
                                                <option value="" selected="disabled" style="display: none">从哪里得知戏传</option>
                                                <option value="未知2">未知</option>
                                                <option value="未知3">未知</option>
                                                <option value="other">其他</option>
                                            </select>
                                            <!--输入框-->
                                            <input type="text" v-model="formData.whereKnew2" v-if="isOther" class="form-control" name="fromtxt" id="selectFromTxt" placeholder="请输入其他来源">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 form_item">
                                    <!--提交按钮-->
                                    <div class="form-group submit">
                                        <div class="col-sm-offset-2 col-sm-10 control-input">
                                            <input type="submit" class="btn btn-lg btn-success">
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <!--性别-->
                            <!--<div class="form-group">-->
                                <!--<label class="col-sm-2 control-label">性别</label>-->
                                <!--<div class="col-sm-10 control-input" style="text-align: left;">-->
                                    <!--<input type="radio" name="optionsRadios" value="男" checked style="width: 15px;height: 15px;margin-right: 6px" v-model="formData.sex">-->
                                    <!--<label style="font-size: 16px;line-height: 38px">男</label>-->
                                    <!--<input type="radio" name="optionsRadios" value="女" style="width: 15px;height: 15px;margin-right: 6px;margin-left: 10px" v-model="formData.sex">-->
                                    <!--<label style="font-size: 16px;line-height: 38px">女</label>-->
                                <!--</div>-->
                            <!--</div>-->

                            <!--email-->
                            <!--<div class="form-group">-->
                                <!--<label for="inputEmail3" class="col-sm-2 control-label">email</label>-->
                                <!--<div class="col-sm-10 control-input">-->
                                    <!--<input type="email" class="form-control" name="email" id="inputEmail3" placeholder="email" v-model="formData.email">-->
                                <!--</div>-->
                            <!--</div>-->

                        </form>
                    </div>
                </div>
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
                    sex:"男",
                    tel:null,
                    qq:null,
                    major:"",
                    whereKnew:"",
                    whereKnew2:"",
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
                let that = this;
                axiosReq.get("getTeachers/num/10").then(data=>{
                    this.teacher = data.data;
                    this.$nextTick(()=> {
                        $(function () {
                            util.indexInit(that);
                        })
                    })

                });
        },
        // 组件挂载
        mounted() {
            let that = this;
            // 初始化jQuery动画和特效
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
                            msg:"电话号码不正确"
                        },
                        email:"email",
                        qq:"integer(+0)",
                        from:{
                            rule:"required",
                            msg:"请至少选择一个或输入来源"
                        },
                        // fromtxt:"required",
                        major:{
                            rule:"required",
                            ok:"已选择",
                            msg:"请选择至少一个专业",
                        }
                    },
                    // 提交
                    valid: function() {
                        if(that.isOther == true){
                            that.formData.whereKnew = that.formData.whereKnew2;
                        }
                        axiosReq.post("appointment",that.formData).then(data=>{
                            window.console.log(that.formData);
                            window.console.log(data);
                        });

                    }
                });
            });


        },
        updated(){
            // 如果选择来源为其他，则弹出输入框
            if(this.formData.whereKnew == "other"){
                this.isOther = true;
            }else {
                this.isOther = false;
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
        background-color: #555;
        background: url("../../../public/image/background/background2.jpg") no-repeat;
        background-size: 100% 100%;
    }
    .index_content_article_introduce{
        position: relative;
    }
    /*浮窗*/
    .index_content_article_introduce .floatingWindow{
        position: absolute;
        width: 100px;
        height: 100px;
        left:-90px;
        top: 200px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f8fafa;
    }

    /*滚动的老师介绍栏*/
    .scrollbox {
        padding: 10px;
        height: 930px;
        position: relative;
        overflow: hidden;
        width: 95%;
        right: -10px;
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
        position: absolute;
        margin: 10px 0;
        background-color: #eee;
        color: #444;
    }
    .scrollbox .media-body{
        padding: 10px 10px 10px 0;
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
        overflow: hidden;
        position: relative;
        width: 95%;
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
        position: absolute;
        margin: 10px 0;
        background-color: #eee;
        color: #444;
    }
    .scrollbox2 .media-body{
        padding: 10px 10px 10px 0;
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

    .news .list-group-item{
        background-color: #eee;
        border: none;
        color: #444;
    }
    .news .news_title{
        font-size: 22px;
        color: #222;
        padding: 20px 0;
    }
    .news .list-group-item-heading{
        text-overflow: ellipsis;
        width: 100%;
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

    .article .list-group-item{
        border: none;
        background-color: #eee;
        color: #444;
    }
    .article .article_title{
        font-size: 22px;
        color: #222;
        padding: 20px 0;
    }
    .article .list-group-item-heading{
        text-overflow: ellipsis;
        width: 100%;
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
        background-color: #222222;
        width: 100%;
        position: fixed;
        right: 0;
        bottom:0;
        border: 1px solid #ccc;
        border-radius: 4px !important;
        box-shadow: 0 2px 15px rgba(0,0,0,.2)!important;
        z-index: 1003;
    }
    .form .radio{
        width: 15px;
        height: 15px;
        line-height: 15px;
        margin: 0;
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
        height: 34px;
        line-height: 24px;
        width: 200px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 0 15px;
        box-sizing: border-box;
        color: #aaa;

        /*很关键：将默认的select选择框样式清除*/
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;

        /*在选择框的最右侧中间显示小箭头图片*/
        background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll 175px center transparent;
        background-size: 16px;
        font-size: 14px;
        background-color: #fff;

    }
    .form .select #selectFromTxt{
        margin-top: 15px;
    }
    .form .select #selectFrom{
        padding-left: 5px;
    }
    .form .select:after{
        content: "";
        color: red;
        height: 34px;
        border: 1px solid #2f2f46;
        position: absolute;
        left: 175px;

    }
    .form .form-group{
        display: inline-block;

    }
    .form .form_item{
        text-align: left;
    }
    .form .submit input{
        width: 80px;
        height: 80px;
        background-color: #ccff99;
        color: #000;
        font-weight: bold;
    }
    .form .form-content{
        padding: 0 0 0 100px;
        margin-bottom: 20px
    }
    .form .form-content div:nth-child(2) p{
        padding:15px;
        color: #fff;
        font-size: 18px;
    }




    @media (min-width: 768px) {
        .col-sm-10 {
            width: 110.333333%;
        }
    }
    @media (max-width: 1200px){
        .form .form-content{
            padding: 0 0 0 60px;
        }
        .form .form-content img{
            width: 150px;
            height: 150px;
        }
    }
    @media (max-width: 990px){
        .form .form-content div:nth-child(2) p{
            padding:10px;
            color: #fff;
            font-size: 16px;
            text-align: center;
        }
        .form .form-group{
            text-align: center;
            margin: 5px 70px;
        }
        .form .form_item{
            text-align: center;
        }
        .form .select>div{
            padding: 0;
        }
        .form .form_item:nth-child(1) .form-group:nth-child(2) div{
            padding-left: 20px;
        }
        .form .select:after{
            left: 260px;
        }
        .form .form_item:nth-child(3) .select:after{
            left: 438px;
        }
        .form .submit div{
            margin-left: 0;
        }
        .form .submit input{
            width: 200px;
            height: 50px;
        }
    }
    @media (max-width:768px ) {
        input{
            height: 30px;
        }
        #form{
            padding: 10px;
        }
        .form .header{
            font-size: 14px;
            height: 30px;
            line-height: 30px;
            padding: 0 14px 0 14px;
            margin: 0;
            font-weight: bold;
        }
        .form .form-group label,.control-input{
            display: inline-block;
        }
        .form .form-group{
            text-align: left;
            margin: 5px 10px 5px -10px;
        }
        .form-group:nth-child(2) div,.form-group:nth-child(6) div{
            padding-left: 0;
        }
        .form #minimize{
            float: right;
            margin-right: 10px;
            cursor: pointer;
        }
        .floatingWindow{
            display: none;
        }
        .scrollbox,.scrollbox2{
            right: -5px;
        }
        .form .form-content img{
            width: 80px;
            height: 80px;
        }
        .form .form-content{
            text-align: left;
            padding: 0;
        }
        .form .form_item{
            text-align: left;
        }
        .form .form-content div:nth-child(2) p{
            padding:5px 20px;
            margin-bottom: 0;
            color: #fff;
            font-size: 12px;
            text-align: left;
        }
        .form .form-content div:nth-child(1) img{
            padding: 10px;
        }
        .form .form_item:nth-child(2) div,.form .form_item:nth-child(3) div{
            padding-left: 10px;
        }
        .form .form_item:nth-child(1) div:nth-child(1){
            padding-left: 10px;
        }
        .form .submit input{
            width: 180px;
            height: 40px;
            font-size: 16px;
            padding-left: 5px;
            margin-left: 5px;
        }
    }

</style>

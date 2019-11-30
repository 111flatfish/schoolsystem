<template>
    <div class="index">
        <!--轮播图-->
        <Banner v-bind:banner-data="type" v-bind:location-data="loc"></Banner>
        <!--内容-->
        <main>
            <div class="container">
                <!--就业前景-->
                <div class="row clearfix index_prospect">
                    <div class="col-md-12">
                        <div class="index_prospect_header">
                            <img src="../../../public/image/prospect/图标-就业.png" alt="label">
                            <span>就业前景</span>
                        </div>
                        <div class="index_prospect_content">
                            <img src="../../../public/image/prospect/就业前景图.png" alt="prospect">
                        </div>
                    </div>
                </div>
                <!--师资力量-->
                <div class="row clearfix index_teacher">
                    <div class="col-md-12">
                        <div class="index_teacher_header">
                            <img src="../../../public/image/teacher/图标-师资.png" alt="label">
                            <span>师资力量</span>
                            <h2>传媒艺考资深教师教授</h2>
                        </div>
                        <div class="index_teacher_content container">
                            <!--老师轮播图-->
                            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

                                <!-- 图片内容 -->
                                <div class="carousel-inner index_teacher_banner" role="listbox" style="border-radius: 4px">
                                    <div class="item" v-for="item in teacher" @click="ToTeacher(item.id)">
                                        <img v-bind:src="item.picture" alt="teacher">
                                        <div class="carousel-caption">
                                            <h1>{{item.name}}</h1>
                                            <h3>中央戏剧学院院长</h3>
                                            <p>{{item.introduce}}</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- 切换图片 -->
                                <!--左-->
                                <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev" style="border-radius: 4px">
                                    <span class="pre" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <!--右-->
                                <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next" style="border-radius: 4px">
                                    <span class="next" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                            <div class="index_teacher_link">
                                <h2>部分高考教官因学校规定禁止对外宣传，入学后可享受考官直接授课福利</h2>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <!--学生成绩-->
                <div class="row clearfix index_grade">
                    <div class="col-md-12">
                        <div class="index_grade_header">
                            <img src="../../../public/image/grade/图标-学员.png" alt="label">
                            <span>学生成绩</span>
                        </div>
                        <div class="index_grade_content container">
                            <!--学生成绩轮播图-->
                            <div id="carousel-example-generic2" class="carousel slide" data-ride="carousel">

                                <!-- 图片内容 -->
                                <div class="carousel-inner index_grade_banner" role="listbox" style="border-radius: 4px">
                                    <div class="item active">
                                        <div class="index_grade_student row clearfix">
                                            <div class="col-sm-6 col-md-3" v-for="item in grade.slice(0,4)" :key="item.id">
                                                <div class="thumbnail">
                                                    <!--图片-->
                                                    <img src="../../../public/image/grade/student.jpg" alt="grade">
                                                    <!--描述-->
                                                    <div class="caption">
                                                        <h3>{{item.name}}</h3>
                                                        <p>通过院校：</p>
                                                        <ul>
                                                            <li>{{item.school}}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="index_grade_student row clearfix">
                                            <div class="col-sm-6 col-md-3" v-for="item2 in grade.slice(4,8)" :key="item2.id">
                                                <div class="thumbnail">
                                                    <!--图片-->
                                                    <img src="../../../public/image/grade/student.jpg" alt="grade">
                                                    <!--描述-->
                                                    <div class="caption">
                                                        <h3>{{item2.name}}</h3>
                                                        <p>通过院校：</p>
                                                        <ul>
                                                            <li>{{item2.school}}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- 切换图片 -->
                                <!--左-->
                                <a class="left carousel-control" href="#carousel-example-generic2" role="button" data-slide="prev" style="border-radius: 4px">
                                    <span class="pre" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <!--右-->
                                <a class="right carousel-control" href="#carousel-example-generic2" role="button" data-slide="next" style="border-radius: 4px">
                                    <span class="next" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                            <div class="index_grade_link">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <!--文章动态-->
                <div class="row clearfix index_article">
                    <div class="col-md-12">
                        <div class="index_article_header">
                            <img src="../../../public/image/article/图标-文章.png" alt="label">
                            <span>文章动态</span>
                        </div>
                        <div class="index_article_content row clearfix container">
                            <div class="col-md-5">
                                <div class="index_aritcle_content_subheader">
                                    <h1>艺考干货</h1>
                                    <p>Media Info<span>更多>>></span></p>
                                </div>
                                <div class="index_article_content_subcontent">
                                    <ul class="row clearfix">
                                        <li class="media" v-for="item in article">
                                            <div class="media-left">
                                                <!--图片-->
                                                <a href="#">
                                                    <img class="media-object" src="../../../public/image/article/article.jpg" alt="图片">
                                                </a>
                                            </div>
                                            <!--内容-->
                                            <div class="media-body">
                                                <!--标题-->
                                                <h3 class="media-heading">{{item.title}}</h3>
                                                <!--内容-->
                                                <p>{{item.content}}</p>
                                                <!--简介-->
                                                <div class="dec">
                                                    <!--发布时间-->
                                                    <span>
                                                        <img src="../../../public/image/article/图标-时钟.png" alt="time">{{item.create_time}}
                                                    </span>
                                                    <!--浏览量-->
                                                    <span>
                                                        <img src="../../../public/image/article/图标-眼睛.png" alt="hit">999+
                                                    </span>
                                                    <!--标签-->
                                                    <span>
                                                        <ul v-for="item2 in item.lable" style="display: inline-block">
                                                            <li style="margin: 0 5px;border-radius: 4px;background-color: white;padding: 2px;box-shadow: 0 0 2px 2px rgba(0,0,0,.1)">
                                                                {{item2}}
                                                            </li>
                                                        </ul>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-offset-2 col-md-5">
                                <div class="index_aritcle_content_subheader">
                                    <h1>公司动态</h1>
                                    <p>Our News<span>更多>>></span></p>
                                </div>
                                <div class="index_article_content_subcontent">
                                    <ul class="row clearfix">
                                        <li class="media" v-for="item in news">
                                            <div class="media-left">
                                                <!--图片-->
                                                <a href="#">
                                                    <img class="media-object" src="../../../public/image/article/article.jpg" alt="图片">
                                                </a>
                                            </div>
                                            <!--内容-->
                                            <div class="media-body">
                                                <!--标题-->
                                                <h3 class="media-heading">{{item.title}}</h3>
                                                <!--内容-->
                                                <p>{{item.content}}</p>
                                                <!--简介-->
                                                <div class="dec">
                                                    <span>
                                                        <img src="../../../public/image/article/图标-时钟.png" alt="time">{{item.create_time}}
                                                    </span>
                                                    <span>
                                                        <img src="../../../public/image/article/图标-眼睛.png" alt="hit">999+
                                                    </span>
                                                    <span>
                                                        <ul v-for="item2 in item.news_lable" style="display: inline-block">
                                                            <li style="margin: 0 5px;border-radius: 4px;background-color: white;padding: 5px;box-shadow: 0 0 2px 2px rgba(0,0,0,.1)">{{item2}}</li>
                                                        </ul>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--答疑解惑-->
                <div class="row clearfix index_question">
                    <div class="col-md-12">
                        <div class="index_question_header">
                            <img src="../../../public/image/question/图标-疑问.png" alt="label">
                            <span>答疑解惑</span>
                        </div>
                        <div class="index_question_content row container">
                            <div class="col-md-6">
                                <div class="index_question_newmessage">
                                    <h1>最新留言</h1>
                                    <div class="index_question_que">
                                        <div class="media">
                                            <div class="media-left">
                                                <!--头像-->
                                                <a href="#">
                                                    <img class="media-object" src="../../../public/image/question/图标-问答Q.png" alt="question">
                                                </a>
                                            </div>
                                            <!--内容-->
                                            <div class="media-body">
                                                <h3 class="media-heading">{{question.ip}}</h3>
                                                <time>{{question.create_time}}</time>
                                                <div class="studentcontent">
                                                    <p>{{question.question}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="index_question_an">
                                        <div class="media">
                                            <!--内容-->
                                            <div class="media-body">
                                                <time>{{question.answer_time}}</time>
                                                <div class="teachercontent">
                                                    <p>{{question.answer}}</p>
                                                </div>
                                            </div>
                                            <div class="media-left">
                                                <!--头像-->
                                                <a href="#">
                                                    <img class="media-object" src="../../../public/image/question/图标-问答A.png" alt="anwser">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="index_question_inputquestoin">
                                    <h1>我要提问</h1>
                                    <textarea name="question" id="question" cols="70" rows="6"></textarea>
                                    <div>
                                        <input type="number" placeholder="请输入您的手机号" class="form-control">
                                        <input type="submit" value="确定" class="btn btn-primary">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="index_question_commonquestion">
                                    <h1>常见问题</h1>
                                    <ul class="index_question_commonquestion_content">
                                        <li><h1>1.提问问题？</h1></li>
                                        <li><h1>2.提问问题？</h1></li>
                                        <li><h1>3.提问问题？</h1></li>
                                        <li><h1>4.提问问题？</h1></li>
                                        <li><h1>5.提问问题？</h1></li>
                                        <li><h1>6.提问问题？</h1></li>
                                        <li><h1>7.提问问题？</h1></li>
                                        <li><h1>8.提问问题？</h1></li>
                                        <li><h1>9.提问问题？</h1></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--友情链接-->
                <div class="row clearfix index_otherlink container">
                    <div class="col-md-12">
                        <div class="index_otherlink_header">
                            <span>友情链接</span>
                        </div>
                        <div class="index_otherlink_content">
                            <ul>
                                <li>这是链接</li>
                                <li>这是链接</li>
                                <li>这是链接</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!--悬浮侧边栏-->
        <div class="index_side">
            <ul>
                <li>
                    <span>156-2658-0565</span>
                    <img src="../../../public/image/side/phone.png" alt="phone">
                </li>
                <li>
                    <span>
                        <img src="../../../public/image/side/二维码-官方微信号.png" alt="微信二维码">
                        <p>戏传艺考官方公众号</p>
                        <img src="../../../public/image/side/二维码-官方微信号.png" alt="微博二维码">
                        <p>戏传艺考官方公众号</p>
                    </span>
                    <img src="../../../public/image/side/weixin.png" alt="weixin">
                </li>
                <li>
                    <span>
                        <img src="../../../public/image/side/二维码-官方微信号.png" alt="qq">
                    </span>
                    <img src="../../../public/image/side/qq.png" alt="qq">
                </li>
                <li>
                    <span>
                        <img src="../../../public/image/side/二维码-官方微信号.png" alt="微博二维码">
                    </span>
                    <img src="../../../public/image/side/weibo.png" alt="weibo">
                </li>
                <li>
                    <span>zhongxingyijiao@yeah.net</span>
                    <img src="../../../public/image/side/email.png" alt="email">
                </li>
                <li>
                    <span>如有疑问请点击此处</span>
                    <img src="../../../public/image/side/question.png" alt="question">
                </li>
            </ul>
        </div>
        <!--悬浮表单-->
        <!--表单展开-->
        <div class="form container">
            <div class="col-md-12">
                <!--头部-->
                <div class="header">
                    <span id="minimize" class="title-button" data-title="Minimize window"><span class="glyphicon glyphicon-remove-sign"></span></span>
                </div>
                <div class="row clearfix form-content">
                    <!--logo-->
                    <div class="col-md-2 form_logo">
                        <img src="../../assets/logo-竖版-白字.png" alt="logo">
                    </div>
                    <!--表单-->
                    <div class="col-md-10">
                        <p class="form_dec">预约报名即可享受名师专业测评，更有多重好礼送不停</p>
                        <form class="form-horizontal container" id="form" >

                            <div class="row clearfix">
                                <div class="col-md-3 form_item">
                                    <!--专业-->
                                    <div class="form-group select">
                                        <!--<label for="selectMajor" class="col-sm-2 control-label">专业</label>-->
                                        <div class="col-sm-10 control-input">
                                            <select name="major" id="selectMajor" v-model="formData.major">
                                                <option value="" selected="disabled" style="display: none">意向专业</option>
                                                <option value="表演">表演</option>
                                                <option value="编导">编导</option>
                                                <option value="播音">播音</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!--姓名-->
                                    <div class="form-group">
                                        <!--<label for="inputName3" class="col-sm-2 control-label">姓名</label>-->
                                        <div class="col-sm-10 control-input">
                                            <input type="text" class="form-control inputname" v-model="formData.user_name" name="name" id="inputName3" placeholder="学生姓名">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 form_item">
                                    <!--qq-->
                                    <div class="form-group">
                                        <!--<label for="inputqq3" class="col-sm-2 control-label">QQ</label>-->
                                        <div class="col-sm-10 control-input">
                                            <input type="number" class="form-control inputqq" name="qq" id="inputqq3" v-model="formData.connect">
                                            <select name="connect" id="selectconnectmode" v-model="formData.connectmode">
                                                <option value="qq">QQ</option>
                                                <option value="weixin">微信</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!--手机号-->
                                    <div class="form-group">
                                        <!--<label for="inputPhone3" class="col-sm-2 control-label">手机号</label>-->
                                        <div class="col-sm-10 control-input" >
                                            <input type="number" class="form-control inputphone" v-model="formData.tel" name="phone" id="inputPhone3" placeholder="手机号">
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
                                    <div class="form-group">
                                        <div class="col-sm-10 control-input" >
                                            <input type="number" class="form-control inputcity"  name="phone"  placeholder="所在城市">
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!--表单收起-->
        <div class="form_min">
            <img src="../../../public/image/form/下边框浮窗-收起状态.png" alt="form">
        </div>
    </div>
</template>

<script>
    // 引入组件
    // 首页轮播图
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
                // 学生成绩栏数据
                grade:[],
                // 老师介绍栏
                teacher:[],
                // 问答
                question:[],
                // 表单数据
                formData:{
                    user_name:null,
                    email:null,
                    sex:"男",
                    tel:null,
                    connectmode:"qq",
                    connect:null,
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
            ToTeacher(id){
                this.$router.push({
                    path:`/teacher/${id}`
                });
            }
        },
        // 组件
        components:{
            Banner
        },
        // 组件创建
        created(){
            let that = this;
                 // 请求新闻数据
                axiosReq.get("getNews/num/3/day/40 ").then(data=>{
                    this.news = data.data;
                  // 拆分文章标签
                  this.news.forEach((value)=>{
                      value.create_time = value.create_time.match(/\d{4}-\d*-\d{2}/)[0];
                      value.news_lable = value.news_lable.split(",");
                  });
              });
                // 请求文章数据
                axiosReq.get("getArticle/num/3/day/40").then(data=>{
                    this.article = data.data;
                    // 拆分文章标签
                    this.article.forEach((value)=>{
                       value.create_time = value.create_time.match(/\d{4}-\d*-\d{2}/)[0];
                       value.lable = value.lable.split(",");
                    });
                });
                // 获取老师数据
                axiosReq.get("getTeachers/num/4").then(data=>{
                    this.teacher = data.data;
                    this.$nextTick(()=> {
                        $(function () {
                            // 师资力量的轮播图
                            $(".index_teacher_banner .item").first().addClass("active");
                        })
                    })
                });
                // 获取学生成绩数据
                axiosReq.get("getStudentGrade").then(data=>{
                    this.grade = data.data.splice(0,8);
                });
                // 获取最新留言
                axiosReq.get("getQuestion").then(data=>{
                    this.question = data.data[0];
                    this.question.create_time = this.question.create_time.match(/\d{4}-\d*-\d{2}/)[0];
                    this.question.answer_time = this.question.answer_time.match(/\d{4}-\d*-\d{2}/)[0];
                });
        },
        // 组件挂载
        mounted() {
            let that = this;
            util.indexInit(that);
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
            // 侧边栏鼠标悬停
            $(function () {
               $(".index_side ul li").mouseenter(function () {
                   $(this).children("span").stop().show(100);
               }).mouseleave(function () {
                   $(this).children("span").stop().hide(100);
               });
            });
            // textarea框的大小控制
            $(function () {
                if($(window).outerWidth()<= 768){
                    $(".index_question_inputquestoin textarea").attr("cols","30")
                }
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
        margin-top: 200px;
    }

    /*就业前景*/
    .index .index_prospect{
        padding:30px 0 60px 0;
        background-color: #d6d6d6;
    }
    .index .index_prospect_header img{
        width: 128px;
        height: 128px;
    }
    .index .index_prospect_header span{
        font-size: 75px;
        position: relative;
        top:20px;
    }
    .index_prospect_content{
        margin-top: 30px;
    }

    /*师资力量*/
    .index .index_teacher{
        padding:30px 0 60px 0;
    }
    .index .index_teacher_header img{
        width: 128px;
        height: 128px;
    }
    .index .index_teacher_header span{
        font-size: 75px;
        position: relative;
        top:20px;
    }
    .index .index_teacher_header h2{
        margin-top: 50px;
        font-weight: bold;
        color: #000;
    }
    .index_teacher_content{
        margin-top: 30px;
    }
    .index_teacher_banner .item>img{
        width: 30%;
        height: 500px;
        position: relative;
        left: 180px;
    }
    .index_teacher_banner .item .carousel-caption>h1,.carousel-caption>h3,.carousel-caption>p{
        position: relative;
        bottom: 150px;
        left: 40%;
        color: #000;
        width:70%;
        text-align: left;
    }
    .index_teacher_banner .item h1{
        font-size: 60px;
        font-weight: bold;
    }
    .index_teacher_banner .item h3{
        font-size: 32px;
        color: #bbb;
        border-bottom: 2px solid #ffA500;
        padding-bottom: 10px;
    }
    .index_teacher_banner .item p{
        font-size: 24px;
        left: 25%;
    }
    .index_teacher_content .left,.right{
        background-image: none;
    }
    .index_teacher_content .left .pre{
        display: inline-block;
        background: url("../../../public/image/teacher/图标-箭头-ff9900.png") no-repeat center center;
        background-size: 77px 77px;
        width: 77px;
        height: 77px;
        position: relative;
        top: 45%;
        right: 10%;
    }
    .index_teacher_content .right .next{
        display: inline-block;
        background: url("../../../public/image/teacher/图标-箭头-ff9900.png") no-repeat center center;
        background-size: 77px 77px;
        width: 77px;
        height: 77px;
        transform: rotateY(180deg);
        position: relative;
        top: 45%;
        left: 10%;
    }

    .index_teacher_link{
        margin-top: 40px;
    }
    .index_teacher_link h2{
        font-size: 22px;
        color: #000;
        font-weight: bold;
    }
    .index_teacher_link span{
        display: inline-block;
        background:url("../../../public/image/teacher/button.png") no-repeat;
        width: 180px;
        height: 65px;
        margin-top: 20px;
        cursor: pointer;
    }

    /*学生成绩*/
    .index .index_grade{
        padding:30px 0 60px 0;
        background-color:#d6d6d6 ;
    }
    .index .index_grade_header img{
        width: 128px;
        height: 128px;
    }
    .index .index_grade_header span{
        font-size: 75px;
        position: relative;
        top:20px;
    }
    .index_grade_content{
        text-align: center;
        margin: 80px auto;
    }
    /*轮播图*/
    .index .index_grade #carousel-example-generic2{
        overflow: hidden;
    }
    .index_grade_banner .index_grade_student img{
        margin-top: 20px;
        width: 180px;
        height: 180px;
    }
    .index_grade_student .thumbnail{
        border: 2px solid #000;
        border-radius: 8%;
    }
    .index_grade_student .thumbnail h3{
        font-size: 26px;
        margin: 0 10px;
        color: #000;
        font-weight: bold;
    }
    .index_grade_student .caption p:nth-of-type(1){
        text-align: left;
        font-size: 20px;
        color: #000;
        font-weight: bolder;
        margin-bottom: 0;
        position: relative;
        left: -30px;
    }
    .index_grade_student .caption ul li{
        margin-top:0;
        font-size: 18px;
        color: #000;
        font-weight: bold;
    }
    .index_grade_banner{
       margin-left: 10%;
        overflow: hidden;
    }
    .index_grade_banner .col-md-3{
        width: 20%;
    }
    .index_grade_content .left,.right{
        background-image: none;
    }
    .index_grade_content .left .pre{
        display: inline-block;
        background: url("../../../public/image/grade/图标-箭头-ff9900.png") no-repeat center center;
        background-size: 77px 77px;
        width: 77px;
        height: 77px;
        position: relative;
        top: 30%;
        left: -24%;
    }
    .index_grade_content .right .next{
        display: inline-block;
        background: url("../../../public/image/grade/图标-箭头-ff9900.png") no-repeat center center;
        background-size: 77px 77px;
        width: 77px;
        height: 77px;
        transform: rotateY(180deg);
        position: relative;
        top: 30%;
        right: -24%;
    }
    .index_grade_link{
        margin-top: 60px;
    }
    .index_grade_link span{
        display: inline-block;
        background:url("../../../public/image/teacher/button.png") no-repeat;
        width: 180px;
        height: 65px;
        margin-top: 20px;
        cursor: pointer;
    }

    /*文章动态*/
    .index .index_article{
        padding:30px 0 60px 0;
    }
    .index .index_article_header img{
        width: 128px;
        height: 128px;
    }
    .index .index_article_header span{
        font-size: 75px;
        position: relative;
        top:20px;
    }
    .index_article_content{
        text-align: center;
        margin: 80px auto;
    }
    .index_article_banner .index_article_student img{
        margin-top: 20px;
        width: 180px;
        height: 180px;
    }
    .index_aritcle_content_subheader {
        width: 100%;
        position: relative;
        text-align: left;
        border-bottom: 2px solid #ffA500;
    }
    .index_aritcle_content_subheader h1,p{
        display: inline-block;
        font-weight: bold;

    }
    .index_aritcle_content_subheader h1{
        font-size: 50px;
        margin-right: 25px;
    }
    .index_aritcle_content_subheader p{
        font-size: 24px;
    }
    .index_aritcle_content_subheader p span{
        color:#ffA500;
        position: absolute;
        right: 0;
        cursor: pointer;
    }

    .index_article_content_subcontent ul .media{
        padding: 30px 10px;
        overflow: hidden;
        cursor: pointer;
    }
    .index_article_content_subcontent ul .media:hover{
        box-shadow: 0 0 4px 3px rgba(0,0,0,.1);
    }
    .index_article_content_subcontent ul .media:hover .media-heading{
        color: #00a1d6;
    }
    .index_article_content_subcontent ul .media .media-body{
        position: relative;
        text-align: left;
        width: 100%;
    }
    .index_article_content_subcontent ul .media .media-body p{
        font-size: 16px;
        color: #99a2aa;
        line-height: 22px;
        overflow: hidden;
        text-align: left;
        margin-left: 10px;
        display: inline-block;
        width: 90%;
        height: 65px;
    }

    .index_article_content_subcontent ul .media .media-left img{
        width: 150px;
        height: 137px;
        margin: 2px;
        border-radius: 4px;
    }

    .index_article_content_subcontent .article_content>h3{
        margin-bottom: 30px;
    }
    .index_article_content_subcontent ul .media h3{
        color: #000;
        text-align: left;
        font-weight: bolder;
        margin-left: 10px;
        transition: .3s;
        vertical-align: top;
        -webkit-box-orient: vertical;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 90%;
    }
    .index_article_content_subcontent ul .media .dec{
        text-align: left;
        position: absolute;
        left: 0;
        bottom: 0;
        font-size: 18px;
    }
    .index_article_content_subcontent ul .media .dec span{
        margin: 0 10px;
        color: #99a2aa;
        display: inline-block;
    }
    .index_article_content_subcontent ul .media .dec span:nth-child(1) img{
        width: 22px;
        height: 22px;
        margin-bottom: 3px;
        margin-right: 5px;
    }
    .index_article_content_subcontent ul .media .dec span:nth-child(2) img{
        width: 32px;
        height: 32px;
        margin-bottom: 3px;
        margin-right: 3px;

    }
    /*答疑解惑*/
    .index .index_question{
        padding:30px 0 60px 0;
        background-color: #d5d5d5;
    }
    .index .index_question_header img{
        width: 128px;
        height: 128px;
    }
    .index .index_question_header span{
        font-size: 75px;
        position: relative;
        top:20px;
    }
    .index_question_content{
        text-align: center;
        margin: 80px auto;
    }
    .index_question_content>div:nth-of-type(1){
        margin-left: 3.33333%;
    }
    .index_question_content h1{
        color:#000;
        font-weight: bolder;
    }
    .index_question_content .index_question_newmessage,.index_question_content .index_question_inputquestoin{
        background-color: #fff;
        padding:30px 20px 0 20px;
        margin-bottom: 30px;
    }
    .index_question_que .media-left img{
        width: 90px;
        height: 90px;
    }
    .index_question_que .media-body{
        position:relative;
        top:10px;
    }
    .index_question_que .media-body h3,.studentcontent{
        text-align: left;
    }
    .index_question_que .media-body .studentcontent p{
        font-size: 24px;
    }
    .index_question_que .media-body time{
        position:absolute;
        right: 20px;
        top: 0;
        font-size: 20px;
    }

    .index_question_an .media-left img{
        width: 90px;
        height: 90px;
        margin-bottom: 40px;
    }
    .index_question_an .media-body{
        position:relative;
        top:10px;
    }
    .index_question_an .media-body .teachercontent{
        text-align: left;
    }
    .index_question_an .media-body .teachercontent p{
        font-size: 22px;
        margin-top: 30px;
        font-weight: normal;
        margin-bottom: 30px;
    }
    .index_question_an .media-body time{
        position:absolute;
        right: 0;
        top: 0;
        font-size: 20px;
    }

    .index_question_inputquestoin{
        text-align: center;
    }
    .index_question_inputquestoin div{
        text-align: left;
        padding-left: 14%;
    }
    .index_question_inputquestoin input:nth-of-type(1){
        display: inline-block;
        width: 50%;
        margin-top: 15px;
        margin-bottom: 30px;
    }
    .index_question_inputquestoin input:nth-of-type(2){
        display: inline-block;
        position: relative;
        left: 19%;
        width: 15%;
    }
    .index_question_commonquestion{
        background-color: #fff;
        padding: 30px 40px;
        text-align: left;
    }
    .index_question_commonquestion>h1:nth-of-type(1){
        text-align: center;
    }
    .index_question_commonquestion ul li h1{
        font-size: 25px;
    }

    /*友情链接*/
    .index_otherlink{
        margin: 50px auto;
        margin-bottom: 80px;
    }
    .index_otherlink .index_otherlink_header{
        border-top: 3px solid #000;
        font-size: 20px;
    }
    .index_otherlink .index_otherlink_header span{
        position: relative;
        top: -15px;
        background: #fff;
        padding: 0 5px;
    }
    .index_otherlink .index_otherlink_content ul{
        text-align: left;
    }
    .index_otherlink .index_otherlink_content ul li{
        display: inline-block;
        font-size: 20px;
        margin-right: 50px;
        cursor: pointer;
    }

    /*侧边栏浮窗*/
    .index_side{
        position: fixed;
        right: -25px;
        bottom: 80px;
        z-index: 2003;
    }
    .index_side ul{
        width: 200px;
        text-align: center;
    }
    .index_side ul li{
        margin: 20px 0;
        background-color: #eaeaea;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        line-height: 50px;
        position: relative;
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,.3);
    }
    /*侧边栏图标*/
    .index_side ul li img{
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
    .index_side ul li:nth-of-type(5) img{
        width: 40px;
        height: 30px;
    }
    .index_side ul li span{
        padding: 10px;
        position: absolute;
        right: 100px;
        border: 1px solid #000;
        background-color: #f4f5f7;
        border-radius: 10px;
        box-shadow: -2px 2px 2px 2px rgba(0,0,0,.3);
        font-size: 24px;
        color: #222;
        display: none;
    }
    .index_side ul li span:before,.index_side ul li span:after{
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        border:solid transparent;
        transform: scaleY(0.4);
        z-index: 8000;
    }
    .index_side ul li span:before{
        border-width: 28px;
        border-left-color: #000;
        right:-56px;
        top: 2px;
    }
    .index_side ul li span:after{
        border-width: 28px;
        border-left-color: #f4f5f7;
        top: 2px;
        right:-54px;
    }
    /*第一个图标*/
    .index_side ul li:nth-of-type(1) span{
        width: 170px;
        height: 60px;
        line-height: 45px;
    }
    /*第二个*/
    .index_side ul li:nth-of-type(2) span{
        width: 250px;
        height: 130px;
        line-height: 45px;
    }
    .index_side ul li:nth-of-type(2) span img{
        height: 100px;
        width: 100px;
    }
    .index_side ul li:nth-of-type(2) span img:nth-of-type(1){
        margin-right: 25px;
    }
    .index_side ul li:nth-of-type(2) span p{
        position: absolute;
        font-size: 12px;
    }
    .index_side ul li:nth-of-type(2) span p:nth-of-type(1){
        bottom: -23px;
        left: 5px;
    }
    .index_side ul li:nth-of-type(2) span p:nth-of-type(2){
        bottom: -23px;
        right:5px;
    }
    /*第三个*/
    .index_side ul li:nth-of-type(3) span img{
        height: 100px;
        width: 100px;
    }
    /*第四个*/
    .index_side ul li:nth-of-type(4) span img{
        height: 100px;
        width: 100px;
    }
    /*第五个*/
    .index_side ul li:nth-of-type(5) span{
        width: 270px;
        height: 60px;
        line-height: 40px;
    }
    /*第六个*/
    .index_side ul li:nth-of-type(6) span{
        width: 270px;
        height: 60px;
        line-height: 40px;
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
        background-color: #6b6b6b;
        opacity: 0.9;
        width: 100%;
        position: fixed;
        right: 0;
        bottom:0;
        border: 1px solid #ccc;
        border-radius: 4px !important;
        box-shadow: 0 2px 15px rgba(0,0,0,.2)!important;
        z-index: 4003;
    }
    .form-content .form_logo img{
        width: 250px;
        height: 200px;
        margin-top: 20px;
        padding-right: 15px;
    }
    .form .radio{
        width: 15px;
        height: 15px;
        line-height: 15px;
        margin: 0;
    }
    .form .header{
        font-size: 24px;
        margin-right: 50px;
        position: relative;
        top:20px;
    }
    .form #minimize{
        float: right;
        cursor: pointer;
        color: #000;
        font-size: 30px;
    }
    .form #maxmize{
        margin-left: 10px;
        cursor: pointer;
    }
    .form .inputname,.inputqq,.inputphone,.inputcity{
        height: 45px;
        width: 250px;
        font-size: 25px;
    }
    .form .select{
        text-align: left;
    }
    .form #selectconnectmode{
        height: 45px;
        line-height: 24px;
        border-radius: 4px;
        box-sizing: border-box;
        position: absolute;
        top:0;
        left:15px;
        width: 100px;
        font-size: 25px;
        /*很关键：将默认的select选择框样式清除*/
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;

        /*在选择框的最右侧中间显示小箭头图片*/
        background: url("../../../public/image/form/下拉图标.png") no-repeat scroll 70px center transparent;
        background-size: 16px;
        font-size: 25px;
        background-color: #fff;
        padding-left: 15px;
        color: #000;
    }
    .form .select select{
        height: 45px;
        line-height: 24px;
        width: 250px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 0 15px;
        box-sizing: border-box;
        color: #aaa;
        position: relative;

        /*很关键：将默认的select选择框样式清除*/
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;

        /*在选择框的最右侧中间显示小箭头图片*/
        background: url("../../../public/image/form/下拉图标.png") no-repeat scroll 225px center transparent;
        background-size: 16px;
        font-size: 25px;
        background-color: #fff;
    }
    .form .select option{
        color: #000;
    }
    .form .select #selectFromTxt{
        margin-top: 15px;
    }
    .form .select #selectFrom{
        padding-left: 5px;
    }

    .form .form-group{
        display: inline-block;

    }
    .form .form_item{
        text-align: left;
    }
    .form .submit input{
        width: 110px;
        height:110px;
        background-color: #ccff99;
        color: #000;
        font-weight: bold;
        font-size: 25px;
    }
    .form .form-content{
        margin-bottom: 20px;
        padding-left: 5%;
    }

    .form .form-content div:nth-child(2) p{
        color: #fff;
        text-align: left;
        display: block;
        font-size: 30px;
        padding-left: 15px;
    }
    .form_min{
        position: fixed;
        bottom: 10px;
        right: 110px;
        z-index: 9999;
        display: none;
        cursor: pointer;
    }
    .form_min img{
        width: 80px;
        height: 80px;
    }




    @media (min-width: 768px) {
        .col-sm-10 {
            width: 110.333333%;
        }
    }
    @media (max-width:1600px) {
        .index_article_content .col-md-5{
            width: 45%;
        }
        .index_article_content .col-md-offset-2{
            margin-left: 10%;
        }

        /*文章动态*/
        .index_aritcle_content_subheader h1{
            font-size: 40px;
        }
        /*文章内容*/
        .index_article_content_subcontent ul .media .media-body p{
            width: 80%;
        }
        .index_article_content_subcontent ul .media .media-body h3{
            width: 85%;
        }
        /*文章标签*/
        .index_article_content_subcontent ul .media .dec span{
            margin: 0 2px;
            font-size: 14px;
        }
        /*答疑解惑*/
        .index_question_inputquestoin div{
            padding-left: 0;
        }
        .index_question_inputquestoin input:nth-of-type(2){
            left: 35%;
        }
        .index_question_content>div:nth-of-type(1){
            margin-left: 1%;
        }
        /*学生成绩*/
        .index_grade_banner .index_grade_student img{
            width: 120px;
            height: 120px;
        }
        /*师资力量*/
        .index_teacher_banner .carousel-caption{
            left: 35%;
            top:22%;
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
    /*手机*/
    @media (max-width:768px ) {
        /*内容*/
        .index{
            margin-top: 60px;
        }
        /*所有版块的标题与图标*/
        .index .index_prospect_header>img,.index .index_teacher_header>img,.index .index_grade_header>img,.index .index_article_header>img,.index .index_question_header>img{
            width: 60px;
            height: 60px;
        }
        .index .index_prospect_header>span,.index .index_teacher_header>span,.index .index_grade_header>span,.index .index_article_header>span,.index .index_question_header>span{
            font-size: 40px;
            top: 15px;
            left: 15px;
        }
        /*就业前景*/
        .index_prospect_content img{
            width: 340px;
        }
        /*师资力量*/
        .index_teacher .index_teacher_banner .item img{
            height: 200px;
            width: 100%;
            left: 0;
        }
        .index_teacher .index_teacher_banner .item{
            height: 400px;
        }
        .index_teacher .index_teacher_banner .item .carousel-caption{
            width: 100%;
            left: -20%;
            top:90%;
        }
        .index_teacher .index_teacher_banner .item .carousel-caption>h1{
            font-size: 20px;
        }
        .index_teacher .index_teacher_banner .item h3{
            font-size: 20px;
        }
        .index_teacher .index_teacher_banner .item p{
            font-size: 12px;
        }
        .index_teacher_content .left .pre{
            width: 30px;
            height: 30px;
            top: 60%;
            right: 10%;
        }
        .index_teacher_content .right .next{
            width: 30px;
            height: 30px;
            transform: rotateY(180deg);
            top: 60%;
            left: 10%;
        }

        /*侧边栏浮窗*/
        .index_side ul{
            width: 76px;
        }
        .index_side ul li{
            width: 40px;
            height: 40px;
            line-height: 40px;
            margin: 5px 0;
        }
        .index_side ul li img{
            width: 30px;
            height: 30px;
        }
        .index_side ul li:nth-of-type(5) img{
            width: 30px;
            height: 20px;
        }

        /*学生成绩*/
        .index_grade_banner .col-md-3{
            width: 80%;
        }
        .index_grade_content .left .pre{
            width: 30px;
            height: 30px;
            top: 60%;
            right: 10%;
        }
        .index_grade_content .right .next{
            width: 30px;
            height: 30px;
            transform: rotateY(180deg);
            top: 60%;
            left: 10%;
        }

        /*文章动态*/
        .index_aritcle_content_subheader h1{
            font-size: 25px;
            margin-right: 5px;
        }
        .index_aritcle_content_subheader p{
            font-size: 18px;
        }
        .index_article_content_subcontent ul .media .media-body p{
            width: 24%;
            font-size: 12px;
            line-height: 12px;
            margin: 0;
            height: 48px;
        }
        .index_article_content_subcontent ul .media .media-left img{
            width: 120px;
            height: 110px;
        }
        .index_article_content_subcontent ul .media h3{
            font-size: 18px;
            margin-left: 0;
        }
        /*标签*/
        .index_article_content_subcontent ul .media{
            padding: 30px 0;
        }
        .index_article_content_subcontent ul .media .dec{
            left:0;
        }
        .index_article_content_subcontent ul .media .dec span{
            font-size: 12px;
        }
        .index_article_content_subcontent ul .media .dec span:nth-of-type(1) img{
            width: 18px;
            height: 18px;
        }
        .index_article_content_subcontent ul .media .dec span:nth-of-type(2) img{
            width: 24px;
            height: 24px;
        }
        .index_article_content_subcontent ul .media .dec span:nth-of-type(3){
            display:block;
        }
        /*答疑解惑*/
        .index_question_content{
            margin: 20px auto;
            padding-right: 0;
            padding-left: 0;
        }
        .index_question_content .index_question_newmessage{
            padding: 5px;
        }
        .index_question_que .media-body time{
            position: relative;
            left: -32px;
            text-align: left;
        }
        .index_question_que .media-body .studentcontent p,.index_question_an .media-body .teachercontent p{
            font-size: 16px;
        }
        .index_question_an .media-body time{
            right: 20px;
        }
        .index_question_content>div:nth-of-type(1){
            margin-left: 0;
        }
        .index_question_inputquestoin input{
            font-size: 12px;
        }
        .btn{
            padding: 5px 0;
        }

        /*悬浮表单*/
        .form_min img{
            width: 50px;
            height: 50px;
        }
        .form_min{
            bottom: 22px;
            right: 7px;
        }
        /*关闭按钮*/
        .form .header{
            display: inline-block;
            position: absolute;
            top:10px;
            right: -30px;
            z-index: 8001;
        }
        .form .form-content{
            margin-bottom: 0;
        }
        /*输入框*/
        .form .inputname,.inputqq,.inputphone,.inputcity{
            height: 30px;
            width: 110px;
            font-size: 14px;
        }
        .form .select select{
            width: 110px;
            height: 30px;
            font-size: 14px;
        }
        .form .inputqq{
            width: 190px;
            position: relative;
            left: 50px;
            border: none;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
        }
        .form #selectconnectmode{
            height: 30px;
            border: none;
            font-size: 14px;
            width: 50px;
            /*在选择框的最右侧中间显示小箭头图片*/
            background: url("../../../public/image/form/下拉图标.png") no-repeat scroll 35px center transparent;
            background-size: 8px;
            background-color: #fff;
            left: 10px;
            padding-left: 5px;
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
        }
        /*logo*/
        .form .form_logo{
            display: none;
        }


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
            padding: 15px 0 0 0;
            margin-bottom: 0;
            color: #fff;
            font-size: 12px;
            text-align: left;
            position: relative;
            left: -10px;
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

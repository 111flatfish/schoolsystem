<template>
    <div class="message">
        <!--头部-->

        <!--轮播图-->
        <Banner v-bind:banner-data="type" v-bind:location-data="loc"></Banner>
        <!--内容-->
        <main class="container">
            <h3 style="text-align: left;margin-bottom: 20px">留言</h3>
            <div class="row clearfix message_content" v-for="item in currentMessage">
                <!--学生留言-->
                <div class="message_item col-md-9">
                    <div class="media">
                        <div class="media-left">
                            <!--头像-->
                            <a href="#">
                                <img class="media-object" src="../../../public/image/teacherheader/2.jpeg" alt="student">
                            </a>
                        </div>
                        <!--内容-->
                        <div class="media-body">
                            <h3 class="media-heading">{{item.access}}</h3>
                            <time>{{item.create_time}}</time>
                            <div class="studentcontent">
                                <p>{{item.question}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--老师答复-->
                <div class="message_item col-md-9">
                    <div class="media">
                        <div class="media-left">
                            <!--头像-->
                            <a href="#">
                                <img class="media-object" src="../../../public/image/teacherheader/3.jpg" alt="teacher">
                            </a>
                        </div>
                        <!--内容-->
                        <div class="media-body">
                            <h3 class="media-heading">{{item.answer_name}}</h3>
                            <time>{{item.answer_time}}</time>
                            <div class="teachercontent">
                                <p>{{item.answer}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--页码栏-->
            <div class="pageContainer">
                <nav aria-label="Page navigation">
                    <ul class="pagination pagination-lg">
                        <!--上一页-->
                        <li @click="pagePreOrNext(-1)">
                            <span aria-hidden="true">&laquo;</span>
                        </li>
                        <!--页码-->
                        <li v-for="(item,index) in pages" :key="index"  @click="select(item)"><span :class="{actived: item === currentPage}">{{item}}</span></li>
                        <!--下一页-->
                        <li @click="pagePreOrNext(1)">
                            <span aria-hidden="true">&raquo;</span>
                        </li>
                    </ul>
                </nav>
            </div>

            <!--留言表单-->
            <div class="row clearfix message_form">
                <div class="col-md-2 studentheadimg">
                    <!--头像-->
                    <img src="../../../public/image/teacherheader/2.jpeg" alt="student">
                </div>
                <div class="col-md-10">
                    <form class="form-horizontal" id="form">
                        <div class="form-group">
                            <!--留言内容-->
                            <label for="inputtext" class="col-sm-2 control-label">留言内容 <span class="isneed">*</span></label>
                            <div class="col-sm-10">
                                <textarea class="form-control" rows="3" id="inputtext" name="content" v-model="message.msg" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <!--手机号码-->
                            <label for="inputphone" class="col-sm-2 control-label">请输入您的手机号码</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="inputphone" v-model="message.phone" placeholder="phone">
                            </div>
                        </div>
                        <!--提交按钮-->
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10 submit">
                                <button type="submit" class="btn btn-primary">提交</button>
                            </div>
                        </div>
                    </form>
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

    // 引入axios
    import axiosReq from "../../util/axiosConfig"

    export default {
        name: "message",
        // 数据
        data(){
            return{
                // 文章数据
                messages:[],               // 初始化页面获取的总文章
                currentMessage:[],          //当前页渲染的文章

                // 页码栏数据
                currentPage:1,            //当前页，默认为1
                pageNum:4,                //一页最多显示的文章数
                totalPage:1,             //总页数

                // 留言参数
                message:{
                    msg:null,
                    phone:null
                },
                // banner类型
                type:"message",
                // banner位置
                loc:"title"



            }
        },
        // 组件
        components:{
            Header,
            Footer,
            Banner
        },
        // 组件创建
        created() {
            // 初始化页面获取文章请求
            axiosReq.get("https://api.wulixianzhi.cn/index.php/index/index/getQuestion/num/20").then(data=>{
                this.totalPage = Math.ceil(data.data.length/this.pageNum);
                this.messages = data.data;
                window.console.log(data);
                // 默认显示第一页
                this.currentMessage = this.messages.slice(0,4);
            });
        },
        // 方法
        methods:{
            // 点击页码
            select(n){
                if(n === this.currentPage)return ;
                if(typeof n === "string")return ;
                this.currentPage = n;
                this.currentMessage = this.messages.slice((this.currentPage-1)*4,(this.currentPage-1)*4+4);

            },
            // 点击上一页或者下一页
            pagePreOrNext(n){
                this.currentPage += n;
                this.currentPage < 1?this.currentPage =1:this.currentPage>this.totalPage?this.currentPage = this.totalPage:null;
                this.currentMessage = this.messages.slice((this.currentPage-1)*4,(this.currentPage-1)*4+4);

            }
        },
        // 组件
        computed:{
            // 页码计算属性
            pages(){
                let c = this.currentPage;
                let t = this.totalPage;
                let p = this.pageNum;
                let arr = [];
                if(t <= 9 && t >0){
                    while (t > 0){
                        arr.push(t);
                        t--;
                    }
                    return arr.reverse();
                }else {
                    if(c <= 5){
                        return [1,2,3,4,5,6,7,"...",t];                              //第一种情况
                    }else if (c >= t - 5) {
                        return [1, '...', t-6, t-5, t-4, t-3, t-2, t-1, t] //第二种情况
                    } else {
                        return [1, '...',  c-2, c-1, c, c+1, c+2,  '...', t] //第三种情况
                    }
                }
            }

        },
        // 组件挂载
        mounted() {
            // 表单验证
            $(function () {
                $("#form").validator({
                    fields:{
                        content:{
                            rule:"required",
                            msg:"留言信息不能为空",
                            ok:"已填写"
                        }
                    },
                    valid:function () {
                        axiosReq.post("ask",this.message).then(data=>{
                            window.console.log(data);
                        });
                    }
                });
            });
        }
    }

</script>

<style scoped>
main{
    color: #404040;
    font-weight: 400;
    margin: 20px auto;
}
/*留言表单*/
.message_content{
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    padding: 20px 0;

}
.message_content .media-left img{
    border-radius: 50%;
}
.message_form {
    padding: 15px;
    margin-top: 20px;
}
.message_form .studentheadimg img{
    width: 100%;
    border-radius: 50%;
}

.message_form .submit button{
    height: 40px;
    width: 100px;
}
.message_form .isneed{
    color: red;
}

.message_form .form-group{
    text-align: left;
    font-size: 16px;
}
.message_form .form-group #inputtext{
    width: 90%;
    height: 150px;
}
.message_form .form-group #inputphone{
    width: 90%;
    height: 50px;
}
/*页码栏*/
.pageContainer li{
    cursor: pointer;
}
.pageContainer li span{
    width: 50px;
}
.actived{
    background-color:#ffe284;
}
</style>

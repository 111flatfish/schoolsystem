<template>
    <div class="guide">
        <Header></Header>
        <Banner></Banner>
        <main class="container guide">
            <div class="row clearfix search">
                <div class="col-md-8 column">
                    <div class="row clearfix">
                        <div class="col-md-9"><input type="text" placeholder="搜索文章标题或标签" class="form-control txt"></div>
                        <div class="col-md-3"> <input type="button" value="搜索" class="btn btn-primary form-control"></div>
                    </div>
                </div>
                <div class="col-md-4 column">
                    <label for="">筛选：</label>
                    <select name="time" id="">
                        <option value="7">最近七天</option>
                        <option value="30">一个月</option>
                        <option value="6">半年</option>
                        <option value="360">一年</option>
                    </select>
                </div>
            </div>
            <div class="row clearfix content">
                <div class="col-md-8 column">
                    <ul class="row clearfix">
                        <li class="media" v-for="item in currenArticle" >
                            <div class="media-left">
                                <a href="#">
                                    <img class="media-object" src="../../../public/image/teacherheader/1.jpeg" alt="图片">
                                </a>
                            </div>
                            <div class="media-body">
                                <h3 class="media-heading">{{item.title}}</h3>
                                <p>{{item.content}}</p>
                                <div class="dec">
                                    <span>{{item.create_time}}</span><span>预览数 {{item.view_num}}</span><span>标签
                                    <ul v-for="item2 in item.label">
                                        <li>{{item2}}</li>
                                    </ul>
                                </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="pageContainer">
                        <nav aria-label="Page navigation">
                            <ul class="pagination pagination-lg">
                                <li @click="pagePreOrNext(-1)">
                                    <span aria-hidden="true">&laquo;</span>
                                </li>
                                <li v-for="(item,index) in pages" :key="index"  @click="select(item)"><span :class="{actived: item === currentPage}">{{item}}</span></li>
                                <li @click="pagePreOrNext(1)">
                                    <span aria-hidden="true">&raquo;</span>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
                <div class="col-md-4 column adv">
                    <div class="adv_item">广告栏1</div>
                    <div class="adv_item">广告栏2</div>
                    <div class="adv_item">广告栏3</div>
                </div>
            </div>

        </main>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../../components/header"
    import Footer from "../../components/footer"
    import Banner from "../../components/banner"
    import axios from "axios"
    export default {
        name: "guide",
        data(){
          return{
              // 文章数据
              articles:[],               // 初始化页面获取的总文章
              currenArticle:[],          //当前页渲染的文章

              // 页码栏数据
              currentPage:1,            //当前页，默认为1
              pageNum:5,                //一页最多显示的文章数
              totalPage:0             //总页数
          }
        },
        components:{
            Header,
            Footer,
            Banner
        },
        created() {
            // 初始化页面获取文章请求
            axios.get("https://api.wulixianzhi.cn/index.php/index/index/getArticle").then(data=>{
                this.totalPage = Math.ceil(data.data.length/this.pageNum);
                this.articles = data.data;
                this.articles.forEach((value)=>{
                    value.label = value.label.split(",");
                });
                this.currenArticle = this.articles.slice(0,5);
            });
        },
        methods:{
            // 点击页码
            select(n){
                if(n === this.currentPage)return ;
                if(typeof n === "string")return ;
                this.currentPage = n;
                this.currenArticle = this.articles.slice((this.currentPage-1)*5,(this.currentPage-1)*5+5);
                window.console.log(this.currenArticle);
            },
            // 点击上一页或者下一页
            pagePreOrNext(n){
                this.currentPage += n;
                this.currentPage < 1?this.currentPage =1:this.currentPage>this.totalPage?this.currentPage = this.totalPage:null;
                this.currenArticle = this.articles.slice((this.currentPage-1)*5,(this.currentPage-1)*5+5);

            }
        },
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

        }

    }
    //广告栏初始化
    $(function () {
        let h = $(".guide .content").innerHeight();
        $(".guide .content .adv .adv_item").css("height",`${h/3}`);
        // $(".guide .content .adv .adv_item").eq(2).css("borderBottom","none");
    });


</script>

<style scoped>
.guide .search{
    margin: 15px 0 0 0;
    padding: 10px 0 10px 0;
    border: 1px solid #ccc;
}
.guide .search input{
    font-size: 16px;
    height: 50px;
}
.guide .search select{
    height: 50px;
    font-size: 15px;
    width: 150px;
    border-radius: 4px;
}
.guide{
    padding: 0;
}
.content{
    border: 1px solid #ccc;
    margin: 10px 0 10px 0;
}
.content .column{
    border:1px solid #ccc;
    margin-bottom: 0;
}
.content ul .media{
    padding: 10px;
    border-bottom: 1px dashed #ccc;
}
.content ul .media .media-body{
    position: relative;
}
.content ul .media .media-body p{
    text-indent: 25px;
}
.content ul .media img{
    width: 200px;
    height: 200px;
}
.content ul .media h3{
    text-align: left;
}
.content ul .media .dec{
    position: absolute;
    left: 0;
    bottom: 0;
}
.content ul .media .dec span{
    margin: 10px;
}
.content .adv_item{
    border-bottom: 1px solid #ccc;
}
.content .adv{
    padding: 0;
}
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

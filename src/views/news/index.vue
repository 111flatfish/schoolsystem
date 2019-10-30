<template>
    <div class="news">
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
                        <li class="media">
                            <div class="media-left">
                                <a href="#">
                                    <img class="media-object" src="../../../public/image/teacherheader/1.jpeg" alt="图片">
                                </a>
                            </div>
                            <div class="media-body">
                                <h3 class="media-heading">标题</h3>
                                <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                <div class="dec">
                                    <span>发布时间 19/10/26</span><span>预览数 1002</span><span>标签 前端</span>
                                </div>
                            </div>
                        </li>
                        <li class="media">
                            <div class="media-left">
                                <a href="#">
                                    <img class="media-object" src="../../../public/image/teacherheader/2.jpeg" alt="图片">
                                </a>
                            </div>
                            <div class="media-body">
                                <h3 class="media-heading">标题</h3>
                                <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                <div class="dec">
                                    <span>发布时间 19/10/26</span><span>预览数 1002</span><span>标签 前端</span>
                                </div>
                            </div>
                        </li>
                        <li class="media">
                            <div class="media-left">
                                <a href="#">
                                    <img class="media-object" src="../../../public/image/teacherheader/3.jpg" alt="图片">
                                </a>
                            </div>
                            <div class="media-body">
                                <h3 class="media-heading">标题</h3>
                                <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                <div class="dec">
                                    <span>发布时间 19/10/26</span><span>预览数 1002</span><span>标签 前端</span>
                                </div>
                            </div>
                        </li>
                        <li class="media">
                            <div class="media-left">
                                <a href="#">
                                    <img class="media-object" src="../../../public/image/teacherheader/4.jpeg" alt="图片">
                                </a>
                            </div>
                            <div class="media-body">
                                <h3 class="media-heading">标题</h3>
                                <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                <div class="dec">
                                    <span>发布时间 19/10/26</span><span>预览数 1002</span><span>标签 前端</span>
                                </div>
                            </div>
                        </li>
                        <li class="media">
                            <div class="media-left">
                                <a href="#">
                                    <img class="media-object" src="../../../public/image/teacherheader/1.jpeg" alt="图片">
                                </a>
                            </div>
                            <div class="media-body">
                                <h3 class="media-heading">标题</h3>
                                <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                <div class="dec">
                                    <span>发布时间 19/10/26</span><span>预览数 1002</span><span>标签 前端</span>
                                </div>
                            </div>
                        </li>
                    </ul>
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
    export default {
        name: "news",
        components:{
            Header,
            Footer,
            Banner
        }
    }
    //广告栏初始化
    $(function () {
        let h = $(".guide .content").innerHeight();
        $(".guide .content .adv .adv_item").css("height",`${h/3}`);
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
.content ul{
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
</style>

<template>
    <div class="teacher">
        <Header></Header>
        <main class="container teacher">
            <div class="row clearfix search">
                <div class="col-md-9"><input type="text" placeholder="搜索老师姓名" class="form-control txt"></div>
                <div class="col-md-3"> <input type="button" value="搜索" class="btn btn-primary form-control"></div>
            </div>
            <div class="row clearfix content">
                <div class="row clearfix teachercontent">
                    <div class="col-md-8 name">
                        <p>姓名 {{}}</p>
                        <p>毕业院校 {{}}</p>
                        <p>标签 {{}}</p>
                    </div>
                    <div class="col-md-4 img">
                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

                            <!-- Wrapper for slides -->
                            <div class="carousel-inner" role="listbox">
                                <div class="item active">
                                    <img src="../../../public/image/teacherheader/2.jpeg" alt="teacher">
                                </div>
                                <div class="item">
                                    <img src="../../../public/image/teacherheader/3.jpg" alt="teacher">
                                </div>
                                <div class="item">
                                    <img src="../../../public/image/teacherheader/1.jpeg" alt="teacher">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               <div class="row clearfix synopsis">
                   <aritcle>
                       <p>2009年12月
                       鹿乃 twitter
                       鹿乃 twitter
                       左右在NICO注册账号
                       初次投稿是在2010年1月6日的恋爱サーキュレーション　她的声音很可爱， 所以被很多人认为是萝莉音。
                       因为她的日语发音不怎么标准，所以也被一部分人认为她是才刚学会日语的天朝人。
                       2010年1月下旬左右开始在NICO上活跃
                       5月25日上传的けいおん！！に负けた鹿乃がおちゃめ机能歌ってみた 在翻唱排名中获得了第五位的成绩，点击首次超过了10万次。7月23日上传的歌ってみた ハロ/ハワユ鹿乃，取得了首次歌ってみたカテラン（翻唱排行榜）排名第一名的记录。还有这首歌在26日的カテゴリ合算(分类合算，我的名单)中取得了第一名，第2天27日突破了10万次点播。而且这首歌还进了ボカロオリジナルを歌ってみた（V家原创歌曲翻唱）殿堂！已经加入了《Sevencolors》组合.
                       鹿乃
                       鹿乃(5张)
                       2011年1月6日以Sevencolors的名义发了第一张单曲专辑ばんび～の
                       </p>
                   </aritcle>
               </div>
            </div>
            <div class="row clearfix control">
                <div class="col-lg-4">
                     <input type="button" value="上一个老师" class="btn btn-primary form-control">
                </div>
                <div class="col-lg-4"></div>
                <div class="col-lg-4">
                    <input type="button" value="下一个老师" class="btn btn-primary form-control">
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../../components/header"
    import Footer from "../../components/footer"
    export default {
        name: "teacher",
        components:{
            Header,
            Footer
        }
    }
    // 老师图片轮播
    $(function () {
        $('.carousel').carousel({
            interval: 3000
        })
    });


</script>

<style scoped>
.teacher .search {
    padding: 20px;
}
.teacher .search .txt{
    height: 50px;
    border-radius: 30px;
}
.teacher .search .btn{
    height: 50px;
}
.teacher .content{
    border: 1px solid #ccc;
    margin: 15px;
}

.teachercontent{
    border-bottom: 1px dashed #ccc;
    margin: 0;
}
.teachercontent .name{
    padding: 15px 0 15px 0;
    line-height: 40px;
}
.teachercontent .img{
    width: 380px;
    margin: 10px 0 10px 0;
    border: 1px solid #ccc;
}
.teachercontent .img img{
    height: 350px;
}
.teacher .content .synopsis{
    padding: 25px;
    line-height: 25px;
    text-align: left;
    text-indent:25px
}
.teacher .content .synopsis p{
    font-size: 16px;
}

.teacher  .control{
    padding: 15px;
}
.teacher  .control .btn{
    height: 50px;
    margin-right: 15px;
}
</style>

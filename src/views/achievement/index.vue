<template>
    <div class="achievement">
        <Header></Header>
        <Banner></Banner>
        <main class="container">
            <div class="row clearfix">
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="../../../public/image/teacherheader/2.jpeg" alt="grade">
                        <div class="caption">
                            <h3>姓名</h3>
                            <p>通过院校</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="../../../public/image/teacherheader/1.jpeg" alt="grade">
                        <div class="caption">
                            <h3>姓名</h3>
                            <p>通过院校</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="../../../public/image/teacherheader/3.jpg" alt="grade">
                        <div class="caption">
                            <h3>姓名</h3>
                            <p>通过院校</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="../../../public/image/teacherheader/4.jpeg" alt="grade">
                        <div class="caption">
                            <h3>姓名</h3>
                            <p>通过院校</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row clearfix">
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="../../../public/image/teacherheader/2.jpeg" alt="grade">
                        <div class="caption">
                            <h3>姓名</h3>
                            <p>通过院校</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="../../../public/image/teacherheader/1.jpeg" alt="grade">
                        <div class="caption">
                            <h3>姓名</h3>
                            <p>通过院校</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="../../../public/image/teacherheader/3.jpg" alt="grade">
                        <div class="caption">
                            <h3>姓名</h3>
                            <p>通过院校</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="../../../public/image/teacherheader/4.jpeg" alt="grade">
                        <div class="caption">
                            <h3>姓名</h3>
                            <p>通过院校</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row clearfix">
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="../../../public/image/teacherheader/2.jpeg" alt="grade">
                        <div class="caption">
                            <h3>姓名</h3>
                            <p>通过院校</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="../../../public/image/teacherheader/1.jpeg" alt="grade">
                        <div class="caption">
                            <h3>姓名</h3>
                            <p>通过院校</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="../../../public/image/teacherheader/3.jpg" alt="grade">
                        <div class="caption">
                            <h3>姓名</h3>
                            <p>通过院校</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="../../../public/image/teacherheader/4.jpeg" alt="grade">
                        <div class="caption">
                            <h3>姓名</h3>
                            <p>通过院校</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav aria-label="Page navigation">
                <ul class="pagination pagination-lg">
                    <li>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../../components/header"
    import Footer from "../../components/footer"
    import Banner from "../../components/banner"
    export default {
        name: "achievement",
        components:{
            Header,
            Footer,
            Banner
        }
    }

</script>

<style scoped>
main{
    color: #404040;
    font-weight: 400;
    margin: 20px auto;
}
main .thumbnail p{
    font-size: 18px;
}
main nav{
    height: 100px;
}

</style>

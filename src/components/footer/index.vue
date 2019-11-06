<template>
    <footer class="footer">
        <!--半透明背景-->
        <div class="background"></div>
        <!--页脚内容-->
        <div class="container">
            <div class="row clearfix">
                <div class="col-md-4 column">
                    <div class="row clearfix">
                        <h4>客服热线：</h4>
                        <h2>400-8823-823</h2>
                    </div>
                    <div class="row clearfix">
                        <h4>官方邮箱：</h4>
                        <h4>xxxxxxxxx@xx.cn</h4>
                    </div>
                </div>

                <div class="col-md-4 column">
                    <div class="row clearfix">
                        <h4>北京校区：</h4>
                        <h4>xxxxxxxxxxxxxxxxxxxxxxx</h4>
                    </div>
                    <div class="row clearfix">
                         <h4>深圳校区：</h4>
                        <h4>xxxxxxxxxxxxxxxxxxxxxxx</h4>
                    </div>
                    <div class="row clearfix">
                        <h4>上海校区：</h4>
                        <h4>xxxxxxxxxxxxxxxxxxxxxxx</h4>
                    </div>
                </div>

                <div class="col-md-4 column">
                    <div class="row clearfix">
                        <img src="../../assets/二维码.png" alt="二维码" width="100px">
                    </div>
                    <div class="row clearfix">
                        <h5>扫码关注微信公众号、新浪微博官方账号了解戏传资讯</h5>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row clearfix copyright">
                <div class="col-md-12">
                    Copyright © 2019 - {{year}}.All right reserved. | 备案号 | 深圳市XXXX有限公司
                </div>
            </div>
        </div>

    </footer>

</template>

<script>
    export default {
        name: "Footer",
        data(){
            return{
                // 至今的版权年份
                year:new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>
.footer{
    background: url("../../assets/footerbackground.jpg") no-repeat;
    padding: 30px;
    position:relative;
    bottom: 0;
    left: 0;
    color: white;
}
.copyright{
    text-align: left;
}
.background{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    background: black;
    opacity: 0.5;
}
</style>

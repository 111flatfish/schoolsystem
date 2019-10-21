<template>
    <div class="container">
        <div class="row clearfix header">
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">
                            <img src="../../assets/logo.png" alt="logo" height="100%">
                        </a>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#">首页</a></li>
                            <li><a href="#">专业介绍</a></li>
                            <li><a href="#">艺考指南</a></li>
                            <li><a href="#">历届成绩</a></li>
                            <li><a href="#">留言板</a></li>
                            <li><a href="#">关于我们</a></li>
                        </ul>
                    </div><!-- /.navbar-collapse -->
                </div><!-- /.container-fluid -->
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
    .header{
        padding-bottom: 60px;
    }
    .header .navbar li{
        width: 120px;
    }
    .header .navbar-brand{
        margin-left: 30px;
    }
    .header .navbar a{
        height: 60px;
        line-height: 30px;
    }
    .header .collapse{
        font-size: 16px;
        margin-right: 50px;
    }

</style>

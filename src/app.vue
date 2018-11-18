<style lang="less">
body {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-text-size-adjust: 100%;
}

body, html, section, article, div, ul, li, h3, h4, h5, p {
    margin: 0;
    padding: 0;
    font-weight: normal;
}

li {
    list-style-type: none;
}

a {
    color: #409EFF;
    text-decoration: none;
}

html, body, .app {
    height: 100%;
}

.clear {
    clear: both;
}

.layout {
        height: 100vh;
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center {
        text-align: center;
        font-size: 12px;
        .copy-right {
            margin-bottom: 3px;
            display: inline-block;
        }
        a {
            color: #515a6e;
            opacity: .8;
            border-bottom: 1px dotted rgba(255,255,255,0.5);
        }
    }
</style>

<template>
    <div id="app" class="app">
        <div class="layout">
            <Layout>
                <Header>
                    <Menu mode="horizontal" theme="dark" active-name="1">
                        <div class="layout-logo"></div>
                    </Menu>
                </Header>
                <Layout :style="{padding: '0 50px'}">
                    <Content :style="{margin: '36px 0 0', minHeight: '280px', background: '#fff'}">
                        <Login v-if="!isLogin"/>
                        <Layout v-if="isLogin">
                            <Sider hide-trigger :style="{background: '#fff'}">
                                <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                                    <Submenu name="1">
                                        <template slot="title">
                                            <Icon type="ios-navigate"></Icon>
                                            患者管理
                                        </template>
                                        <MenuItem name="1-1">
                                            <router-link to="/patients">患者列表</router-link>
                                        </MenuItem>
                                        <MenuItem name="1-2">
                                            <router-link to="/async">新增患者</router-link>
                                        </MenuItem>
                                        <MenuItem name="1-3">
                                            <router-link to="/patientdetails">患者详情</router-link>
                                        </MenuItem>
                                    </Submenu>
                                    <Submenu name="2">
                                        <template slot="title">
                                            <Icon type="ios-keypad"></Icon>
                                            数据管理
                                        </template>
                                        <MenuItem name="2-1">导入数据</MenuItem>  
                                    </Submenu>
                                </Menu>
                            </Sider>
                            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                                <router-view></router-view>
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
                <Footer class="layout-footer-center">
                    <p>
                        <span class="copy-right">SightDoc &copy; 2018</span><br>
                        <span>
                            <a class="beian" href="http://www.miitbeian.gov.cn/" target="_blank">鲁ICP备18043040号</a>
                            ·
                            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37010302000689">鲁公安网备 37010302000689</a>
                        </span>
                    </p>
                </Footer>
            </Layout>
        </div>
    </div>
</template>

<script>
import util from './common/util';
import Login from './components/login';

export default {
    data() {
        return {
            // isLogin: false
            isLogin: true
        };
    },
    methods: {
        active() {}
    },
    watch: {
        '$route': {
            handler(newData) {
                this.data = newData;
            }
        }
    },
    mounted() {
        if (util.isLogin()) {
            this.isLogin = false;
            // 根据用户身份 push 路由
            // this.$router.push('/login');
        }
    },
    components: {
        Login: Login
    }
};
</script>

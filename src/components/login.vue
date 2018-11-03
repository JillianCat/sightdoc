<template>
    <section class="loginWrapper">
        <div class="logo">
            <img src="https://c.icewish.top/const/illuma/images/logo111.jpg" alt="视力档案" width="100%">
        </div>
        <Form class="loginForm" ref="loginForm" :model="loginForm" :rules="loginRules">
            <FormItem prop="user">
                <Input type="text" v-model="loginForm.user" placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="loginForm.password" placeholder="密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button class="loginSubmit" type="primary" @click="handleSubmit('loginForm')">登 录</Button>
            </FormItem>
        </Form>
    </section>
</template>

<script>
export default {
    data: function() {
        return {
            loginForm: {
                user: "",
                password: ""
            },
            loginRules: {
                user: [
                    {
                        required: true,
                        message: "Please fill in the user name",
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "Please fill in the password.",
                        trigger: "blur"
                    },
                    {
                        type: "string",
                        min: 6,
                        message:
                            "The password length cannot be less than 6 bits",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success("Success!");
                } else {
                    this.$Message.error("Fail!");
                }
            });
        }
    },
    mounted() {}
};
</script>

<style lang="less" scoped>
.loginWrapper {
    padding-top: 36px;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: linear-gradient(to bottom right, #EF7, #80CBF7);
}
.logo {
    margin: 0 auto;
    width: 180px;
}
.loginForm {
    margin: 10px auto;
    width: 300px;
    .loginSubmit {
        display: block;
        margin: 0 auto;
        width: 100%;
    }
}

</style>
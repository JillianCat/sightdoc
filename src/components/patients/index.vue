<template>
     <section class="container">
        <Form ref="searchForm" :model="searchForm" :rules="ruleValidate" :label-width="30">
            <FormItem label="ID：" prop="patientId">
                <Input v-model="searchForm.patientId" :style="{width: '270px'}" search enter-button="查询" @on-search="search" placeholder="请输入身份证号后6位" />
            </FormItem>
        </Form>
        <Table border stripe :columns="columns1" :data="data2"></Table>
    </section>
</template>

<script>
export default {
    data: function() {
        const idCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('身份证号不能为空'));
            } else if (value.length !== 6) {
                callback(new Error('请输入正确的身份证号后六位'));
            } else if (
                !(/^[1-9]\d*$/.test(value.substr(0, 5)))
                || !(/^[1-9]\d*$/.test(value.substr(5, 6))
                    || value.substr(5, 6) === 'X'
                    || value.substr(5, 6) === 'x'
                    )
            ) {
                callback(new Error('请输入正确的身份证号后六位'));
            } else {
                callback();
            }
        };

        return {
            page: "patients",
            searchForm: {
                patientId: ""
            },
            ruleValidate: {
                patientId: [
                  { validator: idCheck, trigger: "blur" }
                ]
            },
            columns1: [
                {
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '身份证号',
                    key: 'id'
                },
                {
                    title: '操作',
                    key: 'act',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, '查看详情')
                        ]);
                    }
                }
            ],
            data2: [
                    {
                        name: 'John Brown',
                        id: 18
                    },
                    {
                        name: 'Jim Green',
                        id: 24
                    },
                    {
                        name: 'Joe Black',
                        id: 30
                    },
                    {
                        name: 'Jon Snow',
                        id: 26
                    },
                    {
                        name: 'John Brown',
                        id: 18
                    },
                    {
                        name: 'Jim Green',
                        id: 24
                    },
                    {
                        name: 'Joe Black',
                        id: 30
                    },
                    {
                        name: 'Jon Snow',
                        id: 26
                    }
                ]
        };
    },
    methods: {
        search(value) {
            this.$refs.searchForm.validate((valid) => {
                if (valid) {
                    console.log(value);
                } else {
                    return false;
                }
            });
        },
        show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `姓名：${this.data2[index].name}<br>身份证号：${this.data2[index].id}`
                });
        }
    }
};
</script>
import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN';//引入中文文件

// 配置中文
Validator.addLocale(zh);

const config = {
    locale: 'zh_CN'
};

Vue.use(VeeValidate, config);

// 自定义validate 
const dictionary = {
    zh_CN: {
        messages: {
            email: () => '请输入正确的邮箱格式',
            required: (field) => field + '不能为空'
        },
        attributes: {
            myEmail: '邮箱',
            password: '密码',
            name: '账号',
            phone: '手机',
            myphone: '王上手机',
            
        }
    }
};

Validator.updateDictionary(dictionary);


// 以下是扩展方法
// 手机验证
Validator.extend('phone', {
    messages: {
        zh_CN: field => '✘'+field + '格式有误',
    },
    validate: value => {
        return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
});

// 邮箱验证
Validator.extend('email', {
    messages: {
        zh_CN: () => '✘ 请填写有效邮箱地址'
    },
    validate: (value) => {
        return /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
    }
})
import Vue from 'vue'
import Router from 'vue-router'
import welcome from "../components/welcome";

Vue.use(Router)

// 通过正则获取匹配到的文件:第一个参数表示相对的文件目录，第二个参数表示是否包括子目录中的文件（true，false），如果有耳机目录既可以设置为true，第三个参数表示引入的文件匹配的正则表达式。
const contexts = require.context('../components', true, /\.vue$/)
const routers = [];

contexts.keys().forEach(key => {
    // 获取组件配置
    const componentConfig = contexts(key).default;
    // 剥去文件名开头的 `./` 和`.vue`结尾的扩展名
    const routePath = key.replace(/^\.\//, '').replace(/\.vue$/, '');
    // 全局注册组件
    const component = Vue.component(componentConfig.name, componentConfig);
    routers.push({
        path: componentConfig.name === 'home' ? '/' : '/' + routePath,
        name: componentConfig.name,
        component
    })
})

// 自定义的route
routers.push(
    {
        path: '/',
        name: 'welcome',
        component: welcome
    }
)

export default new Router({
    routes: routers
})

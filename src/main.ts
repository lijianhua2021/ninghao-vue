import { createApp } from 'vue';
import App from './app/app.vue';
<<<<<<< HEAD
import appStore from './app/app.store';
import appRouter from './app/app.router';
import { titleMixin } from './app/app.mixin';

=======
>>>>>>> forms
/**
 * 创建应用
 */
const app = createApp(App);

/**
<<<<<<< HEAD
 * 应用 Store
 */
app.use(appStore);

/**
 * 应用路由器
 */
app.use(appRouter);

/**
 * 标题混合
 */
app.mixin(titleMixin);

/**
=======
>>>>>>> forms
 * 挂载应用
 */
app.mount('#app');

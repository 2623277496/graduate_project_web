import Vue from 'vue'
import App from './App.vue'
import router from './router/'

import {Container,Aside,Header,Main,RadioGroup,RadioButton,Menu,Submenu,MenuItemGroup,MenuItem,TableColumn,Button,Table} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/less/index.less'

Vue.config.productionTip = false

Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(TableColumn)
Vue.use(Button)
Vue.use(Table)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

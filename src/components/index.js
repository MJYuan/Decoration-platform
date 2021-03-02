import pie from './charts/pie.vue'
import hello from './HelloWorld.vue'
import homepage from './people/homepage.vue'
import infobox from './people/box/infobox.vue'
import process from './people/box/process.vue'


export default {
    install(Vue) {
        Vue.component('v-pie', pie);
        Vue.component('v-hello', hello);
        Vue.component('v-homepage', homepage);
        Vue.component('v-infobox', infobox);
        Vue.component('v-process', process);
    }
}
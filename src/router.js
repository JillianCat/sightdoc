import index from './components/index.vue';
import patients from './components/patients/index.vue';

export default {
    routes: [{
        path: '/',
        component: index
    }, {
        path: '/index',
        component: index
    }, {
        path: '/patients',
        component: patients
    }, {
        path: '/async',
        component: () =>
            import ( /* webpackChunkName: "async" */ './components/async.vue')
    }]
};

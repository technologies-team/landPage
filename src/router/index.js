import { createRouter, createWebHistory } from 'vue-router'
import LandPage from './../components/LandPage.vue'
import thankyou from './../components/thankyou.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            // You could also have named views at tho top
            component: LandPage,
            children: [
                {
                    path: '/',
                    component: LandPage,
                },

            ],
        },       {
            path: '/thankyou',
            // You could also have named views at tho top
            component: thankyou,
            children: [
                {
                    path: '/',
                    component: thankyou,
                },

            ],
        },
    ],
})

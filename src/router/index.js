import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/study',
    name: 'study',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "study" */ '../views/StudyView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingHtmlView.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingInputView.vue'
      )
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckboxView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingCheckboxView.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DatabindingSelectView.vue'
      )
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingRadioView.vue'
      )
  },
  {
    path: '/databinding/attr',
    name: 'DataBindingAttributeView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingAttributeView.vue'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingListView.vue'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingClassView.vue'
      )
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStyleView.vue'
      )
  },
  {
    path: '/databinding/button',
    name: 'DataBindingButtonView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingButtonView.vue'
      )
  },
  {
    path: '/databinding/img',
    name: 'DataBindingImgView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingImgView.vue'
      )
  },
  {
    path: '/databinding/for',
    name: 'DataBindingForView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingForView.vue'
      )
  },
  {
    path: '/databinding/if',
    name: 'DataBindingIfView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingIfView.vue'
      )
  },
  {
    path: '/databinding/props',
    name: 'DataBindingPropsView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingPropsView.vue'
      )
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventClickView.vue'
      )
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventChangeView.vue'
      )
  },
  {
    path: '/event/key',
    name: 'EventKeyView',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventKeyView.vue'
      )
  },
  {
    path: '/others/computed',
    name: 'Computed',
    component: () =>
      import(
        /* webpackChunkName: "others", webpackPrefetch:true */ '../views/3_others/ComputedView.vue'
      )
  },
  {
    path: '/others/watch',
    name: 'Watch',
    component: () =>
      import(
        /* webpackChunkName: "others", webpackPrefetch:true */ '../views/3_others/WatchView.vue'
      )
  },
  {
    path: '/others/mixins',
    name: 'Mixins',
    component: () =>
      import(
        /* webpackChunkName: "others", webpackPrefetch:true */ '../views/3_others/UserView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

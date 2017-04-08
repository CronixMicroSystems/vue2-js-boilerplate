export default [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: r => require.ensure([], () => r(require('./components/pages/home')), 'home')
  }, {
    path: '/item',
    component: r => require.ensure([], () => r(require('./components/pages/item')), 'item')
  }, {
    path: '/score',
    component: r => require.ensure([], () => r(require('./components/pages/score')), 'score')
  }
]

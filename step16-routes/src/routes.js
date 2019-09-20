import Home from './components/Home.vue'
import Header from './components/Header.vue'

//lazy modes routes
// 'user' permet regrouper les routes child dans un seul fichier user.js
// qui sera generer une fois au chargement de la page et pas chaque fois
// sur on met pas 'user' sur chaque route user on aura un new fichier user.js
// pour voir ca il faut aller dans network et observer les fichiers
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user');
};
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user');
};
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user');
};
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user');
};


export const routes = [
    { path: '', name: 'home', components: { default: Home, 'header-top': Header } },
    { path: '/user', components: { default: User, 'header-bottom': Header } , children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                console.log('inside route');
                alert('routes.js --- beforeEnter --- component: UserDetail');
                next();
            } },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' },
    ] },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/' }
];


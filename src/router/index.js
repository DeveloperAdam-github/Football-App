import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Signin from '../views/Signin.vue';
import LiveScores from '../views/LiveScores.vue';
import MyTeams from '../views/MyTeams.vue';
import LeagueTables from '../views/LeagueTables.vue';
import TopScorers from '../views/TopScorers.vue';
import Fixtures from '../views/Fixtures.vue';
import GameStats from '../views/GameStats.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/livescores',
    name: 'LiveScores',
    component: LiveScores,
  },
  {
    path: '/myteams',
    name: 'MyTeams',
    component: MyTeams,
  },
  {
    path: '/leaguetables',
    name: 'LeagueTables',
    component: LeagueTables,
  },
  {
    path: '/topscorers',
    name: 'TopScorers',
    component: TopScorers,
  },
  {
    path: '/fixtures',
    name: 'Fixtures',
    component: Fixtures,
  },
  {
    path: '/gameStats/:id',
    name: 'GameStats',
    component: GameStats,
    // props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

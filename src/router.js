import { createWebHistory, createRouter } from "vue-router";
import Home from './pages/Home';
import Movie from './pages/Movie';
import Error from './pages/Error';
import MyMovies from './pages/MyMovies';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home',
    },
    {
        path: '/filme/:id',
        component: Movie,
        name: 'Movie',
        props: true,
    },
    {
        path: '/favoritos',
        component: MyMovies,
        name: 'MyMovies',
    },
    {
        path: '/*/*',
        component: Error,
        name: 'Error',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
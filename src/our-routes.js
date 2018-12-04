import Page1 from './components/Page1';
import Page2 from './components/Page2';

export default [
    {
        path: '/',
        redirect: '/page1'
    },
    {
        path: '/page1',
        component: Page1
    },
    {
        path: '/page2',
        component: Page2
    }
];

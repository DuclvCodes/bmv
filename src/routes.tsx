import React from 'react';

const AboutUs = React.lazy(() => import('./pages/aboutUs'));
const Blog = React.lazy(() => import('./pages/blog'));
const Cooperation = React.lazy(() => import('./pages/cooperation'));
const Project = React.lazy(() => import('./pages/project'));
const MaterialSetting = React.lazy(() => import('./pages/materialSetting'));

const routes = [
  {
    path: '/', exact: true, name: 'Home', component: '',
  },
  {
    path: '/about-us', exact: true, name: 'About Us', component: AboutUs,
  },
  {
    path: '/blog', exact: true, name: 'Blog', component: Blog,
  },
  {
    path: '/project', exact: true, name: 'Project', component: Project,
  },
  {
    path: '/cooperation', exact: true, name: 'Cooperation', component: Cooperation,
  },
  {
    path: '/material-setting', exact: true, name: 'Material Setting', component: MaterialSetting,
  },
];

export default routes;

import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { SYSTEM_CONSTANTS } from '../../common/constants';
import Loader from '../Loader';
import Page from './Page';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../../pages/Home';
import UserStory from '../../pages/UserStory';

const Settings = React.lazy(() => import('../../pages/Settings'));

const ROUTES = [
  {
    path: '/',
    exact: true,
    component: Home,
    title: 'Travelers',
  },
  {
    path: '/home',
    exact: true,
    component: Home,
    title: 'Home | Travelers',
  },
  {
    path: '/userstory',
    exact: true,
    component: UserStory,
    title: 'User Story | ' + SYSTEM_CONSTANTS.APP_NAME,
  },
  {
    path: '/settings',
    exact: true,
    component: Settings,
    title: 'Settings | ' + SYSTEM_CONSTANTS.APP_NAME,
  },
];

const Routes: React.FC = () => {
  return (
    <>
      <ToastContainer hideProgressBar={true} autoClose={2500} />
      <div id="dd-global-loader"></div>
      <div
        className="container-inner page-content"
        style={{ backgroundColor: 'lightgray' }}
      >
        <Suspense fallback={<Loader />}>
          <Switch>
            {ROUTES.map((route, i: number) => {
              return (
                <Page
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  // render={() => <route.component />}
                  component={route.component}
                  title={route.title}
                  isHeader={true}
                />
              );
            })}
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default Routes;

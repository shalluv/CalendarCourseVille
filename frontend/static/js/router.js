import Aboutus from './views/Aboutus.js';
import Home from './views/Home.js';

const pathToRegex = (path) =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  const sidebar = document.querySelector('.sidebar');
  if (sidebar && !sidebar.classList.contains('close')) {
    sidebar.classList.add('close');
  }
  router();
};

const router = async () => {
  const routes = [
    {
      path: '/aboutus',
      view: Aboutus,
    },
    {
      path: '/:weekOffset',
      view: Home,
    },
    { path: '/', view: Home },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatches) => potentialMatches.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  if (match.route.path === '/:weekOffset' && isNaN(match.result[1])) {
    match.result[1] = 0;
  }

  const view = new match.route.view(getParams(match));

  document.querySelector('#app').innerHTML = await view.getHtml();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});

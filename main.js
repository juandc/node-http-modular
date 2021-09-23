// Node.js Core Modules
const http = require('http');
// App Routes
const homeRoutes = require('./home/routes');
const blogRoutes = require('./blog/routes');
const coursesRoutes = require('./courses/routes');
// Utils
const { flatRoutes } = require('./utils/flatRoutes');

// Routing
const routes = {
  '': homeRoutes,
  '/blog': blogRoutes,
  '/courses': coursesRoutes,
};

const realRoutes = flatRoutes(routes);
console.log(realRoutes);

function router(req, res) {
  console.log(req.url);
  const actualRoute = realRoutes[req.url];

  if (!actualRoute) {
    console.log('404');
    res.write('404');
  } else {
    console.log('Routing:');
    actualRoute(req, res);
  }

  res.end();
}

// Run server
http.createServer(router).listen(3000);
console.log('Escuchando el puerto 3000');

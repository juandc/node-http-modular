function flatRoutes(routes) {
  const realRoutes = {};

  Object.keys(routes).map(routeName => {
    const subRoutes = routes[routeName];

    Object.keys(subRoutes).map(subrouteName => {
      const realSubRouteName = routeName + subrouteName;
      realRoutes[realSubRouteName] = subRoutes[subrouteName];
    });
  });

  return realRoutes;
}

module.exports = { flatRoutes };

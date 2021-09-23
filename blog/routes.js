function blogHome(req, res) {
  console.log('Blog Home');
  res.write('Blog Home');
}

function blogCreate(req, res) {
  console.log('Blog Create');
  res.write('Blog Create');
}

module.exports = {
  '': blogHome,
  '/create': blogCreate,
};

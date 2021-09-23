function home(req, res) {
  console.log('Home');
  res.write('Home');
}

module.exports = {
  '/': home,
};

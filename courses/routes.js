function coursesHome(req, res) {
  console.log('Courses Home');
  res.write('Courses Home');
}

module.exports = {
  '': coursesHome,
};

exports.getLogout = (req, res) => {
  res.clearCookie('unleash', req.cookies.unleash)
    .redirect('/');
};
// DONE

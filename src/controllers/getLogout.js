exports.getLogout = (req, res) => {    
    res.clearCookie('id', req.cookies.id);
    res.clearCookie('unleash', req.cookies.unleash);
    res.redirect('/');
}
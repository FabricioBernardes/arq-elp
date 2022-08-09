const Site = require('../models/SiteModel');

exports.index = async(req, res) => {
  const sites = await Site.buscaSites();
  res.render('index', { sites });
};


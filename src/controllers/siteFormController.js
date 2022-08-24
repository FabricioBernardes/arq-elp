const Site = require('../models/SiteModel');

exports.index = async(req, res) => {
  const sites = await Site.buscaSites();
  const urlParams =  req.params.siteId;
  res.render('site_form', { urlParams });
};


const Site = require('../models/SiteModel');

exports.index = async(req, res) => {
  const sites = await Site.buscaSites();
  const urlParams =  req.params.siteId;
  const siteSelected = sites.filter( (item)=>{
    return item._id == urlParams
  })
  res.render('site-main-page', { urlParams, siteSelected });
};


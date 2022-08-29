const Site = require('../models/SiteModel');

exports.index = (req, res) => {
  res.render('site-register', {
    site: {}
  });
};

exports.register = async(req, res) => {
  try {
    const site = new Site(req.body);
    await site.register();

    if(site.errors.length > 0) {
      req.flash('errors', site.errors);
      req.session.save(() => res.redirect('back'));
      return;
    }

    req.flash('success', 'Site registrado com sucesso.');
    req.session.save(() => res.redirect(`/site-register/index/${site.site._id}`));
    return;
  } catch(e) {
    console.log(e);
    return res.render('404');
  }
};

exports.editIndex = async function(req, res) {
  if(!req.params.id) return res.render('404');

  const site = await Site.buscaPorId(req.params.id);
  if(!site) return res.render('404');

  res.render('site-register', { site });
};

exports.edit = async function(req, res) {
  try {
    if(!req.params.id) return res.render('404');
    const site = new Site(req.body);
    await site.edit(req.params.id);

    if(site.errors.length > 0) {
      req.flash('errors', site.errors);
      req.session.save(() => res.redirect('back'));
      return;
    }

    req.flash('success', 'Site editado com sucesso.');
    req.session.save(() => res.redirect(`/site-register/index/${site.site._id}`));
    return;
  } catch(e) {
    console.log(e);
    res.render('404');
  }
};

exports.delete = async function(req, res) {
  if(!req.params.id) return res.render('404');

  const site = await Site.delete(req.params.id);
  if(!site) return res.render('404');

  req.flash('success', 'Site apagado com sucesso.');
  req.session.save(() => res.redirect('back'));
  return;
};

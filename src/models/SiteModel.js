const mongoose = require('mongoose');
const validator = require('validator');
const showdown = require('showdown')

const SiteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tipo: { type: String, required: false, default: '' },
  lat: { type: String, required: false, default: '' },
  long: { type: String, required: false, default: '' },
  municipio: { type: String, required: false, default: '' },
  localidade: { type: String, required: false, default: '' },
  descricao: { type: String, required: false, default: '' },
  descricao_html: { type: String, required: false, default: '' },
  criadoEm: { type: Date, default: Date.now },
});

const SiteModel = mongoose.model('Site', SiteSchema);

function Site(body) {
  const converter = new showdown.Converter()
  const descHtml = converter.makeHtml(body.descricao)

  body = { ...body, descricao_html: descHtml }

  this.body = body;
  this.errors = [];
  this.site = null;
}

Site.prototype.register = async function() {
  this.valida();
  if(this.errors.length > 0) return;
  this.site = await SiteModel.create(this.body);
};

Site.prototype.valida = function() {
  this.cleanUp();

  // Validação
  // O e-mail precisa ser válido
  if(!this.body.municipio) this.errors.push('E-mail inválido');
  if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.');
};

Site.prototype.cleanUp = function() {
  for(const key in this.body) {
    if(typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }

  this.body = {
    nome: this.body.nome,
    tipo: this.body.tipo,
    lat: this.body.lat,
    long: this.body.long,
    municipio: this.body.municipio,
    localidade: this.body.localidade,
    descricao: this.body.descricao,
    descricao_html: this.body.descricao_html,
  };
};

Site.prototype.edit = async function(id) {
  if(typeof id !== 'string') return;
  this.valida();
  if(this.errors.length > 0) return;
  this.site = await SiteModel.findByIdAndUpdate(id, this.body, { new: true });
};

// Métodos estáticos
Site.buscaPorId = async function(id) {
  if(typeof id !== 'string') return;
  const site = await SiteModel.findById(id);
  return site;
};

Site.buscaSites = async function() {
  const sites = await SiteModel.find()
    .sort({ criadoEm: -1 });
  return sites;
};

Site.delete = async function(id) {
  if(typeof id !== 'string') return;
  const Site = await SiteModel.findOneAndDelete({_id: id});
  return Site;
};


module.exports = Site;

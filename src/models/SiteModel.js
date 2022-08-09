const mongoose = require('mongoose');
const validator = require('validator');

const SiteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cidade: { type: String, required: false, default: '' },
  lat: { type: Number, required: false, default: '' },
  long: { type: Number, required: false, default: '' },
  criadoEm: { type: Date, default: Date.now },
});

const SiteModel = mongoose.model('Site', SiteSchema);

function Site(body) {
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
  if(!this.body.cidade) this.errors.push('E-mail inválido');
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
    cidade: this.body.cidade,
    lat: this.body.lat,
    long: this.body.long,
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
  return site;
};


module.exports = Site;

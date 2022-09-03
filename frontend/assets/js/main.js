import 'core-js/stable';
import 'regenerator-runtime/runtime';
import validator from 'validator';

window.page_template = {
    setMainMap: function(){
        var map = L.map('map').setView([-31.946931, -52.099278], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        for (var i = 0; i < locations.length; i++) {
            const popupContent = `
                <h3>${locations[i].nome}</h3>
                <p><strong>Municipio:</strong> ${locations[i].municipio}  <strong>Localidade:</strong> ${locations[i].localidade}</>
                <p><strong>Tipo de sitio:</strong> ${locations[i].tipo}</p>
                <a href="/site-main/${locations[i]._id}">Ficha do sítio</a>
            `

            L.marker([locations[i].lat, locations[i].long]).addTo(map)
            .bindPopup(popupContent)
        }

    },
    setLoginpage: function () {
        class Login {
                constructor(formClass) {
                    this.form = document.querySelector(formClass);
                }
                
                init() {
                    this.events();
                }
                
                events() {
                    if(!this.form) return;
                    this.form.addEventListener('submit', e => {
                    e.preventDefault();
                    this.validate(e);
                    });
                }
                
                validate(e) {
                    const el = e.target;
                    const emailInput = el.querySelector('input[name="email"]');
                    const passwordInput = el.querySelector('input[name="password"]');
                    let error = false;
                
                    if(!validator.isEmail(emailInput.value)) {
                    alert('E-mail inválido');
                    error = true;
                    }
                
                    if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
                    alert('Senha precisa ter entre 3 e 50 caracteres');
                    error = true;
                    }
                
                    if(!error) el.submit();
                }
        }
        
        const login = new Login('.form-login');
        const cadastro = new Login('.form-cadastro');

        login.init();
        cadastro.init();
    },
    init: function(){
        const _this = this;
        const pathName = window.location.pathname;

        if(pathName == "/webmap"){
            _this.setMainMap();
        }
        _this.setLoginpage();
    }
}

page_template.init();
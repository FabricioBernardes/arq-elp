import 'core-js/stable';
import 'regenerator-runtime/runtime';
import validator from 'validator';

window.page_template = {
    setMainMap: function(){


        var locations = [
            ["sitio 1",-52.22504069592754,-31.92366077155808,0],
            ["sitio 1",-52.22439818980784,-31.92114037129069,0],
            ["sitio 1",-52.22460004538161,-31.919199762814,0],
            ["sitio 1",-52.22325546712025,-31.91892443162036,0],
            ["sitio 1",-52.22515038586414,-31.91723022194841,0],
            ["sitio 1",-52.22603731856313,-31.91529523185383,0],
            ["sitio 1",-52.22661379494945,-31.91334995485743,0],
            ["sitio 1",-52.2285788540186,-31.90804692372422,0],
            ["sitio 1",-52.22793345064896,-31.90923039777458,0],
            ["sitio 1",-52.23210126071151,-31.90250241438411,0],
            ["sitio 1",-52.23088894038944,-31.90413767124474,0],
            ["sitio 1",-52.2349918302483,-31.90434009765548,0],
            ["sitio 1",-52.23693713705539,-31.90286406403695,0],
            ["sitio 36",-52.24053015040267,-31.92946393344002,0],
            ["sitio 2c",-52.24014520709338,-31.91791907807452,0],
            ["sitio 2a",-52.24122641990434,-31.91110274830583,0],
            ["sitio 35",-52.2549909982698,-31.8786924708722,0],
            ["sitios 22/23/24",-52.27002267943199,-31.85953760490238,0],
            ["sitio 49",-52.26615612322065,-31.85176978742138,0],
            ["sitio 50",-52.26371854384081,-31.85030917191867,0],
            ["sitio 20",-52.28324959576111,-31.83746576372126,0],
            ["sitio 48",-52.25841788111909,-31.8207198759377,0],
            ["sitio 21",-52.30174369632234,-31.86148005445514,0],
            ["sitio 10",-52.24459659420174,-31.98074803248048,0],
            ["sitio 27",-52.2444980655529,-31.98611684210702,0],
            ["sitio 28",-52.24798456939654,-31.98858495627872,0],
            ["sitio 14",-52.24394699411189,-31.99594608522528,0],
            ["sitio 8",-52.24433413994496,-31.99456367836325,0],
            ["sitio 3a",-52.23943341366246,-32.01234873073491,0],
            ["sitio 3b",-52.24227850796943,-32.01222460551748,0],
            ["sitio 32",-52.28443278240489,-32.03037056392492,0],
            ["sitio 4",-52.25662680925247,-32.05080571472872,0],
            ["sitio 15",-52.16534545346677,-32.10635244111056,0],
            ["sitio 33",-52.16768791161169,-32.10878635692016,0],
        ];

        var map = L.map('map').setView([-31.9461882, -52.321904,9.75], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);
                
        for (var i = 0; i < locations.length; i++) {
            // marker = new L.marker([locations[i][1], locations[i][2]]).bindPopup(locations[i][0]).addTo(map);

            L.marker([locations[i][2], locations[i][1]]).addTo(map)
            .bindPopup(locations[i][0])
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
        _this.setMainMap();
        _this.setLoginpage();
    }
}

page_template.init();
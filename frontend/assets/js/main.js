import 'core-js/stable';
import 'regenerator-runtime/runtime';
import validator from 'validator';

var locations = [
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.22504069592754",
        "lat": "-31.92366077155808",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito"
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.22439818980784",
        "lat": "-31.92114037129069",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito"
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.22460004538161",
        "lat": "-31.919199762814",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito"
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.22325546712025",
        "lat": "-31.91892443162036",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito"
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.22515038586414",
        "lat": "-31.91723022194841",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito"
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.22603731856313",
        "lat": "-31.91529523185383",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito"
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.22661379494945",
        "lat": "-31.91334995485743",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito"
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.2285788540186",
        "lat": "-31.90804692372422",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito"
    },
    {
        "site": "Sítio 1",
        "siteID":'001',
        "long": "-52.22793345064896",
        "lat": "-31.90923039777458",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito"
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.23210126071151",
        "lat": "-31.90250241438411",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito"
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.23088894038944",
        "lat": "-31.90413767124474",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito"
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.2349918302483",
        "lat": "-31.90434009765548",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito"
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.23693713705539",
        "lat": "-31.90286406403695",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito"
    },
    {
        "siteID":'002',
        "site": "Sítio 36",
        "long": "-52.24053015040267",
        "lat": "-31.92946393344002",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Sitio sobre dunas"
    },
    {
        "siteID":'003',
        "site": "Sítio 2c",
        "long": "-52.24014520709338",
        "lat": "-31.91791907807452",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Sitio sobre dunas"
    },
    {
        "siteID":'004',
        "site": "Sítio 2a",
        "long": "-52.24122641990434",
        "lat": "-31.91110274830583",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Sitio sobre dunas"
    },
    {
        "siteID":'005',
        "site": "Sítio 35",
        "long": "-52.2549909982698",
        "lat": "-31.8786924708722",
        "municipio": "Rio Grande",
        "localidade": "Pesqueiro",
        "tipo": "Sitio sobre dunas"
    },
    {
        "siteID":'006',
        "site": "Sítio 22/23/24",
        "long": "-52.27002267943199",
        "lat": "-31.85953760490238",
        "municipio": "Rio Grande",
        "localidade": "Barra Falsa",
        "tipo": "Sitio sobre dunas"
    },
    {
        "siteID":'007',
        "site": "Sítio 49",
        "long": "-52.26615612322065",
        "lat": "-31.85176978742138",
        "municipio": "Rio Grande",
        "localidade": "Barra Falsa",
        "tipo": "Cerrito"
    },
    {
        "siteID":'008',
        "site": "Sítio 50",
        "long": "-52.26371854384081",
        "lat": "-31.85030917191867",
        "municipio": "Rio Grande",
        "localidade": "Barra Falsa",
        "tipo": "Cerrito"
    },
    {
        "siteID":'009',
        "site": "Sítio 20",
        "long": "-52.28324959576111",
        "lat": "-31.83746576372126",
        "municipio": "Rio Grande",
        "localidade": "Barra Falsa",
        "tipo": "Cerrito"
    },
    {
        "siteID":'010',
        "site": "Sítio 48",
        "long": "-52.25841788111909",
        "lat": "-31.8207198759377",
        "municipio": "Rio Grande",
        "localidade": "Barra Falsa",
        "tipo": "Cerrito"
    },
    {
        "siteID":'011',
        "site": "Sítio 21",
        "long": "-52.30174369632234",
        "lat": "-31.86148005445514",
        "municipio": "Rio Grande",
        "localidade": "Barra Falsa",
        "tipo": "Cerrito"
    },
    {
        "siteID":'012',
        "site": "Sítio 10",
        "long": "-52.24459659420174",
        "lat": "-31.98074803248048",
        "municipio": "Rio Grande",
        "localidade": "Arraial",
        "tipo": "Cerrito"
    },
    {
        "siteID":'013',
        "site": "Sítio 27",
        "long": "-52.2444980655529",
        "lat": "-31.98611684210702",
        "municipio": "Rio Grande",
        "localidade": "Arraial",
        "tipo": "Cerrito"
    },
    {
        "siteID":'014',
        "site": "Sítio 28",
        "long": "-52.24798456939654",
        "lat": "-31.98858495627872",
        "municipio": "Rio Grande",
        "localidade": "Arraial",
        "tipo": "Cerrito"
    },
    {
        "siteID":'015',
        "site": "Sítio 14",
        "long": "-52.24394699411189",
        "lat": "-31.99594608522528",
        "municipio": "Rio Grande",
        "localidade": "Arraial",
        "tipo": "Cerrito"
    },
    {
        "siteID":'016',
        "site": "Sítio 8",
        "long": "-52.24433413994496",
        "lat": "-31.99456367836325",
        "municipio": "Rio Grande",
        "localidade": "Arraial",
        "tipo": "Cerrito"
    },
    {
        "siteID":'017',
        "site": "Sítio 3a",
        "long": "-52.23943341366246",
        "lat": "-32.01234873073491",
        "municipio": "Rio Grande",
        "localidade": "Quitéria",
        "tipo": "Cerrito"
    },
    {
        "siteID":'018',
        "site": "Sítio 3b",
        "long": "-52.24227850796943",
        "lat": "-32.01222460551748",
        "municipio": "Rio Grande",
        "localidade": "Quitéria",
        "tipo": "Sitio sobre dunas"
    },
    {
        "siteID":'019',
        "site": "Sítio 32",
        "long": "-52.28443278240489",
        "lat": "-32.03037056392492",
        "municipio": "Rio Grande",
        "localidade": "Quinta",
        "tipo": "Sitio sobre dunas"
    },
    {
        "siteID":'020',
        "site": "Sítio 4",
        "long": "-52.25662680925247",
        "lat": "-32.05080571472872",
        "municipio": "Rio Grande",
        "localidade": "Quinta",
        "tipo": "Cerrito"
    },
    {
        "siteID":'021',
        "site": "Sítio 15",
        "long": "-52.16534545346677",
        "lat": "-32.10635244111056",
        "municipio": "Rio Grande",
        "localidade": "Vieira",
        "tipo": "Sitio sobre dunas"
    },
    {
        "siteID":'022',
        "site": "Sítio 33",
        "long": "-52.16768791161169",
        "lat": "-32.10878635692016",
        "municipio": "Rio Grande",
        "localidade": "Vieira",
        "tipo": "Sitio sobre dunas"
    }
]

window.page_template = {
    setMainMap: function(){

        var map = L.map('map').setView([-31.9461882, -52.321904,9.75], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        for (var i = 0; i < locations.length; i++) {
            const popupContent = `
                                    <h3>${locations[i].site}</h3>
                                    <p><strong>Municipio:</strong> ${locations[i].municipio}  <strong>Localidade:</strong> ${locations[i].localidade}</>
                                    <p><strong>Tipo de sitio:</strong> ${locations[i].tipo}</p>
                                    <a href="/site-form/${locations[i].siteID}">Ficha do sítio</a>
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
    setSiteFormdata: function(){
        
        const result = locations.find( item => item.siteID === urlParams)
        
        var formRoot = document.getElementsByClassName("site-title")

        formRoot[0].append(`${result.site}`)
        
    },
    init: function(){
        const _this = this;
        const pathName = window.location.pathname;

        if(pathName == "/webmap"){
            _this.setMainMap();
        }
        if(pathName.includes("/site-form")){
            _this.setSiteFormdata();
        }
        _this.setLoginpage();
    }
}

page_template.init();
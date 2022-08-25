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
        "tipo": "Cerrito",
        "description": "<p>(Naue et al 1971, p. 93-94).</p><p>“Situado no Povo Novo, na fazenda Cucessão Soares, numa altitude de 1,50 m (sobre o nível do mar), distando 100 m do banhado. É um conjunto de 17 cerritos, com alturas variando entre 59 e 150 cm, com diâmetros variando entre 10 e 60 m, que se estendem paralelos ao banhado. Foram feitas prospecções em 3 deles (medidas 100 por 100 por 75cm; 50 por 50 por 60 cm; 60 por 60 por 90 cm; 150 por 100 por 50 cm). Numa das prospecções foi encontrado um esqueleto, numa profundidade de 25 cm, em posição fletida e decúbito lateral direito. No mesmo cerrito foram exumados diversos outros crânios por ocasião da lavração da terra. No cerrito a existe grande quantidade de ossos de peixe, havendo uma camada quase pura dos mesmos, que recobre parte do topo numa profundidade de 20 a 25 cm. Quatro dos cerritos foram cultivados, estando os outros, revestidos de gama, intactos. Foi encontrada cerâmica da fase Vieira e material lítico, mas o mesmo não foi analisado por se encontrar em outro estabelecimento. De duas prospecções do cerrito a conseguiram-se 60 cacos de cerâmica da fase Vieira; de coleta superficial conseguiram-se três pedras com covinhas (quebra-coquinhos), 1 fragmento de implemento e um peso de rede”</p>"
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.22439818980784",
        "lat": "-31.92114037129069",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito",
        "description": ""
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.22460004538161",
        "lat": "-31.919199762814",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito",
        "description": ""
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.22325546712025",
        "lat": "-31.91892443162036",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito",
        "description": ""
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.22515038586414",
        "lat": "-31.91723022194841",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito",
        "description": ""
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.22603731856313",
        "lat": "-31.91529523185383",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito",
        "description": ""
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.22661379494945",
        "lat": "-31.91334995485743",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito",
        "description": ""
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.2285788540186",
        "lat": "-31.90804692372422",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito",
        "description": ""
    },
    {
        "site": "Sítio 1",
        "siteID":'001',
        "long": "-52.22793345064896",
        "lat": "-31.90923039777458",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito",
        "description": ""
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.23210126071151",
        "lat": "-31.90250241438411",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito",
        "description": ""
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.23088894038944",
        "lat": "-31.90413767124474",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito",
        "description": ""
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.2349918302483",
        "lat": "-31.90434009765548",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito",
        "description": ""
    },
    {
        "siteID":'001',
        "site": "Sítio 1",
        "long": "-52.23693713705539",
        "lat": "-31.90286406403695",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Cerrito",
        "description": ""
    },
    {
        "siteID":'002',
        "site": "Sítio 36",
        "long": "-52.24053015040267",
        "lat": "-31.92946393344002",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Sitio sobre dunas",
        "description": '<p>(Naue et al 1971, p. 95).</p><p>“Situado no Povo Novo, na fazenda de José Lerchmann, numa altitude de 5 m, sobre a antiga linha de dunas, a 2000 metros da Lagoa dos Patos, com um diâmetro de 300 por 400 m. Trata-se de numerosas concentrações entre dunas. Foi feita coleta total, tendo-se recolhido 63 cacos de cerâmica guarani, 4 bolas de boleadeira, 1 pedra com facetas polidas convexas, 1 afiador de arenito, 1 fragmento de implemento, 1 batedor, 1 seixo, 1 peso de rede, 2 polidores manuais de arenito, 1 machado atípico, 4 lascas.</p>”'
    },
    {
        "siteID":'003',
        "site": "Sítio 2c",
        "long": "-52.24014520709338",
        "lat": "-31.91791907807452",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Sitio sobre dunas",
        "description": '<p>(Naue et al 1971, p. 95).</p><p>“Situado no Povo Novo, na mesma fazenda Sucessão Soares, numa altitude de 5 m, sobre a linha das antigas dunas, na proximidade do mesmo mato brejoso. É um sítio erodido entre dunas, com 200 m de diâmetro. Trata-se de 17 concentrações caracterizadas pela ocorrência de cerâmica e sinais de fogueiras, que indicam a forma e o tamanho da casa; estão na periferia de uma área pantanosa, atualmente drenada. Foi feita coleta total, recolhendo-se 105 cacos de cerâmica guarani, 2 pedras com facetas polidas convexas, 5 pedras com covinhas, 5 afiadores de cerâmica, 1 afiador em arenito, um batedor, 1 chopping-tool, 1 polidor tipo c. O sítio está a 500 m ao sul da casa da fazenda.”</p>'
    },
    {
        "siteID":'004',
        "site": "Sítio 2a",
        "long": "-52.24122641990434",
        "lat": "-31.91110274830583",
        "municipio": "Rio Grande",
        "localidade": "Barro Vermelho",
        "tipo": "Sitio sobre dunas",
        "description": '<p>(Naue et al 1971, p. 95).</p><p>“Situado no Povo Novo, na fazenda Sucessão Soares, numa altitude de 7 m, sobre a linha das antigas dunas, às margens da Lagoa do Jacaré e a 100 m de um mato brejoso. É um sítio erodido entre dunas, com 200 por 100 m de extensão. Foi feita coleta total, recolhendo-se 103 cacos de cerâmica guarani e 2 fragmentos de implementos. Passando o mato brejoso, a 500 m começa a linha de ocorrência dos cerritos (17 ao todo) do sítio 1.”</p>'
    },
    {
        "siteID":'005',
        "site": "Sítio 35",
        "long": "-52.2549909982698",
        "lat": "-31.8786924708722",
        "municipio": "Rio Grande",
        "localidade": "Pesqueiro",
        "tipo": "Sitio sobre dunas",
        "description": '<p>(Naue et al 1971, p. 95).</p><p>“Sítio 35: Situado no Pesqueiro, Povo Novo, na fazenda de Álvaro Bastos, numa altitude de 5 m, 800 m distante da Lagoa dos Patos. É um sítio erodido entre dunas, com uma área de 100 por 200 m. Foi feita coleta sistemática, encontrando-se 84 cacos de cerâmica guarani e um fragmento de implemento”</p>'
    },
    {
        "siteID":'006',
        "site": "Sítio 22/23/24",
        "long": "-52.27002267943199",
        "lat": "-31.85953760490238",
        "municipio": "Rio Grande",
        "localidade": "Barra Falsa",
        "tipo": "Sitio sobre dunas",
        "description": '<p>(Naue et al 1971, p. 99).</p><p>“Sítio 24: Situado nas areias da Barra Falsa, na propriedade de Levy Magalhães, sobre uma barranca, a 800 m da porção meridional da Lagoa dos Patos. É um sítio erodido entre dunas. Foi feita coleta sistemática superficial e outra não sistemática, recolhendo-se os seguintes materiais: um pedaço de cachimbo europeu, 351 cacos de cerâmica tupi-guarani (há muito mais no sítio), 4 cacos de cerâmica Vieira, 1 pedra com superfície polida convexa, 2 pedras com covinhas, 1 afiador de arenito e 1 de cerâmica, 29 lascas, 4 fragmentos de implementos, 1 batedor, 1 núcleo, 1 pequeno biface amidaloide, 4 polidores manuais de arenito, 1 machado tipo g, 1 polidor tipo d, 1 ponta de flecha. Ainda existe um testemunho de uns 40 cm da camada arqueológica, que o vento não conseguiu remover. Parece ser um sítio de contato pequeno com os europeus, não se tratando, ao que tudo indica, de um sítio semelhante aos descritos anteriormente“ (Naue et al 1971, p. 98-99).</p><p>“Sítio 23: Situado a uns 800 m distante do anterior nas mesmas areias da Barra Falsa, na propriedade de Valpírio Mendes Borges, sobre uma barranca, a 1600 m da porção meridional da Lagoa dos Patos. É um sítio erodido entre dunas. Foi feita coleta total do sítio, recolhendo-se tijolos, objetos de ferro, porcelana, cerâmica de tipo europeu (vidrada de amarelo e escura), 104 cacos tupi-guarani, 12 Vieira, 1 bola de boleadeira Ad2, 1 pedra com facetas polidas convexas, 2 fragmentos de implementos, 1 batedor, 1 núcleo. Como no sítio 32 também aqui existem pequenas áreas compactadas, que poderiam ser os pisos das casas, com sinais dos fogões e carvão. Novamente encontramos misturados materiais de tipo europeu, Vieira e tupi-guarani” (Naue et al 1971, p. 99).</p><p>“Sítio 22: Situado a uns 100 m do anterior, nas mesmas areias da Barra Falsa, na mesma propriedade, e sobre a mesma barranca, distando 1.700 m da Lagoa dos Patos. É um sítio erodito entre dunas, com aproximadamente 50 m de diâmetro. Foi feita coleta sistemática superficial, recolhendo-se cerâmica de tipo europeu (escura), 11 cacos de cerâmica tupi-guarani, 30 de cerâmica Vieira, 2 pedras com facetas polidas convexas, 10 lascas e um polidor manual de arenito. É uma continuação do sítio anterior.”</p>'
    },
    {
        "siteID":'007',
        "site": "Sítio 49",
        "long": "-52.26615612322065",
        "lat": "-31.85176978742138",
        "municipio": "Rio Grande",
        "localidade": "Barra Falsa",
        "tipo": "Cerrito",
        "description": '<p>(Schmitz 2011, p. 91-94)</p><h3>“Sítio Arqueológico RS-RG-49</h3><h4>1.Caracterização Geral:</h4><p>Localizado na propriedade de Oscar Mendes, Barra Falsa, Município de Rio Grande, RS.</p><p>Dista da Lagoa aproximadamente 550 m. Está sobre o terraço B, distando 100 m da sua borda. O sítio RS-RG-50 está a 200 m em direção ao barranco do Pleistoceno.</p><p>Mede 90 x 120 m. O ponto mais alto (onde foram acumulados restos pela fábrica de adubos) está 200 cm sobre a base. Os estratos têm, no lugar do corte estratigráfico II, 120 cm de espessura e o sítio se destaca perfeitamente dos terrenos planos adjacentes.</p><p>O sítio caracteriza-se por estratos escuros, arenosos, com grande quantidade de restos de alimentos de origem animal, elementos culturais, principalmente cerâmica na parte de superfície.</p><p>Sobre o sítio existem gramíneas de campo limpo, ao passo que ao redor do mesmo cresceu um anel de árvores, com infra-estrutura de gravatá. Os demais dados como no RS-RG-50. </p><p>O sítio foi grandemente danificado pela fabrica de adubos Caruccio, de Pelotas, que o explorou durante anos, retirando materiais ósseos e outros restos orgânicos. Na escavação desses materiais apareceram vários esqueletos, segundo informações do proprietário. Até alguns anos atrás, um irmão deste, que morava nos arredores, utilizou o cômoro, devido à sua fertilidade e altura, para fazer suas chácaras.</p><p>O local apresenta uma profunda e larga escavação na parte central, onde também se encontram os montículos formados pela areia resultante da peneiração dos restos orgânicos, mas na periferia e no local de acesso dos caminhões existem áreas intatas, onde foram realizados cortes.</p><h4>2. Trabalhos Realizados:</h4><p>Corte Estratigráfico I:</p><p>Em 21/2/66, P. I. Schmitz e J. Proenza Brochado fizeram um corte estratigráfico de 1,5 X 1,5 m à beira da área demolida pela fábrica de adubos. O material encontra-se no Museu Rio-Grandense de História Natural e não foi aqui incluído.</p><p>Inicialmente foi cortada uma fina camada superficial, numa espessura de 5 cm, para retirar o capim. A remoção do depósito foi feita em níveis artificiais de 15 cm de espessura. </p><p>05 - 20 cm:</p><p>Depósito arenoso, cinzento, solto, revolvido pelo cultivo. Cacos de cerâmica de tradição Vieira (fase Vieira), restos de alimentos de origem animal, principalmente peixes.</p><p>20 - 35 cm:</p><p>Depósito semelhante, mais escuro, mais solto. Poucos cacos de cerâmica, muitos restos de alimentos de origem animal e coquinhos calcinados; carvão.</p><p>35 - 50 cm:</p><p>Depósito semelhante. Pouca cerâmica, restos de alimentos de origem animal e coquinhos. Uma amostra de carvão recolhida na superfície do nível, onde se encontrava uma lente de coquinhos calcinados por cima de um estrato de ossos amarelados, proporcionou a data de 2020 ± 50 a.P. ou 70 a.C. (SI-1008).</p><p>50 65 cm:</p><p>Depósito semelhante. Uma pedra sem evidências de modificação ou uso, muitos restos animais.</p><p>65 - 80 cm:</p><p>Igual ao anterior.</p><p>80 - 145 cm:</p><p>Continuam os estratos arqueológicos, mas sem cerâmica ou pedras.</p><p>145 cm em diante:</p><p>Areia clara, sem material arqueológico e sem perturbações.</p><p>Corte Estratigráfico II:</p><p>Entre 5/2 e 11/2/70, P. I. Schmitz, I. I. Basile Becker, G. Naue e M. H. Abrahão Schorr realizaram outro corte estratigráfico no lugar de acesso dos caminhões. Esse corte dista aproximadamente 20 m do anterior.</p><p>Corte 2 X 1,5 m. Remoção dos estratos em níveis artificiais de 20 cm. Todo o material foi peneirado, usando se uma malha de 3 mm.</p><p>O estrato é bastante uniforme, razão por que é descrito segundo os níveis artificiais de escavação.</p><p>0 - 20 cm:</p><p>Os primeiros 10 cm são constituídos por leivas.</p><p>10 - 20 cm: depósito arenoso, com húmus, marrom-escuro, solto. Cerâmica, lascas, restos de alimentos de origem animal. A cerâmica diminui para o fim do nível.</p><p>20 - 40 cm:</p><p>Depósito arenoso, marrom-escuro, um pouco mais compacto. Raríssima cerâmica, aparecendo principalmente no início do nível; restos de alimentos de origem animal soltos ou em conglomerados, grande quantidade de coquinhos calcinados.</p><p>40 - 60 cm:</p><p>Depósito igual. Sem cerâmica. Muitos conglomerados de ossos.</p><p>60 - 80 cm:</p><p>Depósito igual. Dois cacos de cerâmica, possivelmente provenientes de camadas superiores. Ossos trabalhados. Grande quantidade de ossos (soltos ou conglomerados) e coquinhos calcinados. O estrato se torna mais arenoso e mais claro.</p><p>80 - 100 cm:</p><p>Depósito mais claro, com presença de lentes de areia bem limpa. Abundantes ossos e coquinhos calcinados. </p><p>100 - 120 cm:</p><p>Depósito arenoso, de cor amarelada, bastante úmido, entremeado de finos estratos com material arqueológico: ossos e coquinhos.</p><p>Daí para baixo areia mais clara, sem material arqueológico. </p><p>Coletas Sistemáticas</p><p>Entre 5/2 e 11/2/70, foi realizada uma coleta sistemática de superfície, que deu pouco material, devido à grama que cobre tudo.</p><h4>3. Identificação Cultural e Datação</h4><p>A parte pré-cerâmica, níveis III a VI (corte II), pertence à fase Lagoa; a parte cerâmica, níveis I e II, pertence à fase Vieira inicial, tradição Vieira. Os cacos Tupiguarani devem provir de reocupação do sítio.</p><p>Amostra de carvão do nível 35-50 (corte I) deu a data de 2020 ± 50 a. P. ou 70 a.C. (SI-1008). Representa, provavelmente, o fim do período pré-cerâmico e o início do cerâmico. Pela seriação, a cerâmica é a mais antiga da fase Vieira.”</p>'
    },
    {
        "siteID":'008',
        "site": "Sítio 50",
        "long": "-52.26371854384081",
        "lat": "-31.85030917191867",
        "municipio": "Rio Grande",
        "localidade": "Barra Falsa",
        "tipo": "Cerrito",
        "description": '<p>(Schmitz 2011, p. 86-88)</p><h3>"Sítio Arqueológico RS-RG-50</h3><h4>1. Caracterização Geral:</h4><p>Localizado na propriedade de Oscar Mendes, Barra Falsa, Município de Rio Grande, RS. Dista da Lagoa aproximadamente 750 m. Está sobre o terraço B, distando de sua borda 300 m. O barranco do Pleistoceno dista aproximadamente um quilômetro, estando o espaço intermédio ocupado por campos baixos, com pequenos Capões de mato.</p><p>Mede 135 X 83,50 m. Os estratos têm espessura de 100 cm,elevando-se o todo bastante sobre o terreno circundante.</p><p>O sítio caracteriza-se por estratos escuros, arenosos, com grande quantidade de restos de alimentos de origem animal e elementos culturais, principalmente cerâmica superficial.</p><p>A área do sítio é cultivada desde muito tempo, encontrando-se sobre o mesmo, além da chácara, plantações de árvores frutíferas e eucaliptos. Num dos extremos está a morada do proprietário. A vegetação dos arredores são gramíneas de campos úmidos e grupos de árvores formando capões.</p><p>Apesar de o sítio estar sendo cultivado desde muito tempo (uns 50 anos), apenas os 14 cm superficiais estão revolvidos. No lugar do corte, entretanto, puderam notar-se diversas tocas de tatu.</p><h4>2. Trabalhos Realizados:</h4><p>Primeiras Visitas:</p><p>Em começos de 1966, P. I. Schmitz e J. Proenza Brochado visitaram o sítio e preencheram a ficha do IPHAN. A pequena coleta superficial feita na data se encontra no Museu Rio-Grandense de História Natural, Porto Alegre.</p><p>Em princípios de 1969 foi feita nova visita por P. I. Schmitz, F. La Salvia, G. Naue, M. H. Abrahão Schorr e I. I. Basile Becker, fazendo-se outra coleta superficial, que ficou com G. Naue.</p><p>Corte Estratigráfico:</p><p>De 10 a 13/3/72, P. I. Schmitz, I. I. Basile Becker e G. Naue realizaram um corte estratigráfico, no centro do sítio.</p><p>Corte 2 X 2 m. Remoção do depósito em níveis artificiais de 20 cm de espessura. Todo o material foi peneirado com malha de 3 mm.</p><p>Os buracos de tatu são responsáveis pela mistura de material do estrato: os restos de alimentos não servem para estudo quantitativo; a cerâmica nos lugares não perturbados chega até o nível II, ao passo que nos perturbados chegam cacos até quase a base.</p><p>O estrato parece uniforme. A descrição é feita de acordo com os níveis artificiais da escavação.</p><p>0 - 20 cm:</p><p>Os primeiros 14 cm foram revolvidos pelo cultivo e se apresentam soltos, marrom avermelhados.</p><p>No resto do nível o depósito se apresenta arenoso, com húmus, marrom-escuro, solto. Cerâmica de tradição Vieira (fase Torotama), restos de alimentos.</p><p>20 - 40 cm:</p><p>Depósito arenoso, escuro, mais úmido, solto. Cerâmica, algumas lascas, restos de alimentos, principalmente ossos de peixes, poucos coquinhos calcinados.</p><p>40 - 60 cm:</p><p>Depósito arenoso igual, mais úmido. Pouca cerâmica em áreas perturbadas, restos de alimentos aumentam muito. Duas lentes (tamanho 15 X 25 cm), compostos quase exclusivamente de otólitos de peixes, alguns ossos calcinados</p><p>60 - 80 cm:</p><p>Depósito arenoso igual, úmido, quase preto, um caco de cerâmica em cova de tatu, restos de alimentos: peixes, pequenos roedores, coquinhos calcinados inteiros ou quebrados. Continuam as lentes com otólitos.</p><p>80 - 100 cm:</p><p>80-90 cm: depósito arenoso igual com intrusões de areia clara nas covas de tatu. Caco de cerâmica em área perturbada, restos de alimentos em menor quantidade</p><p>90-100 cm: depósito mais claro, só com algumas manchas escuras.</p><p>Aos 100 cm areia clara, limpa, fofa. Sobre a mesma se reconhecem 17 evidências de estacas, que se aprofundam 20 cm.</p><p>100 - 160 cm:</p><p>Depósito arenoso claro, sem material arqueológico e sem perturbações.</p> <p></p><p>Em 13/3/72 foi feita uma coleta sistemática em toda a superfície do sítio. Outra só na superfície do lugar delimitado para o corte.</p><p>Em janeiro de 1976 foi feita outra coleta sistemática em parte da superfície.</p><h4>3. Identificação Cultural e Datação:</h4><p>A parte pré-cerâmica, níveis III a VI, pertence à fase Lagoa; a parte cerâmica, níveis I e II, pertence à fase Torotama, tradição Vieira. Os poucos cacos Tupiguarani devem ser de reocupação Tupiguarani.</p><p>Não há data de C14. Pela seriação, a parte superficial cai no setor mais antigo do período cerâmico. A parte pré-cerâmica, tomando-se em consideração a distância da borda do terraço, provavelmente corresponde às ocupações mais antigas da área.”</p>'
    },
    {
        "siteID":'009',
        "site": "Sítio 20",
        "long": "-52.28324959576111",
        "lat": "-31.83746576372126",
        "municipio": "Rio Grande",
        "localidade": "Barra Falsa",
        "tipo": "Cerrito",
        "description": '<p>(Naue et al 1971, p. 94).</p><p>“Situado na Barra Falsa, na fazenda de José Aníbal Abreu, numa altitude de 1 m, 50 m distante da Lagoa do Peixe. É um cerrito com 40 por 30 m, com 1,40 m de altura. Inicialmente foram feitas duas prospecções, conseguindo-se 32 cacos de cerâmica Vieira e 2 fragmentos de implementos. Posteriormente foi feita nova prospecção de 200 por 200 cm até a base, encontrando-se grande quantidade de cerâmica, alguns quebra-coquinhos e outros materiais líticos, além de implementos de osso, mas este material ainda não pôde ser analisado.”</p>'
    },
    {
        "siteID":'010',
        "site": "Sítio 48",
        "long": "-52.25841788111909",
        "lat": "-31.8207198759377",
        "municipio": "Rio Grande",
        "localidade": "Barra Falsa",
        "tipo": "Cerrito",
        "description": '<p>(Schmitz 2011, p. 111)</p><h3>"Sítio Arqueológico RS-RG - 48</h3><h4>1. Caracterização Geral:</h4><p>Localizado na propriedade de Oscar Mendes, Barra Falsa, Município de Rio Grande, RS. Dista do Banhado que acompanha o canal de São Gonçalo uns 1.500 m; do canal uns 4.500 m; da Lagoa dos Patos uns 3.000 m. Está sobre o terraço B, praticamente na borda do mesmo. O barranco do Pleistoceno distará uns 3.500 m. (Foto 4)</p><p>Mede 32 X 26 m. Os estratos têm uma espessura de 100 cm e o sítio se destaca perfeitamente dos arredores.</p><p>O sítio caracteriza-se por estratos escuros, areno-argilosos, com grande quantidade de restos de alimentos de origem animal e elementos culturais, sendo totalmente cerâmico.</p><p>Sobre o sítio existem plantas típicas de terrenos revolvidos e mais férteis e ao redor estão campos úmidos cobertos de gramíneas, havendo bosques sobre o terraço; a área inferior ao terraço (terraço A) não tem vegetação arbórea ou arbustiva.</p><p>Sobre o sítio havia uma construção em tempo que escapa à memória do proprietário atual e cujos restos marcam um horizonte bem claro no perfil dos cortes, com a presença de restos de tijolos, vidro, pregos, cerâmica de tradição européia, botões, etc.</p><h4>2. Trabalhos Realizados:</h4><p>Primeiras Visitas:</p><p>Em 21/2/66, P. I. Schmitz e J. Proenza Brochado estiveram no local e preencheram a ficha do IPHAN. A pequena coleta feita na oportunidade ficou no Museu Rio-Grandense de História Natural. </p><p>Cortes Estratigráficos:</p><p>De 28/1/70 a 5/2/70, P. I. Schmitz, G. Naue, I. I. Basile Becker, M. H. Abrahão Schorr fizeram três cortes estratigráficos para coleta sistemática de material.</p><p>Para os cortes, delimitou-se uma faixa de 1,5 m. de largura, em direção aproximadamente Norte-Sul, demarcando-se nela setores de 2 m, marcados do ponto mais alto para a periferia com as siglas A1 a A5. Os níveis têm como referência sempre o ponto zero, no alto do sítio. A remoção do material foi feita em níveis artificiais de 20 cm de espessura, sendo o material todo peneirado numa malha de 3 mm.</p><p>O estrato é consideravelmente homogêneo no mesmo corte e comparando os três cortes. Por essa razão, apresentamos aqui apenas a descrição do corte A1, nos seus níveis artificiais.</p><p>Corte A1:</p><p>0 - 20 cm:</p><p>Depósito areno-argiloso, com húmus, pardo-escuro, tendendo a marrom-escuro, mais ou menos solto e apresentando pequenos torrões. Cacos de cerâmica e vidro, poucos restos de alimentos de origem animal. Aproximadamente aos 20 cm de profundidade o depósito apresenta-se compactado, acusando o chão da casa, com regular quantidade de cacos de tijolos, cerâmica de tradição européia, ossos de peixes e de pequenos mamíferos.</p><p>20 - 40 cm:</p><p>Nos primeiros 5 cm o depósito continua compactado, com restos de tijolos, cerâmica e outros indícios de ocupação européia. Os demais 15 cm são de um depósito amarelado, mais solto, com cerâmica de tradição Vieira, restos de alimentos de origem animal, alguns carvões. Um dente perfurado.</p><p>40 - 60 cm:</p><p>Depósito igual, como na parte inferior do anterior. Cerâmica, ossos soltos e conglomerados, grânulos de carvão que aumentam em profundidade. Uma rodela de concha perfurada.</p><p>60 - 80 cm:</p><p>Depósito igual, mais solto. Cerâmica, uma pedra sem sinal de modificação ou uso, lasca de quartzo. Grande quantidade de carvão e coquinhos. </p><p>80 - 100 cm:</p><p>Depósito mais claro. Umas lasca de quartzo. Ossos soltos e conglomerados. Uma ponta helicoidal, um dente perfurado.</p><p>100 - 120 cm:</p><p>Argila pardoacinzentada com bolsões contendo material arqueológico. A 115 cm a consistência se torna maior e a coloração mais amarelada. O piso original é bem irregular e aparece ao menos uma evidência de estaca. Daí para baixo o depósito é igual, sem material arqueológico ou indícios de perturbações.</p><h4>3. Identificação Cultural e Datação:</h4><p>O sítio é totalmente cerâmico, pertencendo à fase Vieira, período inicial. A amostra de carvão recolhida no setor A3, na profundidade de 80 - 100 cm, forneceu uma data de 1.335 ± 45 a.P., ou A. D. 595 (SI-1007).”</p>'
    },
    {
        "siteID":'011',
        "site": "Sítio 21",
        "long": "-52.30174369632234",
        "lat": "-31.86148005445514",
        "municipio": "Rio Grande",
        "localidade": "Barra Falsa",
        "tipo": "Cerrito",
        "description": '<p>(Naue et al 1971, p. 96).</p><p>“Situado na Barra Falsa, na chácara de Ulisses Miranda, numa altitude de 1 m, a 300 m distante da Lagoa do Peixe, pequena elevação mal visível (cerrito?), contendo ossos de peixes e cinzas com 30 m de diâmetro. Foi feita coleta superficial sistemática, recolhendo se 1 caco de cerâmica Vieira e 21 de cerâmica tupi-guarani, 2 pedras com facetas polidas convexas, 2 pedras com covinhas, 4 fragmentos de implementos.”</p>'
    },
    {
        "siteID":'012',
        "site": "Sítio 10",
        "long": "-52.24459659420174",
        "lat": "-31.98074803248048",
        "municipio": "Rio Grande",
        "localidade": "Arraial",
        "tipo": "Cerrito",
        "description": "<p>(Naue et al 1971, p. 96).</p><p>“Situado no Arraial de Dentro, na propriedade de Pedro Barros, numa altitude de 3 m, distante 50 m da Lagoa dos Patos. É um cerrito capeando uma elevação argilo-arenosa, com 57 m de diâmetro e uma camada arqueológica que medeia entre 25 e 50 cm. Foi feita coleta sistemática superficial na metade cultivada do cerrito; a outra metade estava coberta de vegetação. Foram encontrados 123 cacos de cerâmica Vieira e 17 de tupi-guarani.”</p>"
    },
    {
        "siteID":'013',
        "site": "Sítio 27",
        "long": "-52.2444980655529",
        "lat": "-31.98611684210702",
        "municipio": "Rio Grande",
        "localidade": "Arraial",
        "tipo": "Cerrito",
        "description": "<p>(Naue et al 1971, p. 94).</p><p>“Situado no Arraial de Fora, na propriedade de José dos Santos Figueiredo, numa altitude de 2 m, 300 m distante da Lagoa dos Patos. É um cerrito cultivado de 10 m de diâmetro por aproximadamente 30 cm de altura. Foi feita coleta superficial total, conseguindo-se apenas 2 cacos de cerâmica Vieira.”</p>"
    },
    {
        "siteID":'014',
        "site": "Sítio 28",
        "long": "-52.24798456939654",
        "lat": "-31.98858495627872",
        "municipio": "Rio Grande",
        "localidade": "Arraial",
        "tipo": "Cerrito",
        "description": "<p>(Naue et al 1971, p. 94).</p><p>“Situado no Arraial de Fora, na propriedade Sucessão José Antunes, numa altitude de 2 m, encostado num arroio. É um cerrito ocupado por habitação; as dimensões são 80 por 40 m, com 1,50 m de altura. Fez-se coleta superficial, conseguindo-se 30 cacos de cerâmica Vieira.”</p>"
    },
    {
        "siteID":'015',
        "site": "Sítio 14",
        "long": "-52.24394699411189",
        "lat": "-31.99594608522528",
        "municipio": "Rio Grande",
        "localidade": "Arraial",
        "tipo": "Cerrito",
        "description": "<p>(Naue et al 1971, p. 94).</p><p>“Situado no Arraial de Fora, na chácara de José dos Santos Figueiredo, está a dois metros de altitude, 400 m distante da Lagoa dos Patos, 200 m distante do sítio 8 (sítio com material Vieira e tupi-guarani). É um cerrito cultivado, com 40 por 30 m, com aproximadamente 50 cm de altura. Foi feita coleta sistemática superficial, recolhendo-se 86 cacos de cerâmica Vieira, 1 pedra com covinhas, 3 fragmentos de implemento.”</p>"
    },
    {
        "siteID":'016',
        "site": "Sítio 8",
        "long": "-52.24433413994496",
        "lat": "-31.99456367836325",
        "municipio": "Rio Grande",
        "localidade": "Arraial",
        "tipo": "Cerrito",
        "description": "<p>(Naue et al 1971, p. 96).</p><p>“Situado no Arraial de Fora, na chácara de José dos Santos Figueiredo, numa altitude de 2 m, distante 400 m da Lagoa dos Patos. É um cerrito cultivado, com 50 por 50 m, com aproximadamente 1 m de altura. Foi feita coleta sistemática em toda a extensão, encontrando-se 251 cacos de cerâmica Vieira e 5 de cerâmica tupi-guarani, 3 pedras com facetas polidas convexas, 8 pedras com covinhas, 5 lascas, 5 fragmentos de implementos, 2 núcleos, 1 lasca retocada, um machado tipo a e 1 machado tipo g, 1 polidor tipo b, um tipo c, 2 tipo d. Na superfície e nas camadas ocorrem numerosos ossos de peixes e mamíferos; o sítio foi danificado pela fábrica de adubos de Pelotas, que extraiu a matéria orgânica. Na remoção das cinzas e do material orgânico foi localizado um esqueleto cujo crânio foi novamente sepultado. Havia construções em cima do sítio.”</p>"
    },
    {
        "siteID":'017',
        "site": "Sítio 3a",
        "long": "-52.23943341366246",
        "lat": "-32.01234873073491",
        "municipio": "Rio Grande",
        "localidade": "Quitéria",
        "tipo": "Cerrito",
        "description": "<p>(Naue et al 1971, p. 94).</p><p>“Situado na Quitéria, na propriedade de Lacides Antunes Gonçalves, numa altitude de 1 m, 400 m distante da Lagoa dos Patos. É um cerrito, com 150 por 100 m, atualmente arrasado pela fábrica de adubos de Pelotas; teria tido 2 m de altura aproximadamente. Foi feita coleta sistemática superficial, conseguindo-se 95 cacos de cerâmica Vieira, 1 pedra com covinhas, 2 lascas, 1 fragmento de implemento, 1 polidor c.”</p>"
    },
    {
        "siteID":'018',
        "site": "Sítio 3b",
        "long": "-52.24227850796943",
        "lat": "-32.01222460551748",
        "municipio": "Rio Grande",
        "localidade": "Quitéria",
        "tipo": "Sitio sobre dunas",
        "description": "<p>(Naue et al 1971, p. 96).</p><p>“Situado na Quitéria, na fazenda de Lacides Antunes Gonçalves, numa altitude de 5 m e 700 m da Lagoa dos Patos, a 200 m do sítio 3 a; está sobre a linha de dunas. Seriam cerritos erodidos entre dunas, num diâmetro de uns 250 m. Foi feita coleta sistemática superficial, recolhendo-se 659 cacos de cerâmica Vieira e 133 de cerâmica tupi-guarani, 26 lascas, 4 fragmentos de implementos. Não é possível verificar se se trata de duas ocupações sucessivas, uma primeira Vieira e uma posterior tupi-guarani, porque os sítios estão totalmente erodidos, havendo apenas pequenos restos de estratos na meia-altura das dunas.”</p>"
    },
    {
        "siteID":'019',
        "site": "Sítio 32",
        "long": "-52.28443278240489",
        "lat": "-32.03037056392492",
        "municipio": "Rio Grande",
        "localidade": "Quinta",
        "tipo": "Sitio sobre dunas",
        "description": "<p>(Naue et al 1971, p. 98).</p><p>“Situado na Quinta, na Fazenda de Marcelino do Amaral Brancão, distante 150 m de um mato brejoso. É um sítio erodido em cima de dunas, com aproximadamente 150 m de diâmetro. Existem pequenas áreas compactas, que poderiam ser os pisos das casas; também existem sinais de fogueiras, com carvão. Foi feita coleta sistemática superficial, recolhendo-se tijolos, muitos objetos de metal (medalhas, crucifixos, moedas, pregos, freios, esporas, pontas de lanças, pedaços de espadas, pedaços de fechaduras de portas, dobradiças, fivelas, alfinetes, dedais, botões dourados, uma barra de chumbo), cerâmica de tipo europeu, vidro de garrafa, 39 fragmentos de cachimbos, 105 cacos de cerâmica tupi-guarani, cerâmica Vieira, 6 bolas de boleadeira, 3 pedras com facetas polidas convexas, 12 pedras com covinhas, 1 afiador de arenito, 697 lascas, 47 fragmentos de implementos, 3 batedores, 3 chopping-tool, 3 lascas retocadas, 15 pequenos bifaces quadrados ou retangulares, 5 pequenos bifaces amidaloides, 1 pequeno biface quebrado, 1 polidor manual de arenito, 4 lascas com pontas, 2 lascas com pontas entre entalhes, 1 plaqueta triangular, 1 machado tipo a, 2 polidores tipo a, 17 polidores tipo d, 5 pontas de flecha. Das duas moedas encontradas, uma traz a data de 1734, a outra de 1738, dando uma ideia de que o sítio deve datar do tempo mesmo da fundação da cidade de Rio Grande (1737). Também este sítio traz misturado material típico da fase Vieira, com material típico tupi-guarani e material tipicamente de colonização portuguesa; os implementos de metal indicam claramente que estava relacionado com pessoas do exército nos começos da ocupação.”</p>"
    },
    {
        "siteID":'020',
        "site": "Sítio 4",
        "long": "-52.25662680925247",
        "lat": "-32.05080571472872",
        "municipio": "Rio Grande",
        "localidade": "Quinta",
        "tipo": "Cerrito",
        "description": "<p>(Naue et al 1971, p. 94).</p><p>“Situado na Quitéria, na propriedade de Pedro Ferreira, numa barranca de 5 m de altura, distante 50 m da Lagoa dos Patos, aparece hoje como uma camada do barranco com uns 50 cm de espessura. Encontra-se material espalhado numa extensão de 250 m por 50 m. Foi feita coleta superficial sistemática, tendo-se recolhido 57 cacos de cerâmica Vieira, 1 pedra com facetas polidas convexas, 11 pedras com covinhas, 2 fragmentos de implementos, 1 raspador, 1 machado atípico e um polidor tipo a. Antigamente se retirou regular quantidade de matéria orgânica (ossos e cinzas) para uma fábrica de adubos de Pelotas, que destruiu parcialmente o cerrito.”</p>"
    },
    {
        "siteID":'021',
        "site": "Sítio 15",
        "long": "-52.16534545346677",
        "lat": "-32.10635244111056",
        "municipio": "Rio Grande",
        "localidade": "Vieira",
        "tipo": "Sitio sobre dunas",
        "description": "<p>(Naue et al 1971, p. 96-97).</p><p>“Situado na localidade de Vieira, na propriedade da família Zogbi, numa altitude de 2 m, a 30 m do arroio Vieira, a menos de 200 m do Saco da Mangueira (Lagoa dos Patos). É um cerrito parcialmente erodido, restando um testemunho de 35 cm de espessura, no qual foi feita escavação sistemática. De coleta sistemática conseguiu-se o seguinte material: 175 cacos de cerâmica Vieira e 22 de tupiguarani, 3 lascas pequenas. O material é muito abundante no sítio e já foram feitas numerosas coletas. Fala-se que foi encontrada ali uma caveira, 1 ponta de flecha e outros materiais. Trata-se provavelmente de sítios superpostos porque na escavação nunca apareceu material tupi-guarani. A cerâmica deste sítio deu o nome à fase Vieira. Está a 800 m do seguinte.”</p>"
    },
    {
        "siteID":'022',
        "site": "Sítio 33",
        "long": "-52.16768791161169",
        "lat": "-32.10878635692016",
        "municipio": "Rio Grande",
        "localidade": "Vieira",
        "tipo": "Sitio sobre dunas",
        "description": "<p>(Naue et al 1971, p. 97).</p><p>“Situado na localidade de Vieira, nas propriedades de Álvaro Silva e Antonio Cruz, numa altitude de 5 m, a 150 m do canal Simão, a uns 700 m do Saco da Mangueira (Lagoa dos Patos). É um cerrito sobre a barranca, com 100 por 150 m; não se verificou a espessura. Foi feita coleta superficial sistemática em todo o sítio, que é cultivado, encontrando-se 110 cacos de cerâmica Vieira e 10 de tupi-guarani, 5 pedras com covinhas, 1 lasca, 1 fragmento de implemento. Está a 800 m do sítio 15.”</p>"
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
        
        var siteTitle = document.getElementsByClassName("site-title")

        var siteLat = document.getElementsByClassName("data-lat")
        var siteLong = document.getElementsByClassName("data-long")

        var siteMun = document.getElementsByClassName("data-mun")
        var siteLoc = document.getElementsByClassName("data-loc")

        var siteDescription = document.getElementsByClassName("site-description")

        siteTitle[0].append(`${result.site}`)

        siteLat[0].innerHTML += `${result.lat}`
        siteLong[0].innerHTML += `${result.long}`

        siteMun[0].innerHTML += `${result.municipio}`
        siteLoc[0].innerHTML += `${result.localidade}`

        siteDescription[0].innerHTML += `${result.description}`
        
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
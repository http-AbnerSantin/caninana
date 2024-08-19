const listaDeLojas = [
    {
        nome: "Açailandia-MA",
        endereco: "R. Des. Tácito de Caldas, 99D, Açailândia - MA, 65930-00",
        enderecoURL: "https://www.google.com/maps/place/Caninana+Motos+A%C3%A7ail%C3%A2ndia/@-4.9520173,-47.5024732,15z/data=!4m2!3m1!1s0x0:0x9de43f8d3306ff74?sa=X&ved=1t:2428&ictx=111",
        telefone: "(99)991633-8885",
        foto: "lojas/açailandia"
    },
    {
        nome: "Ananindeua - PA",
        endereco: "BR-010, 4900 - Águas Lindas, Ananindeua - PA, 67020-000",
        enderecoURL: "https://www.google.com/maps/place/Caninana+Motos+-+%C3%81guas+Lindas/@-1.3817765,-48.3998424,15z/data=!4m2!3m1!1s0x0:0xb9717a453eeb3c4c?sa=X&ved=1t:2428&ictx=111",
        telefone: " (91) 98431-5468",
        foto: "lojas/Ananindeua"
    },
    {
        nome: "Imperatriz - Babaçulândia",
        endereco: "Av. Babaçulândia, 898 - Vila Lobão, Imperatriz - MA, 65910-000",
        enderecoURL: "https://www.google.com/maps/place/Caninana+Motos+Baba%C3%A7ul%C3%A2ndia/@-5.5163343,-47.464147,15z/data=!4m2!3m1!1s0x0:0x39355196f78e399a?sa=X&ved=1t:2428&ictx=111",
        telefone: " (99) 98542-6645",
        foto: "lojas/babaculandia"
    },
    {
        nome: "Imperatriz - Ceara",
        endereco: "R. Ceará, 424 - Centro, Imperatriz - MA, 65901-610",
        enderecoURL: "https://www.google.com/maps/place/Motociclo+Caninana/@-5.5243706,-47.4808608,15z/data=!4m2!3m1!1s0x0:0xc3a3023f5bbe1718?sa=X&ved=1t:2428&ictx=111",
        telefone: " (99) 98476-2923",
        foto: "lojas/Ceara-Ma"
    },
    {
        nome: "São Luis - Areinha",
        endereco: "em frente ao TRE - Av. Sen. Vitorino Freire, 1 - Areinha, São Luís - MA, 65030-015",
        enderecoURL: "https://www.google.com/maps/place/Caninana+Motos+Areinha/@-2.5419784,-44.2895772,15z/data=!4m6!3m5!1s0x7f68feee3620ba9:0x6e72d04360380dd2!8m2!3d-2.5419784!4d-44.2895772!16s%2Fg%2F11trmv9tz9?entry=ttu",
        telefone: " (98) 99228-1077",
        foto: "lojas/Areinha"
    },
    {
        nome: "São Luis - Guajajaras",
        endereco: "Av. Guajajaras, 250 - São Bernardo, São Luís - MA, 65055-285",
        enderecoURL: "https://www.google.com/maps/place/Caninana+Moto+Guajajaras/@-2.5577896,-44.223677,15z/data=!4m2!3m1!1s0x0:0x8d34b53110bdb9e6?sa=X&ved=1t:2428&ictx=111",
        telefone: " (98) 98289-2839",
        foto: "lojas/Guajajaras"
    },
    {
        nome: "São Luis - Jerônimo",
        endereco: "Av. Jerônimo de Albuquerque, 1955 - lote B1 - Bequimão, São Luís - MA, 65060-710",
        enderecoURL: "https://www.google.com/maps/place/Caninana+Motos+Jer%C3%B4nimo/@-2.5238633,-44.2435701,15z/data=!4m2!3m1!1s0x0:0x85683de87559fdcd?sa=X&ved=1t:2428&ictx=111",
        telefone: "NAO TEM",
        foto: "lojas/Jeronimo"
    },
    {
        nome: "São Luis - Maiobão",
        endereco: "Estr. de Ribamar - Lima Verde, Paço do Lumiar - MA, 65130-000",
        enderecoURL: "https://www.google.com/maps/place/Caninana+motos/@-2.5516146,-44.1778702,15z/data=!4m2!3m1!1s0x0:0x301e2e0458197ca1?sa=X&ved=1t:2428&ictx=111",
        telefone: "98 99251-7882",
        foto: "lojas/Maiobao"
    },
    {
        nome: "Teresina-Pi",
        endereco: "Av. Maranhão, 42 - Centro (Sul), Teresina - PI, 64000-010",
        enderecoURL: "https://www.google.com/maps?s=web&sca_esv=99e27bbb5f1f1840&lqi=ChdjYW5pbmFuYSBtb3RvcyB0ZXJlc2luYVohIhdjYW5pbmFuYSBtb3RvcyB0ZXJlc2luYSoGCAIQABABkgEPbW90b3JjeWNsZV9zaG9wqgE_EAEyHhABIhpLf-ga73bM3L90k3Gpdo3efXcf8ThJo6OAxjIbEAIiF2NhbmluYW5hIG1vdG9zIHRlcmVzaW5h&phdesc=bk02MOaPAwI&vet=12ahUKEwinrofN2veHAxXppJUCHSRGEx8Q1YkKegQIHhAH..i&cs=1&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KV-RR0quN44HMRVl5YRD3uxX&daddr=Av.+Maranh%C3%A3o,+42+-+Centro+(Sul),+Teresina+-+PI,+64000-010",
        telefone: " (86) 99926-1506",
        foto: "lojas/Maranhao-Pi"
    },
    {
        nome: "Timon-Ma",
        endereco: "Av. Pres. Médici, 670 - Centro, Timon - MA, 65630-020",
        enderecoURL: "https://www.google.com/maps/place/Caninana+Motos+Timon/@-5.0937427,-42.8330412,15z/data=!4m2!3m1!1s0x0:0x808eff8b3ff2da80?sa=X&ved=1t:2428&ictx=111",
        telefone: "(86) 99942-5503",
        foto: "lojas/Timon-Ma"
    },
    {
        nome: "Teresina-Pi",
        endereco: " Av. Miguel Rosa, n° 7500 - Pavimento Superior - Tabuleta, Teresina - PI, 64019-702",
        enderecoURL: "https://www.google.com/maps?s=web&sca_esv=99e27bbb5f1f1840&lqi=ChdjYW5pbmFuYSBtb3RvcyB0ZXJlc2luYUit58LG_LqAgAhaKxAAEAEYABgBGAIiF2NhbmluYW5hIG1vdG9zIHRlcmVzaW5hKgYIAhAAEAGSAQ9tb3RvcmN5Y2xlX3Nob3CqAT8QATIeEAEiGkt_6Brvdszcv3STcal2jd59dx_xOEmjo4DGMhsQAiIXY2FuaW5hbmEgbW90b3MgdGVyZXNpbmE&phdesc=fHgZALK9py0&vet=12ahUKEwinrofN2veHAxXppJUCHSRGEx8Q1YkKegQIHRAL..i&cs=1&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KZv4q7OYN44HMfw-3vOFNZOK&daddr=Av.+Miguel+Rosa,+n%C2%B0+7500+-+Pavimento+Superior+-+Tabuleta,+Teresina+-+PI,+64019-702",
        telefone: "(99) 98140-0602",
        foto: "lojas/MiguelRosa-Pi"
    },


];
const tamanhoDaTela = window.innerWidth;
const container = document.getElementsByClassName("teste")[0];
const contato = 'CONTATO';
container.innerHTML = '';
const styleLi = 'item-list gap-5 bg-white rounded-3 shadow mb-5';


listaDeLojas.forEach(({nome, endereco, enderecoURL, telefone, foto}) => {
    let numero = '';
    if(tamanhoDaTela > 600) {
         numero = telefone
    } else {
        numero = contato
    }
    const listaItem = `
        <li class="${styleLi}">
            <div class="textos">
                <p class="text-vermelho fs-3">${nome}</p>
                <div class="endereco d-flex gap-2 mb-3">
                    <img src="icons/location_on_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 1.svg" alt="icon localizador">
                    <a href="${enderecoURL}" target="_blank" class=" m-0 text-black" title="Clique para ir para Google Maps">${endereco}</a>
                </div>
                <div class="telefone d-flex gap-2">
                    <img src="icons/call_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 1.svg" alt="icon telefone">
                    <a href="tel:${telefone}" class="m-0 text-black text-bold-500">${numero}</a>
                </div>
            </div>
            <div>
                <img class="img-loja custom-size" src="${foto}.jpeg" alt="Foto da loja">
            </div>
        </li>`;

    container.innerHTML += listaItem;

    window.addEventListener('resize', function() {
        // Recarrega a página quando o tamanho da janela mudar
        location.reload();
    });
});


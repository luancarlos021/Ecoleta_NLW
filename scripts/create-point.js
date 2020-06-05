// console.log("Hello")
// https://servicodados.ibge.gov.br/api/v1/localidades/estados

// fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome").then(function(res){return res.json() }).then(function(data){console.log(data)})
// https://servicodados.ibge.gov.br/api/v1/localidades/estados/{uf}/municipios?orderBy=nome

function get_uf_cities(url,select) {
    fetch(url)
    .then( res => res.json() )
    .then( data => {
        for ( const value of data ){
            select.innerHTML += `<option value="${value.id}">${value.nome}</option>`
        }
    }
    )
}

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf")

    const url_uf = "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
    get_uf_cities(url_uf, ufSelect)

    // fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    // .then( res => res.json() )
    // .then( states => {
        
    //     for ( const state of states ){
    //         ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`            
    //     }
    // })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    const cityInput = document.querySelector("input[name=city]")

    cityInput.value = ""
    citySelect.addEventListener("change", inpcity => {
        cityInput.value = inpcity.target.options[inpcity.target.selectedIndex].text
    })

    
    const id_uf = event.target.value
    console.log(id_uf)

    stateInput.value = event.target.options[event.target.selectedIndex].text

    const url_city = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id_uf}/municipios?orderBy=nome`

    citySelect.innerHTML = '<option value="">Selecione a cidade</option>'
    if (id_uf == "") {
        citySelect.disabled = true
    } else {
        citySelect.disabled = false
    }

    get_uf_cities(url_city, citySelect)   
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)
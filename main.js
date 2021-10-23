const LinksSocialMedias = {
  github: 'joasdc',
  instagram: 'joasdc',
  facebook: 'joasngueira'
}

// Vamos no github pegar as informações de usuario
function getGithubProfilesInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedias.github}`

  // Coletando informaçoes da url ("arquivo JSON com informaçoes do usuario") com fetch e promise then
  fetch(url)
    /* Aqui estamos convertendo a url para json pois o js nao coleta como json, e o data esta recebendo
    este json com todas as propriedades do user do github setado */
    .then(response => response.json())
    .then(data => {
      description.textContent = data.bio // Substituindo a descricao pela bio do github
      document.querySelector('div.avatar > img').src = data.avatar_url // Substituindo a img pela img do github
    })
}
getGithubProfilesInfos()

const handleSearch = async (event) => {
  event.preventDefault()
  const listaSeries  = document.querySelector('#shows')
  const menssagem = document.querySelector('#menssagem')
  const busca = document.querySelector('#query')
  const textoASerBuscado = busca.value
  const url = `https://api.tvmaze.com/search/shows?q=${textoASerBuscado}`
  const resposta = await fetch(url)
  const series = await resposta.json()

  //EXIBIR MENSAGEM DE CARREGAMENTO//
  menssagem.innerHTML = 'Proucurando...'
  listaSeries.innerHTML = ''

  if (series.length === 0) {
    menssagem.innerHTML = 'Sem resultados'
    return
  }

  menssagem.innerHTML = ''
  series.forEach((series) => {

    const titulo = series?.show?.name || ''
    const img = series?.show?.image.medium || ''
    listaSeries.insertAdjacentHTML(
      'beforeend',
 `<li>
    <img class="poster" src="${img}">
    <span class="show-name">${titulo}</span>
  </li>`
    )
  })
}

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('#search-form')
    .addEventListener('submit', handleSearch)
})
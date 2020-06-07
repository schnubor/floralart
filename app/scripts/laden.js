const markdownConverter = new showdown.Converter()

const initCarousel = (name, entryId) => {
  contentfulClient
    .getEntry(entryId)
    .then((entry) => {
      const urls = extractImageUrls(entry.fields.gallerie)
      const elements = urls.map(url => {
        return `<div><img src="${url}" alt="Laden"></div>`
      })
      elements.join()
      $(`.carousel.${name}`).append(elements)
      initSlick()
    })
    .catch((error) => {
      console.log(error)
    })
}

initCarousel('laden', '3bDAKaouakEokESCWCuIQk')

contentfulClient
  .getEntry('3bDAKaouakEokESCWCuIQk')
  .then((entry) => {
    $('.title.laden').text(entry.fields.headline)
    $('.subtitle.laden').text(entry.fields.description)
  })

contentfulClient
  .getEntry('1seBFV6TlPELg7pcsBP4lG')
  .then((entry) => {
    $('.title.copenhourse').text(entry.fields.title)
    $('.subtitle.copenhourse').html(markdownConverter.makeHtml(entry.fields.text))
  })


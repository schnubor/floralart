const initGallery = (name, entryId) => {
  contentfulClient
    .getEntry(entryId)
    .then((entry) => {
      const urls = extractImageUrls(entry.fields.gallerie);
      const elements = urls.map(url => {
        return `<a href="${url}" data-lightbox="${name}"></a>`;
      });
      elements.join();
      $(`.lightbox-${name}`).append(elements);
    })
    .catch((error) => {
      console.log(error);
    });
}

initGallery('hochzeiten', '2sUuO7kQMIq4qU2yuEEAUu');
initGallery('deko', '1XwqX3qOY8I4WooGGsMMmk');
initGallery('trauer', '1u3tO1jbTWyKSCyoKwqiEM');
const initCarousel = (name, entryId) => {
    contentfulClient
        .getEntry(entryId)
        .then((entry) => {
            const urls = extractImageUrls(entry.fields.gallerie);
            const elements = urls.map(url => {
                return `<div><img src="${url}" alt="Laden"></div>`;
            });
            elements.join();
            $(`.carousel.${name}`).append(elements);
            initSlick();
        })
        .catch((error) => {
            console.log(error);
        });
}

initCarousel('laden', '3bDAKaouakEokESCWCuIQk');

contentfulClient
    .getEntry('3bDAKaouakEokESCWCuIQk')
    .then((entry) => {
        console.log(entry);
        $('.title.laden').text(entry.fields.headline);
        $('.subtitle.laden').text(entry.fields.description);
    });


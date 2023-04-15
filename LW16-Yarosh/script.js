const seriesNameRef = document.querySelector('#series-name'),
      searchBtn = document.querySelector('#search-btn'),
      result = document.querySelector('#result'),
      template = document.querySelector('.template-page').content.firstElementChild;
      
searchBtn.addEventListener('click', () => {
    const query = seriesNameRef.value;
    if (query) {
        const url = `https://api.tvmaze.com/singlesearch/shows?q=${query}`;

        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Request failed with status ${response.status}`);
            }
        })
        .then(data => addInfoPage(data))
        .catch(error => console.log(error));
    }
});

function addInfoPage(data) {
    const page = template.cloneNode(true),
          image = page.querySelector('.poster'),
          name = page.querySelector('h2'),
          rating = page.querySelector('.rating'),
          genres = page.querySelector('.genre'),
          status = page.querySelector('.status'),
          lang = page.querySelector('.lang'),
          premiered = page.querySelector('.premiered'),
          site = page.querySelector('.official-site'),
          summary = page.querySelector('.summary');  

    image.src = data.image.medium;
    name.textContent = data.name;
    rating.textContent = data.rating.average;
    genres.textContent = data.genres;
    status.textContent = data.status;
    lang.textContent = data.language;
    premiered.textContent = data.premiered;
    site.href = data.officialSite;
    summary.innerHTML = data.summary;  

    result.innerHTML = '';
    result.appendChild(page);
}

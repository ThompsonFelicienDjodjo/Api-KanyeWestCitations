const text = document.querySelector('.card-text');
const button = document.querySelector('.btn');


function citation() {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => text.innerHTML = data.quote)
}
citation();

button.addEventListener('click', citation);
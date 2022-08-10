/*<div>
            <img src="img/profile.png" alt="avatar">
            <div class="detail">
                <a href=""></a>
                <h2>abcd</h2>
                <p>xyz</p>
            </div>
        </div>*/

function timkiem() {
  document.getElementById("search1").style.display = "inline-block";
}
function antimkiem() {
  document.getElementById("search1").style.display = "none";
}

const list = document.getElementById('list');
const search = document.getElementById('search');
const listItems = [];

search.addEventListener('input', (e) => filterInput(e.target.value))



getdataGNews();

async function getdataGNews() {
    const responseAPI = await fetch('https://gnews.io/api/v4/top-headlines?token=4b3b1d50760e267ba5ca0ddb50213300');
    const {articles} = await responseAPI.json();
    list.innerHTML = 'LOADING . . .';
    setTimeout (() => {
        list.innerHTML = '';
    articles.forEach(article => {
        const divItem = document.createElement('div');
        listItems.push(divItem);
        divItem.innerHTML = `
        <img 
        src="${article.image}" 
        alt="${article.content}">
        <div class="detail">
            <a href="${article.url}" target="_blank">${article.url}</a>
            <h2>${article.title}</h2>
            <p>${article.description}</p>
        </div>
        `;
        list.appendChild(divItem);
    });
}, 2000);

}

function filterInput(keySearch) {
    const searchTerm = keySearch.toLowerCase();
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm)) {
            item.classList.remove('hidden');
        }
        else {
            item.classList.add('hidden');
        }
    })     
}


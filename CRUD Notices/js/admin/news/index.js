import { URLCategories } from '../../API/URLS.js';
import { deleteHttp, get, post, put } from '../../API/clientHttp.js';
import { URLNews } from '../../API/URLS.js';
import { printNews } from './functionsDOM.js';

//Selectors
const formNews = document.querySelector('#formNews');
const idNewsUpdated = document.querySelector('#idNewsUpdated');

export const nameNotice = document.querySelector('#nameNotice');
export const urlImage = document.querySelector('#urlImage');
export const idCategory = document.querySelector('#idCategory');
export const contentNotice = document.querySelector('#contentNotice');


//Eventos
document.addEventListener('DOMContentLoaded', ()=>
{
    loadCategories();
    getNews();
});

formNews.addEventListener('submit', (e)=>
{
    e.preventDefault();

    if(idNewsUpdated.value)
    {
        updateNotice(idNewsUpdated.value);
    }
    else
    {
        createNewNotice();
    }
    
});

async function createNewNotice()
{
    const user = JSON.parse(localStorage.getItem('user'));

    if(!idCategory.value)
    {
        alert('La categoria es obligatoria primero!!');
        return;
    }

    const notice =
    {
        title: nameNotice.value,
        image: urlImage.value,
        content: contentNotice.value,
        publicationDate: new Date().toISOString().split('T')[0],
        userId: user.id,
        categoryId: idCategory.value,
    }

    await post(URLNews,notice);
}

async function loadCategories()
{
    const categories = await get(URLCategories)
    
    categories.forEach( category => 
    {
        const option = document.createElement('option');
        
        option.textContent = category.name;
        option.value = category.id;

        idCategory.appendChild(option);
    });
}

async function getNews()
{
    const data = await get(`${URLNews}?_embed=category&_embed=user`)
    
    printNews(data);
}

export async function deleteNotice(idNotice)
{
    await deleteHttp(URLNews, idNotice);
}

export async function updateNotice(idNotice)
{
    const newNotice =
    {
        title: nameNotice.value,
        image: urlImage.value,
        content: contentNotice.value,
        publicationDate: new Date().toISOString().split('T')[0],
        categoryId: idCategory.value,
    }

    await put(URLNews, idNotice, newNotice);
}
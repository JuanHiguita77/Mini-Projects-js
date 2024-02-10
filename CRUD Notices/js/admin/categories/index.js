import { URLCategories } from '../../API/URLS.js';
import { deleteHttp, get, post, put } from '../../API/clientHttp.js';
import { idCategoryUpdated, printCategories } from './functionsDOM.js';

export const formCategories = document.querySelector('#formCategories');
export const nameCategory = document.querySelector('#nameCategory');
export const descriptionCategory = document.querySelector('#descriptionCategory');



document.addEventListener('DOMContentLoaded', ()=>
{
    getCategories(URLCategories)
});

formCategories.addEventListener('submit', (e)=>
{
    e.preventDefault();

    if(idCategoryUpdated.value)
    {
        updateCategory(idCategoryUpdated.value);
    }
    else
    {
        createCategory();
    }
});

async function createCategory()
{
    const newCategory =
    {
        name: nameCategory.value,
        description: descriptionCategory.value
    }

    await post(URLCategories, newCategory);
}

async function getCategories(URLCategories)
{
    const data = await get(URLCategories);

    printCategories(data);
}

export async function deleteCategory(idCategory)
{
    await deleteHttp(URLCategories,idCategory);
}

export async function updateCategory(idCategory)
{
    const infoUpdated =
    {
        name: nameCategory.value,
        description: descriptionCategory.value
    }

    await put(URLCategories,idCategory, infoUpdated);
}


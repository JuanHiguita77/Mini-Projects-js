//import { deleteHttp } from "../../API/clientHttp.js";
import { URLCategories } from "../../API/URLS.js";
import { cleanHtml } from "../../utils/cleanHtml.js";
import { deleteCategory, nameCategory, descriptionCategory} from "./index.js";

export const idCategoryUpdated = document.querySelector("#idCategoryUpdated");

const categoriasBody = document.querySelector('#categorias-tbody');
const btnAddCategory = document.querySelector("#btnAddCategory");

export function printCategories(data)
{
    cleanHtml(categoriasBody);

    data.forEach( category => 
    {
        const tr = document.createElement('tr');
        const tdId = document.createElement('td');
        const tdName = document.createElement('td');
        const tdDescription = document.createElement('td');
        const tdActions = document.createElement('td');

        const buttonEdit = document.createElement('button');
        const buttonDelete = document.createElement('button');

        tdId.textContent = category.id;
        tdName.textContent = category.name;
        tdDescription.textContent = category.description;

        buttonEdit.classList.add('btn', 'btn-primary');

        buttonDelete.classList.add('btn', 'btn-danger');

        buttonEdit.textContent = 'Editar';
        buttonDelete.textContent = 'Eliminar';

        buttonDelete.addEventListener('click', () =>
        {
            deleteCategory(category.id);
        })

        buttonEdit.addEventListener('click', () =>
        {
            loadInfoCategory(category);
        })

        tdActions.appendChild(buttonEdit);
        tdActions.appendChild(buttonDelete);

        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdDescription);
        tr.appendChild(tdActions);

        categoriasBody.appendChild(tr);
    });
}

function loadInfoCategory(category)
{
    idCategoryUpdated.value = category.id, 
    nameCategory.value = category.name,
    descriptionCategory.value = category.description,

    btnAddCategory.click();
}

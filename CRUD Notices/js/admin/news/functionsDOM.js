import { cleanHtml } from "../../utils/cleanHtml.js";
import { contentNotice, deleteNotice, idCategory, nameNotice, updateNotice, urlImage } from "./index.js";

const noticesBody = document.querySelector('#noticias-tbody');
const btnOpenModalNews = document.querySelector('#btnOpenModalNews');

export function printNews(news)
{
    cleanHtml(noticesBody);

    news.forEach( notice => 
    {
        const tr = document.createElement('tr');
        
        const tdImage = document.createElement('td');
        const tdTitle = document.createElement('td');
        const tdContent = document.createElement('td');
        const tdDate = document.createElement('td');
        const tdAuthor = document.createElement('td');
        const tdCategory = document.createElement('td');
        const tdActions = document.createElement('td');

        const buttonEdit = document.createElement('button');
        const buttonDelete = document.createElement('button');

        tdImage.innerHTML = `<img class="rounded-circle" src="${notice.image}" width="50px" height="50px" alt="noticeImage">`;
        tdTitle.textContent = notice.title;
        tdContent.textContent = notice.content;
        tdDate.textContent = notice.publicationDate;
        tdAuthor.textContent = notice.user.name;
        tdCategory.textContent = notice.category.name;

        buttonEdit.classList.add('btn', 'btn-primary');
        buttonDelete.classList.add('btn', 'btn-danger');
        buttonEdit.textContent = 'Editar';
        buttonDelete.textContent = 'Eliminar';

        buttonDelete.addEventListener('click', () =>
        {
            deleteNotice(notice.id);
        })

        buttonEdit.addEventListener('click', () =>
        {
            loadNoticeForm(notice);
        })

        tdActions.appendChild(buttonEdit);
        tdActions.appendChild(buttonDelete);

        tr.appendChild(tdImage);
        tr.appendChild(tdTitle);
        tr.appendChild(tdContent);
        tr.appendChild(tdDate);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdCategory);
        tr.appendChild(tdActions);
        
        noticesBody.appendChild(tr);
    });
}

function loadNoticeForm(notice)
{
    btnOpenModalNews.click();
    
    idNewsUpdated.value = notice.id;
    nameNotice.value = notice.title;
    urlImage.value = notice.image;
    contentNotice.value = notice.content;
    idCategory.value = notice.categoryId;
}
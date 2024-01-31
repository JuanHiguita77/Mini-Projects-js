const form = document.querySelector('form');
const formBooks = document.querySelector('#form-books');
const listBooks = document.querySelector('#listBooks');

const nameAuthor = document.querySelector('#name-author');
const ageAuthor = document.querySelector('#age-author');
const titleBook = document.querySelector('#title-book');
const dateBook = document.querySelector('#date-book');
const selectBody = document.querySelector('#idAuthor');

const saveButton = document.querySelector('#save');

const URLAuthor = 'http://localhost:3000/authors';
const URLBooks = 'http://localhost:3000/books';
const URLEmbed = 'http://localhost:3000/books?_embed=author';

document.addEventListener('DOMContentLoaded', ()=>
{
    loadingSelectAuthor();
    getBooks();
});


form.addEventListener('submit', (e)=>
{
    e.preventDefault();

    //Enviar autor nuevo
    sendAuthor();
});

formBooks.addEventListener('submit', (e)=>
{
    e.preventDefault();

    //Enviar autor nuevo
    sendBook();
    //createAuthorHTML();
});


async function sendAuthor()
{
    const author = 
    {
        name: nameAuthor.value,
        age: ageAuthor.value,
    }

    try{
        await fetch(URLAuthor,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(author)
        })
    }
    catch(error)
    {
        console.log('Error al enviar Author', error)
    }
}

async function loadingSelectAuthor()
{
    const response = await fetch(URLAuthor);
    const data = await response.json();
    
    data.forEach(author => {
        const option = document.createElement('option');
        option.value = author.id;
        option.textContent = author.name;
        selectBody.appendChild(option)
    });
}

async function sendBook()
{
    const book = 
    {
        title: titleBook.value,
        date: dateBook.value,
        authorId: selectBody.value,
    }

    try{
        await fetch(URLBooks,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(book)
        })
    }
    catch(error)
    {
        console.log('Error al enviar Author', error)
    }
}

async function getBooks()
{
    const response = await fetch(URLEmbed);
    const data = await response.json();

    console.log(data)

    data.forEach( book =>
    {
        
        const {title, date, author} = book;

        listBooks.innerHTML +=
        `
            <li> Book Name: ${ title }<br>  
                --- Book Date Released: ${ date }<br> 
                --- Author Name: ${ author.name }<br> 
                --- Author Age: ${ author.age }
            </li> <br><br>
        `
    } )
}



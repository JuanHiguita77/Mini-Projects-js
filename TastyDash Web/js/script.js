//Selectors
const URL = 'https://www.themealdb.com/api/json/v1/1/';

const cardsContainer = document.querySelector('.cards-container .row');
const inputFood = document.querySelector('#foodSearch');

document.addEventListener('DOMContentLoaded', () =>
{
    //Counters
    if(window.location.href === 'http://127.0.0.1:5500/index.html')
    {
        counter('count1', 0, 1287, 1000);
        counter('count2', 0, 3055, 2000);
        counter('count3', 0, 1355, 3000);
        counter('count4', 0, 2532, 1000);
    }

    //FOOD FETCHING 
    getFoods();
});

inputFood.addEventListener('input', () =>
{
    setTimeout(()=>
    {
        //Fetching food data
        getFoods();
    }, 300);
})

cardsContainer.addEventListener('click', (e) =>
{
    if(e.target.classList.contains('openModalInfo'))
    {
        const id = e.target.getAttribute('id-food')
        
        loadShowMore(id);
    }
})

//COUNTER SECTION
function counter(id, start, end, duration)
{
    let element = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() =>
    {
        current += increment;
        element.textContent = current;

        if(current === end)
        {
            //Paramos el intervalo
            clearInterval(timer)
        }
    }, step);
}

//Fetching food data
async function getFoods()
{
    //Food search param
    try
    {
        const response = await fetch(`${URL}filter.php?i=${inputFood.value}`);
        const data = await response.json();
        
        //Print HTML Cards

        foodPrintHtml(data.meals);

        console.log(data);
    }
    catch(error)
    {
        console.log('Error en la peticion', error )
    }
}



//Print HTML Cards
function foodPrintHtml(foods)
{
    cleanHtml();
    
    //SEARCH MESSAGE ORDER NOW  
    cardsContainer.innerHTML = `<h2 class="text-center my-5 fw-bold">¡TYPE YOUR FAVORITE INGREDIENT FOR YOUR MEAL!</h2>`;
    
    
    if(foods)
    {
        foods.forEach( food => 
            {
            const randomPrice = Math.floor(Math.random() * (25000 - 7500 + 1)) + 7500;

            cardsContainer.innerHTML += `
                <div class="card card-body col-12 col-lg-4 rounded-3 mx-3 my-5" style="width: 18rem;">  
                    <div class="text-center d-flex flex-column align-items-stretch">
                        <img src="${food.strMealThumb}" id-food=${food.idmeal} class="card-image img-fluid mx-auto my-3 rounded-3 openModalInfo" alt="food">
                        <h2 class="card-title fw-bold mb-5">${food.strMeal}</h2>
                        
                        <div class="fixed-bottom">
                            <a href="#" class="btn btn-primary rounded-5 text-center mb-3">Add To Cart $-<span class="text-white priceCard">${randomPrice}</span></a>
                        </div>
                    </div>
                </div>
            `    
        });  
    }
    else
    {
        cardsContainer.innerHTML = `<h2 class="text-center my-5 fw-bold">¡SORRY, MEAL NOT FOUND!!</h2>`;    
    }

}

async function loadShowMore(id)
{
    try
    {
        const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

        const response = await fetch(URL);
        const data = response.json();

        console.log('Respuesta de la comida: ', data);

        printShowMore(data);
    }
    catch(err)
    {
        console.log('Pelicula no encontrada', err)
    }
}


function printShowMore(foodData)
{

    const { strMeal, strArea, strInstructions, strMealThumb } = foodData;

    container.innerHTML = 
    `
        <div class="card-show-more">
                                                
            <iframe class="mx-auto" width="800" height="560" src="https://www.youtube.com/embed/${links.youtube_id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div>
                <h2>${strMeal}</h2>
                <p>Cohete: <span>${strArea}</span></p>
                <p>Rocket Type: <span>${strInstructions}</span></p>
                <p>Succes?: <span>${strMealThumb ? 'Success Nice!!' : 'Noooo!, Destroy total!'}</span></p>
            </div> 
            <i class='bx bx-arrow-back'></i>
        </div>
    `;
}

//Clean Childs from HTML
function cleanHtml()
{
    while(cardsContainer.firstChild)
    {
        cardsContainer.removeChild(cardsContainer.firstChild);
    }
}
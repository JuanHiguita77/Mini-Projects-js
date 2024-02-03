//Selectors
const URL = 'https://www.themealdb.com/api/json/v1/1/';

//const shoppingCart = document.querySelector('#basket-container');
const cardsContainer = document.querySelector('.cards-container .row');
const inputFood = document.querySelector('#foodSearch');
const modalFoodInfo = document.querySelector('#modalFoodInfo .modal-body');
const modalCartFood = document.querySelector('#modalCartFood .cartProducts');

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
    printShopCart()
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
});

cardsContainer.addEventListener('click', (e) =>
{
    if(e.target.classList.contains('openModalInfo'))
    {
        const id = e.target.getAttribute('id-food')
        
        //OPEN MODAL FOOD INFO
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
        const response = await fetch(`${URL}filter.php?i=${inputFood.value.toLowerCase()}`);
        const data = await response.json();
        
        //Print HTML Cards
        foodPrintHtml(data.meals);
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
                        <img src="${food.strMealThumb}" id-food=${food.idMeal} class="card-image img-fluid mx-auto my-3 rounded-3 openModalInfo" data-bs-toggle="modal" data-bs-target="#modalFoodInfo" alt="food">
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
        const data = await response.json();

        console.log(data.meals);
        printShowMore(data.meals[0]);
    }
    catch(err)
    {
        console.log('Error obteniendo los detalles del alimento: ', err)
    }
}


function printShowMore(foodData)
{
    const { strMeal, strArea, strMealThumb, strIngredient1, strIngredient2, strIngredient3 } = foodData;

    //Modal Info adding
    modalFoodInfo.innerHTML += 
    `
        <div class="card-body mx-auto my-auto w-100" style="width: 12rem;">

            <div class="row">
                <h3 class="card-title mt-4 mt-lg-4 mb-lg-3 text-center d-lg-none">${strMeal}</h3>

                <div class="col-lg-6 text-center">
                    <img src="${strMealThumb}" class="card-image img-fluid my-3 rounded-3 mb-2 mb-lg-3" alt="">
                </div>

                <div class="col-lg-6 text-center sub-container">
                    <h3 class="card-title mt-4 mt-lg-5 mb-lg-3 d-none d-lg-block">${strMeal}</h3>

                    <h3>Area: ${strArea}</h3>
                    <h3>Principal Ingredients: </h3>
                    <ul>
                        <li>${strIngredient1}</li>
                        <li>${strIngredient2}</li>
                        <li>${strIngredient3}</li>  
                    </ul>
                    <h3 class="price mt-3 mt-lg-4">PRICE
                        <span class="card-price mb-3"></span>
                    </h3>
                </div>
            </div>
        </div>
    `;
}

function printShopCart()
{
    //Modal Info adicional de la comida desde html y aqui se incrustan los datos
    modalCartFood.innerHTML = 
    `
        <div class="card card-body d-flex col-12 col-lg-4 rounded-3 mx-2 my-2" style="width: 17rem;">  
            <div>
                <h3 class="card-title fs-2 fs-sm-4 text-center">TITLE</h3>
                <img src="../images/img/img-3.jpg" class="card-image img-fluid mx-auto my-3 rounded-3" alt="">
                <h3 class="fs-5 mt-3">PRICE
                    <span class="card-price mb-3 float-end">$10.990</span>
                </h3>

                <div class="d-flex justify-content-between w-100">
                    <h3 class="fs-5 mb-0">QUANTITY</h3>

                    <select class="rounded-2 text-center select-quantity">
                    <option value="uno">1</option>
                    <option value="dos">2</option>
                    <option value="tres">3</option>
                    <option value="cuatro">4</option>
                    </select>
                </div>

                <h3 class="total-title fs-5 mt-3">TOTAL
                    <span class="card-price mb-3 float-end">$10.990</span>
                </h3>
            </div>
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
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
});

inputFood.addEventListener('input', () =>
{
    setTimeout(()=>
    {
        //Fetching food data
        getFoods();

    }, 500);
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
    if(foods)
    {
        foods.forEach( food => 
        {
            cardsContainer.innerHTML += `
                <div class="card card-body col-12 col-lg-4 rounded-3 mx-3 my-5" style="width: 18rem;">  
                    <div class="text-center">
                        <h2 class="card-title fw-bold">Card title</h2>
                        <img src="../images/img/img-1.png" class="card-image img-fluid mx-auto my-3 rounded-3" alt="">
                        <a href="#" class="btn btn-primary bg-black rounded-5 mt-4">Add To Cart $<span class="text-white priceCard">9000</span></a>
                    </div>
                </div>
            `    
        });  
    }
    else
    {
        cardsContainer.innerHTML = 'SORRY, MEAL NOT FOUND!';    
    }

}

//Clean Childs from HTML
function cleanHtml()
{
    while(cardsContainer.firstChild)
    {
        cardsContainer.removeChild(cardsContainer.firstChild);
    }
}
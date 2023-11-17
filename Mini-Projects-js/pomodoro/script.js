document.addEventListener('DOMContentLoaded', ()=>
{
    const tasks = [];

    let time = 0;
    let timer = null;
    let timerBreak = null;
    let current = null;

    const bAdd = document.querySelector('#bAdd');
    const itTask = document.querySelector('#itTask');
    const form = document.querySelector('#form');

    form.addEventListener('submit', e =>
    {
        e.preventDefault();

        if(itTask.value !== '')
        {
            createTask(itTask.value);
            itTask.value = '';
            renderTasks();
        };
    });

    function createTask(taskName)
    {
        const newTask = 
        {
            id: (Math.random() * 100).toString(36).slice(3),
            title : taskName,
            completed: false,
        };

        //Agrega la nueva tarea al principio del arreglo
        tasks.unshift(newTask);
    };

    //Funciona para agregar cada tarea al contenedor de tareas
    function renderTasks()
    {
        const html = tasks.map(task => {
            return `
                <div class = 'task'>
                    <div class='completed'> ${task.completed ? 
                        `<span class="done"> Task Done! </span>` 
                        : 
                        `<button class="start-button" data-id="${task.id}">Start</button>`} 
                    </div>
                    
                        <div class='title'> ${task.title} </div>
                </div>
            `;
        });

        const taskContainer = document.querySelector('#tasks');

        //Convertimos esto en una sola linea para mostrar y lo separamos por un espacio
        taskContainer.innerHTML = html.join('');

        //Seleccionamos el bton para comenzar la tarea y el contenedor
        const startButton = document.querySelectorAll('.task .start-button');

        startButton.forEach(button => 
        {
            button.addEventListener('click', e =>
            {
                e.preventDefault();
                //Si es diferente de null
                if(!timer)
                {
                    const id = button.getAttribute('data-id');
                    startButtonHandler(id);
                    button.textContent = 'In progress...';
                }
            });
        });
    };

    function startButtonHandler(id)
    {
        //tomando las variables ya definidas
        time = 25 * 60;
        current = id;
        const taskIndex = task.findIndex(task => task.id === id);
        const taskName = document.querySelector('#time #taskName');
        taskName.textContent = tasks[taskIndex].title;

        timer = setInterval(() =>
        {
            timeHandler(id);
        }, 1000);    
    };

    function timeHandler(id)
    {
        time--;
        renderTime();

        if(time === 0)
        {
            clearInterval(timer);
            markCcompleted(id);
            renderTasks();
        }
    }

    function renderTime()
    {
        const timeDiv = document.querySelector('#time #value');
        const minutes = parseInt(time / 60);
        const seconds = parseInt(time % 60);

        timeDiv.textContent = `${minutes < 10 ? '0' : ''} ${minutes}: ${seconds < 10 ? '0' : ''} ${seconds}`;
    }

    function markCcompleted(id)
    {
        //Sacamos el id de la tarea completada
        const taskIndex = tasks.findIndex((task) => task.id === id);
        
        //Cambiamos la propiedad completed a true cuando se completa una tarea segun su indice
        tasks[taskIndex].completed = true;
    }
    
    
});

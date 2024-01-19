async function main()
{
    /*const usersUrl = 'https://jsonplaceholder.typicode.com/users';
    const postUrl = 'https://jsonplaceholder.typicode.com/posts';

    //Peticiones
    const usersData = await axios.get(usersUrl);
    const postData = await axios.get(postUrl);*/

    //Podemos modificar un dato antes de enviar la peticion, en este caso agrega la propiedad
    //a todas las peticiones axios en este archivo por debajo de esta instruccion

    axios.interceptors.request.use(config =>
    {
        //Podemos agregarle datos al request
        config.headers['Authorization'] = 'Dato agregado';
        return config;
    })

    const request = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    console.log('Request con interceptor', request);

    //--------------------------------------------------------------------------------------------

    //Promise all
    //const requestData = await Promise.all([axios.get(usersUrl),  axios.get(postUrl)])

    //Hacer peticiones POST
    const objeto = { name: 'juan'};

    //Hacemos la peticion para luego mandar la data tipo objeto
    const postRequest = await axios.post('https://jsonplaceholder.typicode.com/users', 
    {objeto},
    {
        //los headers es informacion que podemos agregar para cada funcion diferente
        //(Consultar los headers para cada caso)
        headers:
        {
            //No se envian datos, se envian tipos de solicitudes para hacer diferentes funciones
            'Authorization': 'credencialesUser',
        } 
    });

    console.log('Respuesta con header personalizado y data añadida: ', postRequest)

    //--------------------------------------------------------------------------------------------

    //Concatenar datos
    let transformData = null; 

    const concatRequest = await axios.get('https://jsonplaceholder.typicode.com/users',
    {
        transformResponse: axios.defaults.transformResponse.concat( data =>
        {
            console.log(data)   

            transformData = data.map( user =>
            {
                return{
                    ...user,
                    myCustomTittle: ` ${user.name} ${user.username} ${user.email}`,
                }
            })

            return transformData
        }),
    });
    
    console.log('Data con propiedad concatenada: ', concatRequest)

    //--------------------------------------------------------------------------------------------

    //Datos en el header por Default para cada peticion en el config por debajo de esta instruccion:

    axios.defaults.headers.common['xyzYepes'] = 'Default Data';

    const requestUsersDefault = await axios.get('https://jsonplaceholder.typicode.com/users');
    const requestPostsDefault = await axios.get('https://jsonplaceholder.typicode.com/posts');
    
    console.log('Default Users common request data: ', requestUsersDefault);
    console.log('Default Posts common request data: ', requestPostsDefault);

    //--------------------------------------------------------------------------------------------
    //Manejo de errores

    try
    {
        const requestError = await axios.get('https://jsonplaceholder.typicode.com/userss'); //URL mala para el ejemplo

        console.log('Datos sin error: ', requestError);
    }
    catch(error)
    {
        if(error.response.status === 404)
        {
            console.warn('No se encontro la ruta');
            console.warn('Status Code: ', error.response.status);
        }
    }

    //--------------------------------------------------------------------------------------------
    //Tener un controlador para abortar la peticion

    const controller = new AbortController();

    const user =
    {
        name: 'JUANITO',
        password: '2342',
    }

    try
    {
        //controller.abort() abortamos la peticion
        const requestAbort = await axios.post('https://jsonplaceholder.typicode.com/posts', 
        {
            user,
        },
        {
            signal: controller.signal,
        })
    }
    catch(error)
    {
        console.log(error.response.status)
    }

    //--------------------------------------------------------------------------------------------
    //Instances: Crear configuraciones por defecto para las peticiones axios
    //baseURL: url por default en esta configuracion.
    //timeout: Podemos establecer el tiempo maximo que puede demorar un peticion antes de cancelarse
    const configAxios = axios.create
        ({
            baseURL: 'https://jsonplaceholder.typicode.com',
            timeout: 50,
        }
    )

    //COn la configuracion establecidad en este caso podemos pasarle la ruta que necesitamos y se autocompleta
    const requestGlobalConfig = await configAxios.get('/users');
    const requestGlobalConfig1 = await configAxios.get('/posts'); 

    console.log('Configuraciones globales: ', requestGlobalConfig, ' Y ', requestGlobalConfig1);
}

main()
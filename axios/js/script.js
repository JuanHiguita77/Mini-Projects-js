async function main()
{
    /*const usersUrl = 'https://jsonplaceholder.typicode.com/users';
    const postUrl = 'https://jsonplaceholder.typicode.com/posts';*/

    //Peticiones
    /*const usersData = await axios.get(usersUrl);
    const postData = await axios.get(postUrl);*/
    //Podemos modificar un dato antes de enviar la peticion
    axios.interceptors.request.use(config =>
    {
        console.log(config)
        //Podemos agregarle datos al request
        config.headers['Authorization'] = 'Dato agregado';
        return config;
    })

    //Promise all
    //const requestData = await Promise.all([axios.get(usersUrl),  axios.get(postUrl)])

    const request = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    console.log(request);

    //Hacer peticiones POST
    const objeto = { name: 'juan'};

    const postRequest = await axios.post('https://jsonplaceholder.typicode.com/users', 
    {objeto},
    {
        headers:
        {
            'datoNuevo': 'texto'
        } 
    });
    console.log(postRequest)
}

main()
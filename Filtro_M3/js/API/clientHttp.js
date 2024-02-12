
export async function post(URL, info)
{
    try
    {
        const response = await fetch(URL, 
        {
            method:'POST',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),
        })

        const data = response.json();

        return data;
    }
    catch(error)
    {
        console.log('Fallo en la peticion post: ', error)
    }
}

export async function get(URL)
{
    try
    {
        const response = await fetch(URL)
        const data = await response.json();

        return data;
    }
    catch(error)
    {
        console.log('Error en la peticion get: ', error);
    }
}

export async function deleteHttp(URL, id)
{
    try 
    {
        const response = await fetch(`${URL}/${id}`,
        {
            method: 'DELETE',
        });
        
        const data = await response.json();
        return data;
    } 
    catch (error) 
    {
        console.log('Error en peticion delete: ', error);
    }
}

export async function put(URL, id, info)
{
    try
    {
        const response = await fetch(`${URL}/${id}`, 
        {
            method:'PUT',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),
        })

        const data = await response.json();

        return data;
    }
    catch(error)
    {
        console.log('Fallo en la peticion put: ', error)
    }
}
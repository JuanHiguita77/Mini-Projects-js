document.addEventListener('DOMContentLoaded', ()=>
{
    const form = document.querySelector('#productForm');
    const tablaProductos = document.querySelector('#tablaProductos');
    const btnAgregar = document.querySelector('#addP');//boton de agregar


    function addProduct()
    {

        if (!(/^[A-Za-z]+$/.test(form.nombre.value) && /^[A-Za-z]+$/.test(form.categoria.value) && /^[A-Za-z]+$/.test(form.marca.value))) 
        {
            alert('Ingresaste mal un dato');
            form.reset();
            return;
        }

        const newRow = tablaProductos.insertRow(tablaProductos.rows.length);

        const cellNombre = newRow.insertCell(0);
        const cellCategoria = newRow.insertCell(1);
        const cellPrecio = newRow.insertCell(2);
        const cellCantidad = newRow.insertCell(3);
        const cellMarca = newRow.insertCell(4);
        const cellAcciones = newRow.insertCell(5);

        //Llenar las celdas con los valores del formulario, podemos usar selectores o acceder directamente al valor usando el name del html
        cellNombre.innerHTML = form.nombre.value;
        cellCategoria.innerHTML = form.categoria.value;
        cellPrecio.innerHTML = parseFloat(form.precio.value) + '$';
        cellCantidad.innerHTML = form.cantidad.value;
        cellMarca.innerHTML = form.marca.value;

        const btnDelete = document.createElement('button');
        const btnEdit = document.createElement('button');

        btnEdit.textContent = 'Editar';
        btnDelete.textContent = 'Eliminar'; 

        cellAcciones.appendChild(btnEdit);
        cellAcciones.appendChild(btnDelete);

        const row = btnEdit.parentNode.parentNode;

        setTimeout(()=>
        {
            alert(`PRODUCTO "${row.cells[0].innerHTML.toUpperCase()}" AGREGADO CON EXITO `);
        }, 400);

        btnAgregar.textContent !== 'Agregar producto' ? btnAgregar.textContent = 'Agregar Producto' : false;
   
        //Editar
        btnEdit.addEventListener('click', () =>
        {
            btnAgregar.textContent = 'Editar Producto';

            const row = btnEdit.parentNode.parentNode;

            const precioRow = row.cells[2].innerHTML.slice(0, -1);

            //Rellenar formulario
            form.nombre.value = row.cells[0].innerHTML;
            form.categoria.value = row.cells[1].innerHTML;
            form.precio.value = precioRow;
            form.cantidad.value = row.cells[3].innerHTML;
            form.marca.value = row.cells[4].innerHTML;

            //Remover la fila actual para despues poder mostrarla con los nuevos datos
            row.parentNode.removeChild(row);

        });

        //Eliminar
        btnDelete.addEventListener('click', () =>
        {
            const row = btnDelete.parentNode.parentNode;
            row.parentNode.removeChild(row);

            setTimeout(()=>
            {
                alert(`PRODUCTO "${row.cells[0].innerHTML.toUpperCase()}" ELIMINADO CON EXITO`);
            }, 300);
 
        });

        form.reset();
    }

    btnAgregar.addEventListener('click', addProduct);

});
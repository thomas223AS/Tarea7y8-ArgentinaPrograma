function probarValidarNombre(){
    console.assert(
        validarNombre('') === 'No valido porque el campo esta vacio'
    );
    console.assert(
        validarNombre('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111')===
        'No valido porque el nombre supera los 50 caracteres'
    );
}
function probarValidarCiudad(){
    console.assert(
        validarCiudad('')==='El usuario no elijio ninguna opcion'
    );
}
function probarValidarDescripcion(){
    console.assert(
        validarDescripcionRegalo('ho')==='El usuario puso menos de 3 caracteres'
    );
}
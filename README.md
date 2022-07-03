# Proyecto Ecommerce CoderHouse

Este es un proyecto realizado para el tercer módulo del curso Full Stack Developer de Coder House. Utilizando los conocimientos brindados en la clase, se irá perfeccionando el desarrollo de un Ecommerce funcional con una base de datos alojada en Firebase.


## Para Iniciar Localmente

git clone https://github.com/Darwinaly/CoderHouse-React-JS-PCommerce.git

cd PCommerce

npm install

npm start


## Variables de Entorno

Ver ['.env.example'](https://github.com/Darwinaly/CoderHouse-React-JS-PCommerce.git/main/.env.example) para ejemplo

Se debe crear un archivo .env 
En este archivo deberán asignarle a las variables la informacion de la base de datos creada en Firestore para que el proyecto quede enlazado con su base de datos personal. 

## Estructura de base de datos en Firebase

- Debemos crear una colección o array llamada "products" 
- Cada documento u objeto debera contar con los siguientes campos: category (string) / description (string) / img (string) / marca (string) / name (string) / price (number) / stock (number) 

Deben tener en cuenta que el proyecto fue creado con las siguientes categorias: "Procesadores", "PCyNotebooks", "TarjetaGrafica". Ya que las categorias afectaran la navegabilidad del Nav. 

## Navegabilidad del sitio

Al acceder al sitio se hace un map de los productos renderizando la imagen, el titulo y el precio de cada uno. 
La barra de navegacion solo tiene las categorias de los porductos donde nos permite acceder a la categoria especifica si asi lo deseamos. Tambien renderiza el carrito pero unicamente cuando se agregan productos.

Al ver mas informacion del producto, accedemos al detalle donde vemos imagen, descripcion, titulo, precio y contador de items.
El contador esta limitado por el stock y si no hay stock alerta de ello y no permite agregar productos al carrito. 
Una ves se selecciona la cantidad se agrega al carrito y se renderiza un boton de finalizar compra y el carrito en la barra de navegacion.
Si damos clic en finalizar compra o en el carrito accedemos al Cart donde vemos los items agregados y la orden de compra. 

Los items agregados muestran el nombre del producto, la cantidad de items agregados, el precio unitario, y el subtotal.
La orden de compra muestra el precio total, el form, datos de contacto y los botones de limpiar carrito y generar orden de compra. 
El boton de generar orden de compra no se renderiza hasta que el usuario carge los datos personales o de contacto en el form.

Una vez le damos clic en "Generar Orden" se crea una OC con los datos del contacto, el detalle de todos los productos y el precio total. Esta OC quedara contemplada en la base de datos de Firestore con una coleccion llamada "orders"
Cuando se genera esta OC tambien son descontados del stock de cada producto los que fueron sumados en la OC. 

## Para ver el proyecto Online

Pueden visitar el proyecto en siguiente [Enlace](https://coder-house-react-js-pc-ommerce.vercel.app/)

El proyecto principalmente evalua la funcionalidad por lo cual no es un sitio responsive. Se recomienda acceder desde Desktop. 




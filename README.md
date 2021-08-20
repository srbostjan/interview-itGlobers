# Prueba entrevista ITGlobers

Front-End React Developer Escribe el código en React para cumplir con los siguientes requisitos: Usar las mejores prácticas y estándares de programación que conozcas, lo ideal es que nos muestre mediante este proyecto como afrontarías un proyecto real. Ajustes y modificaciones al diseño son aceptadas con justificaciones Construir una página web HTML en react que contenga:

a. Menú simple responsive: i. Debe utilizarse un listado (li) para cada ítem del menú. ii. El menú en versión desktop debe mostrar las opciones de manera horizontal. iii. El menú en versión mobile (específicamente 920px o menos) debe mostrar los ítems de manera vertical. iv. El listado de ítems del menú se debe alimentar desde un JSON que puede estar en una variable o función que lo retorne, ejemplo: { [id: "1", name: "Vivair"], [id: "2", name: "Avianca"] }

b. Formulario: i. Debe incluir un texto inicial de bienvenida que cambia al seleccionar un item del menú (punto anterior). A continuación el texto de bienvenida: “Hola, bienvenido, sabemos que quieres viajar en un X (Donde X=Nombre del item del menú seleccionado), por favor diligencia el siguiente formulario:” ii. Campos del formulario (ninguno es opcional):

Nombre completo.
Email.
Celular.
Rango de edad. Desde los 18 hasta los 100años. iii. Realizar las validaciones necesarias al formulario en todos lo campos ojo con caracteres especiales. iv. Los datos del formulario deben ser impresos en consola (nada más). v. Luego de enviados los datos a la consola con éxito, debe aparecer un mensaje de confirmación al usuario por medio de un Lightbox con fadeout de 5 segundos (que se cierre a los 5 segundos), indicando “Tu información fue enviada con éxito, estaremos en contacto contigo”, reiniciando el formulario a su estado original (con los campos vacíos).

# How to use this repository

#### Instalar todas las dependencias

    npm install

#### Correr localhost

    npm run start

#### Crear archivos de produccion

    npm run build

## Lenguajes

- React
- React Router
- Sass

## Resultados

### Menu Responsive

mobile:

<img src="https://i.ibb.co/p46v1nm/localhost-8080.png" width="300px">

mobile active:

<img src="https://i.ibb.co/s1wjyFP/localhost-8080-3.png" width="300px">

Tablet:

<img src="https://i.ibb.co/VDskpCS/localhost-8080-1.png" width="300px">

Tablet active:

<img src="https://i.ibb.co/pX8S29T/localhost-8080-4.png" width="300px">

Desktop:

<img src="https://i.ibb.co/s9sF6fs/localhost-8080-2.png" width="300px">

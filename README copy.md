# My Shop

Este proyecto es un test práctico para aspirantes al área de front-end de My shop.

## Funcionalidad de la aplicación

En la vista de caja de búsqueda, debería poder ingresar el producto a buscar y al enviar el formulario navegar a la vista de Resultados de búsqueda, visualizando solo 4 productos. Luego, al hacer clic sobre uno de ellos, debería navegar a la vista de Detalle de Producto.

## Servidor de desarrollo

Ejecutar `ng serve` para desplegar el servidor de desarrollo. Navegar a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

## Recursos construidos (endpoint)

La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de resultados, y la descripción del detalle del producto.

### Requisitos:
construir las siguientes tres vistas:

○ Caja de búsqueda
○ Resultados de la búsqueda
○ Detalle del producto

## Funcionamiento

Las vistas son navegables de manera independiente y cuentan con su propia url:
○ Caja de Búsqueda: “/”
○ Resultados de la búsqueda: “/items?search=”
○ Detalle del producto: “/items/:id”

## Construir

Ejecutar `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`. Utilizar el `--prod` bandera para una construcción de producción.

## Ejecución de pruebas unitarias

Ejecutar `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Derechos reservados

Autor: `Edison A Ruíz C`

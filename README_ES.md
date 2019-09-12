# React Background Image

React Background Image es una librería destinada a facilitar la adaptación de 
cualquier imagen a su contenedor padre, mostrando siempre la mayor parte posible
de la imagen, sin crear deformaciones en función al formato de la imagen.

La imagen se readapta al redimensionarse la pantalla, por lo que es válido para 
cualquier tamaño de pantalla.

## Instalación

```$xslt
npm install @oubli/react-background-image --save
```

## Uso
El uso es realmente sencillo, sólo debes importar la librería
y pasar como propiedad la url del recurso y su etiqueta alt, para mejorar
la accesibilidad.

```javascript
import React from 'react';
import BackgroundImage from '@oubli/react-background-image'

export default () => <BackgroundImage url={"YOUR_PICTURE_URL"} alt={"YOUR_CUSTOM_ALT"}
```


# Propiedades
| Name          | Default       | Description  |
| ------------- |:-------------:| ------------:|
| url           | null          | La url del recurso que se desea cargar |
| alt           | "BackgroundImage"      | Texto alternativo a la imagen para una correcta accesibilidad |
| backgroundSize| "Cover"       | Se puede seleccionar dos modos de comportamiento para la imagen de fondo que funcionan igual que css, cover o contain |


## A tener en cuenta
El contenedor padre deberá tener una altura y anchura definida, si no pueda causar problemas.
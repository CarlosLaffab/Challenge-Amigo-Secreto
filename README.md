## Descripción

"Amigo Secreto" es una aplicación web sencilla diseñada para organizar juegos de intercambio de regalos. Permite a los usuarios agregar nombres de amigos a una lista y realizar un sorteo aleatorio para elegir un "amigo secreto". Con una interfaz amigable, un fondo animado y funciones básicas como agregar, sortear y limpiar la lista, es perfecta para divertidas celebraciones.

## Funcionalidades

- **Agregar nombres**: Ingresa un nombre en el campo de texto y haz clic en "Añadir" (o presiona Enter) para incluirlo en la lista.
- **Validación**: Muestra una alerta si intentas agregar un nombre sin escribir nada, asegurando que la lista sea válida.
- **Mostrar lista**: Los nombres se muestran en una lista debajo del campo de entrada.
- **Sortear amigo**: Selecciona un nombre al azar de la lista con el botón "Sortear amigo".
- **Limpiar lista**: Borra todos los nombres y el resultado del sorteo con "Limpiar lista".
- **Fondo animado**: Incluye una imagen de fondo con un efecto de desvanecimiento suave.

## Tecnologías

- **HTML**: Estructura básica de la página.
- **CSS**: Estilos y animación del fondo usando variables y `@keyframes`.
- **JavaScript**: Lógica para gestionar la lista y el sorteo.

## Requisitos

- Un navegador web moderno (como Chrome, Firefox o Edge).
- Opcional: Una imagen local para personalizar el fondo (por ejemplo, `fondo.jpg`).

## Instalación

1. **Descarga los archivos**:

   - Obtén `index.html`, `app.js` y `style.css` y guárdalos en una misma carpeta.
   - Opcional: Crea una subcarpeta llamada `images` y coloca tu imagen de fondo (por ejemplo, `fondo.jpg`) dentro de ella si deseas usarla.

2. **Personaliza el fondo (opcional)**:

   - Si quieres usar tu propia imagen de fondo en lugar de la predeterminada, abre el archivo `style.css` con un editor de texto.

   - Busca la línea que dice:

     ```css
     background-image: url('https://images.unsplash.com/photo-1513151233558-d860c76eb821?q=80&w=2070&auto=format&fit=crop');
     ```

   - Cámbiala por la ruta de tu imagen, por ejemplo:

     ```css
     background-image: url('images/fondo.jpg');
     ```

   - Asegúrate de que la imagen esté en la carpeta `images` para que la aplicación la encuentre.

3. **Ejecuta la aplicación**:

   - Abre el archivo `index.html` en tu navegador (puedes hacer doble clic sobre él o arrastrarlo a la ventana del navegador).

## Uso

1. Escribe un nombre en el campo de texto.
2. Haz clic en "Añadir" o presiona Enter para agregarlo.
3. Repite para más nombres.
4. Haz clic en "Sortear amigo" para elegir un ganador al azar.
5. Usa "Limpiar lista" para reiniciar.
6. Disfruta del fondo animado.

## Estructura de Archivos

- `index.html`: Define la estructura con input, botones y lista.
- `app.js`: Contiene la lógica en JavaScript para el funcionamiento.
- `style.css`: Aplica estilos y la animación del fondo.

## Capturas de Pantalla

Descubre cómo funciona "Amigo Secreto" con estas imágenes:

### Ingresar un Nombre

![Ingresar un nombre](https://raw.githubusercontent.com/CarlosLaffab/Challenge-Amigo-Secreto/d061aaa687c555e3279b969a7cd7e48f380ae857/screenshot2.jpg)\- Muestra el campo donde debes escribir el nombre de tu amigo para empezar a usarlo.

### Alerta por Campo Vacío

![Alerta por campo vacío](https://raw.githubusercontent.com/CarlosLaffab/Challenge-Amigo-Secreto/d061aaa687c555e3279b969a7cd7e48f380ae857/screenshot3.jpg)\- Ilustra la alerta que aparece si intentas agregar un nombre sin escribir nada, cumpliendo un desafío del proyecto.

### Resultado del Sorteo

![Resultado del sorteo](https://raw.githubusercontent.com/CarlosLaffab/Challenge-Amigo-Secreto/d061aaa687c555e3279b969a7cd7e48f380ae857/screenshot1.jpg)\- Presenta el nombre del amigo secreto seleccionado tras el sorteo.

## Notas

- Si el fondo no aparece, verifica la URL en `style.css`.
- Si hay problemas con los botones, abre la consola del navegador (F12) para buscar errores.
- Personaliza cambiando la imagen de fondo en `style.css` o ajustando los colores en `:root`.

## Autor

Charlie V.

Desarrollado como parte de un desafío de programación de ONE&AluraLatam ¡Diviértete con tu Amigo Secreto!

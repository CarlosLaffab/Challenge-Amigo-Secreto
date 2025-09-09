# Amigo Secreto

## Descripción
"Amigo Secreto" es una aplicación web sencilla que permite a los usuarios agregar nombres de amigos a una lista y realizar un sorteo aleatorio para elegir un "amigo secreto". Es ideal para juegos de intercambio de regalos. La aplicación tiene una interfaz amigable, un fondo animado con una imagen, y funcionalidades básicas como agregar, sortear y limpiar la lista.

## Funcionalidades
- **Agregar nombres**: Escribe un nombre en el campo de texto y haz clic en "Añadir" (o presiona Enter) para agregarlo a la lista.
- **Validación**: Si el campo está vacío, muestra una alerta pidiéndote un nombre válido.
- **Mostrar lista**: Los nombres se muestran en una lista debajo del campo de entrada.
- **Sortear amigo**: Haz clic en "Sortear amigo" para elegir un nombre al azar de la lista.
- **Limpiar lista**: Haz clic en "Limpiar lista" para vaciar la lista y el resultado del sorteo.
- **Fondo animado**: La página tiene una imagen de fondo con una animación de desvanecimiento suave.

## Tecnologías
- **HTML**: Estructura de la página.
- **CSS**: Estilos y animación de fondo (usando variables CSS y `@keyframes`).
- **JavaScript**: Lógica para agregar nombres, sortear y limpiar la lista.

## Requisitos
- Un navegador web moderno (Chrome, Firefox, Edge, etc.).
- Opcional: Una imagen local para el fondo (si quieres cambiar la imagen por defecto).

## Instalación
1. **Clona o descarga los archivos**:
   - Descarga los siguientes archivos en una carpeta:
     - `index.html`
     - `app.js`
     - `style.css`
   - Opcional: Si usas una imagen local para el fondo, crea una subcarpeta `images` y coloca tu imagen (por ejemplo, `fondo.jpg`).

2. **Configura la imagen de fondo** (opcional):
   - En `style.css`, busca la línea:
     ```css
     background-image: url('https://images.unsplash.com/photo-1513151233558-d860c76eb821?q=80&w=2070&auto=format&fit=crop');
     ```
   - Cámbiala por la ruta de tu imagen, por ejemplo:
     ```css
     background-image: url('images/fondo.jpg');
     ```
   - Asegúrate de que la imagen esté en la carpeta `images`.

3. **Abre la aplicación**:
   - Abre `index.html` en un navegador web (haz doble clic o arrástralo al navegador).

## Uso
1. Escribe un nombre en el campo de texto.
2. Haz clic en "Añadir" o presiona Enter para agregar el nombre a la lista.
3. Repite para añadir más nombres.
4. Haz clic en "Sortear amigo" para elegir un nombre al azar.
5. Haz clic en "Limpiar lista" para borrar todos los nombres y el resultado.
6. Disfruta del fondo animado (la imagen cambia de opacidad suavemente).

## Estructura de Archivos
- `index.html`: Contiene la estructura de la página (input, botones, lista).
- `app.js`: Lógica en JavaScript para manejar la lista y el sorteo.
- `style.css`: Estilos de la página, incluyendo la animación de fondo.

## Notas
- Si el fondo no se ve, verifica que la URL de la imagen en `style.css` sea correcta.
- Si los botones no funcionan, abre la consola del navegador (F12) y revisa si hay errores.
- Para personalizar, puedes:
  - Cambiar la imagen de fondo en `style.css`.
  - Ajustar los colores en las variables `:root` de `style.css`.
  - Añadir un ícono al botón "Sortear amigo" (edita `index.html` y `style.css`).

## Autor
Creado como parte de un desafío de programación. ¡Disfruta jugando al Amigo Secreto!

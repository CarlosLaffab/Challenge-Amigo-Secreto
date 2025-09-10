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
- **JavaScript**: Lógica para manejar la lista y el sorteo.

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

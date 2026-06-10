#  Generador de QR - Extensión para Navegador (Manifest V3)

Una extensión de navegador minimalista, rápida y 100% enfocada en la privacidad para generar códigos QR de la pestaña actual al instante.

## Características Principales

A diferencia de otras extensiones en la tienda que están repletas de anuncios o rastrean tu navegación, este proyecto fue construido con tres pilares en mente:

* ** Zero-Click (Instantáneo):** No hay botones extra. Haces clic en el ícono de la extensión y el código QR de la página en la que estás aparece inmediatamente.
* ** 100% Privado y Offline:** No utiliza APIs externas ni envía tus datos a ningún servidor. La generación del QR se realiza completamente de forma local en tu computadora utilizando matemáticas.
* ** Soporte Nativo para Modo Oscuro:** La interfaz se adapta automáticamente al tema de tu sistema operativo o navegador gracias a las variables CSS y `prefers-color-scheme`.
* ** Ultra Ligera:** Sin analíticas, sin rastreadores y construida con JavaScript puro y Manifest V3.

## 🛠️ Cómo Funciona

1. La extensión utiliza el permiso `activeTab` para leer únicamente la URL de la pestaña que tienes abierta en ese momento.
2. Inyecta esa URL en una librería local de código abierto (`qrcode.js`).
3. Dibuja el código QR en un contenedor HTML en fracciones de segundo.

##  Instalación Manual (Modo Desarrollador)

Como esta extensión aún no está publicada en la Chrome Web Store, puedes instalarla localmente en cualquier navegador basado en Chromium (Google Chrome, Microsoft Edge, Brave, Vivaldi, etc.) siguiendo estos sencillos pasos:

1. **Descarga el código:**
   * Clona este repositorio o descarga el archivo `.zip` haciendo clic en el botón verde **"Code"** -> **"Download ZIP"**.
   * Si descargaste el `.zip`, descomprímelo en una carpeta en tu computadora (ej. en tus Documentos).

2. **Abre la gestión de extensiones:**
   * Abre tu navegador y escribe en la barra de direcciones: `chrome://extensions/` (o `edge://extensions/` si usas Edge).

3. **Activa el Modo Desarrollador:**
   * En la esquina superior derecha, enciende el interruptor que dice **"Modo de desarrollador"** (Developer mode).

4. **Carga la extensión:**
   * Aparecerá un nuevo menú en la parte superior izquierda. Haz clic en el botón **"Cargar descomprimida"** (Load unpacked).
   * Selecciona la carpeta donde descomprimiste el proyecto.

¡Y listo! Verás el ícono de la extensión aparecer en tu barra de herramientas (te recomiendo fijarlo/pinearlo para tenerlo siempre a mano).

## Tecnologías Utilizadas

* **HTML5 & CSS3** (Diseño responsivo y variables de tema oscuro).
* **JavaScript (Vanilla)**
* **Chrome Extension API** (Manifest V3)
* [qrcode.js](https://github.com/davidshimjs/qrcodejs) (Librería MIT para la generación del QR).

---
*Creado para resolver un problema cotidiano de forma limpia y segura.*

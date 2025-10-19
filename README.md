# Instrucciones para ejecutar el proyecto

## Requisitos previos

Tener instalado:
- **Node.js** (versión 22.17 o superior)
- **npm**, **yarn** o **pnpm**  como gestor de paquetes

## Pasos para ejecutar el proyecto

### 1. Clonar o descargar el proyecto

Si el proyecto está en un repositorio:
```bash
git clone y enlace al repositorio
cd 
```

### 2. Instalar dependencias

Ejecuta uno de los siguientes comandos según tu gestor de paquetes:
```bash
npm install
# o
yarn install
# o
pnpm install

```

### 4. Ejecutar en modo desarrollo

Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

El proyecto estará disponible en `http://localhost:3000`

### 5. Compilar para producción (opcional)

Para generar una versión optimizada:
```bash
npm run build
npm run start
```

## Explicación de las decisiones técnicas

### Responsividad y diseño pixel perfect

En el documento facilitado para la prueba indica que debe ser pixel perfect pero sin una directiva concreta del tamaño de pantalla y teniendo en cuenta de que tenía que ser responsive para dispositivos más pequeños, decidí utilizar ajustes automáticos excepto en las pantallas que veía que el diseño visualmente se adaptaba lo más fiel a lo solicitado por la prueba.

### Animaciones

Utilicé prácticamente las mismas animaciones en cada una de las secciones para que fuese más homogéneo.

### Tipografía y diseño

En algunos párrafos decidí mantener el ancho indicado sobre las líneas a mostrar ya que la fuente proporcionada no es la misma que está en el figma. Eso conlleva a que el ancho de caracteres haga que el tamaño de la línea difiera con el diseño.

### Media queries y CSS

- Decidí ir ajustando las media queries en función del diseño para que se adaptara a la perfección en cada tipo de pantalla.
- Utilicé el enfoque **mobile first** en el CSS

### Arquitectura del proyecto

- A nivel de organización del proyecto no utilicé ninguna arquitectura en concreto porque no lo vi necesario.
- Me preocupé en mantener la lógica fuera de los componentes, ya que estos son solo para renderizar las secciones.

### Tiempo de desarrollo

**Tiempo estimado:** 24 horas para diseñar e investigar librerías que no había usado antes.

## Estructura del proyecto
```
Punto de entrada -> Layout.js (carga de fuentes) y renderizado del home (page.js).
page.js -> renderiza todas las secciones.

APP
├───components -> Contiene cada una de las secciones que compone la página.
├───fonts -> Contiene la fuente facilitada por correo electrónico
├───hooks -> Contiene los efectos utilizados con GSAP.
└───modules
    └───home -> Contiene los módulos css de cada sección
```

## Herramientas y tecnologías utilizadas

- **Next.js** - Framework de React para aplicaciones web - Ya tenía conocimientos sobre ello.
- **GSAP** - Librería de animaciones para JavaScript - Sabía para qué se usaba pero nunca lo había usado. Los hooks realizados son ejemplos que ofrece la propia página.









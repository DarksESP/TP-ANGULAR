the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
# 🎮 GameStore - Tienda de Videojuegos

## Descripción

GameStore es una aplicación web desarrollada en Angular que simula una tienda de videojuegos online. 
Permite a los usuarios explorar un catálogo de juegos, seleccionar cantidades y gestionar un carrito de compras interactivo.

## Funcionalidades

- 🎮 Catálogo de videojuegos con cards
- 🛒 Carrito de compras con dropdown interactivo
- ➕ Selector de cantidad con validaciones
- 🏷️ Indicador de stock y productos en clearance
- 📄 Página de About con información de la tienda
- 🧭 Navegación con routing entre páginas

## Tecnologías utilizadas

- Angular 17+
- TypeScript
- Bootstrap 5
- SCSS
- GitHub

## Datos del estudiante

| Campo | Detalle |
|---|---|
| **Nombre y Apellido** | Tu Nombre Apellido |
| **DNI** | 12.345.678 |
| **Email** | tu@email.com |
| **Sede** | Tandil |

## Enlace al proyecto

- 🔗 GitHub: [github.com/tuusuario/gamestore](https://github.com/tuusuario/gamestore)
- ▶️ StackBlitz: [stackblitz.com/edit/angular-ivy-nn](https://stackblitz.com/edit/angular-ivy-nn)

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/gamestore.git

# Instalar dependencias
npm install

# Ejecutar el proyecto
ng serve
```

## Estructura del proyecto

```
src/
  app/
    carrito/          → Componente dropdown carrito
    games-list/       → Catálogo de juegos
    input-integer/    → Componente selector de cantidad
    shop-about/       → Página about
    shop-cart/        → Página carrito completo
    footer/           → Componente footer
    services/
      game-cart.service.ts  → Servicio del carrito
```

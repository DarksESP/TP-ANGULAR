
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
| **Nombre y Apellido** | Hernán Luis Valea |
| **DNI** | 45224524 |
| **Email** | valea.190455@email.com |
| **Sede** | Tandil |


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

# 🎨 Billetera Virtual - Frontend

### 📱 Interfaz de usuario dinámica y responsiva
Esta es la capa de presentación de la **Billetera Virtual**, construida con tecnologías web estándar para garantizar ligereza, velocidad y compatibilidad total con dispositivos móviles y de escritorio.

---

## 📖 Tabla de Contenidos
* [Tecnologías](#-tecnologías)
* [Características Visuales](#-características-visuales)
* [Conexión con el Backend](#-conexión-con-el-backend)
* [Estructura del Proyecto](#-estructura-del-proyecto)
* [Despliegue](#-despliegue)

---

## 🛠 Tecnologías
* **HTML5:** Estructura semántica para una mejor accesibilidad.
* **CSS3:** Estilos personalizados, Flexbox y Grid para un diseño moderno.
* **JavaScript (ES6+):** Lógica asíncrona mediante `fetch` para comunicación con la API.
* **Lucide Icons / FontAwesome:** Iconografía intuitiva para la experiencia de usuario.

---

## ✨ Características Visuales
* **Dashboard en Tiempo Real:** Visualización instantánea del saldo y los últimos movimientos.
* **Validación de Formularios:** Control de errores en tiempo real durante el registro y login.
* **Persistencia de Sesión:** Uso de `localStorage` para mantener al usuario conectado tras recargar la página.
* **Animaciones Fluídas:** Transiciones suaves entre secciones para una experiencia tipo App nativa.

---

## 🔌 Conexión con el Backend
El frontend se comunica con una API REST alojada en Railway. Para cambiar el entorno de desarrollo a producción, se utiliza una constante global:

```javascript
// config.js o al inicio de tu script principal
const API_BASE_URL = "[https://tu-app-en-railway.app/api](https://tu-app-en-railway.app/api)";

// Ejemplo de petición
async function obtenerSaldo(userId) {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`);
    const data = await response.json();
    return data.balance;
}

├── index.html          # Pantalla de Login / Landing
├── registro.html       # Formulario de nuevos usuarios
├── dashboard.html      # Panel principal de la billetera
├── css/
│   └── styles.css      # Estilos globales y componentes
└── js/
    ├── auth.js         # Lógica de login y registro
    ├── dashboard.js    # Gestión de saldo y transacciones
    └── api.js          # Configuración de llamadas fetch

👤 Autor
Alejandro García Benítez - https://github.com/alejandrogb95

// Al cargar la página, comprobamos si hay un usuario guardado
document.addEventListener("DOMContentLoaded", () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
        showDashboard();
    } else {
        showLogin();
    }
});

function showDashboard() {
    document.getElementById('loginSection').classList.add('hidden');
    document.getElementById('dashboardSection').classList.remove('hidden');
    init(); // La función que ya tenías para cargar datos de Postgres
}

function showLogin() {
    document.getElementById('loginSection').classList.remove('hidden');
    document.getElementById('dashboardSection').classList.add('hidden');
}

async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPass').value;

    // Llamamos al endpoint que crearemos en Java
    const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        const user = await response.json();
        localStorage.setItem('userId', user.id); // Guardamos para siempre en el navegador
        localStorage.setItem('userName', user.username);
        showDashboard();
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function logout() {
    localStorage.clear();
    window.location.reload();
}
// 
import 'bulma/css/bulma.css';
import './app.css';
import App from './App.svelte';

// Solución robusta para el elemento contenedor
const initApp = () => {
  let appElement = document.getElementById('app');
  
  if (!appElement) {
    appElement = document.createElement('div');
    appElement.id = 'app';
    document.body.appendChild(appElement);
  }

  new App({
    target: appElement,
  });
};

// Espera a que el DOM esté completamente cargado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

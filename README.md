# React + TypeScript + Vite + Redux Toolkit

Ce projet est conçu pour se familiariser avec la bibliothèque Redux en utilisant Redux Toolkit dans un environnement React avec Vite.

Ce template fournit une configuration minimale pour faire fonctionner React avec Vite, HMR et quelques règles ESLint.

Actuellement, deux plugins officiels sont disponibles :

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utilise [Babel](https://babeljs.io/) pour Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utilise [SWC](https://swc.rs/) pour Fast Refresh

## Étendre la configuration ESLint

Si vous développez une application de production, nous recommandons de mettre à jour la configuration pour activer les règles de linting sensibles au type :

- Configurez la propriété `parserOptions` au niveau supérieur comme ceci :

```js
export default tseslint.config({
  languageOptions: {
    // autres options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

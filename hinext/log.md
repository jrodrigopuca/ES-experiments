## 10/18
- yarn init
- yarn add react react-dom next
- crear carpeta /pages
- crear script index.js
- agregar a package.json:

<code>

    "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start"
    }
</code>

- ejecutar con yarn: <code> yarn run dev </code>

## 10/18 Parte II
- agregue about.js (para acceder usar http://localhost:3000/about)
- agrego redireccionamiento a about.js usando el componente Link de NextJS
- agrego uso de estilos con MyLayout.js
- agrego páginas dinamicas con post.js 
- agrego páginas dinamicas con 'clean urls' en "[id].js"
- agrego 'isomorphic-unfetch' <code> yarn add 'isomorphic-unfetch'</code>

## 10/19
- agrego estilos
- agrego AMP (amphyb, ampweb)
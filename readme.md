## About

It's a small structure webpack to front-end projects.

This project used the following technologies:

<ul>
   <li>Pug: to templating html -> more information about pug: <a href = 'https://pugjs.org/api/getting-started.html'>+ info </a></li>
   <li>Sass: to style -> more information about Sass: <a href = 'https://sass-lang.com/'>+ info </a></li>
   <li>JavaScript</li>
   <li>Webpack: more information about Webpack: <a href = 'https://webpack.js.org/'>+ info </a></li>
</ul>

## Schema project

<pre>
./
|- packege-lock.json
|- packege.json
|- webpack.config.js
|- /dist
   |- /views
      |- index.html
   |- index.css
   |- index.[hash].js
|- /src
   |- /img
   |- /script
      |- /modules (it is a javascript folder where the functions will be)
   |- /style
      |- style.scss
   |- /views
      |- /includes
         |- /global
            |- footer.pug
            |- header.pug
         |- /home
      |- /pages
      |- template.pug
   |- index.js
</pre>

## About

It's a small structure webpack to front-end projects.

This project used the following technologies:

<ul>
   <li>Pug: to templating html -> more information about pug: <a href = 'https://pugjs.org/api/getting-started.html'>+ info </a></li>
   <li>Sass: to style -> more information about Sass: <a href = 'https://sass-lang.com/'>+ info </a></li>
   <li>JavaScript</li>
   <li>Webpack: more information about Webpack: <a href = 'https://webpack.js.org/'>+ info </a></li>
</ul>

## How install

<ul>
   <li>1: clone project</li>
   <li>2: <code>npm install</code></li>
   <li>3: <code>npm start</code> (watch)</li>
   <li>4: <code>npm run build</code> (run project)</li>
</ul>

## Schema project

<pre>
./
|- packege-lock.json
|- packege.json
|- webpack.config.js
|- /dist
   |- /assets
      |- /css
         |- style.[hash].css
      |- /images
      |- /js
         |- index.[hash].js
         |- runtime.[hash].js
   |- index.html
|- /src
   |- /script
      |- /modules (it is a javascript folder where the functions will be)
      |- another-module.js
      |- index.js
   |- /style
      |- /includes
         |- /global
            |- _footer.scss
            |- _header.scss
         |- /pages
      |- style.scss
   |- /views
      |- /includes
         |- /global
            |- footer.pug
            |- header.pug
         |- /home
      |- /pages
      |- template.pug
</pre>

const bs = require("browser-sync").create();

// .init starts the server
bs.init({
    server: "./dist",
    serveStatic: [{
      route: '/Portfolio',
      dir: 'dist'
    }]
});

bs.reload("*.html");
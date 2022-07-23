/**
 * EJS is used as a templating language - 
 * 
 * It's so you can use components in your rendered HTML files
 * Some references:
 * - https://ejs.co/#docs
 * - https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application
 * 
 */

//jshint eversion:6

const express = require("express");

// const bodyParser = require("body-parser");
// body-parser used when new information is being stored
const app = express();

// app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static("public"));

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/test', function(req, res) {
  /**
   * You can pass data into the EJS 
   * template from the server here.
   * The second parameter of the "render"
   * function accepts the variables.
   * 
   * This is just an example of what you can do.
   */
  res.render('pages/index', {
    taskbar: [
      {
        href: "#top-section",
        title: "logout",
        src: "/images/exit.png",
        alt: "logout",
      },
      {
        href: "/work",
        title: "logout",
        src: "/images/exit.png",
        alt: "logout",
      },
      {
        href: "/about",
        title: "logout",
        src: "/images/exit.png",
        alt: "logout",
      },
      {
        href: "/school",
        title: "logout",
        src: "/images/exit.png",
        alt: "logout",
      },
      {
        href: "/projects",
        title: "logout",
        src: "/images/exit.png",
        alt: "logout",
      }
    ],
  });
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running");
});


const express = require('express')
const app = express()
const port = 3000

var things = require('./things.js'); 
app.use('/things', things);

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
   res.render('first_view');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

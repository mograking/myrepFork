const express = require('express')

const app = express()
const port = 3000

var i = 0;

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'))

app.get('/', function(req, res){
   res.render('view1');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

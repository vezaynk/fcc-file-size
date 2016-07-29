var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var app = express()

app.get('/', function (req, res) {
  res.send('<script src="//code.jquery.com/jquery-3.1.0.min.js"> </script><script src="//oss.maxcdn.com/jquery.form/3.50/jquery.form.min.js"></script><form method="POST" enctype="multipart/form-data"><input name="file" type="file"> <input type="submit"></form><script>$("form").ajaxForm(function(result) {alert("File size: " + JSON.parse(result).size);});</script>');
});
app.post('/', upload.single('file'), function (req, res) {
  res.send(JSON.stringify(req.file));
});
app.listen(process.env.PORT || 3000, function () {
  console.log('Ready');
});

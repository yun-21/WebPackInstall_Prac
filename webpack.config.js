const path = require('path');
module.exports={
  entry:"./dist/test.js",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"test.bundle.js"
  }
}
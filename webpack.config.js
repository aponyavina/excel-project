const path = require('path');     //правильное указание контекста с использованием стандартного модуля path

module.exports = {
  context: path.resolve(__dirname, 'src'),    //то, где лежат все исходники в приложении; __dirname - абсолютный путь до текущей папки (excel-project)
  mode: 'development',
  entry: './index.js',      // входные точки для приложения
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  }
}

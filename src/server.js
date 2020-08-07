const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses } = require('./pages')

// Importando o nunjucks - para renderização das paginas
const nunjucks = require('nunjucks')
// Configurar nunjucks
nunjucks.configure('src/views',{
    express: server,
    nocache: true,
})

server
// Configuração de arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// Rotas da Aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

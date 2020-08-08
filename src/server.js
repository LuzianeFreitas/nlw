const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// Importando o nunjucks - para renderização das paginas
const nunjucks = require('nunjucks')
// Configurar nunjucks
nunjucks.configure('src/views',{
    express: server,
    nocache: true,
})

server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// Configuração de arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// Rotas da Aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)

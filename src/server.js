const proffys = [
    // Objeto
    { 
        name:"Diego Fernandes",
         avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
         whatsap:"359999999",
         bio:"Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
         subject:"Química",
         cost:"20",
         weekday:[0],
         time_from:[720],
         time_to: [1220]
    },
    { 
        name:"Luziane Freitas",
         avatar:"https://avatars1.githubusercontent.com/u/43423130?s=460&v=4",
         whatsap:"3599999999",
         bio:"Apaixonado por calculos e desvendar a ciência",
         subject:"Matemática",
         cost:"20",
         weekday:[0],
         time_from:[720],
         time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quart-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }
    
    return res.render("give-classes.html", { subjects, weekdays })
}

const express = require('express')
const server = express()

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

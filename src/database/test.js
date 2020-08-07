const dataBase = require('./db')
const createProffy = require('./createProffy')

dataBase.then(async (db) => {
    //Iserir dados
    proffyValue = {
        name:"Luziane Freitas",
        avatar:"https://avatars1.githubusercontent.com/u/43423130?s=460&v=4",
        whatsap:"3599999999",
        bio:"Apaixonado por calculos e desvendar a ciência",
    }

    classValue = {
        subject: 1,
        cost:"20",
        // o proffy id virá pelo banco
    }

    classScheduleValues = [
        // o class id virá pelo banco
        {
            weekday:1,
            time_from:720,
            time_to: 1220,
        },
        {
            weekday:0,
            time_from:720,
            time_to: 1220,
        }
    ]

    // Create proffy
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar dados inseridos

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "2"
        AND class_schedule.time_from <= "720"
        AND class_schedule.time_to > "1200"
        
    `)

    console.log(selectClassesSchedules)
})
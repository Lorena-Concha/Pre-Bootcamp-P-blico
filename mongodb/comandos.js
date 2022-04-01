//Instalación de MongoDb en Windows   https://www.mongodb.com/try/download/community?jmp=docs
//en el powershell ve a cd c:/"Program Files"/MongoDB/Server/<version_number>/bin/
//luego haz mongo.exe    con esto ya tienes activo para comenzar a trabajar

//inicia mongo, puede ser con: mongo o ./mongo

//para crear una db:
// use NOMBREDEDB
// use my_first_db

//para crear una coleccion:
// db.createCollection("NOMBREDECOLECCION")
//db.createCollection("estudiantes")

//para ingresar datos a una collection
//db.NOMBRECOLECCION.insert({"nombre":Cata,"edad":10,"cumpleaños":{"mes":3,"dia":3,"año":2018})
//puedes usar insertOne, o insertMany, si queires ingresar muchos

//para ver todos los datos ingresados en una coleccion
//db.NOMBRECOLECCION.find().pretty()
//db.students.find().pretty()

//para mostrar dos estudiantes de determinados lugares
//db.estudiantes.find({$or:[{home_state: "California"},{home_state: "Washington"}]}).pretty()

//para mostrar estudiantes donde un dato es mayor a un numero
//db.estudiantes.find({lucky_number: {$gt: 3}})

//para mostrar que un numero sea menor o igual 
//db.estudiantes.find({lucky_number: {$l0}}).pretty()

//para mostrar que un numero de la suete este entre el 1 y el 9 (inclusive)
//db.estudiantes.find({lucky_number:{$gte: 1, $lte: 10}}).pretty()

//para agregar un campo a cada coleccion de estudiantes llamado "intereses" que es un array. 
//db.estudiantes.updateMany({},{$set: {"intereses": ["codificacion", "brunch", "mongoDB"]}})

//Agrega algunos intereses únicos para cada estudiante en particular en cada una de sus matrices de intereses.
//db.estudiantes.update({name: "Catalina3"},{$push: {intereses: "Programar"}})

//Agrega los 'impuestos' de intereses a la matriz de intereses de alguien
//db.estudiantes.update({name: "Catalina3"},{$push: {intereses: "impuestos"}})

//Elimina los intereses de 'impuestos' que acaba de agregar.
//db.estudiantes.update({name: "Catalina3"},{$pull: {intereses: "impuestos"}})

//Eliminar a todos los estudiantes que son de California.
//db.estudiantes.remove({home_state: "California"})

// Eliminar a un alumno por su nombre.
//db.estudiantes.remove({name: "Catalina2"})

// Retira a un estudiante cuyo número de la suerte sea mayor que 5 (SOLO UNO)
//db.estudiantes.remove({lucky_number: {$gt: 5}},true)

// Agrega un campo a cada colección de estudiantes llamado 'number_of_belts' y configúralo en 0.
// db.estudiantes.updateMany({},{$set:{number_of_belts: 0}})

//Incrementa este campo en 1 para todos los estudiantes en Washington (Seattle Dojo).
//db.estudiantes.updateMany({},{$set:{number_of_belts: 0}})

// Cambia el nombre el campo "number_of_belts" a "belts_earned"
//db.estudiantes.updateMany({}, {$rename: {number_of_belts: "belts_earned"}})

//elimina el campo "lucky_number"
//db.estudiantes.updateMany({}, {$unset: {lucky_number: ""}})


//agrega un campo "undate_on" y establece el valor como la fecha actual
//db.estudiantes.updateMany({}, {$currentDate: {updated_on: true}})





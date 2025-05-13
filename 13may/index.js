// import express from 'express'
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

import express from 'express'
// const app = express()

// const requestTime = function (req, res, next) {
//   req.requestTime = Date.now()
//   console.log(Date.now());
  
//   next()
// }

// app.use(requestTime)

// app.get('/', (req, res) => {
//   let responseText = 'Hello World!<br>'
//   responseText += `<small>Requested at: ${req.requestTime}</small>`
//   console.log(req.requestTime+" Buraradan kecdi");
//   res.send(responseText)
// })

// app.listen(3000)


import mongoose from 'mongoose';


mongoose.connect('mongodb+srv://narmingkbf206:narmin28311007_@cluster0.etsr5ne.mongodb.net/')
 .then(() => console.log('Connected!'))
 .catch(() => console.log('Not Connected!'))

const jsonServer=require('json-server')

//creatte  a json sserver app
const server=jsonServer.create()

//set up path for db.json
const router=jsonServer.router('db.json')

//Returns middlewares used by JSSON Server
const middleware=jsonServer.defaults()

//set up port
const port=process.env.PORT || 4000

//useer router , middleware in server
server.use(middleware)
server.use(router)

//app listen
server.listen(port,()=>{
    console.log(`Json Server started at port ${port}`);
})
import express, { request, response } from "express";
import {Server} from "socket.io";


const PORT = 8080
const expressApp = express()
const httpServer = expressApp.listen(PORT, () => {
    console.table({
        'Game': `http://localhost:${PORT}/game`,
        'Controller': `http://localhost:${PORT}/controller`
    })

})
const io = new Server(httpServer, {path: '/real-time'})

expressApp.use('/game', express.static('public-game'))
expressApp.use('/controller', express.static('public-controller'))
expressApp.use(express.json())

/*___________________________________________

1) Create the socket methods to listen the events and emit a response
It should listen for directions and emit the incoming data.
_____________________________________________ */


let currentScore = 0;

/*___________________________________________

2) Create an endpoint to POST player's current score and print it on console
_____________________________________________ */

expressApp.post('/score_intento', (request, response) => {
   let message = {content: "mostrar puntuacion"};
   response.send(message);
})

/*___________________________________________

3) Create an endpoint to GET player's final score and print it on canvas
_____________________________________________ */
//con el get tengo que llamar del sketch public game el puntaje final y mostrarlo de manera de mensaje dentro del contenido de este
expressApp.get('/final_score', (request, response) => {
    let message = {content: "mostrar puntuacion ${score}"};
    response.send(message);
})

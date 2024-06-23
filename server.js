const net = require("net"); // módulo net de Node da funcionalidades para crear servidores y clientes TCP
const processArguments = require("./view/index");

const server = net.createServer(); //creo el servidor TCP
const port = 3000;

server
.on("connection", (socket) => {
  //Esto establece un listener para el evento "connection", que se activa cuando un cliente se conecta al servidor.
  console.log("Se conectó un cliente");

  //el módulo net maneja internamente la conversión de los datos recibidos en el socket a Buffer.
  socket.on("data", (messageClient) => {

    const sendDataClient = processArguments(messageClient); //aca net entiende que si le paso un argumento en buffer debe pasarlo a cadena

    const jsonResponse = JSON.stringify(sendDataClient); //lo convierto para responder al cliente

    socket.write(jsonResponse);
  });
})
.listen(port, () => {
  console.log(`Servidor escuchando en el puerto: ${port}.`);
});

//Inicia el servidor en el puerto especificado.
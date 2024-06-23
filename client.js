const net = require("net");

// defino la logica para crear la coneccion
const client = new net.createConnection({ port: 3000 });

//aca lo conecto
client
  .on("connect", () => {
    const book = {
      //id:5,
      name: "Misery",
      author: "Stephen King",
      tags: ["terror", "drama"],
    };

    const data = { action: "getAll" };
    // const data = { action: "getById", body: book};
    // const data = { action: "getByName", body: book};
    // const data = { action: "getByAuthor", body: book};
    // const data = { action: "creteBook", body: book};
    // const data = { action: "updateById", body: book};
    // const data = { action: "deleteById", body: book};

    const response = JSON.stringify(data); //transformo mi obj en json

    client.write(response); //le envio la peticion al server
  })
  .on("data", (messageServer) => {
    const msgToString = messageServer.toString(); // me lo tiene que devolver en json por que lo tengo que guardar en la db
    console.log(msgToString);
  });

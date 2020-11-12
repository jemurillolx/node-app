const mongoose = require("mongoose");

const MONGODB_URI = `mongodb+srv://<usuario>:clave@linkaBDD?retryWrites=true&w=usuarioOpera`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log("Mongodb is connected to", db.connection.host))
  .catch((err) => console.error(err));

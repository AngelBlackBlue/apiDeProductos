import app from "./app";
import * as dotenv from "dotenv";
import { sequelize} from "./database/database";


dotenv.config();

const port = parseInt(process.env.PORT || "3000");

const initializeApp = async () => {
  try {
    await sequelize.sync();
    console.log("Conexión a la base de datos establecida");

    await app.listen({ port }, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error al iniciar la aplicación:", error);
  }
}

initializeApp();

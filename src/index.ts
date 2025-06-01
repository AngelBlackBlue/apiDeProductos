import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();

const port = parseInt(process.env.PORT || "3000");

async function initializeApp() {
  try {
    // await AppDataSource.initialize();
    console.log("Conexión a la base de datos establecida");

    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error al iniciar la aplicación:", error);
  }
}

initializeApp();

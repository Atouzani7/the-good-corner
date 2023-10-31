import "reflect-metadata";
import express from "express";
import db from "./db";

import categoryRouter from "./routes/categories.routes";
import tagRouter from "./routes/tags.routes";
import adRouter from "./routes/ads.routes";
import cors from "cors";


const app = express();
const port = 4000;

/**========================================================================
 *                           MIDDLEWARE GLOBAUX
 *========================================================================**/

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" })); //un seul // cors : Pour lier le back au front  eviter les prb 

/**------------------------------------------------------------------------------------------------
 *todo                                    cors
 * cors :résout les problèmes de politique same-origin en autorisant les requêtes cross-origin à partir d'un domaine spécifié
 * Dans ce cas, le middleware cors est configuré pour autoriser uniquement les requêtes provenant de http://localhost:3000. 
 * Cela signifie que si votre application front-end est hébergée sur http://localhost:3000, elle peut faire des requêtes à votre serveur back-end sans rencontrer de problèmes de politique same-origin.  
 **/


// app.use(cors({ origin: ["http://localhost:3000", "", ""] })); //plusieurs
// app.use(cors({ origin: "*" }));//tout le monde

/**========================================================================
 *                           Routes
 *========================================================================**/
app.use("/categories", categoryRouter);
app.use("/tags", tagRouter);
app.use("/ads", adRouter);

/**========================================================================
 *                           Lancement du serveur
 *========================================================================**/
app.listen(port, async () => {
  await db.initialize();
  console.log(`Server running on http://localhost:${port}`);
});
import express from "express";
import mime from "mime-types";
//only need cors if your react app is doing a fetch call to a different server(api server:4000 and react"app" server:3000)
import cors from "cors";
import * as db from "./db.mjs";

const app = express();
app.use(cors());
const port = process.env.PORT || 4000;
//create a new route
// const tasks = express.Router();

//create a new route for endgangered animal sightings
const sightingsRoute = express.Router();

//the root of the route there is a get sightings
sightingsRoute.get("/", async (request, response) => {
  const sightings = await db.getSightings();
  response.json(sightings);
});

// //the root of the route there is a get and post
// tasks.get("/", async (request, response) => {
//   const tasks = await db.getTasks();
//   response.json(tasks);
// });

// tasks.use(express.json());
// tasks.post("/", async (request, response) => {
//   const { name } = request.body;
//   const task = await db.addTask(name);
//   response.status(201).json(task);
// });

//links Localhost:4000/api/sightings
app.use("/sightings", sightingsRoute);

app.get("/api/ping", (request, response) =>
  response.json({ response: "pong" }),
);

if (process.env?.SERVE_REACT?.toLowerCase() === "true") {
  app.use(
    express.static("/app", {
      maxAge: "1d",
      setHeaders: (res, path) =>
        ["application/json", "text/html"].includes(mime.lookup(path)) &&
        res.setHeader("Cache-Control", "public, max-age=0"),
    }),
  );

  app.get("*", (req, res) => {
    res.sendFile("/app/index.html");
  });
}

app.listen(port, () => {
  console.info(`Example server listening at http://localhost:${port}`);
});

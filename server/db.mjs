/* eslint-disable prettier/prettier */
import dotenv from "dotenv";
import pgp from "pg-promise";
//Responsible for data access to the PostgreSQL database. The code in this file:

// Sets up a database client connection.
// Provides functions that interact with the database.

// addSighting will be a post.
// getSightings (query get all sightings and join )
export const getSightings = async () =>
  await db.any(
    "SELECT *, nickname FROM sightings JOIN individuals ON sightings.individual_id = individuals.id",
  );

//drop down menu get request to get the list of possible indivduals that were seen. c
const db = initDb();

export const getTasks = async () => await db.any("SELECT * FROM tasks");

export const addTask = async (name) =>
  (
    await db.any("INSERT INTO tasks(name) VALUES($1) RETURNING id, name", [
      name,
    ])
  )[0];

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}

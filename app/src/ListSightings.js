/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";

const ListSightings = () => {
  const [sightings, setSightings] = useState([]);

  //by default fetch makes a get request
  async function getSightings() {
    const res = await fetch("http://localhost:4000/sightings");
    const sightingArray = await res.json();
    setSightings(sightingArray);
  }

  useEffect(() => {
    getSightings();
  }, []);

  return (
    <>
      <h1 className="mt-5">Sightings List</h1>
      <table className="table mt-5">
        <thead className="table m-auto thead-dark">
          <tr>
            <th>Individual Id</th>
            <th>Nickname</th>
            <th>Date Sighted</th>
            <th>Location Sighted</th>
            <th>Healthy</th>
            <th>Sighter Email</th>
          </tr>
        </thead>
        <tbody>
          {/*** sighting list will go here */}
          {sightings.map((sighting) => (
            <tr key={sighting.id}>
              <td>{sighting.individual_id}</td>
              <td>{sighting.nickname}</td>
              <td>{sighting.date_of_sighting}</td>
              <td>{sighting.location}</td>
              <td>{sighting.healty ? "yes" : "no"}</td>
              <td>{sighting.email_of_sighter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListSightings;

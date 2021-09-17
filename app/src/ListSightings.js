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
    <header className="container-fluid">
          <div
            className='p-2  bg-image' 
            style={{ backgroundImage: "url('https://tinyurl.com/yz4ubc2e')", width: "auto", height: 600,backgroundPosition: "center",backgroundRepeat: "no-repeat"}}>
          </div>

    </header>
      <h1 className="mt-5">Sightings List</h1>
      <table className="table table-striped mt-5">
        <thead className="table m-auto thead-dark">
          <tr>
            <th scope="col">Individual Id</th>
            <th scope="col">Name</th>
            <th scope="col">Nickname</th>
            <th scope="col">Date Sighted</th>
            <th scope="col">Location Sighted</th>
            <th scope="col">Healthy</th>
            <th scope="col">Sighter Email</th>
          </tr>
        </thead>
        <tbody>
          {/*** sighting list will go here */}
          {sightings.map((sighting) => (
            <tr key={sighting.id}>
              <td>{sighting.individual_id}</td>
              <td>{sighting.name}</td>
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

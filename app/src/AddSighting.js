import React, { useState } from "react";

const AddSighting = () => {
  const [individual_id, setID] = useState("");
  const [email_of_Sighter, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [healty, setHealty] = useState();
  console.log(individual_id, email_of_Sighter);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { individual_id, email_of_Sighter };
      const response = await fetch("http://localhost:4000/sightings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <h1 className="my-5 ">Add Sighting</h1>
      <form className="d-flex">
        <input
          className="form-conrol"
          type="text"
          placeholder="Indvidual Id"
          value={individual_id}
          onChange={(e) => setID(e.target.value)}
        />
        <input
          className="form-conrol"
          type="text"
          placeholder="Date Animal Was Seen"
          value={email_of_Sighter}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-conrol"
          type="text"
          placeholder="Animal Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="form-conrol"
          type="text"
          placeholder="Healthy? yes or no"
          value={healty}
          onChange={(e) => setHealty(e.target.value)}
        />
        <input
          className="email form-conrol"
          type="text"
          placeholder="User email"
          value={email_of_Sighter}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          ariaPressed="true"
          className="btn btn-dark"
          onClick={handleSubmit}
        >
          Add Sighting
        </button>
      </form>
    </>
  );
};

export default AddSighting;

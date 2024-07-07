"use client";
import React from "react";

const JokesList = ({jokes}) => {
  return (
    <>
      <div className="flex flex-col mt-4">
        {jokes.map((joke) => (
          <div key={joke.id} className="m-4 shadow-xl">
            <p className="p-4">{joke.value}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default JokesList;

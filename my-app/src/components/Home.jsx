import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export default function Home() {
  const [searchterm, setSearchterm] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc").then((response) => {
      setList(response.data.results);
    });
  }, []);

  return (
    <>


      <div>
        {/* Display user details using the state */}
        {list.map((user, index) => (
          <div class="card">
          <div class="infos">
            <div class="image"> <img class="image" src={user.picture.large} alt="User" /></div>
            <div class="info">
              <div>
                <p class="name">
                {`${user.name.title} ${user.name.first} ${user.name.last}`}
                </p>
                <p class="function">
                {user.gender}
                </p>
              </div>
              <div class="stats">
                <p class="flex flex-col">
                  Phone 
                  <span class="state-value">
                    {user.phone}
                  </span>
                </p>
                
  
              </div>
            </div>
          </div>
          <button class="request" type="button">
            {user.email}
          </button>
        </div>



        ))}
      </div>


      


    </>
  );
}

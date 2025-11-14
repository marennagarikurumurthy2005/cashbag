import React, { useState } from 'react';

const UserProfile = ({ users }) => {
 

    const user1=users[0]
    const user2=users[1]

  const [toggle, setToggle] = useState(true);

  const handleSubmit = () => {
    setToggle(!toggle);
  };



  return (



    <div className='flex ml-10 mt-3'>
    <div className='flex-row justify-center '>


        {
        toggle?<div><h1>{user1.name}</h1>
      <h2>{user1.title}</h2>
      <p>{user1.bio}</p>
      </div>:
      <div><h1>{user2.name}</h1>
      <h2>{user2.title}</h2>
      <p >{user2.bio}</p></div>

        }
      

      <button className='bg-amber-600 rounded-4xl p-1.5' onClick={handleSubmit}>Change</button>
    </div>
    </div>
  );
};

export default UserProfile;

import React from 'react'
import Formpage from './pages/Formpage'
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Formpage/>}/>
      </Routes>
    </div>
  )
}

export default App



// import React from 'react';
// import UserProfile from './UserProfile';

// const App = () => {
 

  
//   const userProfileData = [
  

  

  
//   {id:1,name:"alice",title:"jr dev",bio:"loves to learning"},
//   {id:2,name:"john",title:"sr dev",bio:"loves to learning"}

//   ];

//   return (
//     <div>
     
//       <UserProfile users={userProfileData} />
//     </div>
//   );
// };

// export default App;

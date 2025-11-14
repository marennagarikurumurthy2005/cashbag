import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Formpage = () => {
  const navigate = useNavigate();

  const [pop, setPop] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (formData.username && formData.mobile.length === 10) {
      setPop(true);
    } else {
      alert("Please enter valid details!");
    }
  };

  return (
    <div className="h-screen w-full bg-linear-to-br from-blue-300 via-yellow-100 to-blue-300 flex flex-col items-center">
      <div className="text-5xl p-10 font-bold text-shadow-cyan-200 flex mt-12">
        CashBag <img className="h-10 w-10 ml-2" src="image.png" alt="cashbag" />
      </div>

      {pop ? (
        <div className="mt-10 text-center text-xl font-semibold bg-white/30 backdrop-blur-lg p-6 rounded-2xl border border-white/50 shadow-xl">
          <h1>
            Free ga 200/- osthayi antey
            <br /> nammesthavara  
            <span className="text-blue-700 font-bold">  {formData.username} 😄
                </span> saduvko , saduvkoni kastapadi sampadinchu ra erri🌼

                <br />
                <p className='mt-4'>
                  ఇట్లు మీ శ్రేయోభిలాషి
                </p>
                <p className='ml-50'><span className='text-4xl font-bold text-red-800'> ~MK</span></p>
          </h1>
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl"
            onClick={() => setPop(false)}
          >
            Go Back
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-start rounded-3xl backdrop-blur-lg border border-white/40 bg-blue-200/40 shadow-xl p-8 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3">
          <h1 className="text-2xl font-bold text-blue-900 mb-6">
            Fill & Get ₹200/-
          </h1>

          <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
            <input
              required
              type="text"
              name="username"
              value={formData.username}
              placeholder="Enter your name"
              className="p-3 rounded-xl border border-blue-300 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />

            <input
              type="text"
              name="mobile"
              maxLength={10}
              required
              placeholder="Enter UPI linked number"
              value={formData.mobile}
              className="p-3 rounded-xl border border-blue-300 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />

            <button
              type="submit"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Formpage;

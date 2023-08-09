import React from "react";

function Signals(){
    return(
        <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl dark:text-white montFont">
          Get signals here
        </h2>
        <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400 montFont">
          Crafted with skill and care to help our clients grow their business!
        </p>
        <div className="py-10">
        <button  type="button" class="accentColor text-white focus:ring-4 focus:ring-blue-300 
        font-medium rounded-lg text-sm px-10 py-4 mr-2 mb-2 glowBtn montFont">Get Signals</button>
        </div>

      </div>
    )
}

export default Signals;
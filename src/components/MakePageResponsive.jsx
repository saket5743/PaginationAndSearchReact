import React, { useState } from 'react'

export default function MakePageResponsive() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="flex justify-between items-center w-[100%] p-3">
      <div className="flex items-center gap-2">
        <svg
          width="25"
          height="17"
          viewBox="0 0 25 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3106 9.17145L9.55812 15.5982L5.80569 9.17145H13.3106ZM14.3159 8.59705H4.79636L9.55812 16.7349L14.3159 8.59705Z"
            fill="#263238"
          />
          <path
            d="M19.8347 1.17808L23.5871 7.60481H16.0822L19.8347 1.17808ZM19.8347 0.0292969L15.0729 8.16715H24.5964L19.8347 0.0292969Z"
            fill="#263238"
          />
          <path
            d="M0.234009 0.0292969L4.2266 7.22725L8.58952 0.210039L0.234009 0.0292969Z"
            fill="#4CAF4F"
          />
          <path
            d="M9.55822 0.659912L13.7462 7.8177H5.36215L9.55822 0.659912Z"
            fill="#4CAF4F"
          />
          <path
            d="M14.8247 9.38037L19.0167 16.735H10.4332L14.6944 9.38037H14.8247Z"
            fill="#4CAF4F"
          />
          <path
            d="M15.7322 8.93445L19.8347 16.1766L23.9941 8.93445H15.7322Z"
            fill="#4CAF4F"
          />
        </svg>
        <p className="font-bold text-lg">Nexcent</p>
      </div>

      {/* After Responsive  */}
      {isMenu ? (
        <div className=" justify-between gap-2 items-center">
          <ul className=" gap-2">
            <li>Home</li>
            <li>Features</li>
            <li>Community</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
          <button className="bg-green-500 p-4 text-white rounded-md">
            Register Now
          </button>
        </div>
      ) : (
        <div>
          <div className="flex justify-between gap-6 items-center uidiv">
            <ul className="flex gap-6 uidiv2">
              <li>Home</li>
              <li>Features</li>
              <li>Community</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
            <button className="bg-green-500 p-4 text-white rounded-md">
              Register Now
            </button>
          </div>
          <button className="hidden morebutton" onClick={() => setIsMenu(true)}>
            More....
          </button>
        </div>
      )}
    </div>
  );
}

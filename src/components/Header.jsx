import React from 'react'
// import {} from "";
// fontawsomeIcon


function Header() {
  // <FontAwesomeIcon icon={faCartShopping} />;//
  return (
    <div className="fixed top-0 w-full py-6 px-8 shadow-md bg-transparent backdrop-blur-xl">
      <nav className="flex justify-between w-full  items-center">
        <h1 className="tracking-widest  text-4xl text-slate-500 font-sans underline decoration-wavy underline-offset-8 font-bold">
          Ecomm
        </h1>
        <ul className="flex space-x-6 cursor-pointer">
          <li>
            <a className="font-medium" href="">
              Cart
            </a>
          </li>
          <li>
            <a className="font-medium" href="">
              Sign In
            </a>
          </li>
        </ul>
      </nav>

    </div>
  );
}



export default Header

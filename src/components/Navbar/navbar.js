import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <section className="w-[50%]  sticky bg-[#352F44] top-0 z-10 m-auto overflow-hidden">
    <nav className=" border-b border-b-white py-3 justify-between items-center flex gap-20 text-white list-none">
      <Link className=" bg-white text-black p-1 px-4 font-semibold w-max" href={"/"}>
      E-CANTEEN
      </Link>
      <ul className="flex gap-8">
        <li>
          {" "}
          <a href="/foods">Foods</a>
        </li>
        <li>Snacks</li>
        <li>Drinks</li>
      </ul>
      <div className="flex gap-8">
        <button>Orders</button>
        <button className=" p-1.5 bg-slate-200 text-sm shadow-xl text-black rounded-full">
          Me
        </button>
      </div>
    </nav>
  </section>
  )
}

export default Navbar
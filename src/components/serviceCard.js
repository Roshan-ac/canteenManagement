import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ data }) => {
  console.log(data);
  return (
    <div class="max-w-full shadow-slate-300 shadow bg-white border border-gray-200 rounded-lg dark:bg-[#5C5470] dark:border-gray-700">
      <a href="#">
        {/* <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" /> */}
        <Image src={data.image} height={200} width={200} />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.title ?? ""}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-[#FAF0E6]">
          {data.discription}
        </p>
        <Link
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center dark:hover:text-black text-white bg-[#FAF0E6] rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#352F44] dark:hover:bg-[#FAF0E6]  dark:focus:ring-blue-800"
          href={`${data.link}`}
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

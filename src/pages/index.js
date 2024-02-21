import Image from "next/image";
import { Inter } from "next/font/google";
import { Utensils } from "lucide";
import ServiceCard from "@/components/serviceCard";
import Navbar from "@/components/Navbar/navbar";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
const serviceData = [
  {
    title: "Bruno’s Bistro",
    image: "/images/food.jpg",
    discription: "A cozy neighborhood eatery serving classic Italian dishes.",
    link: "/foods/Bruno's-bistro",
  },
  {
    title: "Sushi Haven",
    discription:
      "ushi Haven is a modern Japanese restaurant specializing in fresh,",
    link: "/foods/sushi-haven",
  },
  {
    title: "Bruno’s Bistro",
    discription: "A cozy neighborhood eatery serving classic Italian dishes.",
    link: "/foods/Bruno's-bistro",
  },
  {
    title: "Sushi Haven",
    discription:
      "ushi Haven is a modern Japanese restaurant specializing in fresh,",
    link: "/foods/sushi-haven",
  },
  {
    title: "Bruno’s Bistro",
    discription: "A cozy neighborhood eatery serving classic Italian dishes.",
    link: "/foods/Bruno's-bistro",
  },
  {
    title: "Sushi Haven",
    discription:
      "ushi Haven is a modern Japanese restaurant specializing in fresh,",
    link: "/foods/sushi-haven",
  },
];
export default function Home() {
  useEffect(() => {
    console.log(serviceData);
  });
  return (
    <div>
      <div className=" text-gray-700 px-4 w-full">
        {/* <Navbar /> */}
        <section className="m-auto w-[50%] py-6 flex items-center">
          <div className=" space-y-2">
            <h1 className=" font-bold tracking-wide text-xl text-white">
              Delicious Delights Await!
            </h1>
            <h2 className="text-base text-gray-500 w-[80%]">
              Explore our mouthwatering menu of fresh, flavorful dishes. From
              savory snacks to sweet treats, we’ve got your cravings covered.
            </h2>
          </div>
          <div className="px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-utensils"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
              <path d="M7 2v20" />
              <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>
          </div>
        </section>
        <section className="m-auto w-[50%] space-y-6 py-6">
          <div className="">
            <h1 className=" underline underline-offset-4 font-bold tracking-wide text-xl text-white">
              Explore Services
            </h1>
          </div>
          <div className=" grid grid-cols-3 gap-4">
            {/* <ServiceCard /> */}
            {serviceData.map((item) => (
              <ServiceCard data={item} />
            ))}
          </div>
        </section>
        <section className=" w-[50%] text-white m-auto py-6 border-t gap-4 border-t-white">
          <div>E-CANTEEN</div>
          <div className=" py-4 space-y-2">
            <p>Links</p>
            <ul className="flex gap-8">
              <li>Foods</li>
              <li>Snacks</li>
              <li>Drinks</li>
            </ul>
          </div>
          <div className="w-max m-auto  py-4">
            <strong className="!text-opacity-50 opacity-50">
              © E-CANTEEN Pvt. Ltd. 2024
            </strong>
          </div>
        </section>
      </div>
    </div>
  );
}

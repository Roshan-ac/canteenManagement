import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const serviceData = [
  {
    title: "Appetizers",
    id: "FD457802",
    image: "/images/Appetizers.jpg",
    discription:
      "A food or drink that stimulates the appetite and is usually served before a meal",
    link: "/foods/FD457802",
    children: [
      {
        title: "test",
        discription: "sdkfjd dsjfksjf",
        image: "/images/Appetizers.jpg",
      },
      {
        title: "test",
        discription: "sdkfjd dsjfksjf",
        image: "/images/Appetizers.jpg",
      },
      {
        title: "test",
        discription: "sdkfjd dsjfksjf",
        image: "/images/Appetizers.jpg",
      },
    ],
  },

  {
    title: "Entrees",
    id: "FD45G4T802",
    image: "/images/Entrees.jpg",
    discription:
      "An entree is the main dish served at a typical 3 or 5-course meal in North America.",
    link: "/foods/FD45G4T802",
    children: [
      {
        title: "test",
        discription: "sdkfjd dsjfksjf",
        image: "/images/Appetizers.jpg",
      },
      {
        title: "test",
        discription: "sdkfjd dsjfksjf",
        image: "/images/Appetizers.jpg",
      },
      {
        title: "test",
        discription: "sdkfjd dsjfksjf",
        image: "/images/Appetizers.jpg",
      },
    ],
  },
  {
    title: "Sides",
    discription: "A cozy neighborhood eatery serving classic Italian dishes.",
    link: "/foods/Bruno's-bistro",
  },
  {
    title: "Desserts",
    discription:
      "ushi Haven is a modern Japanese restaurant specializing in fresh,",
    link: "/foods/sushi-haven",
  },
  {
    title: "Beverages",
    discription: "A cozy neighborhood eatery serving classic Italian dishes.",
    link: "/foods/Bruno's-bistro",
  },
];
const index = () => {
  const Param = useParams();
  const result = serviceData.filter((value) => value.id === Param?.food)[0];
  const [serviceDataItems, setserviceDataItems] = useState();

  useEffect(() => {
    console.log(serviceDataItems);
    setserviceDataItems(result);
  }, []);
  console.log(result);

  return (
    <div className=" w-[50%] m-auto my-6">
      <div className=" flex items-start  gap-6">
        <div className=" space-y-4">
          <h1 className=" font-bold text-3xl leading-10">{result.title}</h1>
          <h2>{result.discription}</h2>
        </div>
        <Image
          src={result.image}
          alt=""
          height={300}
          width={300}
          className=" rounded-lg overflow-hidden"
        />
      </div>
      <div>
        {serviceDataItems?.children ? (
          serviceDataItems?.children.map((item) => (
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt=""
                height={50}
                width={50}
                className=" rounded-lg overflow-hidden"
              />
              <div className="">
                <h4>{item.title}</h4>
                <h4>{item.title}</h4>
              </div>
            </div>
          ))
        ) : (
          <>loading..</>
        )}
      </div>
    </div>
  );
};

export default index;

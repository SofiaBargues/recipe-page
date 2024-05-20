import Image from "next/image";
import omelett from "@/images/image-omelette.jpeg";
import serif from "@/fonts/young-serif";

export default function Home() {
  return (
    <div className="flex justify-center h-screen w-screen bg-[#f3e5d8]">
      <div className="h-[797px] w-[351px] rounded-xl p-[17px]  m-auto bg-white">
        <Image alt="omellet" src={omelett} className="rounded-xl"></Image>
        <div className="flex flex-col  m-2 gap-2">
          <h1 className="text-black font-sans">Simple Omelette Recipe</h1>
          <p className="text-[#8c8886] text-[7.5px] text-balance font-sans">
            An easy and quick dish. perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection. optionally filled with
            your choice of cheese. vegetables. or meats.
          </p>
        </div>
        <div className="bg-[#efe6ed] rounded-md p-2">
          <h3 className="text-[#7a3f5a] text-sm mb-2 font-bold">
            Preparation time
          </h3>
          <ul className="list-disc text-[#7a3f5a] flex flex-col gap-2 mx-5 text-[9px]">
            <li>
              <p className=" text-[#8c8886]">
                <span className="font-bold">Total:</span> Approximately minutes
              </p>
            </li>
            <li>
              <p className=" text-[#8c8886]">
                <span className="font-bold">Preparation:</span> 5 minutes
              </p>
            </li>
            <li>
              <p className=" text-[#8c8886]">
                <span className="font-bold">Cooking:</span> 5 minutes
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

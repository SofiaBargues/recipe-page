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
        <div className="my-3">
          <h3 className="text-[#714033] text-sm mb-2 font-bold">Ingredients</h3>
          <ul className="list-disc text-[#714033] flex flex-col gap-2 mx-5 text-[9px]">
            <li>
              <p className=" text-[#8c8886]">2-3 large eggs</p>
            </li>
            <li>
              <p className=" text-[#8c8886]">Salt, to taste</p>
            </li>
            <li>
              <p className=" text-[#8c8886]">Pepper, to taste</p>
            </li>
            <li>
              <p className=" text-[#8c8886]">1 tablespoon of butter or oil</p>
            </li>
            <li>
              <p className=" text-[#8c8886]">
                Optional fillings: cheese. diced vegetables, cooked meats, herbs
              </p>
            </li>
          </ul>

          <div className="rounded-md p-2">
            <h3 className="text-[#7a3f5a] text-sm mb-2 font-bold">
              Instructions
            </h3>
            <ul className="list-decimal text-[#7a3f5a] flex flex-col gap-2 mx-5 text-[9px]">
              <li>
                <p className=" text-[#8c8886]">
                  <span className="font-bold"> Beat the eggs:</span>In a bowl.
                  beat the eggs with a pinch of salt and pepper until they ore
                  well mixed. You can add a tablespoon of water or milk for a
                  duffer texture.
                </p>
              </li>
              <li>
                <p className=" text-[#8c8886]">
                  <span className="font-bold"> Heat the pan:</span> Place a
                  non-stick frying pan over medium heat and add butter or oil.
                </p>
              </li>
              <li>
                <p className=" text-[#8c8886]">
                  <span className="font-bold">Cook the omelette:</span>Once the
                  butter is melted and bubbling, pour in the eggs. Tilt the pan
                  to ensure the eggs evenly coat the surface.
                </p>
              </li>
              <li>
                <p className=" text-[#8c8886]">
                  <span className="font-bold"> Add fillings (optional):</span>
                  hen the eggs begin to set at the edges but are still slightly
                  runny in the middle, sprinkle your chosen fillings over one
                  half of the omelette.
                </p>
              </li>
              <li>
                <p className=" text-[#8c8886]">
                  <span className="font-bold"> Fold and serve:</span>As the
                  omelette continues to cook. carefully lift one edge and fold
                  it over the fillings, Let it cook for another minute. then
                  slide it onto a plate.
                </p>
              </li>
              <li>
                <p className=" text-[#8c8886]">
                  <span className="font-bold"> Enjoy:</span> Serve hot. with
                  additional salt and pepper if needed.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

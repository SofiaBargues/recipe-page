import Image from "next/image";
import omelett from "@/images/image-omelette.jpeg";
// import serif from "@/fonts/young-serif";

function SectionTitle({ title }: { title: string }) {
  return (
    <h3 className="text-[#804331] text-sm  font-serif font-bold mb-3">
      {title}
    </h3>
  );
}

export default function Home() {
  return (
    <div className="flex xs:justify-center h-screen w-screen xs:bg-[#f3e5d8]">
      <div className="flex flex-col gap-3  xs:h-[797px] h-full xs:w-[351px] w-full rounded-xl xs:p-[20px]  xs:m-auto bg-white">
        <Image
          alt="omellet"
          src={omelett}
          className="xs:rounded-xl xs:p-0 "
        ></Image>
        <div className="px-4 xs:px-0 flex flex-col gap-3 ">
          <div className="flex flex-col">
            <h1 className="text-black text-lg  font-serif font-bold">
              Simple Omelette Recipe
            </h1>
            <p className="text-[#8c8886] text-[7.5px] text-balance font-sans">
              An easy and quick dish. perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection. optionally
              filled with your choice of cheese. vegetables. or meats.
            </p>
          </div>
          <div className="bg-[#fdf1fb] rounded-md p-3">
            <h3 className="text-[#782b4f] text-[9px] mb-2 font-extrabold ">
              Preparation time
            </h3>
            <ul className="list-disc text-[#782b4f] flex flex-col gap-1 mx-5 text-[7.5px]">
              <li>
                <p className=" text-[#8c8886]">
                  <span className="font-bold">Total:</span> Approximately
                  minutes
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
          <div className="my-">
            <SectionTitle title="Ingredients"></SectionTitle>

            <ul className="list-disc text-[#804331] flex flex-col pl-3 m-1 gap-2  text-[7px] leading-none">
              <li>
                <p className=" text-[#8c8886] ">2-3 large eggs</p>
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
                  Optional fillings: cheese. diced vegetables, cooked meats,
                  herbs
                </p>
              </li>
            </ul>
          </div>
          <hr />
          <div className="">
            <SectionTitle title="Instructions"></SectionTitle>
            <ul className="list-decimal m-2 font-bold leading-3 text-[#804331]  flex flex-col text-[7px]">
              <li>
                <p className=" text-[#64615f] font-normal pl-1.5">
                  <span className="font-bold "> Beat the eggs:</span>In a bowl.
                  beat the eggs with a pinch of salt and pepper until they ore
                  well mixed. You can add a tablespoon of water or milk for a
                  duffer texture.
                </p>
              </li>
              <li>
                <p className=" text-[#64615f] font-normal pl-1.5">
                  <span className="font-bold"> Heat the pan:</span> Place a
                  non-stick frying pan over medium heat and add butter or oil.
                </p>
              </li>
              <li>
                <p className=" text-[#64615f] font-normal pl-1.5">
                  <span className="font-bold">Cook the omelette:</span>Once the
                  butter is melted and bubbling, pour in the eggs. Tilt the pan
                  to ensure the eggs evenly coat the surface.
                </p>
              </li>
              <li>
                <p className=" text-[#64615f] font-normal pl-1.5">
                  <span className="font-bold"> Add fillings (optional):</span>
                  hen the eggs begin to set at the edges but are still slightly
                  runny in the middle, sprinkle your chosen fillings over one
                  half of the omelette.
                </p>
              </li>
              <li>
                <p className=" text-[#64615f] font-normal pl-1.5">
                  <span className="font-bold"> Fold and serve:</span>As the
                  omelette continues to cook. carefully lift one edge and fold
                  it over the fillings, Let it cook for another minute. then
                  slide it onto a plate.
                </p>
              </li>
              <li>
                <p className=" text-[#64615f] font-normal pl-1.5">
                  <span className="font-bold"> Enjoy:</span> Serve hot. with
                  additional salt and pepper if needed.
                </p>
              </li>
            </ul>
          </div>
          <hr />
          <div>
            <h1 className="text-[#804331] text-sm  font-serif font-bold">
              Nutrition
            </h1>
            <p className="text-[7px] my-2">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table className="table-auto p-2 text-[7px] w-full">
              <tbody>
                <tr className="border-b border-b-slate-100 h-4">
                  <td className="pl-3 ">Calories</td>
                  <td className="font-extrabold text-[#804331]">277kcal</td>
                </tr>
                <tr className=" h-6 border-b border-b-slate-100 ">
                  <td className="pl-3 ">Carbs</td>
                  <td className="font-extrabold text-[#804331]">0g</td>
                </tr>
                <tr className=" h-6 border-b border-b-slate-100 ">
                  <td className="pl-3 ">Protein</td>
                  <td className="font-extrabold text-[#804331]">20g</td>
                </tr>
                <tr className=" h-6  border-b-slate-100 ">
                  <td className="pl-3 ">Fat</td>
                  <td className="font-extrabold text-[#804331]">22g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

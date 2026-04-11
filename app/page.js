import Business from "@/src/sections/Business";
import Discover from "@/src/sections/Discover";
import Hero from "@/src/sections/Hero";
import Insurance from "@/src/sections/Insurance";
import Looking from "@/src/sections/Looking";
import Picks from "@/src/sections/Picks";
import Recent from "@/src/sections/Recent";


export default function Home() {
  return (
<>
<Hero />
<Looking />
<Picks />
<Insurance />
<Discover/>
<Business />
<Recent recentBg='py-20 flex items-center flex-col relative' twistStyle='absolute right-88 top-25' white='text-[#17253F]'/>
</>
  );
}

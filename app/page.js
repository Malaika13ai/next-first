import Business from "@/sections/Business";
import Discover from "@/sections/Discover";
import Hero from "@/sections/Hero";
import Insurance from "@/sections/Insurance";
import Looking from "@/sections/Looking";
import Picks from "@/sections/Picks";
import Recent from "@/sections/Recent";


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

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
<Recent />
</>
  );
}

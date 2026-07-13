
import { Hero } from "./Hero";
import { Modes } from "./Modes";
// import { Integrations } from "@/sections/Integrations";
// import { Scheduling } from "@/sections/Scheduling";
// import { Install } from "@/sections/Install";

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen text-left">
      <Hero />
      <Modes />
      {/* <Integrations />
      <Scheduling />
      <Install /> */}
 
    </div>
  );
}

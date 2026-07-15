
import { Hero } from "./(landing)/Hero";
import { Modes } from "./(landing)/Modes";
import { Integrations } from "./(landing)/Integration";
import { Scheduling } from "./(landing)/Scheduling";
import { Install } from "./(landing)/Install";

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen text-left">
      <Hero />
      <Modes />
      <Integrations />
      <Scheduling />
      <Install />
 
    </div>
  );
}

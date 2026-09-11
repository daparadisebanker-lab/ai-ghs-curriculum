import { Nav } from "@/components/Nav";
import { Cover } from "@/components/sections/Cover";
import { Opportunity } from "@/components/sections/Opportunity";
import { Architecture } from "@/components/sections/Architecture";
import { PedagogicalLayer } from "@/components/sections/PedagogicalLayer";
import { GovernanceLayer } from "@/components/sections/GovernanceLayer";
import { Interlock } from "@/components/sections/Interlock";
import { Roadmap } from "@/components/sections/Roadmap";
import { Team } from "@/components/sections/Team";
import { Close } from "@/components/sections/Close";

export default function Home() {
  return (
    <main>
      <Nav />
      <Cover />
      <Opportunity />
      <Architecture />
      <PedagogicalLayer />
      <GovernanceLayer />
      <Interlock />
      <Roadmap />
      <Team />
      <Close />
      <footer className="border-t border-rule bg-paper px-6 py-8 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        Paradise Education Group · Paradise Global High School · Prepared for the Senior Academic Advisor
      </footer>
    </main>
  );
}

import LogoGrande from "@/components/templates/LogoGrande";

import Link from "next/link";

export default function Home() {

  return (
    <div className="
      flex flex-col
      justify-center items-center
      min-h-screen
      bg-[url('/background-inicio.svg')] bg-cover
      gap-10
    ">
      <div className="
        flex flex-col items-center gap-4
      ">
        <LogoGrande />
        <p className="
          text-zinc-500 text-center font-light
          w-96
          leading-6
          select-none
        ">
          Crie e gerencie o convite do seu evento de forma rápida e fácil sem complicações!
        </p>
      </div>
      <Link href={'/evento'}
        className="botao azul text-lg uppercase">
        Crie o seu evento
      </Link>
    </div>
  );
}

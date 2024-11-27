/*
  Warnings:

  - You are about to drop the `Convidado` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Convidado" DROP CONSTRAINT "Convidado_eventoId_fkey";

-- DropTable
DROP TABLE "Convidado";

-- CreateTable
CREATE TABLE "convidados" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT,
    "confirmado" BOOLEAN NOT NULL,
    "qtdeAcompanhantes" INTEGER NOT NULL,
    "possuiAcompanhantes" BOOLEAN NOT NULL,
    "eventoId" TEXT,

    CONSTRAINT "convidados_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "convidados" ADD CONSTRAINT "convidados_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "eventos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

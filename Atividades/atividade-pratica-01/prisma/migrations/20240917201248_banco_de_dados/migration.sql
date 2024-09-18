-- CreateTable
CREATE TABLE "TiposSanguineos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "fator" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Estados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Cidades" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "estadoId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Cidades_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "Estados" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pessoas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT,
    "rg" TEXT NOT NULL,
    "cidadeId" INTEGER,
    "tipoId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Pessoas_cidadeId_fkey" FOREIGN KEY ("cidadeId") REFERENCES "Cidades" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Pessoas_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "TiposSanguineos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LocaisColeta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT,
    "cidadeId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "LocaisColeta_cidadeId_fkey" FOREIGN KEY ("cidadeId") REFERENCES "Cidades" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Doacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pessoaId" INTEGER NOT NULL,
    "localId" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Doacoes_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Doacoes_localId_fkey" FOREIGN KEY ("localId") REFERENCES "LocaisColeta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Pessoas_rg_key" ON "Pessoas"("rg");

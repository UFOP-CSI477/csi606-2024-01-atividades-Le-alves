const { PrismaClient } = require('@prisma/client');

// Cria uma instância do PrismaClient
const prisma = new PrismaClient();

module.exports = { prisma };
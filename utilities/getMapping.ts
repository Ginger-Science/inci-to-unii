"use server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getMapping = async (ingredient: string) => {
    const mapping = await prisma.mapping.findFirst({
        where: {
          inciName: {
            equals: ingredient,
          }
        }
      });

      return mapping
}
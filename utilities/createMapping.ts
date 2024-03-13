"use server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createMapping = async (inciName: string, preferredName: string, uniiCode: string) => {
    const mapping = await prisma.mapping.create({
        data: {
            inciName,
            preferredName,
            uniiCode,
        }
    });

    console.log(mapping);
}
import { getSession } from "next-auth/react"
import { PrismaClient, Prisma } from '@prisma/client'


export default async function handler(req, res) {

  const session = await getSession({ req });

  if (session && session.user) {
    const prisma = new PrismaClient()
    let cvId = req.body.id;

    const cv = await prisma.cv.findUnique({
      where: {
        id: cvId,
      },
    })

    try {
      let userId = cv.userId;
      delete cv.id
      delete cv.userId
      const createCv = await prisma.cv.create({
        data: {
          user: { connect: { id: userId } },
          ...cv
        }
      })
      res.status(200).json({message:"Duplicated",status:"success"})
    } catch (error) {
      res.status(200).json({message:"failed",status:"error"})
    } finally {
      await prisma.$disconnect()
    }

    prisma.$disconnect;
  } else {
    res.status(200).json({message:"Unauthenticated",status:"error"})
  }
}
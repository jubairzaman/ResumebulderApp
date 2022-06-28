import { getSession } from "next-auth/react"
import { PrismaClient, Prisma } from '@prisma/client'


export default async function handler(req, res) {

  const session = await getSession({ req });

  if (session && session.user) {
    const prisma = new PrismaClient()
    let cvId = req.body.id;

    console.log(cvId)

    try {
      const deleteUser = await prisma.cv.delete({
        where: {
          id: cvId,
        },
      })
      res.status(200).json({message:"Deleted",status:"success"})
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
import { getSession } from "next-auth/react"
import { PrismaClient, Prisma } from '@prisma/client'


export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const session = await getSession({ req });





  if (session && session.user) {
    // const getUser = await prisma.user.findUnique({
    //   where: {
    //     id: session.user.id,
    //   },
    //   include: {
    //     cvs: true,
    //   },
    // })
    // console.log(getUser);

    const cvs = await prisma.cv.findMany({
      where: {
        userId: session.user.id
      }
    })


    await prisma.$disconnect;
    res.status(200).json(cvs)
    // try {
    //   const createCv = await prisma.cv.create({ data: {
    //     //userId: session.user.id,
    //     user: { connect: { id: session.user.id } },
    //     templateId: '1',
    //     firstName: "Jubair",
    //     lastName:"Jaman"
    //   } })
    // } catch (error) {
    //   console.log(error)
    // }finally{
    //   await prisma.$disconnect()
    // }
  } else {
    res.status(200).json({})
  }

}
const bcrypt = require('bcrypt');
import  { PrismaClient, Prisma } from "@prisma/client"
export default async function handler(req, res) {
  const salt = await bcrypt.genSalt(10);
 

  //const validPassword = await bcrypt.compare(body.password, user.password);
  // now we set user password to hashed password
  const password = await bcrypt.hash('12345678', salt);

    res.status(200).json(password)
  }
import User from "../../models/user"
import Session from "../../models/session"
export default async function handler(req, res) {
    let chats = await Session.where({'sessionToken':'1111'}).delete();
    console.log(chats);
    
    res.status(200).json(['sdsd'])
  }
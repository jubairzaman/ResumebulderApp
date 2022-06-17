/** @return { import("next-auth/adapters").Adapter } */
import { data } from "autoprefixer";
import User from "../models/user";
import User from "../models/Session";
export default function MyAdapter(client, options = {}) {
  return {
    async createUser(user) {
      return await User.create({
        name: user.name,
        email: user.email,
        image: user.image,
        emailVerified: user.emailVerified ?? "",
      })

    },
    async getUser(id) {
      let chats = await User.where({ 'id': id }).get()
      if (chats.length) {
        var resultArray = Object.values(JSON.parse(JSON.stringify(chats[0])))
        return resultArray;
      } else {
        return [];
      }

    },
    async getUserByEmail(email) {
      let chats = await User.where({ 'email': email }).get()
      if (chats.length) {
        var resultArray = Object.values(JSON.parse(JSON.stringify(chats[0])))
        return resultArray;
      } else {
        return [];
      }
    },
    async getUserByAccount({ providerAccountId, provider }) {
      return
    },
    async updateUser(user) {
      return await User.update(...data, { id : data.id });
    },
    async deleteUser(userId) {
      return await User.delete(userId);
    },
    async linkAccount(account) {
      return
    },
    async unlinkAccount({ providerAccountId, provider }) {
      return
    },
    async createSession({ sessionToken, userId, expires }) {
      return
    },
    async getSessionAndUser(sessionToken) {
      return
    },
    async updateSession({ sessionToken }) {
      return
    },
    async deleteSession(sessionToken) {
      return await Session.where({'sessionToken':sessionToken}).delete();
    },
    async createVerificationToken({ identifier, expires, token }) {
      return
    },
    async useVerificationToken({ identifier, token }) {
      return
    },
  }
}
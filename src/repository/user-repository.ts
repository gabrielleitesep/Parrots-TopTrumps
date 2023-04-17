import prisma from "../config/database.js"

export async function postUser(email: string, hashPassword: string, username: string) {
    return prisma.users.create({
        data: {
          email: email,
          password: hashPassword,
          username: username,
        },
      })
}

export async function getUserByEmail(email: string) {
    return prisma.users.findFirst({
        where: {
          email: email,
        },
      })
}

export async function postSession(token: string, user_id: number) {
    return prisma.sessions.create({
        data: {
          token: token,
          user_id: user_id,
        },
      })
}

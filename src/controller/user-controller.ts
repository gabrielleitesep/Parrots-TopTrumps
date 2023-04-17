import { Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";
import bcrypt from "bcrypt";
import { postSession, getUserByEmail, postUser } from "../repository/user-repository.js"
export async function signUp(req: Request, res: Response){

    const { email, password, username } = req.body

    const hashPassword = bcrypt.hashSync(password, 5);

    if (!username || !email || !password) {
        return res.sendStatus(400)
    }

    try {
        await postUser(email, password, username);
        res.sendStatus(201);

    } catch (err) {

        console.log(err);
        res.sendStatus(500);
    }
}

export async function signIn(req: Request, res: Response){

    const { email, password } = req.body;
    const token = uuidV4();

    if ( !email || !password ) {
        return res.sendStatus(400)
    }

    try {
        const user = (await getUserByEmail(email));
        if (!user) {
            return res.sendStatus(401);
        }

        const encrypted = bcrypt.compareSync(password, user.password);
        if (!encrypted) {
            return res.sendStatus(401);
        }
        const userId = user.id;

        await postSession(token, userId);

        res.send({ token, user:{id:user.id, name:user.username} });
        
    } catch (err) {
        console.log(err.message)
        res.status(500).send(err.message);
    }
}

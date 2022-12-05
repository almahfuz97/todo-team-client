import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {
    const { db } = await connectToDatabase();
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
    const todo = req.body;
    const data = await db.collection("todos").insertOne(todo);

    res.status(200).json(data)
}

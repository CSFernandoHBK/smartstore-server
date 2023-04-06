import axios from "axios";
import { Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "../middlewares";

export async function imageUpload(req: AuthenticatedRequest, res: Response){
    const {userId} = req;
    const image = req.body.image;
    const clientId = process.env.IMGUR_CLIENT_ID;

    try{
        const result = await axios({
            url: "https://api.imgur.com/3/image",
            method: "post",
            headers: {
                Authorization: `Client-ID ${clientId}`,
                "Content-Type": "multipart/form-data"
            },
            data: {
                image: image
            }
        })

        const imageUrl = result.data.data.link;
        console.log(`Imagem hospedada com sucesso: ${imageUrl}`);

        res.status(200).send({ imageUrl });
    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

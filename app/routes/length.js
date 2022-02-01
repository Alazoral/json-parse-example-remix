import {json} from "remix";

export const action = async ({request}) => {
    const requestText = await request.text()
    return json({length: requestText.length})
}
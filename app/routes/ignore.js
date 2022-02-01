import {json} from "remix";

export const action = async ({request}) => {
    const requestText = await request.text()
    return json({status: 'All Good from not parsing', length: requestText.length})
}
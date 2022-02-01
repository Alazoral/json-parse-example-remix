import {json} from "remix";

export const action = async ({request}) => {
    const requestText = await request.text()
    const requestJson = JSON.parse(requestText)
    return json({count: requestJson.data.length})
}
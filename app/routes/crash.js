import {json} from "remix";

export const action = async ({request}) => {
    const requestText = await request.text()
    const requestJson = JSON.parse(requestText)
    return json({status: 'All Good from parsing', count: requestJson.data.length})
}
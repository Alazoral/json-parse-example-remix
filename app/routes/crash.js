import {json} from "remix";

export const action = async ({request, params}) => {
    const requestText = await request.text()
    const requestJson = JSON.parse(requestText)
    return json({ status: 'All Good', count: requestJson.data.length })
}
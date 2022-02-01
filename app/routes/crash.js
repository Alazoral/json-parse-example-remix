import {json} from "remix";
import fs from 'fs/promises'
import {join} from "path";

export const loader = async () => {
    const loadedText = await fs.readFile(join(process.cwd(), 'data', 'crash.json'), 'utf8')
    const requestJson = JSON.parse(loadedText)
    return json({status: 'All Good from FS', count: requestJson.data.length})
}
export const action = async ({request, params}) => {
    const requestText = await request.text()
    const requestJson = JSON.parse(requestText)
    return json({status: 'All Good from Body', count: requestJson.data.length})
}
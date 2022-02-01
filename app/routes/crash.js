import {json} from "remix";
import fs from 'fs/promises'
import {join} from "path";

export const loader = async () => {
    const filename = join(__dirname, '..', '..', 'data', 'crash.json')
    console.log('Opening filename', filename)
    const loadedText = await fs.readFile(filename, 'utf8')
    const requestJson = JSON.parse(loadedText)
    return json({status: 'All Good from FS', count: requestJson.data.length})
}
export const action = async ({request, params}) => {
    const requestText = await request.text()
    const requestJson = JSON.parse(requestText)
    return json({status: 'All Good from Body', count: requestJson.data.length})
}
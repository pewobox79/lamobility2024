import * as fs from 'fs'
import { join } from 'path'

export const getFileData = (dirname) => {
    console.log("dirname", dirname)
    fs.readFile(join(dirname, '/test', 'testDatei.txt'), 'utf-8', (err, data) => {

        if (err) throw err;
        console.log("read", data)

    })
}
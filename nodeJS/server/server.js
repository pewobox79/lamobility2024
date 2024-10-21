import http from 'http';
import * as fs from 'fs';
import { join } from 'path';
import { __dirname } from '../index.js';
console.log("dirname server", __dirname)
http.createServer((req, res) => {

    if (req.url === "/") {

        //read file and render html in return
        fs.readFile(join(__dirname, '/src/html', 'Homepage.html'), 'utf-8', (err, data)=>{

            if(err) throw err;

            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })

    } else if (req.url === "/aboutme") {
        res.write("das bin ich")
        res.end()
    } else if (req.url === "/api/user") {

        const user = {
            name: "peter",
            age: "45"
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(user))
        res.end()

    } else {
        res.write("page not found")
        res.end()
    }


}).listen(3333, () => console.log("auf port 3333"))
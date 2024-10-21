import user from './src/user.js'
/* import Person  from './src/greeting.js'

console.log("mein User", user)
const person1 = new Person("max", "33")
person1.greeting() */



import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import * as fs from 'fs';

// bekomme die aktuelle URL und wandel zu pfad um!
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("mein Directory name", __dirname)

//neue directory schreiben
/* fs.mkdir(join(__dirname, '/test'), {}, err => {

    if(err) throw err;
    //ausgeschriebene version des errors
    /* if(err) {
        return new Error("error")
    } 
    console.log("path created")

}) */

//schreiben wir datei in directory
//write => datei beschreiben || appendFile => aktuell datei mit neuem text erweitern

fs.appendFile(join(__dirname, '/test', 'testDatei.txt'), JSON.stringify(user), err => {
    if(err) throw err;
    console.log("file written")
})

//os system helper
import { platform, totalMemoryData } from './utils/helper.js';
import { getFileData } from './utils/fsReadHelper.js';

//read file helper
getFileData(__dirname);
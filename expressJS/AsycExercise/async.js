const posts = [
    { title: "first post" },
    { title: "second post" }
];

//die funktion bleibt wie die von callback
function getPosts() {
    setTimeout(() => {

        let output = ""
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output

    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push(post);

            //eine art error checking
            const error = false;

            if (!error) {
                resolve()
            } else {
                reject("error: something went wrong")
            }

        }, 2000)

    })
}

async function init() {
const clock = document.getElementById("clock");
const error = document.getElementById("error");
const heading = document.getElementById("heading")

clock.style.display = "block";
heading.style.display = "none"
    try{
        
        await createPost({ title: "post3" });
        getPosts()

    }catch(err){
        error.style.display = "block"
        console.log(err)

    }finally{
        clock.style.display = "none"
        heading.style.display = "block"
    }
    
}

init()
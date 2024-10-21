const posts = [
    { title: "post 1" },
    { title: "post2" }
]

function getPosts() {

    setTimeout(() => {

        let output = ""
        posts.forEach((post) => {

            output += `<li>${post.title}</li>`

        })
        document.body.innerHTML = output
    }, 1000)
}

getPosts()

function createPost(post){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            posts.push(post)

            const error = false;
            if(!error){
                resolve()
            }else{
                reject("something went wrong")
            }
        }, 2000)

    })
}

createPost({title: "post 3 promises"}).then(getPosts).catch(err => console.log(err))
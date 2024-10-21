//callbacks
//setup post

const posts =[
    {title: "post 1"},
    {title: "post2"}
]

function getPosts(){

    setTimeout(()=>{

        let output = ""
        posts.forEach((post)=>{

            output += `<li>${post.title}</li>`

        })
        document.body.innerHTML = output
    }, 1000)
}


function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post)
        callback()
    }, 2000)
}

createPost({title: "post 3"}, getPosts)
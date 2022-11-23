const posts=[

            {title:'Post-One',body:'This is the post one',createdAt:new Date().getTime()},
            {title:'Post-Two',body:'This is the post two',createdAt:new Date().getTime()}
        ]
         let intervalId=0
        function getposts() {
            clearInterval(intervalId)
            setInterval(()=>{
            setTimeout(() => {
            let output=''
            for(let i=0;i<posts.length;i++) {
            output += `<li>${posts[i].body} last updated ${Math.floor(new Date().getTime()-posts[i].createdAt)/1000}</li>`
            }
            document.body.innerHTML = output
            },1000)
            })
        }
        function createPosts(post,callback) {
           setTimeout(() =>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
           },2000)
        }
        createPosts({title:'Third Post',body:'This is the post three'},getposts)
        function create4thpost(post,callback1) {
        setTimeout(() =>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback1();
           },3000)
        }
        create4thpost({title:'Fourth Post',body:'This is the post four'},createPosts)
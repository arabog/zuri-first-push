/*
The aim of this task is to test how well you can research. You have learned about 
NodeJS file system. Read the following instructions carefully.

1. Create a script file that fetches data from JSON PLACEHOLDER POSTS
2. Write the JSON data gotten from the API to a file called posts.json or posts.txt
3. posts.json or post.txt should be in a directory file called result.
4. Create a github repository and push your work.

Submit the github link. Ensure that your repository isn't a private repository.
HINT: You can choose to use the Axios package if you want. I'd advise not to. 
If you choose to, do not push node_modules to your repo.
*/ 
const fetch = require('node-fetch')
const fs = require('fs')
const http = require('http')

async function getData() {
          let fetchData = await fetch("http://jsonplaceholder.typicode.com/posts")
         let data = await fetchData.json()
//          .then(data => {
                   fs.writeFile('result/posts.json', JSON.stringify(data), (err) => {
                             if(err) throw err
          
                             console.log('File created')
                    //          console.log(data)
                   })

//          })


}

getData()


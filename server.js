
const http = require('http');
const User = require('./models/User');

var users = {users: []}
users.users.push(new User("Mina", "pwsz"));
users.users.push(new User("dina", "pwsz"));
users.users.push(new User("zina", "pwsz"));

server = http.createServer((req,res) =>{
    console.log(req.url);
    if(req.url === '/test'){
        res.write(JSON.stringify(users));
        res.end();
    }

    if(req.url === '/register'){}
    if(req.url === '/login'){}
    if(req.url === '/addList'){}
    if(req.url === '/addListItem'){}
    if(req.url === '/removeListItem'){}
    if(req.url === '/'){}
    if(req.url === '/'){}
    if(req.url === '/'){}
    if(req.url === '/'){}
    if(req.url === '/'){}    
});





server.listen(4242);
console.log("server: 4242");

const express = require('express')

const app = express();

const users = [
    {"id":1,
     "name":"shebin"
    },
    {"id":2,
     "name":"twinkle"
    },
    {"id":3,
    "name":"abina"
    },
    {"id":4,
    "name":"jhon"
    }

]

const employess = [
    {"id":1,
     "name":"shebin"
    },
    {"id":2,
     "name":"twinkle"
    },
    {"id":3,
    "name":"abina"
    },
    {"id":4,
    "name":"jhon"
    }
]

//apis

app.get('/', (req,res)=>{
    res.send("hello welcome to server")
})

app.get('/users', (req,res)=>{
    res.json(users)
})

app.get('/employees', (req,res)=>{
    res.json(employess)
})



app.listen(3006, ()=>{

console.log("server started on port 3006")

})
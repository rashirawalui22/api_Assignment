const express = required('express');
const app = express();

app.use(express.json)

app.listengit 

const user = [
    {id:1, name: 'rashi', age:13}
]//creating object array 

app.get('/api/getUser', (req, res) => {
    res.send(user);
}); 

app.listen
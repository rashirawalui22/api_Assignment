const express = require('express');
const app = express();





const user = [
    {id:1, name: 'rashi', age:13}
]//creating object array 

app.get('/api/getUser', (req, res) => {
    res.json(user);
}); 

app.listen(8000, () => {
    console.log('server is running on port $(port)')
})


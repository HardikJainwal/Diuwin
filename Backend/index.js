const app = require('express') ();

const PORT = 8000;

app.listen(
    PORT,
    () => console.log(`Server running on port ${PORT}`)
);

app.get('/fruits',(req, res) => {
    res.send({
        apple: 2,
        banana: 12
    })
});


//runs on http://localhost:8000/fruits
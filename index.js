const express = require("express");
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'newuser',
    password : 'newpassword',
    database : 'plasterpaintdb'
});

app.get("/api/order_products",(req,res) => {
    pool.query('SELECT * from order_products',(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        console.log(response);
        return res.json(response);
    });
});

app.get("/api/orders",(req,res) => {
    pool.query('SELECT * from orders',(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        console.log(response);
        return res.json(response);
    });
});

app.get("/api/products",(req,res) => {
    pool.query('SELECT * from products',(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        console.log(response);
        return res.json(response);
    });
});

app.get("/api/customers",(req,res) => {
    pool.query('SELECT * from customers',(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        console.log(response);
        return res.json(response);
    });
});

// app.post("/api/addEvent",(req,res) => {

//     const { name, loc, time, desc, genre, img } = req.body;

//     console.log(req.body)

//     let insertQuery = 'INSERT INTO events (artist,location,event_time,event_desc,genre,img) VALUES (?,?,?,?,?,?)';

//     let query = mysql.format(insertQuery,[name, loc, time, desc, genre, img]);

//     pool.query(query,(err, response) => {
//         if(err) {
//             console.error(err);
//             return;
//         }
//         // rows added
//         console.log(response);
//     });

// });

// app.delete("/api/removeEvent",(req,res)=> {

//     let insertQuery = 'DELETE FROM musicevents.events WHERE id = ?';

//     let query = mysql.format(insertQuery,[req.body.event_id]);

//     pool.query(query,(err, response) => {
//         if(err) {
//             console.error(err);
//             return;
//         }
//         // rows added
//         console.log(response);
//     });

// })



app.listen(3000, () => {
    console.log('Server is running at port 3000');
});
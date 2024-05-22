/**
 * CONNECT TO DB
 */

import mysql2 from 'mysql2'
import express from 'express'

const connection = mysql2.createConnection({
    host: "localhost",
    database: "курсова",
    user: "root",
    password: "Rhenjq_Rjlth456@",
});

const app = express();

const PORT = 5000;

app.listen(PORT, ()=> {
    console.log(`SERVER  :  http://localhost:${PORT}`);
    connection.connect((err)=> {
        if (err) throw err;
        console.log("DATABASE CONNECTED");
    });
});

app.use("/all", (req, res)=> {
    const sql_query = 'select * from клієнт'
    connection.query(sql_query, (err, result)=> {
        if(err) throw err;
        res.send(result)
    });

});
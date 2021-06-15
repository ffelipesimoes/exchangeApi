module.exports = (req, res) => {


    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection")
    const userModel = require("../../../db/user");

    const User = mongoose.model("User", userModel);

    /*
    var email = req.params.email

    console.log(email)
    User.find({email : email}).then(a => {

       
        console.log(a);
        res.json(a);
    }).catch(err => {
        console.log(err);
    })

*/



    function auth(req,res, next){
        const authToken = req.headers['authorization'];
    
        if(authToken != undefined){
            const bear = authToken.split(' ');
            const token = bear[1];
            jwt.verify(token, jwtSecret,(err,data) =>{
                if(err){
                    res.status(401);
                    res.json({err: "Token invalido"});
                }else{
                    req.token = token;
                    req.loggedUser = {id: data.id, email: data.email};
                    console.log(data);
                    next();
                }
            });
            
    
        }else{
            res.send(401);
            res.json({err: "Token invalido"});
        }
    
        
       
    }


    var { email, password } = req.body;

    console.log(email, password);

    if (email != undefined) {
        

        var user = User.find({email : email}).then(a => {res.json(a);}).catch(err => {console.log(err);})

        if (user != undefined) {
            if (user.password == password) {

                jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '24h' }, (err, token) => {
                    if (err) {
                        res.status(400);
                        res.json({ err: "Falha interna" });
                    } else {

                        res.status(200);
                        res.json({ token: token });
                    }
                })

            } else {
                res.status(401);
                res.json({ err: "senha errada" });
            }

        } else {
            res.status(404);
            res.json({ err: "O email não existe na base de dados" });
        }


    } else {
        res.status(400);
        res.json({ err: "O email enviado é inválido!" });
    }

};

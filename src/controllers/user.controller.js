import User from '../models/user.model.js'

async function addUser(req,res){
    try {
        let newUser = req.body;
        newUser = await User.create(newUser)
        res.status(201).send(newUser)
    } catch (error) {
        console.log("Error adding user : ", error)
        res.status(400).send({"message":"User not added", "error" : error.message})
    }
}

async function getAllUser(req,res){
    try {
        let users = await User.find({});
        res.status(200).send(users)
    } catch (error) {
        console.log("Error adding user : ", error)
        res.status(400).send({"message":"User not found", "error" : error.message})
    }
}

async function getUserById(req,res){
    try {
        let {id} = req.params
        let user = await User.findById({_id : id})
        res.status(201).send(user)
    } catch (error) {
        console.log("Error adding user : ", error)
        res.status(400).send({"message":"User not found", "error" : error})
    }
}

async function searchUser(req,res) {
    try {
        let {query} = req.params;
        let user = null;
        if(isNaN(query)){
            user = await User.find({$or : [{email : query}, {sic : query}]})
        }else{
            user = await User.find({mobile : query})
        }

        if(user){
            res.send(user);
        }
        else{
            res.status(404).send({message : "User not Found"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({message : "User not found", error : error});
    }
}

export {addUser, getAllUser, getUserById,searchUser}
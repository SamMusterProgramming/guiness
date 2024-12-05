const express = require('express')
const cors = require('cors')
const connectDB = require('./db.js')
const postModel = require('./models/postModel.js')
const userModel = require('./models/userModel.js')
const userRoutes = require('./route/user.js')

const app = express();
const PORT = 8000 ; 
app.use(express.json())
app.use(cors())
connectDB();


app.use('/users', userRoutes);

 
// router = express.Router();  
app.get("/timeline/:userId",async(req,res)=>{
   try {
      
      //const currentUser = await userModel.findOne({id:req.params.userId});
      const userPosts = await postModel.find({user_id:req.params.userId});
      if (userPosts) return res.status(200).json(userPosts)
      else return res.status(400).json("could't find any post");
   } catch(error)
   {
      console.log(error)  
   }

})


app.get("/",async(req,res)=>{
   const users = await userModel.find()
  res.status(200).json(users)
})

app.get("/user/:userId", async(req,res)=>{
   const  user = await userModel.findOne({id:req.params.userId})
   res.status(200).json(user)
})

app.post('/post', async (req, res) => {
   try {
       const newPost = new postModel(
         {
            link: req.body.link,
            description: req.body.description,
            user_id: req.body.user_id
         })
       
       await newPost.save();
     
   } catch (err) {
       console.error('Error saving user data:', err);
       res.status(500).render('index', { error: 'Error saving user data' });
   }
});

app.get('/register', async (req, res) => {
   try {
      const  user = await userModel.findOne({id:req.params.userId}) 
       await newUser.save();
     
   } catch (err) {
       console.error('Error saving user data:', err);
       res.status(500).render('index', { error: 'Error saving user data' });
   }
});



app.listen(8000 ,() => {
   console.log( "running on port 8080")
}) 

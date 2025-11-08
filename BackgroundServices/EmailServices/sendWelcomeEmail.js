import User from '../models/user.model.js';
import dotenv from 'dotenv';
dotenv.config();
import sendMail from '../helpers/sendMail.js';
import ejs from 'ejs';

const sendWelcomeEmail = async(req,res)=>{

    const users = await User.find({status:0});
    if(users.length > 0){
       for(let user of users){
        ejs.renderFile(
            'template/welcome.ejs',
            {name:user.name},
            async(err,data)=>{
              
                let messageoption = {
                    from:process.env.Email,
                    to :user.email,
                    subject:'Welcome to BeautyBliss',
                    html: data,
                }
                 try {
            sendMail(messageoption);
            await User.findByIdAndUpdate(user._id, { $set: { status: 1 } });
          } catch (error) {
            console.log(err);
          }
        }
      );
    }
  }
};

export default sendWelcomeEmail
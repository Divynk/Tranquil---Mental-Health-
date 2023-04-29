const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);
// mongoose.connect(process.env.url,{
//     useNewUrlParser: true,//you have to specify the portno...mongoose changed this so by making false user can go to previous version where port no. is not required
//     //useCreateIndex:true,//avoid depracation warnings(warnings that notify us that a specific feature (e.g. a method) will be removed soon (usually in the next minor or major version) and should be replaced with something else.)
//     useUnifiedTopology: true// to use new connnection manager of mongoose
// });
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const cloudinary = require('./utils/cloudinary');
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const imageRouter = require('./routes/uploadImage.router');
const projectsRouter = require('./routes/projects.router');
const clientRouter = require('./routes/client.router');
const clienttypeRouter = require('./routes/clienttype.router');
const specialFeatureRouter = require('./routes/specialFeature.router');
const newProjectRouter = require('./routes/newProject.router');
const getProjectRouter = require('./routes/getProject.router');
const estimateCostRouter = require('./routes/estimateCost.router');
const projectscopeRouter = require ('./routes/projectscope.router');
const fullformRouter = require ('./routes/fullform.router');

// Body parser middleware
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/uploadImage', imageRouter);
//app.use('/api/projectsList', projectsListRouter);

app.use('/api/projects', projectsRouter);
app.use('/api/client', clientRouter);
app.use('/api/clienttype', clienttypeRouter);
app.use('/api/add_special_feature', specialFeatureRouter);
app.use('/api/new_project', newProjectRouter);
app.use('/api/get_project', getProjectRouter);
app.use('/api/estimatecost', estimateCostRouter);
app.use('/api/projectscope', projectscopeRouter);
app.use('/api/fullform', fullformRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

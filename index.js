
const express = require('express');
const cors = require('cors');
const authRouter = require('./src/router/authRouter');
const connectDB = require('./src/configs/connectDb');
const errorMiddleHandle = require('./src/middlewares/errorMiddleware');
const userRouter = require('./src/router/userRouter');
const verifyToken = require('./src/middlewares/verifyMiddleware');
const eventRouter = require('./src/router/eventRouter');
// tieuhoyeu01@gmail.com
const app = express();

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

const PORT = 3001;

connectDB();

app.use('/auth', authRouter);
app.use('/events', eventRouter);
app.use('/users', userRouter);
app.use(errorMiddleHandle);

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Sever starting at http://localhost:${PORT}`);
})
import express from "express"
import cors from "cors"
import { userRouter } from './controller/routes/userRouter'
import { taskRouter } from './controller/routes/taskRouter'

const app: Express = express()

app.use(express.json())
app.use(cors())


app.use("/user", userRouter);
app.use("/task", taskRouter);


app.listen(3003, () => {
   console.log("Server running on port 3003")
})
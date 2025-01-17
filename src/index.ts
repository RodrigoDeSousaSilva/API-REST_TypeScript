const express = require("express")

import { appDataSource } from "./data-source"
import routes from "./routes/routes"

appDataSource.initialize().then(()=> {
    const app = express()
    app.use(express.json())
    app.use(routes)

    return app.listen(process.env.PORT)
})
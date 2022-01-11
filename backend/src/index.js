const express = require('express');
const morgan = require('morgan');
const route = require('./routes');
const cors = require('cors');
const app = express();
const port = 5000;
const cors = require('cors')
app.use(
    express.urlencoded({
        extended: true,
<<<<<<< Updated upstream
    }),cors()
=======
    }),
    cors(),
>>>>>>> Stashed changes
);

//HTTP logger
app.use(morgan('combined'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

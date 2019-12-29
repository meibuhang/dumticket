const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const cors = require('cors');
var app = express();
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false
	})
); // support encoded bodies
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(cors({ origin: '*' })); //lintas antar port front and back
// app.use(cors);
const port = 4500;

app.get('/', (req, res) => {
	res.send('Hello Express !');
});

require('./router/user')(app);
require('./router/category')(app);
require('./router/event')(app);
require('./router/order')(app);

//listen to defined port
app.listen(port, () => console.log('App listening at http://', port));

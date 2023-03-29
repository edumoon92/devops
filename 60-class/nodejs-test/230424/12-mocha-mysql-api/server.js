const express = require('express');
const mysql = require('mysql');
const app = express();

// application/json
app.use(express.json());
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const database = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get('/init', (req, res) => {
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS books(id int AUTO_INCREMENT, title VARCHAR(50), author VARCHAR(50), year VARCHAR(10), pages VARCHAR(10), PRIMARY KEY(id))';
    database.query(sqlQuery, (err) => {
		if (err) throw err;
        res.send('Table created!')
    });
});

app.get('/drop', (req, res) => {
    const sqlQuery =  'DROP TABLE books';
    database.query(sqlQuery, (err) => {
		if (err) throw err;
        res.send('Table dropped!!')
    });
});

app.post("/echo", (req, res) => {
	res.json(req.body);
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //筌ㅼ뮆?롥첎誘? ??뽰뇚, 筌ㅼ뮇?뽩첎誘? ??釉?}

app.get('/add', (req, res) => {
	var number = getRandomInt(10000000,99999999);
	
	const book = {
		title: 'Book Title'+number,
		author: 'Henry.Moon'
	};
	const sqlQuery = 'INSERT INTO books SET ?';
	database.query(sqlQuery, book, (err, row) => {
		if (err) throw err;
		res.send('Insert book successfully!');
	});
});

app.get('/', (req, res) => {
	const sqlQuery = 'SELECT * FROM books';
	database.query(sqlQuery, (err, result) => {
      if (err) throw err;
      res.json( result );
	});
});

app.get('/book', (req, res) => {
	const sqlQuery = 'SELECT * FROM books';
	database.query(sqlQuery, (err, result) => {
      if (err) throw err;
      res.json( result );
	});
});

/*
 * GET /book route to retrieve all the books.
 */
app.get('/getAll', (req, res) => {
	const sqlQuery = 'SELECT * FROM books';
	database.query(sqlQuery, (err, result) => {
   	  if(err) {
		  res.send(err);
	  } else { 
		  res.json(result);
	  }
	});
});

/*
 * GET /book/:id route to retrieve a book given its id.
 */
app.get('/get/:bookid', (req, res) => {
	const book_id = req.params.bookid;
	
	const sqlQuery = 'SELECT * FROM books WHERE id='+book_id;
	database.query(sqlQuery, (err, result) => {
   	  if(err) {
	  } else {
		if (result.length == 0) res.status(404).send('The book with the provided ID does not exists.');
		else res.json(result);
	  }
	});
});

/*
 * POST /book to save a new book.
 */
app.post('/post', (req, res) => {
	var newBook = req.body;
	
	console.log(newBook);

	if (newBook.pages == null ) return res.send({errors: {pages: {kind:"required"}}});

	const sqlQuery = 'INSERT INTO books SET ?';
	database.query(sqlQuery, newBook, (err, row) => {
		
   	  if(err) {
		  res.send(err);
	  } else { 
	  	res.send({message: "Book successfully added!", book: newBook });
	  }
	});
});

app.get('/edit/:id', function (req, res) {
  fs.readFile('edit.ejs', 'utf8', function (err, data) {
    client.query('select * from MusicList where id = ?', [req.params.id], function (err, result) {
      res.send(ejs.render(data, {
        data: result[0]
      }))
    })
  })
})

/*
 * POST /book to save a new book.
 */
app.put('/put/:id', (req, res) => {
	const book_id = req.params.id;
	const book = req.body;
	
	console.log(book);

	const sqlQuery = 'UPDATE books SET ? WHERE id = '+book_id;
	database.query(sqlQuery, book, (err, row) => {
		
   	  if(err) {
		  res.send(err);
	  } else { 
	  	res.send({ message: 'Book updated!', book });
	  }
	});
});


/*
 * PUT /book/:id to updatea a book given its id
 */
function updateBook(req, res) {
	Book.findById({_id: req.params.id}, (err, book) => {
		if(err) res.send(err);
		Object.assign(book, req.body).save((err, book) => {
			if(err) res.send(err);
			res.json({ message: 'Book updated!', book });
		});	
	});
}



/*
 * DELETE /delete/:id to delete a book given its id.
 */
app.get('/delete/:bookid', (req, res) => {
	const book_id = req.params.bookid;
	
	const sqlQuery = 'DELETE FROM books WHERE id='+book_id;
	database.query(sqlQuery, (err, result) => {
   	  if(err) {
		  res.send(err);
	  } else {
		  console.log(result.affectedRows, "deleted"+book_id);
		  if (result.affectedRows) res.json({ message: "Book successfully deleted!", status: "Ok"});
		  else res.json({ message: "Book is Not existes", status: "Fail"});
	  }
	});
});

/*
 * DELETE /deleteAll to delte all books
 */
app.get('/deleteAll', (req, res) => {
	const sqlQuery = 'DELETE FROM books';
	database.query(sqlQuery, (err, result) => {
   	  if(err) {
		  res.send(err);
	  } else {
          res.json({ message: "All Book successfully deleted!", result });
	  }
	});
});




app.listen(3000, () => {
	console.log('Server running! port 3000');
});

module.exports = app; // for testing
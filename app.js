var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var valProp = require('./prop/prop');

//
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

Genre = require('./models/genre');

Book = require('./models/book');

//Connect to mongoose

mongoose.connect(valProp.hostname);
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api/books or /api/genres!');
});


app.get('/api/genres',function(req, res){
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

app.get('/api/genres/:id',function(req, res){
	Genre.getGenresById(req.params.id, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.post('/api/genres',function(req, res){
	var genre = req.body;
	Genre.addGenre(genre, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.put('/api/genres/:id',function(req, res){
	var id = req.params.id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.delete('/api/genres/:id',function(req, res){
	var id = req.params.id;
	Genre.deleteGenre(id,  function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});



app.get('/api/books',function(req, res){
	Book.getBooks(function(err, books){
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/books/:_id',function(req, res){
	Book.getBooksById(req.params._id, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/books',function(req, res){
	var book = req.body;
	Book.addBook(book, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});


app.put('/api/books/:id',function(req, res){
	var id = req.params.id;
	var book = req.body;
	Book.updateBook(id, book, {}, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});


app.delete('/api/books/:id',function(req, res){
	var id = req.params.id;
	Book.deleteBook(id,  function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});



app.get('/hello', function(req, res){
	res.send("Hello there!");
});

app.listen(valProp.port);

console.log('Server running on port 3000');
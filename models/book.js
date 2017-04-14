var mongoose = require('mongoose');

//Book Schema

var bookSchema = mongoose.Schema({
	title:{
		type:String,
		required:true
	},
	genre:{
		type:String,
		required:true
	},
	description:{
		type:String
	},
	publisher:{
		type:String
	},
	pages:{
		type:String
	},
	create_date:{
		type: Date,
		default:Date.now
	}
});
var Book = module.exports = mongoose.model('Book',bookSchema);

//Get Books

module.exports.getBooks= function(callback, limit){
	Book.find(callback).limit(limit);
}

//Get Book by id
module.exports.getBooksById= function(id,callback){
	Book.findById(id,callback);
}

//Add Book 
module.exports.addBook = function(book,callback){
	Book.create(book,callback);
}

//Update Book
module.exports.updateBook = function(id, book, options, callback){
	var query = {_id: id};
	var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		publisher: book.publisher,
		pages: book.image_url

	}
	Book.findOneAndUpdate(query, update ,options, callback);
}

//Delete Book 
module.exports.deleteBook = function(id,  callback){
	var query = {_id: id};

	Book.remove(query, callback);
}
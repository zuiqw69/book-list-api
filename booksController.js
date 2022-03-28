const createError = require('http-errors')
let booksList = []
let idno = 0;


exports.index = function (req,res) {
    res.send(booksList)
}

exports.show = function(req,res,next){
    const booksItem = booksList.find( (books) => books.id == req.params.id)
    if(!booksItem) {
        return(next(createError(404,"no books with that id")))
    }
    res.send(booksItem);
}


exports.author = function(req,res,next){
    const booksItem = booksList.find( (books) => books.id == req.params.id)
    if(!booksItem) {
        return(next(createError(404,"no books with that id")))
    }
    res.send(booksItem);
}


exports.description = function(req,res,next){
    const booksItem = booksList.find( (books) => books.id == req.params.id)
    if(!booksItem) {
        return(next(createError(404,"no books with that id")))
    }
    res.send(booksItem);
}

exports.create = function (req,res,next) {

    if(!req.body.title){
        return (next(createError(400,"title is required")))
    }
    booksList.push({
        
            id: idno,
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed,
            author: req.body.author,
            description: req.body.description,
            
        }
        
    );
    idno++;
    res.send({result:true});
}

exports.delete = function(req,res,next) {
    const booksItem = booksList.find( (books) => books.id == req.params.id)
    if(!booksItem) {
        return(next(createError(404,"no books with that id")))
    }
    
    booksList = booksList.filter( (books) => books.id != req.params.id)
    
    res.send({result:true})
}

exports.update = function(req,res,next){
    const booksItem = booksList.find( (books) => books.id == req.params.id)
    if(!booksItem) {
        return(next(createError(404,"no books with that id")))
    }

    if(!req.body.name){
        return (next(createError(400,"name is required")))
    }

    booksList = booksList.map( (books)=> {
        if(books.id == req.params.id){
            books.name = req.body.name;
            books.description = req.body.description;
            books.completed = req.body.completed;
        }
        return books;

    })
    res.send({result:true})

}

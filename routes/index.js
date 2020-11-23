const express = require('express');
const router = new express.Router();

module.exports = router;

//Livres
const books = [
  {
    title:"L'affaire Lafayette",
    author:"Guillaume Debré",
    category:"roman historique",
  },
  {
    title:"La conspiration Jeanne d'Arc",
    author: "Gérald Messadié",
    category:"roman historique",
  },
  {
    title:"Le Seigneur des anneaux",
    author:"J.R.R. Tolkien",
    category: "fantasy",
  },
  {
    title:"L'Histoire sans fin",
    author:"Michael Ende",
    category: "fantasy",
  },
  {
    title:"Le Sorceleur",
    author:"Andrzej Sapkowski",
    category: "fantasy",
  },
  {
    title:"Le Trône de fer",
    author:"George R. R. Martin",
    category: "fantasy",
  },
  {
    title:"Vipère au poing",
    author:"Hervé Bazin",
    category:"autobiographie",
  }
  {
    title:"Les mots pour le dire",
    author: "Marie Cardinal",
    category:"autobiographie",
  }
  {
    title:"Histoire de ma vie",
    author:"Giacomo Casanova",
    category:"autobiographie",
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books/search',(req,res,next)=>{
  const categories = [];
  for(let i=0;i<books.length;i++){
    const book = books[i];
    const category = book.category;
    if(!(category in categories)){
      categories.push(category);
    }
  }
  res.render('searchForm',{title: "Book search",categories: categories})
});
module.exports = router;





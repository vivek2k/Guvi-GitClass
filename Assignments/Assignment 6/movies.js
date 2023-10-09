class Movie {
    constructor(title, studio, rating = 'PG-13') {         //setting PG as dufault setting
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }

    getPG(movies) {                                     // This function returns an array of movies with the specified rating[now set to PG]
        return movies.filter(movie => movie.rating === 'PG-13');           
      }   
  }


const movie1 = new Movie('Casino Royale', 'Eon Productions', 'PG-13');  
console.log(movie1)





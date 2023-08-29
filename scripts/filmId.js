import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'


export class filmId {

  film(){
    const id = Math.floor(Math.random() * 1000) + 1

    const url = `${BASE_URL}${id}?${API_KEY}&${language}`
  
    return fetch(url).then(data => data.json).then(({title,poster_path,overview}) => ({
      title,
      poster_path,
      overview
    }))

  }

}

 // const url = "https://api.themoviedb.org/3/movie/550?api_key=faf67ebede2ae43335c6306e9d35ea7e"
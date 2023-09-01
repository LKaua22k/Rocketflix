import {
    API_KEY, BASE_URL,
    IMG_URL,
    language,
  } from './api.js'
  
export class Film {
    constructor(root){
        this.root = document.querySelector(root) 
        this.raddom()
    }
    
    CreatedUrl(id){

       const url = `${BASE_URL}${id}?${API_KEY}&${language}`
    
        this.update(url)
    }   
}

export class FilmView extends Film{
    constructor(root){
        super(root)

        this.main = document.querySelector('main')
        
        this.update()
    }


    update(url){
        const movie = document.querySelector('.movie')

        fetch(url).then(data => data.json()).then(data => {

            movie.innerHTML = `
                    <img class="poster_film" src="${data.poster_path ? IMG_URL + data.poster_path : './imgs/Poster.png'}" alt="Poster do ${data.title ? data.title : 'Bora codar'}">                    

                <div class="poster_wrapper">
                    <span class="tile_film">${data.title ? data.title : ''}</span>  
                    <p class="descrption_filme">${data.overview ? data.overview : 'Ops, hoje não é dia de assistir filme. Bora codar! 🚀'}</p>
                </div>
            </section>`
        })

    }

    raddom(){
        const randomBtn = this.root.querySelector('footer button')
        randomBtn.addEventListener('click',() => {
            const id = Math.floor(Math.random() * 1000) + 1      

            this.CreatedUrl(id)
        })
    }


}
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
  
export class Film {
    constructor(root){
        this.root = document.querySelector(root) 
    
    }
    

}

export class FilmView extends Film{
    constructor(root){
        super(root)

        this.main = document.querySelector('main')
        
        this.update()
    }


    update(){
        this.removeallSec()


    }

    createdSection(){
        const section = document.createdElement('section')

        section.innerHTML = `
        <div class="poster_wrapper">
            <img class="poster_film" src="./Poster.png" alt="Poster do Os Caça-Fantasmas">
            
            <span class="tile_film">Os Caça-Fantasmas</span>  
        </div>

        <p class="descrption_filme">Em Nova York Peter Venkman, Ray Stantz e Egon Spengler são três cientistas do departamento de psicologia da Columbia University, que se dedicam ao estudo de casos paranormais. Quando a subvenção termina eles são despedidos e Venkman sugere que abram um negócio próprio, a exterminadora de fantasmas Ghostbusters. Inicialmente eles só têm despesas e nenhum cliente, mas eis que surge Dana Barrett, uma violoncelista que teve uma experiência assustadora em seu apartamento.</p>
    </section>`
    }


    removeallSec(){
        this.main.querySelectorAll('section').forEach(section => {
         section.remove()   
        });
    }
}
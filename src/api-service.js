

var herokuURL = "https://rv-blog-backend.herokuapp.com/"
var localURL = "http://127.0.0.1:8000/"

export class API {

    static getProjects() {
        return fetch(localURL + "projects/projects/", {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad',
            }
          })
          .then(response => response.json())
    }

    static getBlogs() {
        return fetch(herokuURL + "api/blog", {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
            }
          })
          .then(response => response.json())
    }
    
    static getCategories() {
        return fetch(localURL + "projects/categories/", {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad',
            }
          })
          .then(response => response.json())
    }

}

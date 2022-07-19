/*
    TO DO LIST FOR ANDREEA RADU ⓜⓜⓜⓜ 

    1. Pagina asta ai putea sa o faci ca un fel de Blog/Postari - informatii despre sanatate 
    2. Creeaza un fisier blog.json in JSONFiles/Health unde o sa pui obiectele ce tin informatiile despre blog
    3. Creeaza un html template (te inspiri de pe net) ca sa ai un design pt pagina de health
    4. Creeaza apoi o functie care citeste din json si pune obiectele intr-un array ex: var myBlogs = []
    5. Creeaza o functie care parcurge lista - myBlogs -  si afiseaza obiectele 
    6. Creeaza un input si un buton de 'Search'
    7. Creeaza o metoda care atunci cand se foloseste butonul de 'Search' sa parcurga lista de Blogs
    si sa compare textul introdus cu proprietatea de 'description' a obiectului BLOG
        -> Apoi pe pagina vei afisa o lista de Blogs sortata in functie de acel input

    SCOP =>     Sa simulam un caz pe cat real putem
                Sa te obisnuiesti cu ideea de obiecte si proprietati
                

    Author: Boldisoru' - Software Engineer | Life Coach | Gym Coach | Healer etc... :))
*/

var postsContainer = document.getElementById("postsContainer");

var postsArray = [];

function healthPostJson() {
  $.getJSON("/JSONFiles/Health/healthPost.json", (posts) => {
    posts.forEach((post, ind) => {
      postsArray.push(post);
    });
  });
}

const loadHealthPosts = function (array) {
  postsContainer.innerHTML = "";

  array.forEach((post, idx) => {
    let postHealth = document.createElement("div");
    postHealth.classList = "post-health-item";
    let content = ` 
    <div class="row featurette col-lg-12 mt-5  ml-3" id="featurette">
      <div class="col-md-7 ${post.classText}">

      <button class="btn btn-light m-2" style="float: right">
          Continue Reading
        </button>

        <h2 class="featurette-heading p-2">
          ${post.title}
        </h2>
        
        <h6>
          ${post.description}
        </h6>
      </div>
      <div class="col-md-5 ${post.classImg}">
        <img
          class="featurette-image img-fluid mx-auto "
          src="${post.photoUrl}"
          alt="50x50"
          style="width: ${post.typeImgWidth}; height: ${post.typeImgHeight}"
          data-holder-rendered="true"
        />
      </div>
      
      
     </div>
     
     `;

    postsContainer.innerHTML += content;
  });
};

healthPostJson();
loadHealthPosts(postsArray);

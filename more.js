const title = document.querySelector(".title")
const row = document.querySelector(".row")


window.addEventListener("load", () => { 
  const ninjas = JSON.parse(localStorage.getItem("ninjas"))

  const ninjaID = +localStorage.getItem("ninjaID")
  
  const currentNinja = ninjas.find(item => item.id === ninjaID)
  card(currentNinja);
  
  title.innerHTML = currentNinja.name

})


function card({ name, image, clan, power, level }) {
    return row.innerHTML = `
      <div class="card">
        <h2>${name}</h2>
        <img src=${image} alt="" />
        <div class="card-body">
          <div>
            <h4>Clan:</h4> 
            <span>${clan}</span>
          </div>
          <div>
            <h4>Power:</h4> 
            <span>${power}</span>
          </div>
          <div>
            <h4>Level:</h4> 
            <span>${level}</span>
          </div>
        </div>
      </div>
    `
  }


const database = [
  {
      id:1,
      name:'Itadori Yuji',
      power: 'Black Lightning',
      level:'Grade 3 sorcerer',
      clan:'Yuji',
      image:'https://media.tenor.com/cA5B6yhhOcgAAAAd/itadori-yuji.gif'
  },
  {   
      id:2,
      name:'Megumi Fushiguro',
      power:'Shadow Manipulation',
      level:'Grade 2 sorcerer',
      clan:'Fushiguro',
      image:'https://media.tenor.com/SkOoza6qK-4AAAAC/megumi-fushiguro.gif'
  },
  {
      id:3,
      name:'Nobara Kugisaki',
      power:'Nail Manipulation',
      level:'Grade 3 sorcerer',
      clan:'Kugisaki',
      image:'https://media.tenor.com/CSciQNU_rjQAAAAd/nobara-kugisaki-nobara.gif'
  },
  {
      id:4,
      name:'Satoru Gojo',
      power:'Infinity Technique',
      level:'Special sorcerer',
      clan:'Gojo',
      image:'https://i.pinimg.com/originals/cd/67/6f/cd676fe79bf0a31ce1921edb61e75375.gif'
  },
  {
      id:5,
      name:'Maki Zenin',
      power:'Cursed Weapon',
      level:'Grade 4 ranking',
      clan:'Zenin',
      image:'https://i.pinimg.com/originals/b3/7e/80/b37e80e29b6c4efca0cf4937f855bc63.gif'
  },
  {
      id:6,
      name:'Toge Inumaki',
      power:'Cursed Speech',
      level:'Grade 1 sorcerer',
      clan:'Inumaki',
      image:'https://media.tenor.com/To2nkuWnqrMAAAAC/toge-inumaki.gif'
  },
  // {
  //     id:7,
  //     name:'Hashirama Senju',
  //     power:'Wood Style + Regeneration',
  //     level:'God of War',
  //     clan:'Senju',
  //     image:'https://i.makeagif.com/media/7-28-2016/_eMaFk.gif'
  // },
  // {
  //     id:8,
  //     name:'Pain (Tendo)',
  //     power:'Six path',
  //     level:'God',
  //     clan:'Akatsuki',
  //     image:'https://thumbs.gfycat.com/JampackedExcitableHydra-size_restricted.gif'
  // },
  // {
  //     id:9,
  //     name:'Commando A',
  //     power:'Light shield',
  //     level:'4th Hokage',
  //     clan:'Lighter',
  //     image:'https://i.pinimg.com/originals/93/85/90/938590c23c6565490f49b7f4646f7601.gif'
  // }
]

const row = document.querySelector(".row")
const select = document.querySelector(".select")
const search = document.querySelector(".search")


window.addEventListener("load", () => {
  if(!localStorage.getItem("ninjas")) {
    localStorage.setItem("ninjas", JSON.stringify(database))
  } else {
    const ninjas = JSON.parse(localStorage.getItem("ninjas"))

    const addIDtoNinjas = ninjas.map((item, index) => {
      return {...item, id: index}
    })

    localStorage.setItem("ninjas", JSON.stringify(addIDtoNinjas))

    const newBase = JSON.parse(localStorage.getItem("ninjas"))
    card(newBase)
  }
})

function card(base) {
  const template = base.map(({name, image, id}) => {
    return `
      <div class="card">
        <h2>${name}</h2>
        <img src=${image} alt="" />
        <div class="card-footer">
          <button onclick="getNinja('${id}')">
            More
          </button>
        </div>
      </div>
    `
  }).join(" ")
  row.innerHTML = template;
}


function getNinja(id) {
  const ninjas = JSON.parse(localStorage.getItem("ninjas"))
    // localStorage.setItem("ninjaID", JSON.stringify(ninjas[id]))
    localStorage.setItem("ninjaID", id)
    window.open("../more.html", "_self")
}

select.addEventListener("change", e => {
  var event = e.target.value
  
  if(event === "name") {
    search.setAttribute("placeholder", "Search by Name...")
    search.classList.add("nameColor")
    search.classList.remove("clanColor")
    search.classList.remove("levelColor")
  } else if (event === "clan") {
    search.setAttribute("placeholder", "Search by Clan...")
    search.classList.add("clanColor")
    search.classList.remove("nameColor")
    search.classList.remove("levelColor")
  } else {
    search.setAttribute("placeholder", "Search by Level...")
    search.classList.add("levelColor")
    search.classList.remove("clanColor")
    search.classList.remove("nameColor")
  }
})


const ninjas = JSON.parse(localStorage.getItem("ninjas"))

search.addEventListener("input", e => {
  var event = e.target.value.toLowerCase();
  var selectedValue = select.value;

  if(selectedValue === "name") {
    const filtered = ninjas.filter(item => item.name.toLowerCase().includes(event))
    card(filtered)
  } else if(selectedValue === "clan") {
    const filtered = ninjas.filter(item => item.clan.toLowerCase().includes(event))
    card(filtered)
  } else {
    const filtered = ninjas.filter(item => item.level.toLowerCase().includes(event))
    card(filtered)
  }
})

const sidebar = document.querySelector(".sidebar")
const bars = document.querySelector(".bars")

bars.addEventListener("click", e => {
  e.preventDefault();
  bars.classList.toggle("activeBars")

  sidebar.classList.toggle("active")
})
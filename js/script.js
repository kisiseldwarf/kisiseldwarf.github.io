
let engineEnum = {
  'godot': 'static/GODOT.png',
  'unity': 'static/UNITY.png',
  'C': 'static/C.png',
  'rust': 'static/Rust.png'
}


//main program
document.addEventListener("DOMContentLoaded", function(event) {

  //waiting for the document to load
  var ul = document.getElementById("work-list")

  //Work JSON
  var works = [
    {
      title: 'Lost + Found',
      desc: 'A game made throughout a 48 hours Game-Jam where you retrieve lost memories. (Unity)',
      enginePng: engineEnum.unity,
      itch: 'https://metamaus.itch.io/lostfound'
    },
    {
      title: "Drawnation",
      desc: "A platformer game where you can draw your own platforms. Made throughout a 48 hours Game-Jam. Won first place. (Godot)",
      git_url:"https://github.com/polyedre/gamejamemmi",
      enginePng: engineEnum.godot
    },
    {
      title: 'Late Hotel Stories',
      desc: 'A story-driven game. Become the prodigy of truth and uncovers the dark secrets of the Holy City. (Unity)',
      git_url: 'https://github.com/kisiseldwarf/LateHotelStories'
    },
    {
      title: 'Late Tales',
      desc: 'The prototype of Late Hotel Stories. (Godot)',
      git_url: 'https://github.com/kisiseldwarf/Late_Tales',
      enginePng: engineEnum.unity
    },
    {
      title: "My_thread",
      desc: "A school project attempt to reproduce the pthread library. (C)",
      git_url:"https://github.com/kisiseldwarf/my_thread",
      enginePng: engineEnum.C
    },
    {
      title: "Renrust",
      desc: "A Visual Novel Game-engine made in Rust. Still in development. (Rust)",
      git_url: "https://github.com/kisiseldwarf/Renrust",
      enginePng: engineEnum.rust
    },
  ]

  //Filling the <ul>
  fill(ul,works)
})

// scrolling button
function scrolling(){
  var div_id = "work"
  var div = document.getElementById(div_id)
  div.scrollIntoView()
}

function createButton(label, link) {
  var btn = document.createElement('button')
  var a = document.createElement('a')

  btn.className = "btn btn-outline-light"
  a.setAttribute("href", link)
  a.setAttribute("target","_blank")
  btn.innerHTML = label
  a.appendChild(btn)

  return a;
}


/* To anyone reading this : Yeah, I could've done this with JQuery, but I wanted to improve myself with vanilla Javascript */
function fill(ul,json){
  for (var i = 0; i < json.length; i++) {
    var li = document.createElement("li")
    var h1 = document.createElement("h1")
    var div_desc = document.createElement("div")
    var p = document.createElement("p")

    var githubButton = undefined;
    if (json[i].git_url) {
      githubButton = createButton('Github', json[i].git_url)
    }

    var itchButton = undefined;
    if (json[i].itch) {
      itchButton = createButton('Itch', json[i].itch)
    }

    div_desc.className = "container pb-2"
    h1.innerHTML = json[i].title
    p.innerHTML = json[i].desc
    li.className = "my-3"

    div_desc.appendChild(p)
    if (githubButton) {
      div_desc.appendChild(githubButton)
    }
    if ( itchButton ) {
      div_desc.appendChild(itchButton)
    }

    li.appendChild(h1)
    li.appendChild(div_desc)
    ul.appendChild(li)
    if(i < json.length - 1)
      ul.appendChild(document.createElement("hr"))
  }
}

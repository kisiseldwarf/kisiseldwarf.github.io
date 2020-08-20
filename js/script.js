function scrolling(){
  var div_id = "work"
  var div = document.getElementById(div_id)
  div.scrollIntoView()
}

//main program
document.addEventListener("DOMContentLoaded", function(event) {

  //waiting for the document to load
  var ul = document.getElementById("work-list")

  //Work JSON
  var works = [
    {title: "Renrust", desc: "A Visual Novel Game-engine made in Rust. Still in development.", git_url: "https://github.com/kisiseldwarf/Renrust"},
    {title: "Drawnation", desc: "A game made throughout a 48 hours Game-Jam. Won first place.", git_url:"https://github.com/polyedre/gamejamemmi"}
  ]

  //Filling the <ul>
  fill(ul,works)
})

/* To anyone reading this : Yeah, I could've done this with JQuery, but I wanted to improve with vanilla Javascript */
function fill(ul,json){
  for (var i = 0; i < json.length; i++) {
    var li = document.createElement("li")
    var h1 = document.createElement("h1")
    var div_desc = document.createElement("div")
    var p = document.createElement("p")
    var btn_github = document.createElement("button")
    var a_github = document.createElement("a")

    btn_github.className = "btn btn-outline-light"
    a_github.setAttribute("href",json[i].git_url)
    a_github.setAttribute("target","_blank")
    btn_github.innerHTML = "Github"
    a_github.appendChild(btn_github)

    div_desc.className = "container pb-2"
    h1.innerHTML = json[i].title
    p.innerHTML = json[i].desc
    li.className = "my-3"
    div_desc.appendChild(p)
    div_desc.appendChild(a_github)
    li.appendChild(h1)
    li.appendChild(div_desc)
    ul.appendChild(li)
    if(i < json.length - 1)
      ul.appendChild(document.createElement("hr"))
  }
}

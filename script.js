function scrolling(){
  var div_id = "work"
  var div = document.getElementById(div_id)
  div.scrollIntoView()
}

//main program
document.addEventListener("DOMContentLoaded", function(event) {

  //waiting for the document to load
  var ul = document.createElement("ul")
  ul.className = "text-white"
  ul.style = "decoration:none;"

  //Work JSON
  var works = [
    {title: "Drawnation", desc: "A game made throughout a 48 hours Game-Jam. Won first place.", git_url:"https://github.com/polyedre/gamejamemmi"},
    {title: "Project : Revolucion", desc: "A 2D souls-like game still in development. The project began in the summer 2018.", git_url:"https://github.com/kisiseldwarf/revolucion"},
    {title: "Sprite Cutter", desc: "A very simple binary which aims to help newcomers devs to cut sprites sheet into single sprites.", git_url:"https://github.com/kisiseldwarf/sprite_cutter"},
    {title: "Twitter Retriever", desc: "A little lua program for the ComputerCraft mod in Minecraft. It retrieves tweets based on a hashtag then shows them on a screen nearby, inside the game.", git_url:"https://github.com/kisiseldwarf/twitter_retriever_minecraft"},
    {title: "Aquesat", desc: "A software made while an end-of-year internship in 2016. Its goal is to help teachers grading internships based on the feedback of the company and of the different teachers during the year, automatically.",git_url:"https://github.com/kisiseldwarf/Stage"}
  ]

  //Filling the <ul>
  fill(ul,works)

  //Appending the <ul>
  document.getElementById("work-content").appendChild(ul)
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

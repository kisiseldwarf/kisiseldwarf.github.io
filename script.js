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
    {title: "Drawmation", desc: "A game made throughout a 48 hours Game-Jam. Won the first place.", git_url:"https://github.com/polyedre/gamejamemmi"},
    {title: "Sprite Cutter", desc: "A very simple binary which aims to help newcomers devs to cut sprites sheet into single sprites.", git_url:"https://github.com/kisiseldwarf/sprite_cutter"},
    {title: "Aquesat", desc: "A software made while an end-of-year internship in 2016. Its goal is to help teachers to grade internships based on the feedback of the company and of the different teachers during the year, automatically.",git_url:"https://github.com/kisiseldwarf/Stage"},
    {title: "Project : Revolucion", desc: "A 2D souls-like game still in development. The project began in the summer 2018.", git_url:"https://github.com/kisiseldwarf/revolucion"},
    {title: "Twitter Retriever", desc: "A little lua program for the ComputerCraft mod in Minecraft. It retrieves tweets based on a hashtag then shows them on a screen nearby, inside the game.", git_url:"https://github.com/kisiseldwarf/twitter_retriever_minecraft"}
  ]

  //Filling the <ul>
  fill(ul,works)

  //Appending the <ul>
  document.getElementById("work-content").appendChild(ul)
})

function fill(ul,json){
  for (var i = 0; i < json.length; i++) {
    var li = document.createElement("li")
    var h1 = document.createElement("h1")
    var div_desc = document.createElement("div")
    var p = document.createElement("p")
    var btn_github = document.createElement("button")

    btn_github.className = "btn btn-outline-light"
    btn_github.innerHTML = "Github"
    btn_github.setAttribute("onclick","location.href=\'"+json[i].git_url+"\'")
    div_desc.className = "container pb-2"
    h1.innerHTML = json[i].title
    p.innerHTML = json[i].desc
    li.className = "my-3"
    div_desc.appendChild(p)
    div_desc.appendChild(btn_github)
    li.appendChild(h1)
    li.appendChild(div_desc)
    ul.appendChild(li)
    if(i < json.length - 1)
      ul.appendChild(document.createElement("hr"))
  }
}

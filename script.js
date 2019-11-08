function scrolling(){
  var div_id = "work"
  var body = document.getElementById("the_body")
  var html = document.getElementsByTagName("html")[0]
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
    {title: "Drawmation", desc: "A game made throughout a 48 hours Game-Jam. Won the first place."},
    {title: "Sprite Cutter", desc: "A very simple binary which aims to help newcomers devs to cut sprites sheet into single sprites."},
    {title: "Aquesat", desc: "A software made while an end-of-year internship in 2016. Its goal is to help teachers to grade internships based on the feedback of the company and of the different teachers during the year, automatically."},
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
    var hr = document.createElement("hr")
    var p = document.createElement("p")
    div_desc.className = "container"
    h1.innerHTML = json[i].title
    p.innerHTML = json[i].desc
    div_desc.appendChild(p)
    li.appendChild(h1)
    li.appendChild(div_desc)
    ul.appendChild(li)
    ul.appendChild(hr)
  }
}

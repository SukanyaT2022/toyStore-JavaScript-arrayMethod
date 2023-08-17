let toys =["Logo", "Truck",  "Dinosaur", "Doll House", "Babie Dolls",  ]
let price = [15, 10, 8, 20, 12]

function targetSubmitButton(){
    //1-first read the choice by the user bu document.
      //then we need to store some where in variable
    var storevalue = document.getElementById('targetInput').value
//check if value = 1
if (storevalue=="1"){
  addToys()
}
if (storevalue=="2"){
  removeToys()
}
}
function addToys(){
  var toyName = prompt('Enter toy name')
  var PR = parseFloat(prompt('Enter Price'))
  toys.push(toyName)
  price.push(PR)
  alert('Added Sucessfully!')
  printToys()

}

function removeToys(){
    var toyName = prompt('Enter toy name')
    var position = -1
     //-1  means you are set initial value -1 coz we not found it
  //if we find item we store on the position
     for(i=0;i<toys.length;i++){
      //if i find that toy if not -1 means not find the toy
if (toys[i]== toyName){
position = i
break
}
  }
  // if i donot find the toy the position remain -1 so i can not delete
  if (position != -1){
    toys.splice([position,1]) 
    price.splice([position,1])
    
  }
  printToys()
}

function printToys(){
  var storeNamePrice = ""
  for(i=0;i<toys.length;i++){
    storeNamePrice += toys[i]+ " " + price[i]+ "<br>"
  }
  document.getElementById('showLisOfToys').innerHTML = storeNamePrice
}
  
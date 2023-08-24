let toys =["Lago", "Truck",  "Dinosaur", "Doll House", "Babie Dolls",  ]
let price = [15, 10, 8, 20, 12]
let increasePercent = 0
let min = 0
let max = 0
function load(){
 printToys()
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
    toys.splice(position,1) 
    price.splice(position,1)
    alert('A toy was deleted succesfully')
  }
  printToys()
}
//below prin toy detail and price
function printToys(){
  var storeNamePrice = ""
  document.getElementById('showLisOfToys').innerHTML = storeNamePrice
  for(i=0;i<toys.length;i++){
    storeNamePrice += toys[i]+ "&nbsp; $" + price[i]+ "<br>"
  }
  document.getElementById('showLisOfToys').innerHTML = storeNamePrice
}

function searchToy(){
  // prompt is for get input to the user
  var toyName = prompt('Enter Toy Name')
  //indexof[] will search if toy name is on the list
  var position = -1
  //-1  means you are set initial value -1 coz we not found it
//if we find item we store on the position
//loop
  for(i=0;i<toys.length;i++){
   //if i find that toy if not -1 means not find the toy
if (toys[i]== toyName){
position = i
break
}
  }

  // != -1 mean we found the toy
  if (position != -1){
alert( "$" + price[position])
  }else{
    alert('Can not found')
  }
}
function priceChange(num){
  return num + num * increasePercent/100
}
function incresePrice(){
  //prompt use to get input to the user
  //parseint convert text to number so it can multiply
var percent = parseInt(prompt("Enter the percentage value"))
increasePercent = percent
var newPrice = price.map(priceChange)
price = newPrice
printToys()
}

function viewToy(){
  //prompt use to get input to the user
  //parseint convert text to number so it can multiply
 min = parseInt(prompt("Enter minimum value"))
 max = parseInt(prompt("Enter maximum value"))
 var storeNamePrice = ""
  document.getElementById('showLisOfToys').innerHTML = storeNamePrice
for (i=0; i<price.length; i++){
  if (price[i]>=min && price[i]<=max){
    storeNamePrice += toys[i]+ "&nbsp; $" + price[i]+ "<br>"
  }
}
document.getElementById('showLisOfToys').innerHTML = storeNamePrice
}





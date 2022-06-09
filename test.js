
var situpsArray = [
[6, 12, 18, 24, 20],
[8, 13, 18, 23, 28],
[10, 14, 18, 22, 26],
[12, 15, 18, 21, 24],
[15, 17, 19, 21, 23],
];

var joggingArray = [
[10, 16, 22, 28, 34],
[12, 17, 22, 27, 32],
[14, 18, 22, 26, 30],
[16, 19, 22, 25, 28],
[18, 20, 22, 24, 26],
];

var pushupsArray = [
[4, 9, 14, 19, 24],
[6, 11, 16, 19, 23],
[8, 12, 16, 20, 24],
[10, 13, 16, 19, 21],
[12, 14, 16, 18, 20],
];


let userArray = [];

let userObject = function(pName,pHeight,pWeight){
    this.Name = pName;
    this.Height = parseInt(pHeight);
    this.Weight = parseInt(pWeight);
   
}
userArray.push(new userObject("Teni", 190, 300));
userArray.push(new userObject("Guts", 180, 210));

document.addEventListener("DOMContentLoaded", function () {

  createList();

    document.getElementById("buttonAdd").addEventListener("click", function () {

       userArray.push(new userObject(document.getElementById("name").value, document.getElementById("height").value,
    document.getElementById("weight").value))
    })
    document.getElementById("buttonClear").addEventListener("click", function () {
        document.getElementById("name").value = "";
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
    });

    document.getElementById("buttonSortHeight").addEventListener("click", function () {
        userArray.sort(dynamicSort("Height"));
        createList();
        document.location.href = "test.html#ListAll";
    });

    document.getElementById("buttonSortWeight").addEventListener("click", function () {
        userArray.sort(dynamicSort("Weight"));
        createList();
        document.location.href = "test.html#ListAll";
    });


    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#ListAll", function (event) {   // have to use jQuery 
        createList();
    });

    $(document).on("pagebeforeshow", "#details", function (event) {   
        let UserID = localStorage.getItem('parm');  // get the unique key back from the storage dictionairy
        document.getElementById("theUserID").innerHTML = UserID;

        // [1] you need to use this UserID and search your array for the object
        // that has a matching value, and then assign a new variable whichOject to that 
        // array element 
        
    
        if(whichObject.Weight<70 )
        {
        weightCat = 0;
        }
        if(whichObject.Weight >=70 && userObject.Weight < 120 )
        {
        weightCat = 1;
        }
        if(whichObject.Weight >=120 && userObject.Weight < 170 )
        {
        weightCat = 2;
        }
        if(whichObject.Weight>=170 && userObject.Weight < 220 )
        {
        weightCat = 3;
        }
        if(whichObject.Weight>=220 )
        {
        weightCat = 4;
        }
        if(whichObject.Height <= 100)
        {
        heightCat = 0;
        }
        if(whichObject.Height> 100 && userObject.Height < 130)
        {
        heightCat = 1;
        }
        if(whichObject.Height>= 130 && userObject.Height < 160)
        {
        heightCat = 2;
        }
        if(whichObject.Height>= 160 && userObject.Height < 190)
        {
        heightCat = 3;
        }
        if(whichObject.Height>= 190 )
        {
        heightCat = 4;
        }

        // [2] you need to replace these conosole.log lines with code that really
        // writes it out to the HTML page
        document.getElementById("demo").innerHTML("You should do " + situpsArray[heightCat] [weightCat] + " situps");
        document.getElementById("demo").innerHTML("You should jog " + joggingArray[heightCat] [weightCat] + " minutes");
        document.getElementById("demo").innerHTML("You should do " + pushupsArray[heightCat] [weightCat] + " pushups");
    });

})
function createList() {
   
    let theList = document.getElementById("myul");
    theList.innerHTML = "";

 

    userArray.forEach(function (element, i) {   
        var myLi = document.createElement('li');
        myLi.classList.add('oneUser');
        myLi.innerHTML =  element.Name + ":  " + element.Weight + "pounds  " + element.Height + "cm  ";

       
        myLi.setAttribute("data-parm", element.Name);
        
        theList.appendChild(myLi);
    });

    var liList = document.getElementsByClassName("oneUser");
   let newUserArray = Array.from(liList);

    newUserArray.forEach(function (element,i) {     
        element.addEventListener('click', function () {     
            
            var parm = this.getAttribute("data-parm"); 
            localStorage.setItem('parm', parm);
            document.location.href = "test.html#details";
        });
    });
  
};






//* @param {String} property Key of the object to sort.

function dynamicSort(property) {
    var sortOrder = 1;

    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a, b) {
        if (sortOrder == -1) {
            return b[property]-(a[property]);
        } else {
            return a[property]-(b[property]);
        }
    }
}


// function sportrecommend(){
// if(height>170){
//     "You should try some sports like basketball,volleyball,high jump"
// }
// else{"You should try soccer,"}
// if(this.Height>170 && this.Weight<180){
//     "You"
// }
// if(this.Weight>200 && this.Height < 180){
//     "Here are some excercises you should try "
// }
// }
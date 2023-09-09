//task (1)

var getDayType ="friday"
switch (getDayType) {
    case "saturday":
        console.log("weekday");
        
        break;
        case"sunday":
        console.log("weekday");
        
        break;
        case"monday":
        console.log("weekday");

        break;
        case"tuesday":
        console.log("weekday");

        break;
        case"wednesday":
        console.log("weekday");

        break;
        case"thursday":
        console.log("weekday");

        break;
        case"friday":
        console.log("weekend");

        break;

    default:
        console.log("invalid day");
        break;
}



//task(2)
var person={
    name:"John do",
    age:17,
    gender:"Male"
}

console.log(person.age);
console.log(person.gender);

// person.name==="John do"? console.log("yes"):console.log("no");

// var result =person.name==="John do"? ("yes"):("no");

// console.log(`${result} ${person.name}`);


// person.age<16
// ?console.log("baby")
// :person.age<18
// ?console.log("hola madrid")
// :console.log("no");


//task (3)


var shoppingCart={
    name:"bs6",
    brand:"metal",
    items:{
        coclate:7,

        fruit:{
            banana:7,
            apple:5
        },
        meal:{
            veal:3,
            beef:2
        }
        
    },
    isFinite:function () {
        if (shoppingCart.brand==="metal") {
            return"yeah"
            
        }else {
            return"nah"
        }
        
    }
}


console.log(shoppingCart.items ["fruit"] ["apple"]);
console.log(shoppingCart.items["fruit"]["banana"]);
console.log(shoppingCart.isFinite());



//task(4)

var lion= new Object({name:"simba"})

console.log(lion);


var lion= Object.create({})
lion.name="simba"
console.log(lion);


//task(5)
const sentence = 'The quick brown fox jumps over the lazy dog';
console.log(sentence.includes("fox"));

//task(6)

var numbers = [1, 2, 3, 4, 5];
numbers.map(function(el) {
    console.log(el*10);
    
})



function getCamber(itemed) {
return itemed.filter(function (numbers) {
    return numbers>=4
    
})
    
}

console.log(getCamber(numbers));
//


var regrade= function () {
    return "MR"
    
}

var getGendre= function (getanta,name) {
    console.log(`${getanta()} ${name}`);    
}
// console.log(getGendre(regrade));
getGendre(regrade,"Lio")

//TASK(7) SORT METHOD >> help to You arrange the arrays by alphabetical letters


var listName=["hazme","mohamed","ahmed","aya","salma","omar"]

console.log(listName.sort());





// task(8)

var elzamalek={
    name1:"ahmed",
    name2:"mostafa",
    name3:"nabil"
}

var alhaly={
    name4:"afsha",
    name5:"hany",
    name6:"trika"
}


var ismaily={
    name7:"homs",
    name8:"hosny",
    name9:"amr"
}


var nationa={
    name10:"hektor"
}

Object.assign(nationa,elzamalek,alhaly,ismaily,{name17:"ashour"})

console.log(nationa);




var worldcup=Object.assign({},nationa,{name17:"zidan"})

console.log(worldcup);





// var look=['text','password','submit']

// for(var dov=0;dov<3;dov++)
// {
//     document.write("<input type="+ look[dov]+" />")
// }


let test={
    age:20,
    
    setAge:function () {
        console.log(this.age +5);
        
    }
}

console.log(test.setAge());




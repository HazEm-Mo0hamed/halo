# What we will do at this fill 
# Topic
what a **property** we will use 

* Switch
* Nested object
* object method
* string method(includes)
* array method(map)
* array method(filter)
  
1. task 1
2. task 2 
3. task 3
4. task 4
5. task 5
6. task 6
___

# Example
**switch**
``` javascript
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

```
**Nested object**
```javascript
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


 

```


**object method**
```javascript
var lion= new Object({name:"simba"})
console.log(lion);


var lion= Object.create({})
lion.name="simba"
console.log(lion);


```

**string method(includes)**
```javascript
const sentence = 'The quick brown fox jumps over the lazy dog';
console.log(sentence.includes("fox"));


 ```
 **array method(map)**
 ```javascript
 var numbers = [1, 2, 3, 4, 5];
numbers.map(function(el) {
    console.log(el*10);
    
})
 ```

 **array method(filter)**
 


```javascript
var numbers = [1, 2, 3, 4, 5];
function getCamber(itemed) {
return itemed.filter(function (numbers) {
    return numbers>=4
    
})
    
}

console.log(getCamber(numbers));
```
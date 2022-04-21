// var name = "Harrison"

var secretsFunction = function(){
    var pinCode = [3, 5, 6, 1]
    // console.log(name);
    // console.log("pinCode inside the funcion", pinCode);
}

secretsFunction()

// console.log("pinCode outside the function", pinCode);



var filterNamesByFirstLetter = function(names, letter){
    var filteredNames = []
    for(let name of names){
        if(name[0] === letter){
            filteredNames.push(name)
        }
        // console.log(name);
    }

    return filteredNames
}

var students = ["Connor", "Abbas", "Arad", "Harrison", "AJ", "Mohammed", "Devlin", "Bart"]
// console.log(filterNamesByFirstLetter(students, "A"));



let calculateEnergy = function(mass){
    const speedOfLight = 299792458
    // speedOfLight ++ 
    return mass* speedOfLight ** 2
}

console.log(calculateEnergy(75));
// let value;

// const firstName = "Parviz"
// const lastName = "Hajili"
// const langs = "C#, Java, Python"


// value = firstName + " " + lastName

// value = firstName.length
// value = firstName.concat(" ", lastName, " - ", ".NET Developer")

// value = firstName.toLowerCase()
// value = firstName.toUpperCase()

// value = firstName[0]
// value = lastName[4]
// value = firstName[firstName.length - 1]

//Index of

// value = firstName.indexOf("r")
// value = firstName.indexOf("z")
// value = firstName.indexOf("E") //-1

//Char at
//value = firstName.charAt(0)//P


//Split
//value  = langs.split(",")

//Replace
//value = langs.replace("Python","Javascript")

//Includes
//value = langs.includes("Java")//true

//console.log(value)


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//Tenmplate Literal
const name = "Parviz Hajili"
const department = "IT & Software"
const salary = 5000


// const a = "Name: " + name + "\n" + "Departmant: " + department + "\n" + "Salary: " + salary

//const a = `Name:${name}\nDepartmant:${department}\nSalary:${salary}`

// const html = "<ul>" +
//     "<li>" + name + "</li>" +
//     "<li>" + department + "</li>" +
//     "<li>" + salary + "</li>" +
//     "</ul>"

function a(){
    return "Hello"
}
const html = `
    <ul>
    <li>${name}</li>
    <li>${department}</li>
    <li>${salary}</li>
    <li>${20*5}</li>
    <li>${a()}</li>
    </ul>

`

document.body.innerHTML = html
//console.log(a)
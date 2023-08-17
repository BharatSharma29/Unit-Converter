/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

document.getElementById('btn').addEventListener('click', () => {
    const num = document.getElementById('num')
    
    const len = document.getElementById('len')
    const vol = document.getElementById('vol')
    const kilo = document.getElementById('kilo')
    
    len.innerText = `${num.value} meters = ${(num.value * 3.28084).toFixed(3)} feet | ${num.value} feet = ${(num.value * 0.3048).toFixed(3)} meters`
    
    vol.innerText = `${num.value} liters = ${(num.value * 0.2641729).toFixed(3)} gallons | ${num.value} gallons = ${(num.value * 3.7854).toFixed(3)} liters`
    
    kilo.innerText = `${num.value} kilograms = ${(num.value * 2.204623).toFixed(3)} pounds | ${num.value} pounds = ${(num.value * 0.4535924).toFixed(3)} kilograms`
})
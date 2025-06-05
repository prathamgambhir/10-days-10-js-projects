document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form');
    let res = document.querySelector('.result')

    form.addEventListener('submit', function (event) {
        event.preventDefault()
        res.innerHTML = ''
        let height = parseFloat(document.querySelector('#height').value)
        let weight = parseFloat(document.querySelector('#weight').value)
        if (!(height) || !(weight || height <= 0 || weight <= 0)) {
            res.append('Enter Valid Numbers')
        } else {
            let msg = document.createElement('p')
            let bmi = (Math.round((weight / (height ** 2)) * 10)) / 10
            if (bmi < 18.6) {
                msg.appendChild(document.createTextNode('You are UnderWeight'))
                res.append(`BMI : ${bmi}`)
                res.append(msg)
            } else if (bmi >= 18.6 && bmi < 24.9) {
                msg.appendChild(document.createTextNode('You are in Perfect BMI Range'))
                res.append(`BMI : ${bmi}`)
                res.append(msg)
            } else {
                msg.appendChild(document.createTextNode('You are OverWeight'))
                res.append(`BMI : ${bmi}`)
                res.append(msg)
            }
        }

    })
})
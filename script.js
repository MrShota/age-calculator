
const currentDate = new Date()
const currentDay = currentDate.getDay() + 2
const currentMonth = currentDate.getMonth() + 1
const currentYear = currentDate.getFullYear()

const inputDay = document.getElementById('day')
const inputMonth = document.getElementById('month')
const inputYear = document.getElementById('year')

const forYear = document.getElementById('forYear')
const forMonth = document.getElementById('forMonth')
const forDay = document.getElementById('forDay')

let validator = ''
const labelDay = document.getElementById('labelDay')
const labelMonth = document.getElementById('labelMonth')
const labelYear = document.getElementById('labelYear')


const btn = document.getElementById('btn')
btn.addEventListener('click', calculateAge)

const outputDay = document.getElementById('countedDay')
const outputMonth = document.getElementById('countedMonth')
const outputYear = document.getElementById('countedYear')

let errorTextForDay = document.getElementById('errorTextForDay')
let errorTextForMonth = document.getElementById('errorTextForMonth')
let errorTextForYear = document.getElementById('errorTextForYear')

function calculateAge() {
    validator = {
        day: {
            type: 'number',
            validators: {
                required: {
                    errorText: 'Required'
                },
                maxNumber: {
                    value: 31,
                    errorText: 'Must be a valid day'
                },
                minNumber: {
                    value: 1,
                    errorText: 'Must be a valid day'
                }
            }
        },
        month: {
            type: 'number',
            validators: {
                required: {
                    errorText: 'Required'
                },
                maxNumber: {
                    value: 12,
                    errorText: 'Must be a valid day'
                },
                minNumber: {
                    value: 1,
                    errorText: 'Must be a valid day'

                }
            }
        },
        year: {
            type: 'number',
            validators: {
                required: {
                    errorText: 'Required'
                },
                maxNumber: {
                    value: currentYear,
                    errorText: 'Must be a valid year'
                },
                minNumber: {
                    value: 100,
                    errorText: 'Must be a valid year'
                }
            }
        }
    }
    inputValidation()
}
function inputValidation() {
    if (inputDay.value === '') {
        errorTextForDay.innerText = validator.day.validators.required.errorText;
        labelDay.style.color = 'red'
    } else if (inputDay.value > validator.day.validators.maxNumber.value) {
        labelDay.style.color = 'red'
        errorTextForDay.innerText = validator.day.validators.maxNumber.errorText;
    } else if (inputDay.value < validator.day.validators.minNumber.value) {
        labelDay.style.color = 'red'
        errorTextForDay.innerText = validator.day.validators.minNumber.errorText;
    }
    else if (inputMonth.value === '') {
        labelDay.style.color = 'gray'
        labelMonth.style.color = 'red'
        errorTextForDay.innerText = '';
        errorTextForMonth.innerText = validator.month.validators.required.errorText
    } else if (inputMonth.value > validator.month.validators.maxNumber.value) {
        labelMonth.style.color = 'red'
        errorTextForDay.innerText = '';
        errorTextForMonth.innerText = validator.month.validators.maxNumber.errorText
    } else if (inputMonth.value < validator.month.validators.minNumber.value) {
        labelMonth.style.color = 'red'
        errorTextForDay.innerText = '';
        errorTextForMonth.innerText = validator.month.validators.minNumber.errorText
    }
    else if (inputYear.value === '') {
        labelMonth.style.color = 'gray'
        errorTextForMonth.innerText = '';
        labelYear.style.color = 'red'
        errorTextForYear.innerText = validator.year.validators.required.errorText
    } else if (inputYear.value > validator.year.validators.maxNumber.value) {
        labelYear.style.color = 'red'

        errorTextForYear.innerText = validator.year.validators.maxNumber.errorText
    } else if (inputYear.value < validator.year.validators.minNumber.value) {
        labelYear.style.color = 'red'
        errorTextForYear.innerText = validator.year.validators.minNumber.errorText
    }
    else {
        labelDay.style.color = 'gray'
        errorTextForDay.innerText = ''
        labelMonth.style.color = 'gray'
        errorTextForMonth.innerText = ''
        labelYear.style.color = 'gray'
        errorTextForYear.innerText = ''

        outputYear.innerText = currentYear - inputYear.value
        outputMonth.innerText = currentMonth - inputMonth.value
        outputDay.innerText = currentDay - inputDay.value

    }
}



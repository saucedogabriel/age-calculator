const INPUT_DAY = document.querySelector('.input-day');
const INPUT_MONTH = document.querySelector('.input-month');
const INPUT_YEAR = document.querySelector('.input-year');
const INPUT_SUBMIT = document.querySelector('.input-submit');
const TEXT_YEAR = document.querySelector('.text-years');
const TEXT_MONTH = document.querySelector('.text-months');
const TEXT_DAY = document.querySelector('.text-days');
const LABEL_YEAR = document.querySelector('.form-year');
const LABEL_MONTH = document.querySelector('.form-month');
const LABEL_DAY = document.querySelector('.form-day');
const INVALID_MESAGGE_YEAR = document.querySelector('.invalid-mesagge-year');
const INVALID_MESAGGE_MONTH = document.querySelector('.invalid-mesagge-month');
const INVALID_MESAGGE_DAY = document.querySelector('.invalid-mesagge-day');
const INPUTS = document.querySelectorAll('input[type=number]');

const DATE = new Date();
let day = DATE.getDate();
let month = DATE.getMonth() + 1;
let year = DATE.getFullYear();

const mostrarEdad = () => {
    let year_value = Number(INPUT_YEAR.value);
    let month_value = Number(INPUT_MONTH.value);
    let day_value = Number(INPUT_DAY.value);

    // --YEARS
    if(year_value != '' && year_value > year){
        LABEL_YEAR.style.color = 'red';
        INVALID_MESAGGE_YEAR.innerText = 'Must be in the past';
        INPUT_YEAR.style.border = '1px solid red';
        TEXT_YEAR.innerText = '--';
    } else if (year_value == ''){
        LABEL_YEAR.style.color = 'red';
        INVALID_MESAGGE_YEAR.innerText = 'The field is required';
        INPUT_YEAR.style.border = '1px solid red';
        TEXT_YEAR.innerText = '--';
    }else {  
        let year_res = year - year_value;
        TEXT_YEAR.innerText = year_res;
    }

    //--MONTHS
    if(month_value != '' && month_value == month && year_value != '' && year_value < year && day_value != '' && day_value == day ){
        let year_res = year - year_value;
        TEXT_YEAR.innerText = year_res;
        let month_res = month_value - month
        TEXT_MONTH.innerText = month_res ;
        let day_res = day_value - day
        TEXT_DAY.innerText = day_res ;
    }else if(month_value != '' && month_value >= month && month_value <= 12  ){
        let month_res = month_value - month;
        TEXT_MONTH.innerText = 12 - month_res;
        let year_res = year - year_value;
        TEXT_YEAR.innerText = year_res - 1;
    }else if (month_value == '') {
        LABEL_MONTH.style.color = 'red';
        INVALID_MESAGGE_MONTH.innerText = 'The field is required';
        INPUT_MONTH.style.border = '1px solid red';
        TEXT_MONTH.innerText = '--';
    }else if (month_value > 12 ) {
        LABEL_MONTH.style.color = 'red';
        INVALID_MESAGGE_MONTH.innerText = 'Must be a valid month';
        INPUT_MONTH.style.border = '1px solid red';
        TEXT_MONTH.innerText = '--';
    } else {
        let month_res = month - month_value;
        TEXT_MONTH.innerText = month_res;
    }
    //--DAYS
    if(day_value != '' & day_value > 31){
        LABEL_DAY.style.color = 'red';
        INVALID_MESAGGE_DAY.innerText = 'Must be a valid day';
        INPUT_DAY.style.border = '1px solid red';
        TEXT_DAY.innerText = '--';
        console.log(`El dia es mayor a 31, es ${day_value}`);
    }else if(day_value != '' && day_value > 29  && month_value == 2){
        LABEL_DAY.style.color = 'red';
        INVALID_MESAGGE_DAY.innerText = 'February has 29 days';
        INPUT_DAY.style.border = '1px solid red';
        TEXT_DAY.innerText = '--';
    }else if(day_value != '' && day_value <= 29 && month_value == 2){
        let day_res = Math.abs(day_value - day);
        TEXT_DAY.innerText = day_res;
    }else if(day_value != '' && day_value <= 31 && month_value == 1 || month_value == 3  || month_value == 5 || month_value == 7 || month_value == 8 || month_value == 10 || month_value == 12){
       let day_res = Math.abs(day_value - day);
       TEXT_DAY.innerText = day_res;
    }else if (day_value != '' && day_value <= 30 ){
        let day_res = Math.abs(day_value - day);
        TEXT_DAY.innerText = day_res;
    }else if (day_value != '' && day_value >= 31 && month_value == 4 || month_value == 6  || month_value == 9 || month_value == 11){
        LABEL_DAY.style.color = 'red';
        INVALID_MESAGGE_DAY.innerText = 'This month has a 30 days';
        INPUT_DAY.style.border = '1px solid red';
        TEXT_DAY.innerText = '--';
    }
    event.preventDefault();
}

INPUT_SUBMIT.addEventListener('click', mostrarEdad);

INPUTS.forEach(index => {
    index.addEventListener('input', () => {
        let input_name = index.name ;
        let input_value = index.value;
        if(input_value == '' && input_name == 'day'){
            index.style.border = '1px solid var(--primary-light-gray)';
            LABEL_DAY.style.color = 'var(--primary-dark-gray)';
            INVALID_MESAGGE_DAY.innerText = '';
        } else if(input_value == '' && input_name == 'month'){
            index.style.border = '1px solid var(--primary-light-gray)';
            LABEL_MONTH.style.color = 'var(--primary-dark-gray)';
            INVALID_MESAGGE_MONTH.innerText = '';
        }else if(input_value == '' && input_name == 'year'){
            index.style.border = '1px solid var(--primary-light-gray)';
            LABEL_YEAR.style.color = 'var(--primary-dark-gray)';
            INVALID_MESAGGE_YEAR.innerText = '';
        }
    }) 
});

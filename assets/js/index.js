'use strict';
const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button');

function save(){
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
}

function add(){
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);

  if(dayExists){
    alert("Dia já incluso");
    return;
  }
  nlwSetup.addDay(today);
  alert("Dia adicionado com sucesso");
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};
nlwSetup.setData(data);
nlwSetup.load();

button.addEventListener('click', add);
form.addEventListener('change', save);


// const data = { 
//     run: ['01-01', '01-02', '01-06'], 
//     water: ['01-04', '01-05'],
//     food: ['01-01', '01-03'],
//     jornal: ['01-04', '04-02']
//   }
// nlwSetup.setData(data);
// nlwSetup.load();
'use strict';

const Monday = {
  '1': null,
  '2': 'Фізичне виховання',
  '3': 'Основи програмування',
  '4': 'Основи програмування',
};
const Tuesday = {
  '1': 'Математичний аналіз ',
  '2': 'Основи операційних систем',
};
const Wednesday = {
  '1': 'Комп\'ютерна дискретна математика',
  '2': 'Лінійна алгебра',
};
const Thursday = {
  '1': 'Математичний аналіз',
  '2': 'Основи операційних систем',
  '3': 'Лінійна алгебра',
  '4': 'Англійська мова',
};
const Friday = {
  '1': 'Математичний аналіз',
  '2': 'Комп\'ютерна дискретна математика',
  '3': 'Фізичне виховання',
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('On what day show to the schedule? ', (answer) => {
  const day = eval(`${answer}`);
  console.log(day);
  rl.close();
});

import './index.css';
import numeral from 'numeral';

const someValue = numeral(1000).format('$0,0.00');
debugger;
console.log(`Testing webpack bundle.js compilation with "numeral" module formating 1000 to --> ${someValue} <---`);

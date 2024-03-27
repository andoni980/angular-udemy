import './style.css'
import { setupCounter } from './counter.ts'
// import './topics/01-basic-types.ts'
import './topics/02-object-interface.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
Hola mundo
`;
console.log('Hola mundo');

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


export function whatsMyType( argument: any ): any {
    return argument;
}

const amIString = whatsMyType('Hola mundo');
const amINumber = whatsMyType(100);
const amIArray = whatsMyType([1,2,3,4,5]);



console.log(amIString.split(' '));
console.log(amINumber.split(' '));
console.log(amIArray.split(' '));

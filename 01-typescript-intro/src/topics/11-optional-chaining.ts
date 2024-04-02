
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Andoni',
}

const passenger2: Passenger = {
    name: 'Iker',
    children: ['Ander', 'Jorge']
}

const returnChildrenNumber = (passenger: Passenger): number => {

    if( !passenger.children ) return 0;

    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

returnChildrenNumber(passenger2);
returnChildrenNumber(passenger1);

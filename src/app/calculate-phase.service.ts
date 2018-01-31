import { Injectable } from '@angular/core';

@Injectable()
export class CalculatePhaseService {


  constructor() { }

  prueba (day, month, year) {
    const aureoNumber = Math.round( (year + 1) % 19 );
    const epactaYear  = Math.round( ((aureoNumber - 1) * 11 ) % 30 );
    const epactaDate  = this.epactaDate(epactaYear, month, day);
    return {
      'date' : day + '/' + month + '/' + year,
      'aureoNumber' : aureoNumber,
      'epactaYear' : epactaYear,
      'epacta' : epactaDate,
      'name' : this.phaseName(epactaDate)
    };
  }

  epactaDate (epactaYear, month, day) {
    let epactaFinal: number;
    if ( month === 1 && month === 3 ) {
       epactaFinal = epactaYear + day;
    } else if ( month > 2 ) {
       epactaFinal = epactaYear + (month - 3) + day;
    }

    if ( epactaFinal > 29 ) {
      epactaFinal = epactaFinal / 30;
    }
    return Math.round(epactaFinal);
  }

  phaseName( _epacta ) {
    let name: string;
    if ( _epacta === 0 || _epacta === 29 ) {
      name = 'New Moon';
    } else if ( _epacta > 0 && _epacta < 7 ) {
      name = 'Waxing crescent / luna creciente cóncava';
    } else if ( _epacta === 7 ) {
      name = 'First Quarter / Cuarto creciente';
    } else if ( _epacta > 7 && _epacta < 14 ) {
      name = 'Waxing gibbous / luna creciente gibosa';
    } else if ( _epacta === 14 ) {
      name = 'Full Moon';
    } else if ( _epacta > 14 && _epacta < 21 ) {
      name = 'Waning gibbous / luna menguante gibosa';
    } else if ( _epacta === 21 ) {
      name = 'Third quarter / Cuarto menguante';
    } else if ( _epacta > 21 && _epacta < 29 ) {
      name = 'Waning crescent / luna menguante cóncava';
    }

    return name;
  }
}

import React from 'react';
import { OutcomesState } from '../types';
import Headline from './Headline';
import Card from './Card';
import { toFormatted } from '../utils';
import { PUBLIC_DATE_FORMAT } from '../constants';

export default function Outcomes({ fertileWindow, ovulationDate, nextPeriod, pregnancyTestDay, expectedDueDate}: OutcomesState) {
  return (
    <>
      <Headline 
        primary='Resulatat' 
        secondary='Detta är resultatet för dina val' 
      />

      <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <Card 
          date={`${toFormatted(fertileWindow?.[0], PUBLIC_DATE_FORMAT)} - ${toFormatted(fertileWindow?.[1], PUBLIC_DATE_FORMAT)}`} 
          title="Fertilitetsfönster" 
          description="Det fertila fönstret är den tidsperiod under vilken en kvinna är mest benägen att bli gravid, vanligtvis runt tidpunkten för ägglossningen."
        />
        <Card 
          date={toFormatted(ovulationDate, PUBLIC_DATE_FORMAT)} 
          title="Ägglossningsdatum" 
          description="Ägglossningsdatum är den dag i en kvinnas menstruationscykel då ett ägg frigörs från äggstocken och potentiellt kan befruktas."
        />
        <Card 
          date={toFormatted(nextPeriod, PUBLIC_DATE_FORMAT)} 
          title="Datum för nästa menstruation" 
          description="Nästa menstruationsdatum är det datum då en kvinnas menstruationscykel förväntas börja igen efter föregående mens."
        />
        <Card 
          date={toFormatted(pregnancyTestDay, PUBLIC_DATE_FORMAT)} 
          title="Datum för graviditetstest" 
          description="Ett graviditetstestdatum avser det datum då en kvinna tar ett graviditetstest för att avgöra om hon är gravid."
        />
        <Card 
          date={toFormatted(expectedDueDate, PUBLIC_DATE_FORMAT)} 
          title="Datum för förväntad födelse" 
          description="Det förväntade födelsedatumet (EDD) är det datum då en gravid kvinnas barn förväntas födas. Det faktiska förfallodatumet kan variera med några dagar eller veckor."
        />
      </div>
    </>
  );
}

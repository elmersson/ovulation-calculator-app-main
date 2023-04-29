import React from 'react';
import type { NextPage } from 'next';

import NoSSR from '../components/NoSSR';
import Layout from '../components/Layout';
import Calculator from '../components/Calculator';

const Home: NextPage = () => {
  return (
    <NoSSR>
      <Layout>
        <div className="py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-2 lg:px-4">
            <div className='sm:text-center'>
              <h2 className='text-lg font-semibold leading-8 text-indigo-500'>Flow Coach</h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Hitta rätt i din menstruationscykel.
              </p>
              <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600'>
                Ett hjälpmedel för att du ska hitta rätt balans med träning och kost beroende på vart du är i din cykel.
              </p>
            </div>

            <Calculator />

            <div className="mt-20 py-4 text-center">
              <p className="text-gray-400">Skapat av</p>
              <p className="text-indigo-500 font-medium">Rebecka Wessling & Rasmus Elmersson</p>
            </div>
            
          </div>
        </div>
      </Layout>
    </NoSSR>
  );
};

export default Home;

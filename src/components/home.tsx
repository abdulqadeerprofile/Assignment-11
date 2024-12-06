import React from 'react';
import Header from './header';
import Hero from './hero';

const Home = () => {
  return (
    <>
      <div className="bg-[url('/images/hero.jpg')] bg-cover bg-center min-h-screen">

        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="relative ">
          <Header items={{
            item1: 'Home',
            item2: 'Apply',
            item3: 'Jobs',
            item4: 'Result',
            item5: 'Courses'
          }} />
          <Hero
            bodyText={{
              title: 'Certified Cloud Applied Generative AI Engineer (GenEng)',
              description:
                'Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;

import React from 'react'

import Entry from '../components/Entry';
import Layout from '../components/layout';
import wgcCover from '../images/wgc-cover.jpg';

const portfolios = [
  {
    title: 'Web Game Controller',
    subtitle: 'Play game with your friends, at any time, on any device',
    intro: 'The idea of this project comes from Nintendo Switch, where multiple detached controllers can be connected to one host.',
    link: '/',
    coverImg: wgcCover,
    date: '2018.06 - 2018.11',
  },
  {
    title: 'Project management app',
    link: '/'
  },
  { 
    title: 'Lightflow',
    link: '/'
  },
  {
    title: 'Bosch Hackathon',
    link: '/bosch'
  },
];

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {
        portfolios.map(item => {
          return (
            <Entry {...item} key={item.title}/>
          )
        })
      }
    </Layout>
  )
}

export default IndexPage;

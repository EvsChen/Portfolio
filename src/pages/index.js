import React from 'react'

import Entry from '../components/Entry';
import Layout from '../components/layout';
import './index.less';

const portfolios = [
  {
    title: 'Bosch IoT Hackathon',
    subtitle: 'Evacuation strategy under emergency',
    intro: `Targeting government and business users, the hackathon prototype provides
      a solution for emergency evacuation under massive scale situtations`,
    date: '2017.05',
    link: './bosch'
  },
  {
    title: 'Web Game Controller',
    subtitle: 'Play game with your friends, at any time, on any device',
    intro: `The idea of this project comes from Nintendo Switch, 
    where multiple detached controllers can be connected to one host.`,
    date: '2018.06 - 2018.11',
    link: './',
  },
  {
    title: '3D Painting with AR',
    subtitle: 'Draw freely',
    intro: `Inspired by Iron Man, I've always been hoping to draw freely with hands in the 3D space`,
    link: './paint'
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

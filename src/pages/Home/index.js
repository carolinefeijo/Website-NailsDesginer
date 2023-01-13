import React from 'react'
import './styles.css'

import { slides, servicesList } from '../../data/mock'

import CardService from '../../components/CardService'
import { Gallery } from '../../components/Gallery'
import { CardSlides } from '../../components/CardSlides'

import nails from '../../assets/img/nails.jpg'
import AboutComponent from '../../components/AboutComponent'
import Carrousel from '../../components/Carrousel'
import Form from './components/Form'
import { Footer } from '../../components/Footer'

export const Home = () => {
  return (
    <div className="container-home"  id="home">
      <img className="img-unha" src={nails} alt="Liziane Silva" />
      <div className='service-container'>
        {servicesList.map((service) => (
          <CardService service={service} key={service.title} />
        ))}
      </div>


      <div className="container-titles">
        <h2 className="title-depositions">Depoimentos de Clientes</h2>
        <h6 className="title-depositions-secundary">
          Conheça um pouco a opinião de minhas clientes. Tenho certeza que você
          irá se surpreender!
        </h6>
      </div>
      <div className="container-card-container">
        {slides.map((client) => (
          <CardSlides client={client} key={client.name} />
        ))}
      </div>

      <AboutComponent />

      <div className='slides-container'>
        <Carrousel />
      </div>

      <div className='container-form'>
        <Form />
        <Gallery />
      </div>

      <Footer />

    </div>
  )
}

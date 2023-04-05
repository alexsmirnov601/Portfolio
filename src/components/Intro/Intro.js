import React from 'react'
import Button from '../Button/Button'
import '../Intro/Intro.scss'
import Blur from '../Blur/Blur'
import Title from '../Title/Title'
import Subtitle from '../Subtitle/Subtitle'
import Cat from '../../img/Intro/cat4.png'
import Social from '../Social/Social'
import Me from '../../img/Intro/me.jpeg'
import { motion } from 'framer-motion'
import Type from './Type'

const Intro = () => {
  const transition = { duration: 5, type: 'spring' }

  return (
    <div className="intro">
      <div className="intro__left">
        <div className="me">
          <h1 className="title">
            Привет!
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <Subtitle text={'Меня зовут Александр и я'} />
          <Type />
        </div>
        <Button text={'Скачать резюме'} download={true} />
        <div className="link">
          <Social />
        </div>
      </div>
      <div className="intro__right">
        <img className="photo" src={Me} alt="me" />
        <div className="blur">
          <Blur />
        </div>
        <motion.img
          initial={{ right: '-5rem' }}
          whileInView={{ right: '0rem' }}
          whileHover={{ right: '-4rem' }}
          transition={transition}
          className="cat"
          src={Cat}
          alt=""
        ></motion.img>
      </div>
    </div>
  )
}

export default Intro

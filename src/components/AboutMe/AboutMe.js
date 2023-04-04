import React from 'react'
import Title from '../Title/Title'
import Me from '../../img/AboutMe/1.jpeg'
import Button from '../Button/Button'
import './AboutMe.scss'

const AboutMe = () => {
  return (
    <div className="aboutme" id="Aboutme">
      <div className="aboutme__left">
        <img src={Me} alt="Photo" />
      </div>
      <div className="aboutme__right">
        <Title text={'О себе'} />
        <p>
          Я начинающий <span>Frontend-разработчик</span>, стремлюсь стать частью
          дружной и профессиональной команды, в которой мог бы развивать свои
          навыки Frontend-разработки для достижения командных результатов.{' '}
        </p>
        <Button text={'Скачать резюме'} />
      </div>
    </div>
  )
}

export default AboutMe

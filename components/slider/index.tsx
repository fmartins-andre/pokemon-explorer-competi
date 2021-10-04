import { FunctionComponent } from 'react'
import Slider, { Settings } from 'react-slick'

import styles from './SimpleSlider.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import defaultSettings from './defaultSliderSettings'

const SimpleSlider: FunctionComponent<{settings?: Settings}> = ({ settings, children, ...other }) => {
  const _settings = settings ?? defaultSettings

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        <Slider {..._settings} {...other} >
          {children}
        </Slider>
      </div>
    </div>
  )
}

export default SimpleSlider

import React from 'react'
import { useTranslation } from 'react-i18next'
import { Carousel } from 'react-responsive-carousel';

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className={'container mx-auto pt-[20px]'}>
      <div className={'pb-[20px]'}>
        <h2 className={'text-4xl pb-[20px]'}>{t('header-project')}</h2>
        <div>{t('about-main-text-1')}</div>
        <br />
        <div>{t('about-main-text-2')}</div>
        <br />
        <div>{t('about-main-text-3')}</div>
        <br />
        <div>{t('about-main-text-4')}</div>
        <br />
        <div>{t('about-main-text-5')}</div>
      </div>
      <div>
        <Carousel dynamicHeight="true" centerSlidePercentage={'45'}>
          <div className={'h-[400px]'}>
            <img className={'object-cover w-[100%] h-[auto]'} src='/carousel-images/kvzd1.png' alt='img' />
          </div>
          <div className={'h-[400px]'}>
            <img className={'object-cover w-[100%] h-[auto]'}
              src='/carousel-images/kvzd2.jpeg'
              alt='img' />
          </div>
          <div className={'h-[400px]'}>
            <img className={'object-cover w-[100%] h-[auto] '}
              src='/carousel-images/kvzd5.png'
              alt='img' />
          </div>
          <div className={'h-[300px]'}>
            <img className={'object-cover w-[100%] h-[auto]'}
              src='/carousel-images/kvzd4.jpeg'
              alt='img' />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

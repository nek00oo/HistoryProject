import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ResultPage() {
    const { t } = useTranslation();
    return (
        <div className={'container mx-auto pt-[20px]'}>
            <div className={'pb-[20px]'}>
                <h2 className={'text-4xl pb-[20px]'}>{t('header-results')}</h2>
                <div>{t('results-text')}</div>
                <br />
            </div>
        </div>
    )
}
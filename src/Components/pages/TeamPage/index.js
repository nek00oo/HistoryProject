import React from 'react'
import { useTranslation } from 'react-i18next'

export default function TeamPage() {
    const { t } = useTranslation();
    return (
        <div className={'container mx-auto pt-[20px]'}>
            <div className={'pb-[20px]'}>
                <h2 className={'text-4xl pb-[20px]'}>{t('header-team')}</h2>
                <div>{t('team-text')}</div>
                <br />
            </div>
        </div>
    )
}
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function SourcesPage() {
    const { t } = useTranslation();
    return (
        <div className={'container mx-auto pt-[20px]'}>
            <div className={'pb-[20px]'}>
                <h2 className={'text-4xl pb-[20px]'}>{t('header-project')}</h2>
                <h3 className={'text-4xl pb-[20px]'}>{t('sources-1')}</h3>
                <div>{t('sources-text-1')}</div>
                <br />
                <h3 className={'text-4xl pb-[20px]'}>{t('sources-2')}</h3>
                <div>{t('sources-text-2')}</div>
                <br />
                <h3 className={'text-4xl pb-[20px]'}>{t('sources-3')}</h3>
                <div>{t('sources-text-3')}</div>
                <br />
            </div>
        </div>
    )
}
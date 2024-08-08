import { useTranslation } from 'react-i18next';
import s from "./Footer.module.css"
const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className={s.Footer}>
            <div className={s.footer__container}>
                <div className={s.footer__items}>
                    <div className={s.footer__item}>
                        <img className={'cursor-pointer'} onClick={() => window.location.replace('https://itmo.ru')} src={process.env.PUBLIC_URL + "/ITMO.svg"} alt={'ITMO'} />
                    </div>
                    <div className={s.footer__item}>
                        <img className={'cursor-pointer'} onClick={() => window.location.replace('https://spbu.ru')} src={process.env.PUBLIC_URL + "/spbu.svg"} alt={'SPBU'} />
                    </div>
                    <div className={s.footer__item}>
                        <img className={'cursor-pointer'} onClick={() => window.location.replace('https://www.rscf.ru')} src={process.env.PUBLIC_URL + "/rnf.svg"} alt={'RNF'} />
                    </div>
                    <div className={s.footer__politico}>
                        <a className={s.politico__link} href='https://itmo.ru/file/pages/79/personal_data_policy.pdf' target="_blank" rel="noopener noreferrer">{t('footer-politics')}</a>
                    </div>
                    <div className={s.footer__item}>{t('footer-info') + String((new Date()).getFullYear()+1)}</div>
                    <div className={s.footer__item}>{t('footer-itmo')}</div>
                </div>
            </div>
        </div>
    )
}
export default Footer
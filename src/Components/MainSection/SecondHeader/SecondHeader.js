import { useTranslation } from "react-i18next"
import { useDispatch } from 'react-redux';
import { goTo } from '../../../feature/page.store';

const SecondHeader = () => {
    const { i18n, t } = useTranslation();
    const dispatch = useDispatch();

    return (
        <div className={'bg-[url("/public/header_backdround.png")]'}>
            <menu >
                <ul className={'flex flex-row items-center justify-around g-x-5 h-[40px]'}>
                    <li className={'cursor-pointer'}
                        onClick={() => {
                            dispatch(goTo('results'));
                            const element = document.getElementById('depot');
                            console.log(element);
                            if (element) {
                                element.scrollIntoView();
                            }
                        }}>
                        <a>{t('menu-depot')}</a>
                    </li>
                    <li className={'cursor-pointer'}
                        onClick={() => {
                            dispatch(goTo('results'));
                            const element = document.getElementById('house-1');

                            if (element) {
                                element.scrollIntoView({ behavior: 'instant' });
                            }
                        }}>
                        <a>{t('menu-houses')}</a>
                    </li>
                    <li className={'cursor-pointer'}
                        onClick={() => {
                            dispatch(goTo('results'));
                            const element = document.getElementById('church');

                            if (element) {
                                element.scrollIntoView({ behavior: 'instant' });
                            }
                        }}>
                        <a>{t('menu-church')}</a>
                    </li>
                    <li className={'cursor-pointer'}
                        onClick={() => {
                            dispatch(goTo('results'));
                            const element = document.getElementById('hospital');

                            if (element) {
                                element.scrollIntoView({ behavior: 'instant' });
                            }
                        }}>
                        <a>{t('menu-hospital')}</a>
                    </li>
                    <li className={'cursor-pointer'}
                        onClick={() => {
                            dispatch(goTo('results'));
                            const element = document.getElementById('vokzal');

                            if (element) {
                                element.scrollIntoView({ behavior: 'instant' });
                            }
                        }}>
                        <a>{t('menu-railway')}</a>
                    </li>
                    <li className={'cursor-pointer'}
                        onClick={() => {
                            dispatch(goTo('results'));
                            const element = document.getElementById('water-tower');

                            if (element) {
                                element.scrollIntoView({ behavior: 'instant' });
                            }
                        }}>
                        <a>{t('menu-water-tower')}</a>
                    </li>
                </ul>
            </menu>
        </div>
    )
}

export default SecondHeader
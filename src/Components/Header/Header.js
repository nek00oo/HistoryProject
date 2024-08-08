import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { goTo } from '../../feature/page.store';
import '../../i18n';
const Header = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const changeLanguage = () => {
        if (i18n.language === 'ru') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('ru');
        }
    }
    return (
        <header className={'h-[80px] p-[10px]'}>
            <div className={'flex flex-row justify-around items-center'}>
                <div className={'cursor-pointer columns-4'}>
                    <img className={'min-w-[78px]'} src={process.env.PUBLIC_URL + "/Logo.svg"} alt="Logo"></img>
                </div>
                <nav>
                    <ul className={'flex flex-row items-center gap-x-5'}>
                        <li className={'hover:bg-zinc-200 rounded p-1 transition-all'}
                            onClick={() => dispatch(goTo('main'))}
                        >
                            <a href="#">{t('header-main')}</a>
                        </li>
                        <li className={'hover:bg-zinc-200 rounded p-1 transition-all'}
                            onClick={() => dispatch(goTo('project'))}>
                            <a href="#">{t('header-project')}</a>
                        </li>
                        <li className={'hover:bg-zinc-200 rounded p-1 transition-all'}
                            onClick={() => dispatch(goTo('attractions'))}>
                            <a href="#">{t('header-attractions')}</a>
                        </li>
                        <li className={'hover:bg-zinc-200 rounded p-1 transition-all'}
                            onClick={() => dispatch(goTo('team'))}>
                            <a href="#">{t('header-team')}</a>
                        </li>
                        <li className={'hover:bg-zinc-200 rounded p-1 transition-all'}
                            onClick={() => dispatch(goTo('sources'))}>
                            <a href="#">{t('header-sources')}</a>
                        </li>
                        <li className={'hover:bg-zinc-200 rounded p-1 transition-all'}
                            onClick={() => dispatch(goTo('results'))}>
                            <a href="#">{t('header-results')}</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <button className={'hover:bg-zinc-200 rounded p-1 transition-all'} onClick={changeLanguage}>{(i18n.language).toUpperCase()}</button>
                </div>
            </div>
        </header >
    )
}

export default Header;
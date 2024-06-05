import { useTranslation } from 'react-i18next';
const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div className={''}>
            <div className={''}>
                <img className={'w-[100%] h-[80%] object-cover'} src={process.env.PUBLIC_URL + "/photo.svg"} alt={"Фото"} />
            </div>
            <div className="grid place-items-center w-full h-full">
                <img
                    className="w-[90%] h-[90%] object-contain"
                    src={process.env.PUBLIC_URL + "/map.png"}
                    alt="Карта"
                />
            </div>
            <div className={'px-[20px]'}>
                <h2 className={'text-3xl py-[30px] font-bold'}>{t('main-page-h2')}</h2>
                <div className={'text-lg w-[80%] pb-[30px]'}>{t('main-page-description')}</div>
            </div>

        </div>
    )
}
export default MainPage;
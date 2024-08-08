import "react-responsive-carousel/lib/styles/carousel.min.css";
import PageLayout from './Components/layouts/PageLayout';
import { useSelector } from 'react-redux';
import './i18n';
import AttractionsPage from './Components/pages/AttractionsPage';
import MainPage from './Components/pages/MainPage';
import AboutPage from './Components/pages/AboutPage';
import TeamPage from './Components/pages/TeamPage';
import SourcesPage from './Components/pages/SourcesPage';
import ResultsPage from './Components/pages/ResultsPage';

function App() {
    const page = useSelector((state) => state.page.currentPage);
    switch (page) {
        case 'main':
            return <PageLayout><MainPage /> </PageLayout>
        case 'attractions':
            return <PageLayout><AttractionsPage /></PageLayout>
        case 'project':
            return <PageLayout><AboutPage /></PageLayout>
        case 'team':
            return <PageLayout><TeamPage /></PageLayout>
        case 'sources':
            return <PageLayout><SourcesPage /></PageLayout>
        case 'results':
            return <PageLayout><ResultsPage /></PageLayout>
        default:
            return <PageLayout><div>Undefined Page</div></PageLayout>
    }
}
export default App;
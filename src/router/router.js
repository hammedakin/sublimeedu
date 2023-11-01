import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';

const Router = () => {
    return (
        <Routes>

            {/* Landing */}
            <Route path="/" element={<Home />} />

            {/* Error */}
            <Route path="*" element={<ErrorPage />} />

        </Routes>
    );
};

export default Router;
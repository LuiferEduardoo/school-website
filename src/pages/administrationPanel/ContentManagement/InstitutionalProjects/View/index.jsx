import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './Content/Main';
import Secondary from './Content/Secondary'

const View = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<Main />} />
                <Route path=":institutionalProject/publication/*" element={<Secondary/>} />
            </Routes>
        </>
    )
}

export default View
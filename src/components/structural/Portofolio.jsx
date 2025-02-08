import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './Layout'
import Home from '../contents/Home'

export default function Portofolio() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
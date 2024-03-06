import { Routes, Route } from 'react-router-dom';

import { HomeAdm } from '../pages/HomeAdm';
import { DetailsAdm } from '../pages/DetailsAdm';
import { Edit } from '../pages/Edit';
import { New } from '../pages/New';
import { ProfileAdm } from '../pages/ProfileAdm';

export function AdmRoutes() {
    return(
        <Routes>
            <Route path='/' element={<HomeAdm />} />
            <Route path='/details/:id' element={<DetailsAdm />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/new' element={<New />} />
            <Route path='/profile' element={<ProfileAdm />} />
        </Routes>
    )
}

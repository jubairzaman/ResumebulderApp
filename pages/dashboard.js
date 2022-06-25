import React from 'react';
import DashmainNav from '../components/Deshboard/DashmainNav';
import DashNav from '../components/Deshboard/DashNav';
import Innerpart1 from '../components/Deshboard/innerpart1';
import Navbar from '../components/navbar';

const Dashboard = () => {
    return (
        <div>
            <DashNav></DashNav>
            <Innerpart1></Innerpart1>


        </div>
    );
};
// Dashboard.getLayout = function getLayout(page) {
//     return (
//         <>
//             <div className='fixed z-50 w-full top-0'> <DashmainNav></DashmainNav> </div>
//             {page}
//         </>
//     )
// }
export default Dashboard;
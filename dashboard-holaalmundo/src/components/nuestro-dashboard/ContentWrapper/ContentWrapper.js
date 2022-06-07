import React from 'react';
import Header from '../Header/Header';
import Dashboard from '../Pages/Dashboard';
import Productos from '../Pages/Productos';



function ContentWrapper() {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    
                    <Dashboard />

                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentWrapper;
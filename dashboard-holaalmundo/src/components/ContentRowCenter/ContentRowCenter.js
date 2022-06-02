import React from 'react';
import Productos from './Productos/Productos';


function ContentRowCenter(){
    return (
        <div className="row">

            {/*<!-- Genres in DB -->*/}
            <Productos />

        </div>
    )
}

export default ContentRowCenter;
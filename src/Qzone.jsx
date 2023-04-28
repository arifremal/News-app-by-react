import React from 'react';
import qzone1 from '../src/assets/qZone1.png'
import qzone2 from '../src/assets/qZone2.png'
import qzone3 from '../src/assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='my-4 py-4'>
            <h4>zone</h4>
            <div>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;
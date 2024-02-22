import React from 'react';
import '../Screens/RequestScreen.css'
import { MdOutlineArrowForwardIos, MdToken } from 'react-icons/md';
import { TbBriefcase } from "react-icons/tb";
import SearchBar from './SearchBar';


function RequestScreen() {
    return (
        <div>
            {/* Requested Badges */}
            <header className='request-header'> Requested Badges</header>
            <SearchBar />
            <h1 className='request-sub-header'>Requested Badges Status</h1>
            <div>
                {/* first badge request */}
                <button className='selection-button-border'>
                    <MdToken
                        className='job-matches-icon'
                        color='#394DBA'
                        size={50} />
                    <div>
                        <div className="request-company">Badge Name</div>
                        <div className="request-location">Issuing Institution</div>
                        <div className="request-badges">Status: Approved</div>
                    </div>
                    < MdOutlineArrowForwardIos
                        className=''
                        color='#394DBA'
                        size={20} />
                </button>
                {/* second badge request */}
                <button className='selection-button-border'>
                    <MdToken
                        className='job-matches-icon'
                        color='#394DBA'
                        size={50} />
                    <div>
                        <div className="request-company">Badge Name</div>
                        <div className="request-location">Issuing Institution</div>
                        <div className="request-badges">Status: Approved</div>
                    </div>
                    < MdOutlineArrowForwardIos
                        className=''
                        color='#394DBA'
                        size={20} />
                </button>
                {/* third badge request*/}
                <button className='selection-button'>
                    <MdToken
                        className='job-matches-icon'
                        color='#394DBA'
                        size={50} />
                    <div>
                        <div className="request-company">Badge Name</div>
                        <div className="request-location">Issuing Institution</div>
                        <div className="request-badges">Status: Pending</div>
                    </div>
                    < MdOutlineArrowForwardIos
                        className=''
                        color='#394DBA'
                        size={20} />
                </button >
            </div>
            {/* Top Issuing Institutions  */}
            <h1 className='request-sub-header'>Top Issuing Institutions For You</h1>
            {/* first institution */}
            <button className='selection-button'>
                <TbBriefcase
                    className='job-matches-icon'
                    color='#394DBA'
                    size={50} />
                <div className="left-side">
                    <div className="request-institution">Institution Name</div>
                    <div className="institution-badges">Desired Badges:
                        <MdToken color='#394DBA' size={20} />
                        <MdToken color='#394DBA' size={20} />
                        <MdToken color='#394DBA' size={20} /></div>
                </div>
                < MdOutlineArrowForwardIos
                    className=''
                    color='#394DBA'
                    size={20} />
            </button>
        </div >
    );
}

export default RequestScreen;

import React from 'react';
import '../Screens/JobsScreen.css'
import UserProfile from './UserProfile';
import { MdOutlineArrowForwardIos, MdToken } from 'react-icons/md';
import { TbBriefcase } from "react-icons/tb";
import { NavLink } from 'react-router-dom'

function JobsScreen() {
    return (
        <div>
            <UserProfile />
            {/*Job matches based on profile*/}
            {/*first match */}
            <div className='job-matches-container'>
                <div className='jobs-header'>Matched Job Positions</div>
                <div>
                    <NavLink
                        to="/Job Match"
                        className='jobscreen-button-border'>
                        <TbBriefcase
                            color='#394DBA'
                            size={30} />
                        <div className="left-side">
                            <div className="company">Company Name</div>
                            <div className="location">Location</div>
                            <div className="badges">Desired Badges:
                                <MdToken
                                    size={20}
                                    color='#394DBA' />
                                <MdToken
                                    size={20}
                                    color='#394DBA' />
                                <MdToken
                                    size={20}
                                    color='#394DBA' /> </div>
                        </div>
                        <div className="right-side">
                            <div className="job-role">Job Role</div>
                            <div className="salary">$$$</div>
                        </div>
                        < MdOutlineArrowForwardIos
                            className=''
                            color='#394DBA'
                            size={25} />
                    </NavLink>
                    {/*second match*/}
                    <NavLink className='jobscreen-button-border'>
                        <TbBriefcase
                            color='#394DBA'
                            size={30} />
                        <div className="left-side">
                            <div className="company">Company Name</div>
                            <div className="location">Location</div>
                            <div className="badges">Desired Badges:
                                <MdToken
                                    size={20}
                                    color='#394DBA' />
                                <MdToken
                                    size={20}
                                    color='#394DBA' />
                                <MdToken
                                    size={20}
                                    color='#394DBA' /></div>
                        </div>
                        <div className="right-side">
                            <div className="job-role">Job Role</div>
                            <div className="salary">$$$</div>
                        </div>
                        < MdOutlineArrowForwardIos
                            color='#394DBA'
                            size={20} />
                    </NavLink>
                    {/*third match*/}
                    <NavLink className='jobscreen-button'>
                        <TbBriefcase
                            color='#394DBA'
                            size={30} />
                        <div className="left-side">
                            <div className="company">Company Name</div>
                            <div className="location">Location</div>
                            <div className="badges">Desired Badges:
                                <MdToken
                                    size={20}
                                    color='#394DBA' />
                                <MdToken
                                    size={20}
                                    color='#394DBA' />
                                <MdToken
                                    size={20}
                                    color='#394DBA' /></div>
                        </div>
                        <div className="right-side">
                            <div className="job-role">Job Role</div>
                            <div className="salary">$$$</div>
                        </div>
                        < MdOutlineArrowForwardIos
                            className=''
                            color='#394DBA'
                            size={20} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default JobsScreen;

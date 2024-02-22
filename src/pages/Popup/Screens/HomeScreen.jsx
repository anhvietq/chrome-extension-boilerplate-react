import React from 'react';
import '../Screens/HomeScreen.css'
import { MdOutlineArrowForwardIos, MdToken } from 'react-icons/md';
import { TbBriefcase } from "react-icons/tb";
import UserProfile from './UserProfile';
import { NavLink } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs'

function HomeScreen() {
    return (
        <div>
            <UserProfile />
            {/*Job matches based on profile*/}
            {/*first match */}
            <div className='job-matches-container'>
                <div className='title'>Job Matches</div>
                <div>
                    <NavLink
                        to='/Job Match'
                        className='job-button-border'>
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
                    {/*second matches*/}
                    <NavLink className='job-button-border'>
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
                    <NavLink className='job-button'>
                        <TbBriefcase
                            className='job-matches-icon'
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
            {/*Watch list */}
            <div className='job-matches-container'>
                <div className='title'>Watchlist</div>
                <div>
                    {/* first watch */}
                    <NavLink className='job-button-border'>
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
                    {/*second watch*/}
                    <NavLink className='job-button-border'>
                        <TbBriefcase
                            className='job-matches-icon'
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
                    {/*third match*/}
                    <NavLink className='job-button'>
                        <TbBriefcase
                            className='job-matches-icon'
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
            <div className='job-matches-container'>
                <div className='title'>Badge Levels</div>
                <NavLink className='job-button'>
                    <div className="badges">
                        <MdToken
                            color='#394DBA'
                            size={35} />
                        <BsArrowRightShort
                            color='#394DBA'
                            size={30} />
                        <MdToken
                            color='#394DBA'
                            size={35} />
                        <BsArrowRightShort
                            color='#394DBA'
                            size={30} />
                        <MdToken
                            color='#394DBA'
                            size={35} />
                        <BsArrowRightShort
                            color='#394DBA'
                            size={30} />
                        <MdToken
                            color='#394DBA'
                            size={50} />
                        < MdOutlineArrowForwardIos
                            className=''
                            color='#394DBA'
                            size={25} />
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default HomeScreen;
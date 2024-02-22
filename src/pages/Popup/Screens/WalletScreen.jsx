import React from 'react';
import '../Screens/WalletScreen.css';
import UserProfile from '../Screens/UserProfile';
import { MdToken } from 'react-icons/md';


function WalletScreen() {
    return (
        <div>
            <UserProfile />
            <header className='wallet-header'> Your Badges Wallet </header>
            {/*Highlighted Badges */}
            <div className='wallet-sub-header'>Hightlighted Badges</div>
            <div className="badges">
                <MdToken
                    color='#394DBA'
                    size={60} />
                <MdToken
                    color='#394DBA'
                    size={60} />
                <MdToken
                    color='#394DBA'
                    size={60} />
                <MdToken
                    color='#394DBA'
                    size={60} /></div>
            {/*All Badges */}
            <div className='wallet-sub-header'>All Badges</div>
            <div className="badges">
                <MdToken
                    color='#394DBA'
                    size={60} />
                <MdToken
                    color='#394DBA'
                    size={60} />
                <MdToken
                    color='#394DBA'
                    size={60} />
                <MdToken
                    color='#394DBA'
                    size={60} />
            </div>
            {/*Requested Badges */}
            <div className='wallet-sub-header'>Requested Badges</div>
            <div className="requested-badges">
                <MdToken
                    color='#394DBA'
                    size={60} />
                <MdToken
                    color='#394DBA'
                    size={60} />
                <MdToken
                    color='#394DBA'
                    size={60} />
            </div>
            {/*Requested Badges */}
            <div className='wallet-sub-header'>Requested Badges</div>
            <div className="requested-badges">
                <MdToken
                    color='#394DBA'
                    size={60} />
                <MdToken
                    color='#394DBA'
                    size={60} />
                <MdToken
                    color='#394DBA'
                    size={60} />
            </div>
        </div>
    );
}

export default WalletScreen;

import React from 'react';
import Navabar from '../components/navbar/navabar';

import { MdOutlineCopyright } from "react-icons/md";

import GuidelinesForm from './GuidelinesForm';

import "../css/paymentInfoSep.css";

export default function GuidelinesInfo() {


        return (
            <div className='pay-info-main-container'>
                <Navabar />
                <div className='pay-info-details'>
                    <GuidelinesForm />
                </div>
             
                <div className='footer'>
                <MdOutlineCopyright className='copyright' />
                <h2>2025 ICSSES (Last Updated: 10<sup>th</sup>  Feb 2025)</h2>
            </div>
            </div>
        );
    
}

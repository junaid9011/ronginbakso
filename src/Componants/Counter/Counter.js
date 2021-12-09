import { faDonate } from '@fortawesome/free-solid-svg-icons';
import { GiFruitTree } from 'react-icons/gi';
import { MdOutlineCampaign } from 'react-icons/md'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'
const Counter = () => {

    return (
        <div className="h-full border-red-4 w-100 text-center my-6 ">
            <h1 className="capitalize text-gray-500 divide-x py-10 leading-10 hover:text-black ">SUMMARY</h1>
            <div className=" sm:flex justify-evenly w-100 h-full bg-gray-800 text-white">
                <div className="bg-red-400 p-4 md:w-1/3 ">
                    
                    <h1 className="text-6xl" >
                            
                        <CountUp end={50} duration={2} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                            )}
                        </CountUp>+
                    </h1>
                     <h1><FontAwesomeIcon className="mx-2" icon={faDonate} />Donation</h1>
                </div>
                <div className="p-4 md:w-1/3">
               
                <p className="text-6xl">
                        <CountUp end={50} duration={2} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                            )}
                        </CountUp>+
                    </p>
                     <h1><GiFruitTree className=" inline-block"/> Tree Plantation</h1>
                </div>
                <div className=" bg-yellow-500 p-4 md:w-1/3">
                
                <p className="text-6xl">
                        <CountUp end={50} duration={2} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                            )}
                        </CountUp>+
                       
                    </p>
                    <h1><MdOutlineCampaign className=" inline-block"/>Campaign</h1>
                </div>
            </div>
          </div>
    );
};

export default Counter;
 
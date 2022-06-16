import React from 'react';

const Footer = () => {
    return (
        <div>

            <footer className="text-center lg:text-left bg-blue-900 text-white">


                <div className="text-center lg:text-left bg-blue-900 text-white pt-20 pb-10">
                    <div>
                        <div className="grid grid-cols-2 gap-20  ">
                            <div >
                                <h3 className='font-bold text-center '>Support</h3>
                                <br></br>

                                <h3 className='text-slate-300  text-center'>About Us</h3>
                                <h3 className='text-slate-300 text-center '>Contact</h3>
                                <h3 className='text-slate-300 text-center '>FAQ</h3>
                                <h3 className='text-slate-300 text-center '>Pricing</h3>


                            </div>

                            <div>
                                <div >
                                    <h3 className='font-bold text-left '>FreshResume</h3>
                                    <br></br>

                                    <h3 className='text-slate-300  text-left'>Terms and Conditions</h3>
                                    <h3 className='text-slate-300 text-left '>Privacy Policies</h3>
                                    <h3 className='text-slate-300 text-left '>Refund policy
                                    </h3>



                                </div>
                            </div>
                        </div>



                        <div className="text-center p-6 pt-20 ">

                            <p className="text-white-600 font-semibold" href="https://tailwind-elements.com/">2021 Freshresume.co All rights reserved | Terms and Conditions | Privacy Policy | support@freshresume.co</p>
                        </div>
                    </div>


                </div>
            </footer>

        </div>
    );
};

export default Footer;
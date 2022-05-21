import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import coupleImg1 from '../../images/couple/111.JPG'
 
class CoupleSection extends Component {

    render() {
        return(
            <section className="couple-section section-padding" id="couple">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-xs-12">
                            <div className="couple-area clearfix">
                                <div className="text-grid bride">
                                    <h3>Amulya Gongle</h3>
                                    <p>A bubbly natured girl, who is a perfect blend of independent and emotional.</p>
                                    <div className="social">
                                        <ul>
                                            {/* <li><Link to="/"><i className="ti-facebook"></i></Link></li> */}
                                            {/* <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li> */}
                                            <li><Link to="https://www.instagram.com/amulya_gongle/"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="middle-couple-pic">
                                    <div className="middle-couple-pic-inner">
                                        <img src={coupleImg1} alt=""/>
                                    </div>
                                </div>
                                <div className="text-grid groom">
                                    <h3>Rakesh Tagadghar</h3>
                                    <p>A shy gaming freak, who is a mixture of maturity and a little playfulness all set to claim her heart once and for all.</p>
                                    <div className="social">
                                        <ul>
                                            <li><Link to="https://www.facebook.com/Rakeshdrocka"><i className="ti-facebook"></i></Link></li>
                                            {/* <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li> */}
                                            <li><Link to="https://www.instagram.com/rtagadghar/"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        );
    }
}
 
export default CoupleSection;
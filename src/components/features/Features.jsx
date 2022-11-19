import React from 'react';
import egg from '../../images/desktop/image-transform.jpg';
import glass from '../../images/desktop/image-stand-out.jpg';
import './features.css';

const Features = () => {
  return (
    <div className='features'>

        <div class="section_1">
            <div class="section_1_left">
                <div class="text-container">
                    <h1>Transform your brand</h1>
                    <p>We are a full-service creative agency specializing in helping brands grow fast.
                    Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <img src="https://i.ibb.co/TB2DVgK/learnmore.png" />
                </div>
            </div>

            <div class="section_1_right">
                <img src={egg} alt="" />
            </div>
        </div>

        <div class="section_2">
            <div class="section_2_left">
                <img src={glass} alt="" />
            </div>
            <div class="section_2_right">
                <div class="text-container">
                    <h1>Stand out to the right audience</h1>
                    <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                    <img src="https://i.ibb.co/TB2DVgK/learnmore.png" />
                </div>
            </div>
        </div>

        <div class="section_3">
            <div class="section_3_left">
                <div className='section_3_left_text-container'>
                    <h1>Graphic Design</h1>
                    <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                </div>
            </div>
            <div class="section_3_right">
                <div className='section_3_right_text-container'>
                    <h1>Photography</h1>
                    <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div> 
            </div>
        </div>

    </div>
  )
}

export default Features;
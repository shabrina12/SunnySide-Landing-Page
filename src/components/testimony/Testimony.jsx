import React from 'react';
import emily from '../../images/image-emily.jpg';
import thomas from '../../images/image-thomas.jpg';
import jennie from '../../images/image-jennie.jpg';
import './testimony.css';

const Testimony = () => {
  return (
    <div className='testimony'>
        <div className='testimony-title'>
            <h3>CLIENT TESTIMONIALS</h3>
        </div>

        <div className='testimony-container'>
            <div className='testimony-client'>
                <img src={emily} alt="" />
                <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                <div className='testimony-client-name'>
                    <h4>Emily R.</h4>
                    <span>Marketing Director</span>
                </div>
            </div>

            <div className='testimony-client'>
                <img src={thomas} alt="" />
                <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                <div className='testimony-client-name'>
                    <h4>Thomas S.</h4>
                    <span>Chief Operating Officer</span>
                </div>
            </div>

            <div className='testimony-client'>
                <img src={jennie} alt="" />
                <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                <div className='testimony-client-name'>
                    <h4>Jennie F.</h4>
                    <span>Business Owner</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Testimony
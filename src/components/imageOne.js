import { Parallax } from 'react-parallax';
import nasa1 from '../images/nasa1.jpg'

const ImageOne = () => (
    <Parallax className='image-one' bgImage={nasa1}  strength={800}>
        <div className='img-text-div'>
            <span className='img-text'>A trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne;
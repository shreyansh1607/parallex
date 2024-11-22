import { Parallax } from 'react-parallax';
import nasa2 from '../images/nasa2.jpg'

const ImageTwo = () => (
    <Parallax className='image-one' bgImage={nasa2}  strength={800}>
        <div className='img-text-div'>
            <span className='img-text'>A trip to space</span>
        </div>
    </Parallax>
);

export default ImageTwo;
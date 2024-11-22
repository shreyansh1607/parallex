import { Parallax } from 'react-parallax';
import nasa3 from '../images/nasa3.jpg'

const ImageThree = () => (
    <Parallax className='image-one' bgImage={nasa3}  strength={800}>
        <div className='img-text-div'>
            <span className='img-text'>A trip to space</span>
        </div>
    </Parallax>
);

export default ImageThree;
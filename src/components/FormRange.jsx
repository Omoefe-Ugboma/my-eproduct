import { formatPrice } from '../utils';
import { useState } from 'react';

const FormRange = ({label, name, size}) => {
    const step = 1000
    const maxPrice = 100000
    const [selectedPrice, setSelectedProce] = useState(maxPrice)

    return (
        <div className='form-control'>
          <label htmlFor={name} className='label cursor-pointer'>
            <span className='label-text capitalize'>{label}</span>
            <span>{formatPrice(selectedPrice)}</span>
          </label>
          <input 
             type="range" 
             name={name} 
             min={0}
             max={maxPrice}
             value={selectedPrice}
             onChange={(e) => selectedPrice(e.target.value)}
          />
        </div>
    )
}

export default FormRange;

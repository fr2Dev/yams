import { useState } from 'react';

const useToggle = initialValue => {
    const [bool, setBool] = useState(initialValue);
    const toggle = () => setBool(!bool);
    
    return [bool, toggle];
}
 
export default useToggle;


import React, {useState} from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

const BoxList = () => {
    
    const [boxes, setBoxes ] = useState([]);
    
    const addBox = newBox => {
        setBoxes(boxes => [...boxes, newBox]);
      };

      const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
      };

    return (
        <div>
            <NewBoxForm createBox={addBox} />
            {boxes.map(({id, height, width, backgroundColor}) => (
                <Box
                    key = {id}
                    id = {id}
                    height = {height}
                    width = {width}
                    backgroundColor = {backgroundColor}
                    removeBox={() => removeBox(id)}
                />
            )
            )}
        </div>
    )
}

export default BoxList
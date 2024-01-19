import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'

const NewBoxForm = ({createBox}) => {
    const initialState = {
        height: "",
        width: "",
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(initialState)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createBox({...formData, id: uuid()});
        setFormData(initialState)
    }

    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor = "height"> Box Height(in pixels) </label>
            <input
                id = "height"
                type = "text"
                name = "height"
                placeholder = "Box Height"
                value = {formData.height}
                onChange = {handleChange}
            />
            <label htmlFor = "width"> Box Width(in pixels) </label>
            <input
                id = "width"
                type = "text"
                name = "width"
                placeholder = "Box Width"
                value = {formData.width}
                onChange = {handleChange}
            />
            <label htmlFor = "backgroundColor">Box Color</label>
            <input
                id = "backgroundColor"
                type = "text"
                name = "backgroundColor"
                placeholder = "Box Color"
                value = {formData.backgroundColor}
                onChange = {handleChange}
            />
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm

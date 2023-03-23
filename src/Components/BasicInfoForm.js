import React from 'react';

function BasicInfoForm({ basicInfo, onBasicInfoChange }) {
    const handleChange = (event) => {
        const { name, value } = event.target;
        onBasicInfoChange({ ...basicInfo, [name]: value });
    };

    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={basicInfo.name} onChange={handleChange} />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={basicInfo.email} onChange={handleChange} />
            <br />
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={basicInfo.phone} onChange={handleChange} />

            <label htmlFor="Address">Address:</label>
            <input type="text" id="address" name="address" value={basicInfo.address} onChange={handleChange} />
        </form>
    );
}

export default BasicInfoForm;
import React, { Component } from 'react';
import Select from '../../shared/Select';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Input from '../../shared/Input';

const PostCar = () => {

    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);

    useEffect(() => {
        getBrands();
    }, [])

    async function getBrands() {
        const { data: brands } = await axios.get('/brands');
        setBrands(brands);
    }
    async function changeBrand({ target }) {
        if (target.value === "") return setModels([]);
        const modelsId = brands.find(brand => brand._id === target.value).modelsId;
        const { data: models } = await axios.get(`/models/${modelsId}`);
        console.log(models);
        setModels(models);
    }
    return (<div className="post-car">
        <form >
            <div className="form-row">
                <div className="form-group col">
                    <Select
                        options={brands}
                        textProperty="brand"
                        name="brand"
                        placeholder="Car brand"
                        onChange={(e) => changeBrand(e)} />
                </div>
                <div className="form-group col">
                    <Select options={models} name="model" placeholder="Car modal" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col d-flex align-items-center">
                    <span className="mr-1 font-weight-light">$</span>
                    <input type="number" placeholder="Daily rental rate" className="form-control form-control-sm" />
                </div>
            </div>
            <button type="submit" className="btn ml-auto btn-theme d-block">Publish</button>
        </form>

    </div>);
}

export default PostCar;
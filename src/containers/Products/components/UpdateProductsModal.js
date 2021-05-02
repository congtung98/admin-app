import React, { useState } from 'react'
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { IoIosClose } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { MaterialButton } from '../../../components/MaterialUI';
import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal'
import { clothingCat, smartPhoneCat } from '../constant';

const UpdateProductsModal = (props) => {
    const {
        show,
        size,
        handleClose,
        handleSave,
        modalTitle,
        handleProductInput,
        categoryList,
        productPictures,
        handleProductPictures,
        deleteProductPictures,
        deleteAddProductPictures,
        createCategoryList,
        product
    } = props;

    // const [newProductPictures, setNewProductPictures] = useState('');
    const category = useSelector(state => state.category);

    // useEffect(() => {
    //     setNewProductPictures(productPictures);
    // }, []);

    // useEffect(() => {
    //     setNewProductPictures(productPictures)
    // }, [productPictures])

    // const deleteAddProductPictures = (index) => {
    //     console.log('alo', index, productPictures);
    //     productPictures.splice(index, 1);
    //     const _newProductPictures = productPictures;
    //     setNewProductPictures([..._newProductPictures]);
    // }

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            handleSave={handleSave}
            modalTitle={'Update Product'}
        >
            { product && 
            (
                <>
                <Input
                    label="Name"
                    value={product.name}
                    placeholder={`Product Name`}
                    onChange={(e) => handleProductInput('name', e.target.value)}
                />
                <Input
                    disabled={smartPhoneCat.includes(product.category.name) || clothingCat.includes(product.category.name)}
                    label="Quantity"
                    value={product.quantity}
                    placeholder={`Quantity`}
                    onChange={(e) => handleProductInput('quantity', e.target.value)}
                />
                <Input
                    label="Price"
                    value={product.price}
                    placeholder={`Price`}
                    onChange={(e) => handleProductInput('price', e.target.value)}
                />
                <Input
                    label="Description"
                    value={product.description}
                    placeholder={`Description`}
                    onChange={(e) => handleProductInput('description', e.target.value)}
                />
                <select 
                    className="form-control"
                    value = {product.category._id} 
                    onChange={(e) => handleProductInput('category', { _id: e.target.value, name: e.target.name })}>
                        <option>Select category</option>
                        {
                            createCategoryList(category.categories).map(option =>
                                <option key={option.value} value={option.value}>{option.name}</option>
                            )
                        }
                </select>

                {
                    product.productPictures.length > 0 ?
                    product.productPictures.map((pic, index) => <div style={{ display: 'flex', height: 20, margin: '10px 0' }} key={index}>
                        {pic.name || pic.img} 
                        <MaterialButton 
                            bgColor="gray" 
                            style={{ height: 20, width: 20, marginLeft: 20 }}
                            onClick={() => deleteProductPictures(index)}
                        >
                            <IoIosClose/>
                        </MaterialButton>
                    </div>) : null
                }
                {
                   productPictures.length > 0 ?
                   productPictures.map((pic, index) => <div style={{ display: 'flex', height: 20, margin: '10px 0' }} key={index}>
                       {pic.name}
                        <MaterialButton 
                            bgColor="gray" 
                            style={{ height: 20, width: 20, marginLeft: 20 }}
                            onClick={() => deleteAddProductPictures(index)}
                        >
                            <IoIosClose/>
                        </MaterialButton>
                   </div>) : null
                }

                <input type="file" name="productPicture" onChange={handleProductPictures} />
                </>
                )
            }
        </Modal>
    )
}

export default UpdateProductsModal

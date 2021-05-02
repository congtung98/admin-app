import React, { useState } from 'react'
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { IoIosClose } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { MaterialButton } from '../../../components/MaterialUI';
import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal'

const UpdateClothingProductsModal = (props) => {
    const {
        show,
        handleClose,
        handleSave,
        modalTitle,
        handleProductInput,
        product
    } = props;

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            handleSave={handleSave}
            modalTitle={modalTitle}
        >
            { product && 
            (
                <>
                    <Input
                        label="Quantity"
                        value={product.quantity}
                        placeholder={`Quantity`}
                        onChange={(e) => handleProductInput('quantity', e.target.value)}
                    />
                    <Input
                        type="select"
                        options={[ { value: 'S', name: 'S' }, { value: 'M', name: 'M' }, { value: 'L', name: 'L'}, { value: 'XL', name: 'XL'}, { value: 'XXL', name: 'XXL'} ]}
                        label="Size"
                        value={product.size}
                        placeholder={`Size of product`}
                        onChange={(e) => handleProductInput('size', e.target.value)}
                    />
                    <Input
                        label="Color"
                        value={product.color}
                        placeholder={`Color of product`}
                        onChange={(e) => handleProductInput('color', e.target.value)}
                    />
                    <Input
                        label="Fabric"
                        value={product.fabric}
                        placeholder={`Fabric of product`}
                        onChange={(e) => handleProductInput('fabric', e.target.value)}
                    />
                </>
                )
            }
        </Modal>
    )
}

export default UpdateClothingProductsModal

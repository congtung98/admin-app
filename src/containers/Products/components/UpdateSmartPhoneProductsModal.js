import React, { useState } from 'react'
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { IoIosClose } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { MaterialButton } from '../../../components/MaterialUI';
import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal'

const UpdateSmartPhoneProductsModal = (props) => {
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
                        options={[ { value: '1 GB', name: '1 GB' }, { value: '2 GB', name: '2 GB' }, { value: '4 GB', name: '4 GB' }, { value: '6 GB', name: '6 GB'}, { value: '8 GB', name: '8 GB'}]}
                        label="RAM"
                        value={product.ram}
                        placeholder={`RAM of product`}
                        onChange={(e) => handleProductInput('ram', e.target.value)}
                    />
                    <Input
                        type="select"
                        options={[ { value: '16 GB', name: '16 GB' }, { value: '32 GB', name: '32 GB' }, { value: '64 GB', name: '64 GB'} ]}
                        label="Storage"
                        value={product.storage}
                        placeholder={`Storage of product`}
                        onChange={(e) => handleProductInput('storage', e.target.value)}
                    />
                    <Input
                        label="Capacity"
                        value={product.capacity}
                        placeholder={`Capacity of battery`}
                        onChange={(e) => handleProductInput('capacity', e.target.value)}
                    />
                    <Input
                        label="Resolution Type"
                        value={product.resolutionType}
                        placeholder={`Resolution of screen`}
                        onChange={(e) => handleProductInput('resolutionType', e.target.value)}
                    />
                    <Input
                        label="Primary Camera"
                        value={product.primaryCamera}
                        placeholder={`Primary camera of product`}
                        onChange={(e) => handleProductInput('primaryCamera', e.target.value)}
                    />
                    <Input
                        label="Secondary Camera"
                        value={product.secondaryCamera}
                        placeholder={`Secondary camera of product`}
                        onChange={(e) => handleProductInput('secondaryCamera', e.target.value)}
                    />
                    <Input
                        label="Color"
                        value={product.color}
                        placeholder={`Color of product`}
                        onChange={(e) => handleProductInput('color', e.target.value)}
                    />
                    <Input
                        label="Screen Size"
                        value={product.screenSize}
                        placeholder={`Size of screen`}
                        onChange={(e) => handleProductInput('screenSize', e.target.value)}
                    />
                </>
                )
            }
        </Modal>
    )
}

export default UpdateSmartPhoneProductsModal

import React, { useState } from 'react'
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { IoIosClose } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { MaterialButton } from '../../../components/MaterialUI';
import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal'

const UpdateTelevisionProductsModal = (props) => {
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
                        label="Resolution"
                        value={product.resolution}
                        placeholder={`Resolution of product`}
                        onChange={(e) => handleProductInput('resolution', e.target.value)}
                    />
                    <Input
                        type="select"
                        options={[ { value: 'LED', name: 'LED' }, { value: 'LCD', name: 'LCD' }, { value: 'OLED', name: 'OLED'}, { value: 'QLED', name: 'QLED'} ]}
                        label="Screen Type"
                        value={product.screenType}
                        placeholder={`Screen type of product`}
                        onChange={(e) => handleProductInput('screenType', e.target.value)}
                    />
                    <Input
                        type="select"
                        options={[ { value: 'Android', name: 'Android' }, { value: 'Linux', name: 'Linux' }, { value: 'Tizen', name: 'Tizen'}, { value: 'WebOS', name: 'WebOS'} ]}
                        label="Operating System"
                        value={product.operatingSystem}
                        placeholder={`Operating system of product`}
                        onChange={(e) => handleProductInput('operatingSystem', e.target.value)}
                    />
                    <Input
                        label="Screen size"
                        value={product.screenSize}
                        placeholder={`Screen size of product`}
                        onChange={(e) => handleProductInput('screenSize', e.target.value)}
                    />
                </>
                )
            }
        </Modal>
    )
}

export default UpdateTelevisionProductsModal

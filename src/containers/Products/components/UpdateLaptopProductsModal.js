import React, { useState } from 'react'
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { IoIosClose } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { MaterialButton } from '../../../components/MaterialUI';
import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal'

const UpdateLaptopProductsModal = (props) => {
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
                        options={[ { value: '2 GB', name: '2 GB' }, { value: '4 GB', name: '4 GB' }, { value: '8 GB', name: '8 GB'}, { value: '16 GB', name: '16 GB'} ]}
                        label="RAM"
                        value={product.ram}
                        placeholder={`RAM of product`}
                        onChange={(e) => handleProductInput('ram', e.target.value)}
                    />      
                    <Input
                        label="Hard Disk Capacity"
                        value={product.hardDiskCapacity}
                        placeholder={`Hard disk capacity of product`}
                        onChange={(e) => handleProductInput('hardDiskCapacity', e.target.value)}
                    />            
                    <Input
                        label="Screen Resolution"
                        value={product.screenResolution}
                        placeholder={`Screen resolution of product`}
                        onChange={(e) => handleProductInput('screenResolution', e.target.value)}
                    />
                    <Input
                        type="select"
                        options={[ { value: 'Windows', name: 'Windows' }, { value: 'Ubuntu', name: 'Ubunto' }, { value: 'MacOS', name: 'MacOS'} ]}
                        label="Operating System"
                        value={product.operatingSystem}
                        placeholder={`Operating system of product`}
                        onChange={(e) => handleProductInput('operatingSystem', e.target.value)}
                    />
                    <Input
                        label="Processor"
                        value={product.processor}
                        placeholder={`Processor of product`}
                        onChange={(e) => handleProductInput('processor', e.target.value)}
                    />
                    <Input
                        label="Graphic processor"
                        value={product.graphicProcessor}
                        placeholder={`Graphic processor of product`}
                        onChange={(e) => handleProductInput('graphicProcessor', e.target.value)}
                    />
                    <Input
                        label="Weight"
                        value={product.weight}
                        placeholder={`Weight of product`}
                        onChange={(e) => handleProductInput('weight', e.target.value)}
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

export default UpdateLaptopProductsModal

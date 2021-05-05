import React from 'react'
import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal'

const UpdateFurnitureProductsModal = (props) => {
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
                        label="Primary Color"
                        value={product.primaryColor}
                        placeholder={`Primary color of product`}
                        onChange={(e) => handleProductInput('primaryColor', e.target.value)}
                    />            
                    <Input
                        label="Material"
                        value={product.material}
                        placeholder={`Material of product`}
                        onChange={(e) => handleProductInput('material', e.target.value)}
                    />
                </>
                )
            }
        </Modal>
    )
}

export default UpdateFurnitureProductsModal

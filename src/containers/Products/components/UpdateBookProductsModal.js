import React from 'react'
import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal'

const UpdateBookProductsModal = (props) => {
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
                        label="Author"
                        value={product.author}
                        placeholder={`Author of product`}
                        onChange={(e) => handleProductInput('author', e.target.value)}
                    />            
                    <Input
                        label="Publisher"
                        value={product.publisher}
                        placeholder={`Publisher of product`}
                        onChange={(e) => handleProductInput('publisher', e.target.value)}
                    />
                    <Input
                        label="Genre"
                        value={product.genre}
                        placeholder={`Genre of product`}
                        onChange={(e) => handleProductInput('genre', e.target.value)}
                    />
                </>
                )
            }
        </Modal>
    )
}

export default UpdateBookProductsModal

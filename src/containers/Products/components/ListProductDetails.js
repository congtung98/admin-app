import React from 'react'
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { IoIosCreate, IoIosTrash, IoMdInformationCircleOutline } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSmartPhoneProductById } from '../../../redux/actions';

const ListProductDetails = (props) => {

    const { showProductDetailsModal, showUpdateProductModal, deleteProductById, productId } = props
    
    useEffect(() => {
        console.log(productId, 'Product ID');
    }, [productId]);

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    let smartPhones = [];
    smartPhones = product.smartPhones
    switch(props.type){
        case 'smartPhone':
            return  (
                <Table style={{ fontSize: 12 }} responsive="sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Quantity</th>
                        <th>RAM</th>
                        <th>Storage</th>
                        <th>Capacity</th>
                        <th>Resolution Type</th>
                        <th>Primary Camera</th>
                        <th>Secondary Camera</th>
                        <th>Color</th>
                        <th>Screen Size</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            smartPhones.length > 0 ?
                            smartPhones.map(product =>
                                <tr key={product._id}>
                                    <td>{smartPhones.indexOf(product) + 1}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.ram}</td>
                                    <td>{product.storage}</td>
                                    <td>{product.capacity}</td>
                                    <td>{product.resolutionType}</td>
                                    <td>{product.primaryCamera}</td>
                                    <td>{product.secondaryCamera}</td>
                                    <td>{product.color}</td>
                                    <td>{product.screenSize}</td>                         
                                    <td style={{ justifyContent: "center", alignItems: "center" }}>
                                        <button onClick={() => showProductDetailsModal(product)}>
                                            <IoMdInformationCircleOutline color="green" size={20} />
                                        </button>
                                        <button onClick={() => showUpdateProductModal(product)}>
                                            <IoIosCreate color="green" size={20} />
                                        </button>
                                        <button
                                            onClick={() => {
                                                const payload = {
                                                    productId: product._id,
                                                    product: productId
                                                };
                                                dispatch(deleteSmartPhoneProductById(payload));
                                            }}
                                        >
                                            <IoIosTrash color="red" size={20}/>
                                        </button>
                                    </td>
                                </tr>
                            ) : null
                        }
                    </tbody>
                </Table>
            )
    }
    
}

export default ListProductDetails

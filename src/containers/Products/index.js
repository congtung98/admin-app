import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { addClothingProductDetails, addProduct, addSmartPhoneProductDetails, deleteClothingProductById, deleteProductById, deleteSmartPhoneProductById, getClothingProductDetailsById, getSmartPhoneProductDetailsById, updateProduct } from '../../redux/actions';
import Modal from '../../components/UI/Modal';
import './style.css';
import { generatePublicUrl } from '../../urlConfig';
import { IoIosCreate, IoIosSearch, IoIosTrash, IoMdInformationCircleOutline } from 'react-icons/io'
import UpdateProductsModal from './components/UpdateProductsModal';
import UpdateSmartPhoneProductsModal from './components/UpdateSmartPhoneProductsModal';
import { useEffect } from 'react';
import ListProductDetails from './components/ListProductDetails';
import { clothingCat, smartPhoneCat } from './constant';
import Pagination from './components/Pagination';
import UpdateClothingProductsModal from './components/UpdateClothingProductsModal';

const Products = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [productPictures, setProductPictures] = useState([]);
    const [show, setShow] = useState(false);
    const [productDetailModal, setProductDetailModal] = useState(false);
    const [productDetails, setProductDetails] = useState(null);
    const [updateProductModal, setUpdateProductModal] = useState(false);
    const [search, setSearch] = useState('');
    const [isSearch, setIsSearch] = useState(false);
    const [searchProduct, setSearchProduct] = useState([]);
    const [alertDelete, setAlertDelete] = useState(false);
    const [deleteProduct, setDeleteProduct] = useState('');
    
    //state smartphone
    const [smartPhone, setSmartPhone] = useState(false);
    const [ram, setRam] = useState('');
    const [storage, setStorage] = useState('');
    const [capacity, setCapacity] = useState('');
    const [resolutionType, setResolutionType] = useState('');
    const [primaryCamera, setPrimaryCamera] = useState('');
    const [secondaryCamera, setSecondaryCamera] = useState('');
    const [color, setColor] = useState('');
    const [screenSize, setScreenSize] = useState('');
    const [updateSmartPhoneProductModal, setUpdateSmartPhoneProductModal] = useState(false);
    const [smartPhoneDetails, setSmartPhoneDetails] = useState(null);

    //state clothing
    const [clothing, setClothing] = useState(false);
    const [size, setSize] = useState('');
    const [fabric, setFabric] = useState('');
    const [updateClothingProductModal, setUpdateClothingProductModal] = useState(false);
    const [clothingDetails, setClothingDetails] = useState(null);
    
    const [productId, setProductID] = useState('');
    const category = useSelector(state => state.category);
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        const searchProduct = product.products.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase())
        })
        setSearchProduct(searchProduct);
    }, [search]);

    useEffect(() => {
        console.log(searchProduct, 'ok');
    }, [searchProduct]);

    // Get current posts
  const indexOfLastProd = currentPage * productsPerPage;
  const indexOfFirstProd = indexOfLastProd - productsPerPage;
  const currentProd = product.products.slice(indexOfFirstProd, indexOfLastProd);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleSave = () => {

        const form = new FormData();
        form.append('name', name);
        form.append('quantity', quantity);
        form.append('price', price);
        form.append('description', description);
        form.append('category', categoryId);

        for(let pic of productPictures){
            form.append('productPicture', pic);
        }

        dispatch(addProduct(form));
        
        setShow(false);
    };

    const handleAddSmartPhone = () => {
        const payload = {
            quantity,
            ram,
            storage,
            capacity,
            resolutionType,
            primaryCamera,
            secondaryCamera,
            color,
            screenSize,
            product: productId,
        }
        dispatch(addSmartPhoneProductDetails(payload));

        setShow(false);
        setQuantity('');
        setRam('');
        setStorage('');
        setCapacity('');
        setResolutionType('');
        setPrimaryCamera('');
        setSecondaryCamera('');
        setColor('');
        setScreenSize('');
    }

    const handleAddClothing = () => {
        const payload = {
            quantity,
            size,
            color,
            fabric,
            product: productId,
        }
        dispatch(addClothingProductDetails(payload));

        setShow(false);
        setQuantity('');
        setSize('');
        setColor('');
        setFabric('');
    }

    const handleUpdate = () => {
        let arr = productDetails.productPictures.map(function (obj) {
            return obj.img;
        })
        const form = new FormData();
        form.append('_id', productDetails._id);
        form.append('name', productDetails.name);
        form.append('quantity', productDetails.quantity);
        form.append('price', productDetails.price);
        form.append('description', productDetails.description);
        form.append('category', productDetails.category._id);
        form.append('productPictures', arr);

        console.log(arr);
        for(let pic of productPictures){
            form.append('productPicture', pic);
        }
        for (let [key, value] of form) {
            console.log(`${value}`)
          }
        dispatch(updateProduct(form));
        
        setUpdateProductModal(false);
        setProductPictures([]);
    };

    const handleUpdateSmartPhone = () => {
        const payload = smartPhoneDetails;
        dispatch(addSmartPhoneProductDetails(payload));
        setUpdateSmartPhoneProductModal(false);
    }

    const handleUpdateClothing = () => {
        const payload = clothingDetails;
        dispatch(addClothingProductDetails(payload));
        setUpdateClothingProductModal(false);
    }

    const handleShow = () => setShow(true);

    const createCategoryList = (categories, options = []) => {
        for(let category of categories){
            options.push({ value: category._id, name: category.name });
            if(category.children.length > 0){
                createCategoryList(category.children, options)
            }
        }

        return options;
    }
    
    const handleProductPictures = (e) => {
        setProductPictures([
            ...productPictures,
            e.target.files[0]
        ]);
    }

    // const handleEditProductPictures = (e) => {
    //     console.log(e.target.files[0]);
    //     setProductDetails({ ...productDetails, productPictures: [...productDetails.productPictures, e.target.files[0]]});
    // }

    const deleteProductPictures = (index) => {
        console.log('vao khong?', index, productPictures);
        productDetails.productPictures.splice(index, 1);
        const updatedProduct = { ...productDetails, productPictures : productDetails.productPictures }
        setProductDetails(updatedProduct);
    }

    const deleteAddProductPictures = (index) => {
        console.log('alo', index, productPictures);
        productPictures.splice(index, 1);
        const _newProductPictures = productPictures;
        setProductPictures([..._newProductPictures]);
    }

    const renderProductDetails = (p) => {
        const smartPhoneCategory = smartPhoneCat;
        const clothingCategory = clothingCat;
        console.log(p, smartPhoneCategory, clothingCat);
        if(smartPhoneCategory.includes(p.category.name)){
            dispatch(getSmartPhoneProductDetailsById(p));
            setSmartPhone(true);
        }else if(clothingCategory.includes(p.category.name)){
            dispatch(getClothingProductDetailsById(p));
            setClothing(true);
        }
    }

    const renderVariantProducts = () => {
        if(smartPhone){
            return <ListProductDetails 
                        type="smartPhone" 
                        showUpdateProductModal={showUpdateSmartPhoneProductModal}
                        productId={productId}
                        showAlertDeleteModal={showAlertDeleteModal}
                    />
        }else if(clothing){
            return <ListProductDetails
                        type="clothing"
                        showUpdateProductModal={showUpdateClothingProductModal}
                        productId={productId}
                        showAlertDeleteModal={showAlertDeleteModal}
                    />
        }else return null;
    }

    const renderProducts = () => {
        let products = [];
        if(isSearch){
            products = searchProduct;
        }else{
            products = currentProd;
        }
        return (
            <>
                <Table style={{ fontSize: 12 }} responsive="sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 ?
                            products.map(product =>
                                <tr key={product._id}>
                                    <td>{products.indexOf(product) + 1}</td>
                                    <td
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            setProductID(product._id)
                                            setProductDetails(product);
                                            renderProductDetails(product)
                                        }}>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.category.name}</td>
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
                                                };
                                                showAlertDeleteModal(payload);      
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
                <Pagination
                    prodsPerPage={productsPerPage}
                    totalProds={product.products.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </>
        )
    }

    const renderAddProductModal = () => {
        return (
            <Modal
                show={show}
                handleClose={() => setShow(false)}
                handleSave={handleSave}
                modalTitle={'Add New Product'}
            >
                <Input
                    label="Name"
                    value={name}
                    placeholder={`Product Name`}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    label="Quantity"
                    value={quantity}
                    placeholder={`Quantity`}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <Input
                    label="Price"
                    value={price}
                    placeholder={`Price`}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <Input
                    label="Description"
                    value={description}
                    placeholder={`Description`}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <select 
                    className="form-control"
                    value = {categoryId} 
                    onChange={(e) => setCategoryId(e.target.value)}>
                        <option>Select category</option>
                        {
                            createCategoryList(category.categories).map(option =>
                                <option key={option.value} value={option.value}>{option.name}</option>
                            )
                        }
                </select>

                {
                    productPictures.length > 0 ?
                    productPictures.map((pic, index) => <div key={index}>{pic.name}</div>) : null
                }

                <input type="file" name="productPicture" onChange={handleProductPictures} />
            </Modal>
        )
    }

    const renderAddSmartPhoneDetailsModal = () => {
        return (
            <Modal
                show={show}
                handleClose={() => setShow(false)}
                handleSave={handleAddSmartPhone}
                modalTitle={'Add New Variant Product'}
            >
                {
                    productDetails.quantity && product.smartPhones.length === 0 ?
                    <Input
                        disabled={true}
                        label="Quantity"
                        value={productDetails.quantity}
                        placeholder={`Quantity`}
                        onChange={(e) => setQuantity(e.target.value)}
                    /> :   
                    <Input
                        label="Quantity"
                        value={quantity}
                        placeholder={`Quantity`}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                }
                <Input
                    type="select"
                    options={[ { value: '1 GB', name: '1 GB' }, { value: '2 GB', name: '2 GB' }, { value: '4 GB', name: '4 GB' }, { value: '6 GB', name: '6 GB'}, { value: '8 GB', name: '8 GB'}]}
                    label="RAM"
                    value={ram}
                    placeholder={`RAM of product`}
                    onChange={(e) => setRam(e.target.value)}
                />
                <Input
                    type="select"
                    options={[ { value: '16 GB', name: '16 GB' }, { value: '32 GB', name: '32 GB' }, { value: '64 GB', name: '64 GB'} ]}
                    label="Storage"
                    value={storage}
                    placeholder={`Storage of product`}
                    onChange={(e) => setStorage(e.target.value)}
                />
                <Input
                    label="Capacity"
                    value={capacity}
                    placeholder={`Capacity of battery`}
                    onChange={(e) => setCapacity(e.target.value)}
                />
                <Input
                    label="Resolution Type"
                    value={resolutionType}
                    placeholder={`Resolution of screen`}
                    onChange={(e) => setResolutionType(e.target.value)}
                />
                <Input
                    label="Primary Camera"
                    value={primaryCamera}
                    placeholder={`Primary camera of product`}
                    onChange={(e) => setPrimaryCamera(e.target.value)}
                />
                <Input
                    label="Secondary Camera"
                    value={secondaryCamera}
                    placeholder={`Secondary camera of product`}
                    onChange={(e) => setSecondaryCamera(e.target.value)}
                />
                <Input
                    label="Color"
                    value={color}
                    placeholder={`Color of product`}
                    onChange={(e) => setColor(e.target.value)}
                />
                <Input
                    label="Screen Size"
                    value={screenSize}
                    placeholder={`Size of screen`}
                    onChange={(e) => setScreenSize(e.target.value)}
                />
            </Modal>
        )
    }

    const renderAddClothingDetailsModal = () => {
        return (
            <Modal
                show={show}
                handleClose={() => setShow(false)}
                handleSave={handleAddClothing}
                modalTitle={'Add New Variant Product'}
            >
                <Input
                    label="Quantity"
                    value={quantity}
                    placeholder={`Quantity`}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <Input
                    type="select"
                    options={[ { value: 'S', name: 'S' }, { value: 'M', name: 'M' }, { value: 'L', name: 'L'}, { value: 'XL', name: 'XL'}, { value: 'XXL', name: 'XXL'} ]}
                    label="Size"
                    value={size}
                    placeholder={`Size of product`}
                    onChange={(e) => setSize(e.target.value)}
                />
                <Input
                    label="Color"
                    value={color}
                    placeholder={`Color of product`}
                    onChange={(e) => setColor(e.target.value)}
                />
                <Input
                    label="Fabric"
                    value={fabric}
                    placeholder={`Fabric of product`}
                    onChange={(e) => setFabric(e.target.value)}
                />
            </Modal>
        )
    }

    const handleCloseProductDetailsModal = () => {
        setProductDetailModal(false);
    }

    const showProductDetailsModal =  (product) => {
        setProductDetails(product);
        setProductDetailModal(true);
    }

    const showUpdateProductModal = (product) => {
        setProductDetails(product);
        setUpdateProductModal(true);
    }

    const showUpdateSmartPhoneProductModal = (product) => {
        setSmartPhoneDetails(product);
        setUpdateSmartPhoneProductModal(true);
    }

    const showUpdateClothingProductModal = (product) => {
        setClothingDetails(product);
        setUpdateClothingProductModal(true);
    }

    const handleProductInput = (key, value) => {
        const updatedProduct = { ...productDetails, [key] : value }
        setProductDetails(updatedProduct);
    }

    const handleSmartPhoneProductInput = (key, value) => {
        const updatedProduct = { ...smartPhoneDetails, [key] : value }
        setSmartPhoneDetails(updatedProduct);
    }

    const handleClothingProductInput = (key, value) => {
        const updatedProduct = { ...clothingDetails, [key] : value }
        setClothingDetails(updatedProduct);
    }

    const renderProductDetailsModal = () => {

        if(!productDetails) {
            return null;
        }

        return (
            <Modal
                show={productDetailModal}
                handleClose={handleCloseProductDetailsModal}
                modalTitle={'Product Detail'}
                size='lg'
            >
                <Row>
                    <Col md="6">
                        <label className="key">Name</label>
                        <p className="value">{productDetails.name}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Price</label>
                        <p className="value">{productDetails.price}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="value">{productDetails.quantity}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Category</label>
                        <p className="value">{productDetails.category.name}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <label className="key">Description</label>
                        <p className="value">{productDetails.description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label className="key" >Product Pictures</label>
                        <div style={{ display: 'flex' }}>
                            {productDetails.productPictures.map(picture =>
                                <div className="productImgContainer">
                                    <img src={generatePublicUrl(picture.img)} />
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Modal>
        )
    }

    const onDelete = () => {
        const { type } = deleteProduct;
        switch(type){
            case 'smartPhone':
                dispatch(deleteSmartPhoneProductById(deleteProduct));
            break;
            case 'clothing':
                dispatch(deleteClothingProductById(deleteProduct));
            break;
            default:
                dispatch(deleteProductById(deleteProduct));
        }
        setAlertDelete(false);
    }

    const onCloseDeleteModal = () => {
        setAlertDelete(false);
    }

    const renderAlertDeleteModal = () => {
        return (
            <Modal
                show={alertDelete}
                handleClose={() => setAlertDelete(false)}
                modalTitle={'Confirm'}
                 buttons={[
                {
                    label: 'No',
                    color: 'primary',
                    onClick: onCloseDeleteModal
                },
                {
                    label: 'Yes',
                    color: 'danger',
                    onClick: onDelete
                }
            ]}
            >
                Are you sure to delete this product?
            </Modal>
        )
    }

    const productFilterBySearch = (e) => {
        setSearch(e.target.value);
        if(e.target.value === ''){
            setIsSearch(false);
        }else{
            setIsSearch(true);
        }
    }

    const showAlertDeleteModal = (payload) => {
        setAlertDelete(true);
        setDeleteProduct(payload);
    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Product</h3>
                            <button onClick={handleShow}>Add</button>
                        </div>
                        {
                            smartPhone || clothing ? 
                            <button onClick={() => {
                                setSmartPhone(false);
                                setClothing(false);
                            }}>Go back</button> : 
                            null
                        }
                        <div className="searchInputContainer">
                            <input type="text" className="searchInput" onChange={(e) => productFilterBySearch(e)} value={search} placeholder="Search for names.."></input>
                            <div className="searchIconContainer">
                                <IoIosSearch style={{
                                    color: '#2874f0'
                                }} />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ height: 600 }}>
                        { smartPhone || clothing ? renderVariantProducts() : renderProducts()}
                    </Col>
                </Row>
            </Container>
            { smartPhone ? renderAddSmartPhoneDetailsModal() : 
                clothing ? renderAddClothingDetailsModal() :
                renderAddProductModal() }
            {renderProductDetailsModal()}
            {renderAlertDeleteModal()}
            <UpdateProductsModal
                show={updateProductModal}
                handleClose={() => {setUpdateProductModal(false)}}
                handleSave={handleUpdate}
                modalTitle={'Update Product'}
                size="lg"
                // expandedArray={expandedArray}
                // checkedArray={checkedArray}
                handleProductInput={handleProductInput}
                // categoryList={categoryList}
                productPictures={productPictures}
                handleProductPictures={handleProductPictures}
                deleteProductPictures={deleteProductPictures}
                deleteAddProductPictures={deleteAddProductPictures}
                createCategoryList={createCategoryList}
                product={productDetails}
            />
            <UpdateSmartPhoneProductsModal
                show={updateSmartPhoneProductModal}
                handleClose={() => setUpdateSmartPhoneProductModal(false)} 
                handleSave={handleUpdateSmartPhone}
                product={smartPhoneDetails}
                handleProductInput={handleSmartPhoneProductInput}
                modalTitle={'Update Smartphone Variants'}
                size="lg"
            />
            <UpdateClothingProductsModal
                show={updateClothingProductModal}
                handleClose={() => setUpdateClothingProductModal(false)}
                handleSave={handleUpdateClothing}
                product={clothingDetails}
                handleProductInput={handleClothingProductInput}
                modalTitle={'Update Clothing Variants'}
                size="lg"
            />
        </Layout>
    )
}

export default Products

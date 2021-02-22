import React from 'react';
import Modal from '../../../components/UI/Modal';

const DeleteCategoryModal = (props) => {

    const {
        show,
        handleClose,
        modalTitle,
        expandedArray,
        checkedArray,
        deleteCategories
    } = props;

    return (
        <Modal
            modalTitle={modalTitle}
            show={show}
            handleClose={handleClose}
            buttons={[
                {
                    label: 'No',
                    color: 'primary',
                    onClick: handleClose
                },
                {
                    label: 'Yes',
                    color: 'danger',
                    onClick: deleteCategories
                }
            ]}
        >
            <h5>Expanded</h5>
            {
                expandedArray.map((item, index) => <><span key={index}>{item.name}</span><br/></>)
            }
            <h5>Checked</h5>
            {
                checkedArray.map((item, index) => <><span key={index}>{item.name}</span><br/></>)
            }
        </Modal>
    )
}

export default DeleteCategoryModal;
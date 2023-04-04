import React from 'react';
import Header from '../components/header';
import UserDataTable from './usersDatatable';

const UsersPage = () => {
    return (
        <div className='container' style={{ marginTop: '4%' }}>
            <div className='row mb-5'>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4>Registered User: <span className='text-danger'>11231232</span></h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='card-header'>
                    <h4>Users</h4>
                </div>
                <div className='card-body'>
                    <UserDataTable />
                </div>
            </div>
        </div>
    );
};

export default UsersPage;

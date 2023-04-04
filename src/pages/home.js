import React from 'react';
import Header from './components/header';

const HomePage = () => {
    return (
        <div className='container' style={{ marginTop: '4%' }}>
            <div className='row'>
                <div className='col-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-6'>
                                    <h4>
                                        Reports Count
                                    </h4>
                                </div>
                                <div className='col-6'>
                                    <h4>54796</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-6'>
                                    <h4>
                                        Open Reports Count
                                    </h4>
                                </div>
                                <div className='col-6'>
                                    <h4>54796</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12 mt-5'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>New Active Reports</h4>
                        </div>
                        <div className='card-body'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
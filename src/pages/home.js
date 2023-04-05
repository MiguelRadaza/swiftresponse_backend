import { React, useState, useEffect } from 'react';
import Header from './components/header';
import { auth, firebase, database } from  "../utils/firebase";
import { collection, getDocs, limit, query, where } from "firebase/firestore"; 
import Link from 'next/link'

const HomePage = () => {
    const [reportsCount, setReportsCount] = useState(0);
    const [reportsActiveCount, setReportsActiveCount] = useState(0);
    const [activeReports, setActiveReports] = useState([]);
    useEffect(() => {
        handleReportsCount();
        handleReportsActiveCount();
    }, []);

    const handleReportsCount = async ()  => {
        const querySnapshot = await getDocs(collection(database, "reports"));
        setReportsCount(querySnapshot.docs.length);
    }

    const handleReportsActiveCount = async () => {
        const snapshotQuery = query(collection(database, "reports"), where("status", "==", "active"));
        const querySnapshot = await getDocs(snapshotQuery);
        var smp = [];
        const documents = querySnapshot.docs.map((doc) => doc.data());
        setActiveReports(documents);
        setReportsActiveCount(querySnapshot.docs.length);
    }

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
                                    <h4 className='text-success'>{reportsCount}</h4>
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
                                    <h4 className='text-danger' >{reportsActiveCount}</h4>
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
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Accident Cause</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Place of Accident</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {Array.isArray(activeReports) &&  activeReports.map((item, index) => (
                                    <tr  key={index}>
                                        <th  scope="row">{item.reportId}</th>

                                        <td>{item.accidentCause}</td>
                                        <td>{item.status}</td>
                                        <td>{item.placeOfAccident}</td>
                                        <td>
                                        <button className='btn btn-info'>
                                            <Link style={{textDecoration: 'none'}} href={`/geolocation?id=${item.reportId}`}>
                                                View Report
                                            </Link>
                                        </button>
                                        </td>
                                    </tr>
                                ))}
                                  
                                    {/* <tr>
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
                                    </tr> */}
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
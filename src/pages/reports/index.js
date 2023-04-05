import React, { useEffect, useRef, useState } from 'react';
import CallisionDataTable from '../../utils/callisionDataTable';
import { database } from  "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore"; 

const ReportsPage = () => {
    const [reports, setReports] = useState([]);
    const [reportsCount, setReportsCount] = useState(0);

    useEffect(() => {
        const fetchReportsData = async ()  => {
            const querySnapshot = await getDocs(collection(database, "reports"));
            const documents = querySnapshot.docs.map((doc) => doc.data());
            setReports(documents);
            setReportsCount(documents.length);
        }

        fetchReportsData();
    }, []);

      
    const columns = [
        { title: "#", data: "reportId" },
        { title: "Accident Cause", data: "accidentCause" },
        { title: "Address", data: "address" },
        { 
            title: "Accident Image", 
            data: "imageUrl",
            sortable: false,
            render: function(data, type, row, meta) {
                return '<img src="' + data + '" width"100" height="100">';
            }
        },
        { 
            title: "Status", 
            data: "status",
            sortable: true,
            cell: row => (
                <span className={`badge ${row.status === 'active' ? 'bg-success' : 'bg-danger'}`}>
                    {row.status}
                </span>
            ),
        },
        { title: "Time of Accident", data: "timeOfAccident" },
        { 
            title: "", 
            data: "reportId",
            sortable: false,
            render: function(data, type, row, meta) {
                return '<button className="btn btn-info">View</button>';
            }
        },
    ];
      

    return (
        <div className='container' style={{ marginTop: '4%' }}>
            <div className='row mb-5'>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4>Reported Issue: <span className='text-danger'>{reportsCount}</span></h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='card-header'>
                    <h4>Reports</h4>
                </div>
                <div className='card-body'>
                    <CallisionDataTable columns={columns} data={reports} />
                </div>
            </div>
        </div>
    );
};

export default ReportsPage;
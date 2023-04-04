import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

function UsersDataTable() {
    const tableRef = useRef(null);
    useEffect(() => {
        require("jquery/dist/jquery.min.js");
        require("datatables.net/js/jquery.dataTables.min.js");
        require("datatables.net-bs5/js/dataTables.bootstrap5.min.js");
        $(tableRef.current).DataTable();
    }, []);

    return (
        <div>
            <table id="example" className='table table-striped' ref={tableRef}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>30</td>
                        <td>Male</td>
                    </tr>
                    <tr>
                        <td>Jane Doe</td>
                        <td>25</td>
                        <td>Female</td>
                    </tr>
                    <tr>
                        <td>Bob Smith</td>
                        <td>40</td>
                        <td>Male</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UsersDataTable;
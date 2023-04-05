import React, { useRef, useEffect } from "react";
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import $ from 'jquery';

const Datatable = ({ columns, data }) => {
  const tableRef = useRef(null);

  useEffect(() => {

    require("jquery/dist/jquery.min.js");
    require("datatables.net/js/jquery.dataTables.min.js");
    require("datatables.net-bs5/js/dataTables.bootstrap5.min.js");
    // require("jquery/dist/jquery.min.js");
    // require("datatables.net/js/jquery.dataTables.min.js");
    // require("datatables.net-bs5/js/dataTables.bootstrap5.min.js");
    
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    console.log(columns);
    const table = $(tableRef.current).DataTable({
      responsive: true,
      data: data,
      columns: columns,
    });

    return () => {
      // destroy datatable when unmounting component
      table.destroy();
    };
  }, [columns, data]);

  return (<div className="table-responsive"><table className="table table-striped" ref={tableRef}></table></div>);
};

export default Datatable;
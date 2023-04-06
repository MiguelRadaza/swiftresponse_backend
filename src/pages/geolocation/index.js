import { React, useState, useEffect } from 'react';
import Header from '../components/header';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';
import { database } from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { useRouter } from 'next/router'

const GeolocationPage = () => {
    const libraries = ['places'];
    let  latitude = 0;
    let  longitude = 0;
    const [center, setCenter] = useState({
        lat: 14.6747688,
        lng: 120.9431204,
    });
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);
    

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBFeezviko-NQKCgmR2Eo7PrvGRpb6QvuE',
        libraries,
    });
    const router = useRouter()
    const { id } = router.query;

    const mapContainerStyle = {
        width: '100%',
        height: '72vh',
    };

    // const markers = [
    //     {
    //         position: {
    //             lat: 37.7749,
    //             lng: -122.4194,
    //         },
    //         title: "Marker 1",
    //         description: "This is Marker 1",
    //     },
    //     {
    //         position: {
    //             lat: 37.7739,
    //             lng: -122.4204,
    //         },
    //         title: "Marker 2",
    //         description: "This is Marker 2",
    //     },
    // ];

    // const center = {
    //     lat: 37.7749,
    //     lng: -122.4194,
    // };

    const handleReportsData = async (reportId = null)  => {
        if (reportId) {
            const q = query(collection(database, "reports"), where("reportId", "==", reportId));
            const querySnapshot = await getDocs(q);
            var marker = [];
             querySnapshot.forEach( (doc) => {
                var reportData = doc.data();
                latitude = reportData['location'][0];
                longitude = reportData['location'][1];
                marker = [
                    {
                        reportId: reportData['reportId'],
                        position: {
                            lat: latitude,
                            lng: longitude,
                        },
                        title: reportData['address'],
                        description: reportData['accidentCause'],
                        image: reportData['imageUrl'],
                    },
                ];
                
                return;
            });

            setMarkers(marker);
            console.log(marker);
            // setCenter({lat:  latitude, lng: longitude});

        }
    }


    useEffect(() => {
        handleReportsData(id);
    }, [])


    return (
        <div className='p-5' style={{ marginTop: '4%' }}>
            <div className='row'>
                <div className='col-lg-2 col-md-12 mb-3 col-xs-12 mb-3'>
                    <div className='card'>
                        <div className='card-body' >
                            <button className='btn btn-success'>Show Active Reports</button>
                            <div className='form-group row mt-3'>
                                <label><b>Search Report Id</b></label>
                                <div className='col-8'>
                                    <input type='text' id='searchReportId' placeholder='Report ID' className='form-control' />
                                </div>
                                <div className='col-4' style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                    <button className='btn btn-success'>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-lg-10 col-md-12 mb-3 col-xs-12 mb-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Map</h4>
                        </div>
                        <div className='card-body'>
                            {isLoaded && (
                                <GoogleMap
                                id='map'
                                    mapContainerStyle={mapContainerStyle}
                                    zoom={15}
                                    center={center}
                                >

                                    {markers && markers.map(marker => {
                                        return  (
                                            <Marker
                                                key={marker.reportId}
                                                position={marker.position}
                                                onClick={() => setSelected(marker)}
                                            />
                                        );
                                    })}
                                    {selected && (
                                        <InfoWindow
                                            position={selected.position}
                                            onCloseClick={() => setSelected(null)}
                                        >
                                            
                                            <div>
                                                <h1>{selected.title}</h1>
                                                <h4>{selected.description}</h4>
                                                <img height="100" width="100" src={selected.image} />
                                            </div>
                                        </InfoWindow>
                                    )}
                                </GoogleMap>
                            )}



                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default GeolocationPage;
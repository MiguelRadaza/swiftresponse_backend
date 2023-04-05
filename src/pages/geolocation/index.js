import React from 'react';
import Header from '../components/header';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';
import { useRouter } from 'next/router'

const GeolocationPage = () => {
    const libraries = ['places'];
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

    const center = {
        lat: 37.7749,
        lng: -122.4194,
    };

    const markers = [
        {
            position: {
                lat: 37.7749,
                lng: -122.4194,
            },
            title: "Marker 1",
            description: "This is Marker 1",
        },
        {
            position: {
                lat: 37.7739,
                lng: -122.4204,
            },
            title: "Marker 2",
            description: "This is Marker 2",
        },
    ];
    const selected = null;
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
                                    mapContainerStyle={mapContainerStyle}
                                    zoom={8}
                                    center={center}
                                >
                                    {markers.map(marker => (
                                        <Marker
                                            key={marker.id}
                                            position={marker.position}
                                            onClick={() => setSelected(marker)}
                                        />
                                    ))}
                                    {selected && (
                                        <InfoWindow
                                            position={selected.position}
                                            onCloseClick={() => setSelected(null)}
                                        >
                                            <div>{selected.name}</div>
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
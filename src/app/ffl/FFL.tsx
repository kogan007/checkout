import React, { Component, ReactNode, useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const FFL = () => {
   
    const [zipcode, setZipcode] = useState("");
    const [mapOpen, setMapOpen] = useState(false);

    const center = {
        lat: 	44.500000,
        lng: -89.500000
    }
    
    const zoom = 4

    const handleForm = (e: any) => {
        e.preventDefault()

        console.log(zipcode)

        setZipcode(e.target.value)
        setMapOpen(true)
    }

    useEffect(() => {
        const getData = async () => {
            const data = await fetch("localhost:5000/api/address/all", {
                method: "GET",
                headers: {
                    "access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDllZTI2NWNmYTAyMWU5MzkxOTE1NDgiLCJmaXJzdE5hbWUiOiJ0ZXN0IiwibGFzdE5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJjb3JleWtvZ2FuQGdtYWlsLmNvbSIsImlhdCI6MTYyMTUyNzA5NiwiZXhwIjoxNjIxNTM0Mjk2fQ.AVs7nnIcyYPIXH4_Vzx6vPnWjqdg8BrfFNzDJfN-IVg"
                }
            })

            const toJson = await data.json()

            console.log(toJson)
        }

        getData()
    })
    if (mapOpen) {
        return (
            <div>
                <form onSubmit={handleForm}>
                    <fieldset>
                        <input 
                            type="number" 
                            value={zipcode}
                            onChange={(e) => {
                                setZipcode(e.target.value)
                            }}
                        />
                    </fieldset>
                </form>
            </div>
        )
    } else {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyB5b1Z_WOs9vuunENE5p0hEuXawgAbGHmc"}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                
            </GoogleMapReact>
            </div>
        )
    }
}


export default FFL;
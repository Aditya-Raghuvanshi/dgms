import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Navbar from './Navbar'
import MainBody from './MainBody'
import Home from './Home'
import ApprovedByYou from './ApprovedByYou'
import SeeAllDrivers from './SeeAllDrivers'
import AddNewRequest from './AddNewRequest'
import NewTranspoter from './NewTranspoter'
import NewVehicle from './NewVehicle'
import Vehicles from './Vehicles'
import SeeDriver from './SeeDriver'
import MainBodyVehicle from './MainBodyVehicle'
import VehiclesDetail from './VehiclesDetail'
import PoliceVerification from './PoliceVerification'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },
        {
            path:"/body",
            element:<MainBody/>,
            children:[
                {
                    path:"/body",
                    element:<Home/>,
                },{
                    path:"/body/approvedByYou",
                    element:<ApprovedByYou/>,
                },{
                    path:"/body/seeAllDrivers",
                    element:<SeeDriver/>,
                    children:[
                        {
                            path:"/body/seeAllDrivers",
                            element:<SeeAllDrivers/>,
                        },
                        {
                            path:"/body/seeAllDrivers/vehicles/:id",
                            element:<MainBodyVehicle/>,
                            children:[
                                {
                                    path:"/body/seeAllDrivers/vehicles/:id",
                                    element:<Vehicles/>,
                                },{
                                    path:"/body/seeAllDrivers/vehicles/:id/:id",
                                    element:<VehiclesDetail/>
                                }
                            ]
                        }
                    ]
                },{
                    path:"/body/addNewRequest",
                    element:<AddNewRequest/>,
                },
                {
                    path:"/body/addNewTranspoter",
                    element:<NewTranspoter/>,
                },
                {
                    path:"/body/addNewVehicle",
                    element:<NewVehicle/>,
                },
                {
                    path:"/body/policeVerification",
                    element:<PoliceVerification/>,
                }
            ]
        }
    ])
  return (
    <div>
        <Navbar/>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body

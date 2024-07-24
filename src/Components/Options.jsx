import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react'
import { calculatedcolor, calculatedDetails } from '../Redux/TotalCalculations/CalculationSlice'

const Options = () => {
    const [color,setColor] = useState(0)
    const [power,setPower] = useState(0)
    const [warpDrive, setWarpDrive] = useState(0)
    const [optionPackage, setOptionPackage] = useState(0)
    const {basePrice,colors} = useSelector(state=>state.calculation)
    const dispatch = useDispatch()

    function handleSnow(){
        // setColor(0)
        dispatch(calculatedDetails(2000))
    }
    function handleVolcano (){
        // setColor(100)
        dispatch(calculatedcolor(1000))
    }
    function handleSky(){
        setColor(100)
    }
    function handle100MW(){
        setPower(0)
    }
    function handle150MW(){
        setPower(200)
    }
    function handle200MW(){
        setPower(500)
    }
    function handleDriveNo(){
        setWarpDrive(0)
    }
    function handleDriveYes(){
        setWarpDrive(1000)
    }
    function handleBasicPackage(){
        setOptionPackage(0)
    }
    function handleSportPackage(){
        setOptionPackage(100)
    }
    function handleLuxPackage(){
        setOptionPackage(500)
    }
  return (
    <>
    <div>
        <button onClick={handleSnow}>0 euro</button>
        <button onClick={handleVolcano}>100 euro</button>
        <button onClick={handleSky}>100 euro</button>
    </div><br/>
    <div>
        <button onClick={handle100MW}>0 euro</button>
        <button onClick={handle150MW}>200 euro</button>
        <button onClick={handle200MW}>500 euro</button>
    </div><br/>
    <div>
        <button onClick={handleDriveNo}>0 euro</button>
        <button onClick={handleDriveYes}>1000 euro</button>
    </div><br/>
    <div>
        <button onClick={handleBasicPackage}>0 euro</button>
        <button onClick={handleSportPackage}>100 euro</button>
        <button onClick={handleLuxPackage}>500 euro</button>
    </div><br/><br/><br/>
    <div>
        <p>Base Price: {basePrice}</p>
        <p>Color: {colors}</p>
        <p>Power: <div>{power}</div></p>
        <p>Warp Drive: <div>{warpDrive}</div></p>
        <p>Option Package: <div>{optionPackage}</div></p>
        <p>Total: {basePrice+color+power+warpDrive+optionPackage}</p>
    </div>
    </>
  )
}

export default Options
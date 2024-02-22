import React, { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Element from './Element'

const Experience = ({identificator}) => {

    let items = Object.keys(localStorage)

    return <>
        { items.map((element, index) => {
            return <Element key={index} element={element} />
        } ) }
    </>
}

export default Experience
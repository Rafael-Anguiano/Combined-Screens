import React from 'react'

const Element = ({element}) => {
    const item = JSON.parse(localStorage.getItem(element))
    return (
        <mesh scale={item.scale}>
            <sphereGeometry />
            <meshBasicMaterial wireframe color={item.color}/>
        </mesh>
    )
}

export default Element
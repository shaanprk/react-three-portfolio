import React from 'react';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TextureLoader } from 'three';

import shelfModel from '../assets/models/shelf.glb';
import shelfTexture from '../assets/textures/shelf_texture.jpg';

const Shelf = () =>{
    // Load the shelf model
    const gltf = useLoader(GLTFLoader, shelfModel); // Bookshelf model
    const woodTexture = useLoader(TextureLoader, shelfTexture) // Bookshelf texture

    return (
        <primitive 
            object={gltf.scene} 
            scale={1} 
            position={[0, -1.1, 1.5]} 
        ></primitive>
    );
}

export default Shelf;
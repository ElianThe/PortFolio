import React, { Suspense } from 'react';
import {Canvas} from "@react-three/fiber";
import {Decal, Float, OrbitControls, Preload, useTexture} from "@react-three/drei";
import CanvasLoader from "../Loader.jsx";

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);
    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0.05, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]}/>
                <meshStandardMaterial
                    color="#fff8eb"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    flatShading
                    map={decal}
                />
            </mesh>
        </Float>
    )
}

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
            frameloop="demand"
            gl={{ preserveDrawingBuffer: true }}
        >
            {/* Suspense = composant de gestion des chargements. Suspend le rendu jusqu'à ce que les données soit chargées */}
            <Suspense fallback={ <CanvasLoader /> }>
                {/* OrbitsControls = controles  interractives à la scene */}
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>
          {/* precharge tous les modeles 3D. Garantit que tous les modèles 3D sont chargés avant le rendu */}
          <Preload all />
        </Canvas>
    );
}

export default BallCanvas
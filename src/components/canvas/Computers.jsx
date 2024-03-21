import { Suspense, useState, useEffect } from "react";

import { Canvas } from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computer = ({isMobile}) => {
    const computer = useGLTF('./desktop_pc/scene.gltf'); //userGLTF qui permet de charger un modèle un 3D
    return (
        // mesh = conteneur de rendu 3D pour les objets 3D. En gros, c'est l'equivalence de div en html
        <mesh>
            {/* hemisphereLight = lumiere dans une scene 3D. Intensity controle la luminosité et groundColor= couleur du sol éclairé */}
            <hemisphereLight intensity={5}
                             groundColor="black"/>
            {/* source de lumière. emet de la lumiere dans toutes les directions */}
            <pointLight intensity={1} />
            <spotLight
                position={[-20, 50, 10]}
                angle={12}
                penumbra={1}
                intensity={100}
                castShadow
                shadow-mapSize={1024}
            />

            {/* Primitive = rendre un objet 3D provenant d'un modèle .Object fait référence à la scène d'un modèle 3D  */}
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75 }
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
}

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        // ajout un listener pour les changements de la taille de l'ecran
        const mediaQuery = window.matchMedia('(max-width: 500px)');

        //initialise la variable mobile
        setIsMobile(mediaQuery.matches);

        //definie un callback comme listener pour le changement du media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }

        // enleve le listener quand le composant est mounted
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }

    }, []);
    return (
        // Canvas = conteneur pour la scene 3D
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            {/* Suspense = composant de gestion des chargements. Suspend le rendu jusqu'à ce que les données soit chargées */}
            <Suspense fallback={ <CanvasLoader /> }>
                {/* OrbitsControls = controles  interractives à la scene */}
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computer isMobile={isMobile} />
            </Suspense>
            {/* precharge tous les modeles 3D. Garantit que tous les modèles 3D sont chargés avant le rendu */}
            <Preload all />
        </Canvas>
    );
}

export default ComputersCanvas;
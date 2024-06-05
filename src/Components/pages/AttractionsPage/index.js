import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useTranslation } from 'react-i18next';

// imports 3d models
import ChurchModel from '../../../3d-models/church.glb';
import House1 from '../../../3d-models/house-1.glb';
import House2 from '../../../3d-models/house-2.glb';
import House3 from '../../../3d-models/house-3.glb';
import Vokzal from '../../../3d-models/vokzal.glb';
import WaterTower from '../../../3d-models/water-tower.glb';
import Depot from '../../../3d-models/depot.glb';
import Hospital from '../../../3d-models/hospital.glb';

const Model = ({ modelUrl }) => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load(modelUrl, (gltf) => {
      setModel(gltf.scene);
    }, null, (e) => console.log(e));
  }, [modelUrl]);

  return model ? <primitive object={model} /> : null;
};

const ModelViewer = ({ title, description, modelUrl, anchor }) => {
  return (
    <div id={anchor} className={'flex max-w-[1000px] h-[600px]  justify-center py-[40px]'}>
      <div className={'w-[50%] h-auto'}>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="mb-4">{description}</div>
      </div>
      <div className={'bg-white justify-end w-[100%] h-auto'}>
        <Canvas>
          <Suspense fallback={<div>Loading...</div>}>
            <Model modelUrl={modelUrl} />
            <ambientLight intensity={7} />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default function AttractionsPage() {
  const { t } = useTranslation();

  return (
    <div className={'flex justify-center flex-col items-center'}>
      <ModelViewer title={t('attractions-church-header')} description={t('attractions-church-description')} modelUrl={ChurchModel} anchor={'church'} />
      <ModelViewer title={t('attractions-house-1-header')} description={t('attractions-house-1-description')} modelUrl={House1} anchor={'house-1'} />
      <ModelViewer title={t('attractions-house-2-header')} description={t('attractions-house-2-description')} modelUrl={House2} anchor={'house-2'} />
      <ModelViewer title={t('attractions-house-3-header')} description={t('attractions-house-3-description')} modelUrl={House3} anchor={'house-3'} />
      <ModelViewer title={t('attractions-vokzal-header')} description={t('attractions-vokzal-description')} modelUrl={Vokzal} anchor={'vokzal'} />
      <ModelViewer title={t('attractions-water-tower-header')} description={t('attractions-water-tower-description')} modelUrl={WaterTower} anchor={'water-tower'} />
      <ModelViewer title={t('attractions-depot-header')} description={t('attractions-depot-description')} modelUrl={Depot} anchor={'depot'} />
      <ModelViewer title={t('attractions-hospital-header')} description={t('attractions-hospital-description')} modelUrl={Hospital} anchor={'hospital'} />
    </div>
  )
}

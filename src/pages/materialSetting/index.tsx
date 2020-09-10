import React from 'react';
import './index.css';
import MaterialSettingList from './materialSettingList';
import BiddingPackage from './biddingPackage';

const MaterialSetting = () => {
  return (
    <div className="container-material-setting">
      <MaterialSettingList />
      <BiddingPackage />
    </div>
  );
}

export default MaterialSetting;

import React, { useEffect, useState } from 'react';
import { getMaterialSettings } from '../../../apis/materialSetting'
import { MaterialSetting } from '../../../models/materialSetting';
import { CloseOutlined, ShrinkOutlined } from '@ant-design/icons';
import Concrete from './concrete';
import FormWork from './formwork';

const MaterialSettingList = () => {
  const [materialSettings, setMaterialSettings] = useState<MaterialSetting[]>([]);

  useEffect(() => {
    getMaterialSettings().then((res: any) => {
      setMaterialSettings(res.data);
    });
  }, []);

  return (
    <div className="panel-material-setting">
      {materialSettings && materialSettings[2]
      && materialSettings[2].disciplineType_MassTypeMaterialBinding_Dictionary
        .disciplineType_MassTypeMaterialBindings[0].massTypeMaterialsBindings.map((item, index) => {
        return (
          <div className="panel-setting mr-20" key={index}>
            <div className="panel-setting-header">
              Thiết lập vật liệu
              <CloseOutlined className="float-right mt-5 cursor-pointer" style={{ fontSize: 14 }}/>
              <ShrinkOutlined className="float-right mt-5 mr-10 cursor-pointer" style={{ fontSize: 14 }}/>
            </div>
            <div className="panel-setting-body">
              {item.massType === 0 && (
                <Concrete data={item} />
              )}
              {item.massType === 1 && (
                <FormWork data={item} />
              )}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default MaterialSettingList;

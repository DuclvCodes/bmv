import React from 'react';
import { Select, Button } from 'antd';
import constants from '../../../constants';
import { massTypeMaterialsBindings } from '../../../models/materialSetting';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

interface Props {
  data: massTypeMaterialsBindings
}

const Concrete = (props: Props) => {
  return (
    <div>
      <Select className="w-100 mb-10" value={props.data.massType}>
        {constants.subjectOptions.map(item => {
          return (
            <Option key={item.key} value={item.value}>
              {item.text}
            </Option>
          );
        })}
      </Select>
      {props.data.materialBindings.length > 0 && props.data.materialBindings.map((item, index) => {
        return (
          <div key={index}>
            <Select value={item.materialName} className="w-88">
              {constants.materialOptions.map(item => {
                return (
                  <Option key={item.key} value={item.value}>
                    {item.text}
                  </Option>
                );
              })}
            </Select>
            <CloseOutlined className="icon-close ml-10" />
          </div>
        )
      })}
      <div className="mt-20 mb-10">
        <Button type="primary" icon={<PlusOutlined />} className="btn-custom">Vật liệu</Button>
      </div>
    </div>
  );
}

export default Concrete;

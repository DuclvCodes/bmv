import React from 'react';
import { Collapse, Select } from 'antd';
import constants from '../../../constants';
import { PlusSquareOutlined } from '@ant-design/icons';
import { massTypeMaterialsBindings, mainValueBinding } from '../../../models/materialSetting';

const { Panel } = Collapse;
const { Option } = Select;

interface Props {
  data: massTypeMaterialsBindings
}

const FormWork = (props: Props) => {
  const addFilter = (e: any) => {
    e.stopPropagation();
  };

  const header = (categoryFilterNames: any) => {
    return (
      <div>
        <PlusSquareOutlined className="icon-plus-quare mr-10" onClick={addFilter} />
        {categoryFilterNames.length > 0 && categoryFilterNames.map((item: any, index: number) => {
          return (
            <Select
              key={index}
              value={item}
              style={{width: 80}}
              onClick={(e: any) => e.stopPropagation()}
              className="mr-10"
            >
              {constants.parameterSettingFilterOptions.map(item => {
                return (
                  <Option key={item.key} value={item.value} >
                    {item.text}
                  </Option>
                );
              })}
            </Select>
          );
        })}
      </div>
    )
  };

  const recursionMainValueBinding = (mainValueBinding: mainValueBinding[]) => {
    return (
      <div>
        {mainValueBinding.map((item, index) => {
          return (
            <div key={index}>
              <div className="mb-10">
                {item.name}:{' '}
                <Select value={item.valueBindingType}>
                  {constants.parameters.map(item => {
                    return (
                      <Option key={item.key} value={item.value}>
                        {item.text}
                      </Option>
                    );
                  })}
                </Select>
              </div>

              {item.valueBindingType === 0 && (
                <div>
                  <div className="mb-10">
                    Parameter:{' '}
                    <Select value={item.parameterNameForJson}>
                      {constants.parameterTypes.map(item => {
                        return (
                          <Option key={item.key} value={item.value}>
                            {item.text}
                          </Option>
                        );
                      })}
                    </Select>
                  </div>
                  <div className="mb-10">
                    Đơn vị:{' '}
                    <Select value={item.massCalculateBy}>
                      {constants.parameterUnits.map(item => {
                        return (
                          <Option key={item.key} value={item.value}>
                            {item.text}
                          </Option>
                        );
                      })}
                    </Select>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {console.log(mainValueBinding)}
      </div>
    );
  };

  return (
    <div>
      <Select
        className="w-100 mb-10"
        value={props.data.massType}
      >
        {constants.subjectOptions.map(item => {
          return (
            <Option key={item.key} value={item.value}>
              {item.text}
            </Option>
          );
        })}
      </Select>
      {props.data.categoryTypeFilter_FormworkValueBinding_Dictionary
        .categoryTypeFilter_FormworkValueBindings.map((item, index) => {
        return (
          <Collapse
            key={index}
            expandIconPosition={'right'}
            defaultActiveKey={['1']}
            className="mb-10"
          >
            <Panel header={header(item.categoryTypeFilter.categoryFilterNames)} key="1">
              {recursionMainValueBinding([item.mainValueBinding])}
            </Panel>
          </Collapse>
        )
      })}
    </div>
  );
}

export default FormWork;

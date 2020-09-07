import React, {useState} from 'react';
import { Card, Row, Col, Select, Input } from 'antd';
import { PlusCircleOutlined, CloseOutlined, CloseCircleOutlined } from '@ant-design/icons';
import constants from '../../../constants';

const { Option } = Select;

const Material = () => {
  const initParameterSetting = {
    filter: 1,
    childrenFilter: [1],
    settings: {
      inputParameter: 'Diện tích ván khuôn',
      selectParameter: 1,
      parameter: 1,
      unit: 1,
    }
  };
  const [selectedBusiness, setSelectedBusiness] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState([]);
  const [parameterSettings, setParameterSettings] = useState([initParameterSetting]);

  const handleChangeBusiness = (e: any) => {
    const newSelectedMaterial: any = e === 2 ? [4] : [];

    setSelectedBusiness(e);
    setSelectedMaterial(newSelectedMaterial);
  };

  const handleChangeMaterial = (e: any, index: number) => {
    const newSelectedMaterial: any = [...selectedMaterial];

    newSelectedMaterial[index] = e;
    setSelectedMaterial(newSelectedMaterial);
  };

  const addMaterial = () => {
    const newSelectedMaterial: any = [...selectedMaterial];

    newSelectedMaterial.push(1);
    setSelectedMaterial(newSelectedMaterial);
  };

  const deleteMaterial = (index: number) => {
    const newSelectedMaterial : any = [...selectedMaterial];

    newSelectedMaterial.splice(index, 1);
    setSelectedMaterial(newSelectedMaterial);
  };

  const addParameter = () => {
    const newParameter: any = [...parameterSettings];

    newParameter.push({
      filter: 1,
      childrenFilter: [1],
      settings: {
        inputParameter: '',
        selectParameter: 1,
        parameter: 1,
        unit: 1,
      }
    });
    setParameterSettings(newParameter);
  };

  const addOptionFilter = (index: number) => {
    const newParameter: any = [...parameterSettings];

    newParameter[index].childrenFilter.push(1);
    setParameterSettings(newParameter);
  };

  const deleteOptionFilter = (parameterIndex: number, optionFilterIndex: number) => {
    const newParameter : any = [...parameterSettings];

    newParameter[parameterIndex].childrenFilter.splice(optionFilterIndex, 1);
    setParameterSettings(newParameter);
  };

  const handleChangeOptionFilter = (e: any, parameterIndex: number, optionFilterIndex: number) => {
    const newParameter: any = [...parameterSettings];

    newParameter[parameterIndex].childrenFilter[optionFilterIndex] = e;
    setParameterSettings(newParameter);
  };

  const deleteParameter = (index: number) => {
    const newParameter : any = [...parameterSettings];

    newParameter.splice(index, 1);
    setParameterSettings(newParameter);
  };

  const changeSelectParameter = (e: any, index: number) => {
    const newParameter : any = [...parameterSettings];
    newParameter[index].settings.selectParameter = e;

    setParameterSettings(newParameter);
  };

  const changeCommonParameter = (e: any, index: number, field: string) => {
    const newParameter : any = [...parameterSettings];
    newParameter[index].settings[field] = e;

    setParameterSettings(newParameter);
  };

  return (
    <div>
      <Card title="Thiết lập vật liệu" className="w-100">
        <Row gutter={24} className="mb-10">
          <Col span={3}>
            Công tác:
          </Col>
          <Col span={21}>
            <Select
              value={selectedBusiness}
              style={{ minWidth: 200 }}
              onChange={handleChangeBusiness}
              showSearch
              optionFilterProp="children"
              filterOption={(input, option: any) => option.children.toLowerCase()
                .indexOf(input.toLowerCase()) >= 0}
            >
              {constants.subjectOptions.map(item => {
                return (
                  <Option key={item.key} value={item.value}>
                    {item.text}
                  </Option>
                );
              })}
            </Select>
          </Col>
        </Row>

        {selectedBusiness === 1 ? (
          <Row gutter={24} className="mb-10">
            <Col span={3}>
              Tham biến:
            </Col>
            <Col span={21}>
              <Input style={{ width: 200 }} />
            </Col>
          </Row>
        ) : (
          <Row gutter={24} className="mb-10">
            <Col span={3}>
              Vật liệu: <PlusCircleOutlined className="icon-plus" onClick={addMaterial} />
            </Col>
            <Col span={21}>
              {/*call API masterData*/}
              {selectedMaterial.length > 0 && selectedMaterial.map((item, index) => {
                return (
                  <div className="mb-10" key={index}>
                    <Select
                      showSearch
                      optionFilterProp="children"
                      filterOption={(input, option: any) => option.children.toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0}
                      style={{ width: 200 }}
                      value={item}
                      onChange={(e) => handleChangeMaterial(e, index)}
                    >
                      {constants.materialOptions.map(item => {
                        return (
                          <Option key={item.key} value={item.value}>
                            {item.text}
                          </Option>
                        );
                      })}
                    </Select>
                    <CloseOutlined onClick={() => deleteMaterial(index)} className="ml-20 cursor-pointer" />
                  </div>
                );
              })}
            </Col>
          </Row>
        )}

        {selectedBusiness === 1 && (
          <Card title="Thiết lập tham biến" className="w-100">
            <Row gutter={24}>
              <Col span={2}>
                <PlusCircleOutlined className="icon-plus mt-15" onClick={addParameter} />
              </Col>
              <Col span={22}>
                {parameterSettings.length > 0 && parameterSettings.map((item, index: number) => {
                  return (
                    <div key={index} className="mb-10">
                      <div className="bg-cl-green pt-10 pl-10">
                        Bộ lọc:{' '}
                        <Select
                          value={item.filter}
                          className="mr-10 mb-10"
                          showSearch
                          optionFilterProp="children"
                          filterOption={(input, option: any) => option.children.toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0}
                          style={{ width: 100 }}
                        >
                          {constants.parameterSettingOptions.map(item2 => {
                            return (
                              <Option key={item2.key} value={item2.value}>
                                {item2.text}
                              </Option>
                            );
                          })}
                        </Select>
                        <PlusCircleOutlined className="icon-plus mr-10" onClick={() => addOptionFilter(index)} />
                        {item.childrenFilter.length > 0 && item.childrenFilter.map((item3, index3: number) => {
                          return (
                            <span key={index3}>
                              <Select
                                className="mr-10 mb-10"
                                value={item3}
                                showSearch
                                optionFilterProp="children"
                                filterOption={(input, option: any) => option.children.toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0}
                                style={{ width: 100 }}
                                onChange={(e) => handleChangeOptionFilter(e, index, index3)}
                              >
                                {constants.parameterSettingFilterOptions.map(item4 => {
                                  return (
                                    <Option key={item4.key} value={item4.value}>
                                      {item4.text}
                                    </Option>
                                  );
                                })}
                              </Select>
                              {item.childrenFilter.length > 1 && (
                                <CloseOutlined className="mr-20 cursor-pointer" onClick={() => deleteOptionFilter(index, index3)} />
                              )}
                            </span>
                          );
                        })}
                        {index > 0 && (
                          <CloseCircleOutlined
                            className="float-right mt-5 mr-10 icon-plus cl-red"
                            onClick={() => deleteParameter(index)}
                          />
                        )}
                      </div>
                      <div className="bg-cl-yellow pt-10 pl-30">
                        <Input
                          value={item.settings['inputParameter']}
                          style={{ width: 200 }}
                          className="mb-10 mr-10"
                          onChange={(e) => changeCommonParameter(e.target.value, index, 'inputParameter')}
                        />

                        <Select
                          style={{ width: 150 }}
                          value={item.settings['selectParameter']}
                          showSearch
                          optionFilterProp="children"
                          filterOption={(input, option: any) => option.children.toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0}
                          onChange={(e) => changeSelectParameter(e, index)}
                        >
                          {constants.parameters.map(item => {
                            return (
                              <Option key={item.key} value={item.value}>
                                {item.text}
                              </Option>
                            )
                          })}
                        </Select>

                        <span className="ml-20">
                          Parameter: {' '}
                          <Select
                            style={{ width: 150 }}
                            value={item.settings['parameter']}
                            showSearch
                            optionFilterProp="children"
                            filterOption={(input, option: any) => option.children.toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0}
                            onChange={(e) => changeCommonParameter(e, index, 'parameter')}
                          >
                            {constants.parameterTypes.map(item => {
                              return (
                                <Option value={item.value} key={item.key}>
                                  {item.text}
                                </Option>
                              );
                            })}
                          </Select>
                        </span>

                        <Select
                          className="ml-20"
                          style={{ width: 130 }}
                          value={item.settings['unit']}
                          showSearch
                          optionFilterProp="children"
                          filterOption={(input, option: any) => option.children.toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0}
                          onChange={(e) => changeCommonParameter(e, index, 'unit')}
                        >
                          {constants.parameterUnits.map(item => {
                            return (
                              <Option value={item.value} key={item.key}>
                                {item.text}
                              </Option>
                            );
                          })}
                        </Select>
                      </div>
                    </div>
                  )
                })}
              </Col>
            </Row>
          </Card>
        )}
      </Card>
    </div>
  );
}

export default Material;

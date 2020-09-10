import React, {useState} from 'react';
import { Card, Row, Col, Select, Input } from 'antd';
import { PlusCircleOutlined, CloseOutlined, CloseCircleOutlined } from '@ant-design/icons';
import constants from '../../../constants';

const { Option } = Select;

const Material = () => {
  const initParameterSetting = {
    filter: 1,
    childrenFilter: [1],
    settings: [
      {
        key: 1,
        inputParameter: 'Diện tích ván khuôn',
        selectParameter: 1,
        parameter: 1,
        unit: 1,
        children: []
      }
    ]
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
      settings: [
        {
          key: Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4) + 1,
          inputParameter: '',
          selectParameter: 1,
          parameter: 1,
          unit: 1,
          children: [],
        }
      ]
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

  const removeParam = (key: string, arr: any) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].key === key) {
        arr.splice(i, 1);
        setParameterSettings([...parameterSettings]);
        break;
      } else {
        removeParam(key, arr[i].children);
      }
    }
  };

  const recursionSettings = (arr: any[]) => {
    return arr && arr.length > 0 && arr.map(param => {
      return (
        <div className="paramChildren mb-10 mr-10" key={param.key}>
          <PlusCircleOutlined
            className="icon-plus mr-20"
            onClick={() => selectParameters(null, param.key, arr)}
          />
          <Input
            style={{ width: 200 }}
            className="mb-10 mr-10"
          />

          <Select
            className="mb-10"
            style={{ width: 150 }}
            showSearch
            optionFilterProp="children"
            filterOption={(input, option: any) => option.children.toLowerCase()
              .indexOf(input.toLowerCase()) >= 0}
            onChange={(e) => selectParameters(e, param.key, arr)}
          >
            {constants.parameters.map(item => {
              return (
                <Option key={item.key} value={item.value}>
                  {item.text}
                </Option>
              )
            })}
          </Select>

          {param.children.length === 0  && (
            <span>
              <span className="ml-20">
                Parameter: {' '}
                <Select
                  className="mb-10"
                  style={{ width: 150 }}
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option: any) => option.children.toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0}
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
                className="ml-20 mb-10"
                style={{ width: 130 }}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option: any) => option.children.toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0}
              >
                {constants.parameterUnits.map(item => {
                  return (
                    <Option value={item.value} key={item.key}>
                      {item.text}
                    </Option>
                  );
                })}
              </Select>
            </span>
          )}
          {param.key !== 1 && (
            <CloseCircleOutlined
              className="float-right icon-plus mt-5 cl-red"
              onClick={() => removeParam(param.key, arr)}
            />
          )}
          <div>{recursionSettings(param.children)}</div>
        </div>
      );
    });
  };

  const selectParameters = (e: any, key: number, arr: any[]) => {
    if (e === 2 || !e) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].key === key) {
          const newParam = {
            key: Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4) + 1,
            inputParameter: 'Tên phân nhóm',
            selectParameter: 1,
            parameter: 1,
            unit: 1,
            children: []
          };
          if (!e) {
            arr.push(newParam);
          } else {
            arr[i].children.push(newParam);
          }
          setParameterSettings([...parameterSettings]);
          break;
        } else {
          selectParameters(e, key, arr[i].children);
        }
      }
    }
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
              <PlusCircleOutlined className="icon-plus mt-15" onClick={addParameter} />
              <Col span={23}>
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
                      <div className="bg-cl-yellow pt-10 pl-10 pb-10">
                        {recursionSettings(item.settings)}
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

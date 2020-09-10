const constants = {
  subjectOptions: [
    { key: 1, value: 0, text: 'Bê tông' },
    { key: 2, value: 1, text: 'Ván khuôn' },
    { key: 3, value: 2, text: 'Cốt thép' },
    { key: 4, value: 3, text: 'Bê tông lót' },
  ],
  materialOptions: [
    { key: 1, value: 1, text: 'Default' },
    { key: 2, value: 2, text: 'Default Wall' },
    { key: 3, value: 3, text: 'Default Roof' },
    { key: 4, value: 'CEN_CONCRETE', text: 'CEN_CONCRETE' },
  ],
  parameters: [
    { key: 1, value: 0, text: 'parameter' },
    { key: 2, value: 1, text: 'submass' },
  ],
  parameterTypes: [
    { key: 1, value: 1, text: 'Height' },
    { key: 2, value: 2, text: 'Weight' },
    { key: 2, value: 'ALB_FormworkArea', text: 'ALB_FormworkArea' },
  ],
  parameterUnits: [
    { key: 1, value: 1, text: 'Mét vuông' },
    { key: 2, value: 2, text: 'Mét dài' },
  ],
  parameterSettingOptions: [
    { key: 1, value: 1, text: 'equal' },
    { key: 2, value: 2, text: 'contain' },
    { key: 3, value: 3, text: 'remainder' },
  ],
  parameterSettingFilterOptions: [
    { key: 1, value: 'Dầm', text: 'Dầm' },
    { key: 2, value: 'Sàn', text: 'Sàn' },
    { key: 3, value: 3, text: 'Cột' },
    { key: 4, value: 4, text: 'Vách' },
    { key: 5, value: 5, text: 'Móng' },
    { key: 6, value: 6, text: 'Ramp dốc' },
    { key: 7, value: 7, text: 'Cầu thang' },
  ],
};

export default constants;

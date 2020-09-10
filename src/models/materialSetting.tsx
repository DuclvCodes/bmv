export interface MaterialSetting {
  id: number,
  name: string,
  disciplineType_MassTypeMaterialBinding_Dictionary: disciplineType_MassTypeMaterialBinding_Dictionary
}

export interface disciplineType_MassTypeMaterialBinding_Dictionary {
  disciplineType_MassTypeMaterialBindings: disciplineType_MassTypeMaterialBindings[]
}

export interface disciplineType_MassTypeMaterialBindings {
  disciplineType: number,
  massTypeMaterialsBindings: massTypeMaterialsBindings[]
}

export interface massTypeMaterialsBindings {
  massType: number,
  materialBindings: materialBindings[],
  parameterName: string,
  categoryType_FamilyNameFilter_ParameterBindings: Array<any>,
  categoryTypeFilter_FormworkValueBinding_Dictionary: categoryTypeFilter_FormworkValueBinding_Dictionary
}

export interface materialBindings {
  materialName: string,
  materialDescription: string,
  layerWidth: number
}

export interface categoryTypeFilter_FormworkValueBinding_Dictionary {
  categoryTypeFilter_FormworkValueBindings: categoryTypeFilter_FormworkValueBindings[],
}

export interface categoryTypeFilter_FormworkValueBindings {
  categoryTypeFilter: categoryTypeFilter,
  mainValueBinding: mainValueBinding,
}

export interface categoryTypeFilter {
  categoryFilterType: number,
  categoryFilterNames: Array<string>
}

export interface mainValueBinding {
  name: string,
  valueBindingType: number,
  parameterNameForJson: string,
  subValueBindingsForJson: mainValueBinding[],
  massCalculateBy: number,
}



import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";
import { useTranslation } from "react-i18next";

interface formUtilCommon {
  name:string,
  axis_y?:number,
  axis_x?:number,
  image:any,
}

interface ObjectToEdit extends formUtilCommon {
  category_id?:number,
  id?:number 

}

export interface InitialValues extends ObjectToEdit {
  axis_y?:number ,
  axis_x?:number ,
  image:any,
  name:string , 

}

interface ValidateSchema  {

}

export const getInitialValues = (objectToEdit: ObjectToEdit | null = null): InitialValues => {

  return {
    category_id:objectToEdit?.category_id ,
    id:objectToEdit?.id ,
    name:objectToEdit?.name?? "Choose Category"  ,
    axis_x:objectToEdit?.axis_x,
    axis_y:objectToEdit?.axis_y,
    image:objectToEdit?.image
  }
};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
  return Yup.object().shape({
    name:Yup.string().required('required'),
    axis_x:Yup.number().required("required"),
    axis_y:Yup.number().required("required"),
    image:Yup.mixed().required("required"),
  });
};

export const getDataToSend = (values: any): FormData => {

  const data = {...values} ;
  
  if(typeof data['image'] == 'string') {delete data['image']}
  
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};


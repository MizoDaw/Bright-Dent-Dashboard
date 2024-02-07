
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {
  image_en:any,
  image_ar:any

}

interface ObjectToEdit extends formUtilCommon {
  id?:number,
  is_active?: boolean;

}

export interface InitialValues extends ObjectToEdit {
  is_active?: boolean;
  id?:number,

}
interface ValidateSchema  extends formUtilCommon{

}

export const getInitialValues = (objectToEdit: any | null = null): InitialValues => {


  return {
    id:objectToEdit?.id?? 0 ,
    image_en:objectToEdit?.slider_translations?.at(0).image?? "",
    image_ar:objectToEdit?.slider_translations?.at(1).image??"",
    is_active:objectToEdit?.is_active?? true,

  }
};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
  return Yup.object().shape({
    image_en:Yup.mixed().required("required"),
    image_ar:Yup.mixed().required("required")

  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  
  
  if(typeof data['image_en'] == 'string'){
    delete data['image_en']
  }
    
  if(typeof data['image_ar'] == 'string'){
    delete data['image_ar']
  }
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};


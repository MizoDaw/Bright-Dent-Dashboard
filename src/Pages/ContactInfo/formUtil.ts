
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {
  key:string,
  value:string,

}

interface ObjectToEdit extends formUtilCommon {
  key:string,
  value:string,
  id:number,

}

export interface InitialValues extends ObjectToEdit {


}
interface ValidateSchema  extends formUtilCommon{

}

export const getInitialValues = (objectToEdit: ObjectToEdit | null = null): InitialValues => {
 

  return {
    id:objectToEdit?.id?? 0 ,
    key:objectToEdit?.key?? "",
    value:objectToEdit?.value?? "",
    
  }


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
  return Yup.object().shape({
    key:Yup.string().required("required"),
    value:Yup.string().required('required'),


  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  
  
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};


export const SELET_TABNUMBER = "SELET_TABNUMBER";

export function selectTabNumber(index){
  return{
    type : SELET_TABNUMBER,
    selectedTabNumber : index
  };
}

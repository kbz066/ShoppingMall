import $ from 'jquery'

var _mm={
    request : function (param) {
          $.ajax({
               url : param.url || "",
               type: param.type || "get", 
               dataType : param.dataType || "json",
               success : param.success,
               error : param.error
             
          });
      }



}
export default _mm

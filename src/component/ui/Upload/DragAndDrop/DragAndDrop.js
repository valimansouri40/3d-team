import React, { useCallback } from "react";
import {useDropzone} from 'react-dropzone';



const DragAndDrop=(props)=>{


    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
      }, []);
    
      const {
        getRootProps,
        getInputProps
      } = useDropzone({
        onDrop
      });
      return (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {props.children}
        </div>
      )
}

export default DragAndDrop;
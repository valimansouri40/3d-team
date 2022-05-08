import React, { useState } from "react";
import DragAndDrop from "./DragAndDrop/DragAndDrop";
import './Upload.css';


const Upload= (props)=>{
    
    const [file, setfile] = useState();

    return(
        <div className="upload-target">
            <div className="upload-head">
                <h2 className="upload-h2">
                    Upload Products
                </h2>
            </div>
            <div >
            <DragAndDrop>
            
                 <label  className="upload-box" for="file">
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD70lEQVRoge2Zz29UVRTHP+e84ZcxEYlSYlighkQLjRjjr7hQJmoUodN5DI+QAHFh4l9AgrvGFXGlcYVxQaJBvfOm03aqEM2kLNS6MWxoUaLRBRBKXRBMJJPOu8dNa0CZGWZ80zZkPsls7j33nO935t17370DPXr0aIYsRZHJycnMtbm5J4Ig6DezDUCicNHDxZr3Z6MoSv5vja4aGSuVXjCztwXywL23VyB/mNlE4P1He6JoqtNaXTFSLpe3aJJ8COxua6BZ2WcyR/L5/K/t1kzdSCWOhzycAO7rMMU1VA/kwvB0O4O0w2K3ZbRYPOwhpnMTAOvxfmK0WDzczqDUfpGxUmknZl8DmZRSznuzV/P79p25k+C2jFQqlXvqN248LkFwvxe5VK/XL0RRlJTL5fVar/+ESF9nmhtgNuszmcfy+fy1VqF39O1V4nirF3nX12pDqroWMwIzApHLY3H8vnj/qKVtAkCkT7w/ChxtGdoqYLxYzJnIpzRaPrvPDVatejiXy802C2o62SvOPW8iX7B8JgDWMT+fbxXU0Mjw8LB61ePAmlRldYJZrlVIQyNPDgy8CAykKqhDROSZVjENjYjZS+nK6RyDDc65dc1i/rNqOeeC1UGw38wOdU9a+6yFTcBvjfpvWbUqcbzVwyfAs90W1gETiJzRJPl8TxRd+nfnP0bKzj2lQXAasweWVl/b1EXkRKJ65OaNUgC+dG5TXeRHRB5aPn1t8zvev5KLol9gYbLXVT/ooom5hU/abEF18ivnHgTQUecGgKgLhQCuBqrZQDULXO1C/s3zIscBVFTf7EIBgKsC2d1heG53GJ4T6I4Zkfx4qfS0AunvF2azAtnBQmF6sWmwUJgWyGLW9J2pE7z3hxR4JNWsZrNmlh0sFKYnRka2LzZPjIxsHywUps0sdTMiklWg6Y7ZJleSINg5FEUz43G8LfG+utiReF8dj+NtQ1E0kwTBTuBKinU3Kyk+t6r6WhiG50ed6zezKrDxpu6NZlYdda4/DMPz3vvX06oLZBT4Oa1sifdry87tENXqbU+LIn2iWi07tyOT7pNwOWNQEXg5jWwCP4i2vM/YpKpnfRoFF+uKfKurvf8MuJ5i3iXHm8W6K4rmEDm23GI6xUSmcnv3nlKAWpK8h1lbF2IrhOskyVsiYgoQRVGyqlbbD5xaZmHt8CeqhaEomoGbToi7Dh68XvN+j8E7rPA5YyJT5v1zuTD8ZrHtlhPiwvX+scrJkx/bmjUHzOwNoB/oA1Yvrdxb+Au4aPA9UMyF4SkRsSVVMBbHNhbHXS+a6iX2ctIzstLoGVlp3DVG0vp3qRnfAWm+7Pbo0aPHXcDfy+Bo+R/eQTAAAAAASUVORK5CYII="/>                     <span className="upload-txt">Drop excel File or 
                     <span className="upload-txt-color"> click to upload </span>  </span>
                 </label>
          
            </DragAndDrop>  
            </div>
            <div className="upload-txt-bottom">
                    <p className="upload-p">
                        Excel files with asize less than 500kb or maximum of 100 rows 
                        <span className="upload-txt-color"> Check Template</span>
                    </p>
                    
            </div>
        </div>
    )
}

export default Upload;
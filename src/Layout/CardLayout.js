import React from "react";

export default function CardLayout(prop){
    return (
        <>
        <form onSubmit={prop.handleSubmit}>
            <div className="form-group">
                <label htmlFor="front" className="form-label">
                 Front Side
                 </label> 
                 <textarea
                     required
                     type="textarea"
                     className="form-control"
                     id="front"
                     name="front"
                     placeholder={prop.formData.front}
                     onChange={prop.handleChange}
                     value={prop.formData.front} 
                     />         
             </div>
             <div className="form-group">
                 <label htmlFor="back" className="form-label">
                     Back Side
                 </label>
                 <textarea
                     required
                     type="textarea"
                     className="form-control"
                     id="back"
                     name="back"
                     placeholder={prop.formData.back}
                     onChange={prop.handleChange}
                     value={prop.formData.back}
                     />
             </div>
             <input
                 className="btn btn-secondary mr-3"
                 type="reset"
                 onClick={prop.handleReset}
                 value="Done"></input>
                 <button type="submit" className="btn btn-primary">
                     Submit
                 </button>
        </form>
        </>
    ) 
}
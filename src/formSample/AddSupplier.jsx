import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';


const addSupplierValidationSchema = Yup.object().shape({
    companyName: Yup.string().required("Company Name boş bırakılmaz"),
    contactName: Yup.string().required("Contact Name boş bırakılmaz")
})

function AddSupplier() {


    const formik = useFormik({
        initialValues: {
            companyName: "",
            contactName: "",
            contactTitle: ""
        },
        validationSchema:addSupplierValidationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    

    return (<>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="">Company Name</label>
                <input type='text' name='companyName' onChange={formik.handleChange}
                    value={formik.values.companyName}  />
                {formik.errors.companyName ? <p style={{color:'red'}}>{formik.errors.companyName}</p> : <></>}
            </div>
            <div>
                <label htmlFor="">Contact Name</label>
                <input type='text' name='contactName' onChange={formik.handleChange}
                    value={formik.values.contactName}  />
                      {formik.errors.contactName ? <p style={{color:'red'}}>{formik.errors.contactName}</p> : <></>}
            </div>
            <div>
                <label htmlFor="">Contact Title</label>
                <input type='text' name='contactTitle' onChange={formik.handleChange}
                    value={formik.values.contactTitle}  />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    </>)
}

export default AddSupplier
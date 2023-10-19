import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'

function AddCategory() {


    const formik = useFormik({
        initialValues: {
            name: '',
            description: ""
        },
        onSubmit: (values) => {

            axios.post('https://northwind.vercel.app/api/categories', values)
                .then(res => {
                    console.log('Success!');
                })
        }
    })

    return (<>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="">Name:</label>
                <input type="text" name='name' onChange={formik.handleChange}
                    value={formik.values.name} />
            </div>
            <div>
                <label htmlFor="">Description:</label>
                <input type='text' name='description' onChange={formik.handleChange}
                    value={formik.values.description} />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>

        </form>
    </>
    )
}

export default AddCategory
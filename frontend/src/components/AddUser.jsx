import React from 'react'

const AddUser = () => {
  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form action="">
                <div className="field">
                    <label className="label">Nama</label>
                    <div className="control">
                        <input type="text" className='input' placeholder='Nama'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input type="text" className='input' placeholder='Email'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Gender</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select>
                                <option value="" selected disabled hidden>--- Pilih Gender ---</option>
                                <option value="male">male</option>
                                <option value="male">female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                        <button type='submit' className='button is-success'>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddUser
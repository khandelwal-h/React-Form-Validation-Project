import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom';

// npm install react-hook-form ( ye install krna hai uske baad import)
import { useForm } from 'react-hook-form';
const Userregistration = () => {
    const{register,formState:{errors},handleSubmit}=useForm();
    const[countriesData,setcountriesData]=useState([]);
    const [stateData,setStateData]=useState([]);
    useEffect(()=>{
        const getcountries=async()=>{
            const reqData= await fetch("http://localhost:7000/api/countries");
            const resData=await reqData.json();
            setcountriesData(resData);
        }
       getcountries();
    },[]);

    const handlecountries=async(e)=>{
   const getcountriesid=e.target.value;
    const reqStateData=await fetch("http://localhost:7000/api/states/"+getcountriesid);
    const resStateData =await reqStateData.json();
    setStateData(resStateData);
    console.log(getcountriesid);
}





    const onSubmit=(data)=>{
        console.log(data);

    }
  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h5 className='mt-2'>User Registration Form</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    
                        <div className='col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>Name<span className="text-danger">*</span></label>
                                <input type="text" {...register("name",{required:true})}className="form-control" />
                           <span className="text-danger">
                            {errors.name?.type==="required"  &&"Name is Required"}
                           </span>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>User Name<span className="text-danger">*</span></label>
                                <input type="text" {...register("username",{required:true,pattern: /^[a-zA-Z0-9_]+$/i,})}className="form-control" />
                                <span className="text-danger">
                            {errors.username?.type==="required"  &&"Username is Required"}
                            {errors.username?.type==="pattern"  &&"Username is in wrong format"}
                           </span>
                            </div>
                        </div>
                        

                        <div className='col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>Email<span className="text-danger">*</span></label>
                                <input type="email" {...register("email",{required:true,pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,})}className="form-control" />
                                <span className="text-danger">
                            {errors.email?.type==="required"  &&"Email is Required"}
                            {errors.email?.type==="pattern"  &&"Enter valid Email"}
                           </span>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>Password<span className="text-danger">*</span></label>
                                <input type="password"  {...register("password",{required:true,minLength:6,maxLength:20})}className="form-control" />
                                <span className="text-danger">
                            {errors.password?.type==="required"  &&"password is Required"}
                            {errors.password?.type==="minLength"  &&"Enter password is Less then 6 Digits"}
                            {errors.password?.type==="maxLength"  &&"Enter password is More then 20 Digits"}
                           </span>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>Phone No<span className="text-danger">*</span></label>
                                <input type="number" {...register("phoneno",{required:true,minLength:6,maxLength:12})}className="form-control" />
                                <span className="text-danger">
                            {errors.phoneno?.type==="required"  &&"phoneNumber is Required"}
                            {errors.phoneno?.type==="minLength"  &&"Enter Number is Less then 6 Digits"}
                            {errors.phoneno?.type==="maxLength"  &&"Enter Number is More then 12Digits"}
                           </span>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>Gender<span className="text-danger">*</span></label>
                                <select name="gender" {...register("gender",{required:true,})} className="form-control">
                                    <option value="">--Please Select--</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                <span className="text-danger">
                                {errors.gender?.type==="required"  &&"Gender is Required"}
                                </span>
                            </div>
                        </div>


                        <div className='col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>Country<span className="text-danger">*</span></label>
                                <select name="countriesid" {...register("countriesid",{required:true,})} className="form-control"onChange={handlecountries}>
                                    
                                    
                                    <option value="">--Please Select--</option> 
                                    {
                                        countriesData.map(  (countriesitem,index)=>(
                                     <option value={countriesitem.id} key={index}>{countriesitem.name}</option>


                                        ))
                                        
                                        
                                    }
                                    
               
                                    
                                    
                                </select>
                                <span className="text-danger">
                                {errors.countryid?.type==="required"  &&"country is Required"}
                                </span>
                                
                            </div>
                        </div>




                        <div className='col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>State<span className="text-danger">*</span></label>
                                <select name="stateid"{...register("stateid",{required:true,})} className="form-control">
                                    <option value="">--Please Select--</option>
                                    

                                   
                                    







                                </select>
                                <span className="text-danger">
                                {errors.stateid?.type==="required"  &&"State is Required"}
                                </span>
                            </div>
                        </div>   


                        <div className='col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>Address1<span className="text-danger">*</span></label>
                                <textarea name="address1"{...register("address1",{required:true,})} className="form-control" />
                                <span className="text-danger">
                                {errors.address1?.type==="required"  &&"Address is Required"}
                                </span>
                            </div>
                        </div>   


                        <div className='col-md-6'>   
                            <div className='mb-3'>
                                <label className='form-label'>Address2</label>
                                <textarea name="address2" {...register("address2")}className="form-control" />
                            </div>
                        </div>   


                        <div className='col-md-6'>
                            <div className='mb-3'>
                               <div className="form-check form-check-inline">
                                <input type="checkbox"name="accept"{...register("accept",{required:true,})}className='form-check-input'value="1" />
                                <label className='form-checklabel'>Accept All Condition<span className="text-danger">*</span></label>
                               
                               
                                <span className="text-danger">
                                {errors.accept?.type==="required"  &&"Accept is Required"}
                                </span>
                                </div>
                            </div>
                        </div>



                                    
                                    
                                    
                                    
                                        <div className='col-md-12'>
                                            <div className='mb-3'>
                                                <label className='form-label'></label>
                                                <button type ="submit"className="btn btn-success btn-lg">Submit</button>
                                            </div>
                                        </div>
                </div>
                </form>
            </div>
        </div>
        </div>
        
    </React.Fragment>
  )
}

export default Userregistration;


// Username: pattern: /^[a-zA-Z0-9_]+$/i,
// Email: pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
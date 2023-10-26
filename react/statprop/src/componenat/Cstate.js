import React from "react";

class Cstate extends React.Component
{
    constructor(){
        super()
        this.state = {
            string_val: "priyansh",
            num_val:1,
            bool_val:true,
            arr: [1,2,3,4],
            obj:{
                name:"harshita",
                age:27
            }
        }
    }

     update_num = ()=>
    {
        this.setState({num_val:this.state.num_val+1})
    }
    update_str = ()=>
    {
        this.setState(()=>(
            {string_val:this.state.string_val = "Hello..."}
        ))
    }
    update_arr = ()=>{
        this.setState({arr:this.state.arr = [10,20,30,40]})
    }
     
    update_obj = ()=>{
        this.setState({obj:this.state.obj= {
            name:"harsh",
            age:55
        }})
    }

    
    render()
    {
        return(
            <>
            <br/>
            <button onClick={this. update_str}>Update-string</button>
            <button onClick={this.update_num}>Updete-Number</button>
            <button onClick={this.update_arr}>Update-arr</button>
            <button onClick={this.update_obj}>Update-obj</button>

            <div>String value : {this.state.string_val}</div>
            <div>Number value : {this.state.num_val}</div>
            <div>Boolean value : {this.state.bool_val}</div>
            <div>array value : {this.state.arr}</div>
            <div>object value : {this.state.obj.name + " " + this.state.obj.age }</div>
            </>
        )
    }
}

export default Cstate;
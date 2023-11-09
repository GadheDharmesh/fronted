import React, { useRef, useState } from "react";

const data =
[
    {
        title:"Title 1",
        subtitle:"SubTitle 1"
    },
    {
        title:"Title 2",
        subtitle:"SubTitle 2"
    },
    {
        title:"Title 3",
        subtitle:"SubTitle 3"
    }
]
const colorCombinations = [
    { backgroundColor: "pink", color: "black" },
    { backgroundColor: "blue", color: "white" },
    { backgroundColor: "purple", color: "white" },
  ];

function UseRefference()
{
    const inpRef=useRef();
    const h1Ref = useRef();
    const parentRef = useRef();

    const Ele=()=>{
        // console.log(inpRef);
        // console.log(h1Ref);
        // console.log(inpRef.current);
        // console.log(h1Ref.current);

        // console.log(parentRef);
        parentRef.current.style.background="black";
        parentRef.current.style.color="white"
        // console.log(inpRef.current.value)
    }
    return(
        <>
        <input id="t" ref={inpRef} onChange={Ele}/>
        <h1 ref={h1Ref}>Hello</h1>
        <p>para 1</p>


        <div className="card"  ref={parentRef}>

            {
                data.map((d,index)=>{
                    return(
                    <>
                    <div className="card-info" key={index}  style={colorCombinations[index]}>
                        <h1>{d.title}</h1>
                        <h2>{d.subtitle}</h2>
                    </div>
                    </>
                    )
                })
            }
            {/* <div className="card-info">
                <h1>Title 2</h1>
                <h2>Subtitle 2</h2>
            </div>

            <div className="card-info">
                <h1>Title 3</h1>
                <h2>Subtitle 3</h2>
            </div> */}
        </div>
        </>
    )
}
export default UseRefference;
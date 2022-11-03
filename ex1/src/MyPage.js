import * as React from "react";
const MyFuture = React.lazy(()=>
Promise.all([
    import("./MyFeature"),
    new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },3000);
    }),
]).then(([m])=>m));

function MyPage(){
    return(
        <>
        <h1>
            My MyPage
        </h1>
        <MyFuture/>
        </>
    )
}


export default MyPage;
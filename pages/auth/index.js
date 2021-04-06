import React from 'react';

export default function authIndexPage(props){
    return (
        <div>
            <h1>The Auth Index Page - {props.appName}</h1>
        </div>
    )
}

authIndexPage.getInitialProps=(context)=>{
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({appName:"Super App (Auth)"});
        },1000);
    });
    return promise;
};
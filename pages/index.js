import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

export default function indexPage(){
    return (
        <div>
            <h1>The Main Page!</h1>
            <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
            <button onClick={()=>Router.push('/auth')}>Go to Auth</button>
            <style jsx>
                {`
                    div{
                        border: 1px solid #eeeee;
                        box-shadow:0 2px 3px #cccccc;
                        paddng:20px;
                        text-align:center;
                    }
                `}
            </style>
        </div>
    )
}
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

export default function errorPage(){
    return (
        <div>
            <h1>Oops, something went wrong!</h1>
            <p>Try <Link href="/"><a>Going Back</a></Link></p>
            
        </div>
    )
}
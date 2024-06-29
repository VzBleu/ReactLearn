import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <div className='logoDiv'>
                <img className='logoImg' src="src\ReactInfoCard\Images\react-logo.png" alt="" />
                <h1 className='logoName'>ReactFacts</h1>
            </div>
            <p className='navDescription'>React Course - Project 1</p>
        </nav>
    )
}
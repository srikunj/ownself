import React from 'react'

// function component

// export default function Profile(prop1)


function Profile(prop1)
{
    return(
        <div>
            <h1>{prop1.text.name}</h1>
            <h1>{prop1.data}</h1>
        </div>
    )
}
export default Profile

// -----------------------------------------------------------------

// class component


// export default class Profile extends React.Component

// class Profile extends React.Component
// {
//     render()
//     {
//         return (
//             <div>
//                 <h1>Hello Props {this.props.text.name}</h1>
//                 <h1>{this.props.data}</h1>
//             </div>
//         )
//     }
// }

// export default Profile



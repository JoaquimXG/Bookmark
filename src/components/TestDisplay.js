import React from 'react'

export default props => {
    return (
        <div>
            <pre>
                {JSON.stringify(props.toDisplay, null, 2)}
            </pre>
        </div>
    )
}

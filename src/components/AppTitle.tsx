import React from 'react' 

const defaultProps = {
    att: 'nothing set',
}

type PropTypes = {
    att: string;
    children?: string;
}

const AppTitle = ({att, children}: PropTypes) =>{
    return(
        <h1 className={att}>
            {children}
        </h1>
    )
}

AppTitle.defaultProps = defaultProps

export default AppTitle
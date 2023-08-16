import React, { Children } from 'react'

function AppButton({ height, borderRadius, width, color, backgroundColor, fontWeight, title, children , marginLeft}) {
  
    const styles = {
        button: {
            height: height && height,
            // minHeight: "auto",
            width: width && width,
            minWidth: !width && '170px',
            color,
            fontWeight: fontWeight && fontWeight,
            borderRadius: borderRadius ? borderRadius : "5px",
            border: 'none',
            background: `${backgroundColor}`,
            textAlign: 'center',
            fontSize: '20px',
            cursor: 'pointer',
            marginLeft: marginLeft
        }
    }
  
    return (
        <button
        style={styles.button} className='Button_Ytransform'
    >{title}{children}
    </button>
  )
}

export default AppButton
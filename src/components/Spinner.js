import React from 'react'

export default function Spinner() {
    return (
        <div className="spinner" style={style}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQnSWvw_HRxjdvk6ZPrQtHaBy7lyFZgL_0ag&usqp=CAU" alt=""/>
        </div>
    )
}

const style = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: "center",
    alignItems:'center',
}

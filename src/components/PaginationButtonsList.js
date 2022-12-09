import React from 'react'
const PaginationButtonsList = ({activePage,setAtivePage}) => {
    const buttons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    return (
        <div className="pagination-buttons-list">
           {buttons.map((pn) =>{
            return (
                <buttons id = {`button-${pn}`} key={pn} className = {pn === activePage? "active-btn" : ""}
                onClick = {() => {
                    setAtivePage(pn)
                }}
                >PN-{pn}</buttons>
            )
           })}

        </div>
    )
}

export { PaginationButtonsList }
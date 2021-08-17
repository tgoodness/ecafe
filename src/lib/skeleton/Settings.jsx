import React from 'react'
import Skeleton from "@material-ui/lab/Skeleton";
import '../style/skeleton/style.scss';

function TradeCrypto() {
    return (
        <div className="profile">
            <div className="row ">
                <div className="col-12">
                    <Skeleton height={60}  className="mt-3"/>
                    <Skeleton height={60} className="mt-2" />
                    <Skeleton height={60} className="mt-2" />
                    
                </div>
            </div>
        </div>
    )
}

export default TradeCrypto

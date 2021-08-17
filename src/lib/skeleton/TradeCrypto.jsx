import React from 'react'
import Skeleton from "@material-ui/lab/Skeleton";
import '../style/skeleton/style.scss';

function TradeCrypto() {
    return (
        <div className="tranfer-crypto">
            <div className="row">
                <div className="col-5">
                    <Skeleton height={20} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <Skeleton height={60} width={60} variant="circle" className="circle" />
                    <Skeleton className="rect" />
                </div>
            </div>
        </div>
    )
}

export default TradeCrypto

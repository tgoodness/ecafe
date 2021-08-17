import React from 'react'
import Skeleton from "@material-ui/lab/Skeleton";
import '../style/skeleton/style.scss';

function TradeCrypto() {
    return (
        <div className="wallet-address">
            <div className="row ">
                <div className="col-12 img-wrapper">
                    <Skeleton  className="img" />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Skeleton height={60} className="mt-2" />
                </div>
                <div className="col-12 ">
                    <Skeleton height={60} className="mt-2" />
                </div>
            </div>
        </div>
    )
}

export default TradeCrypto

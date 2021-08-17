import React from 'react'
import Skeleton from "@material-ui/lab/Skeleton";
import '../style/skeleton/style.scss';

function TradeCrypto() {
    return (
        <div className="trade-crypto">
            <div className="row">
                <div className="col-6">
                    <Skeleton height={20} className="mt-4" />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Skeleton height={80} className="mt-2" />
                </div>
            </div>
        </div>
    )
}

export default TradeCrypto

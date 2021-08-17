import React from 'react'
import Skeleton from "@material-ui/lab/Skeleton";
import '../style/skeleton/style.scss';

function TradeCrypto() {
    return (
        <div className="trade">
            <div className="row">
                <div className="col-12">
                    <div className="switch mt-4">
                        <Skeleton height={50} />
                        <Skeleton height={50} />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Skeleton height={60} className="mt-2" />
                    <Skeleton height={60} className="mt-1" />
                </div>
            </div>

            <div className="btn-trade">
                <Skeleton height={60} className="mt-1" />
            </div>
        </div>
    )
}

export default TradeCrypto

import React from 'react'
import Skeleton from "@material-ui/lab/Skeleton";
import '../style/skeleton/style.scss';

function TradeCrypto() {
    return (
        <div className="trade-crypto">
          
            <div className="row">
                <div className="col-12">
                 
                    <Skeleton height={50} className="mt-2" />
                    <Skeleton height={50} className="mt-2" />
                    <Skeleton height={90} className="mt-2" />
                    <Skeleton height={50} className="mt-5" />
                </div>
            </div>
        </div>
    )
}

export default TradeCrypto

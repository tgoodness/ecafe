import React from 'react'
import Skeleton from "@material-ui/lab/Skeleton";
import '../style/skeleton/style.scss';

function Dashboard() {
    return (
        <div className="dashboard">
            <Skeleton height={120} />
            <Skeleton height={80} />

            <div className="row">
                <div className="col-4">
                    <Skeleton height={80} />

                </div>
                <div className="col-8 mt-3">
                    <Skeleton height={50} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard

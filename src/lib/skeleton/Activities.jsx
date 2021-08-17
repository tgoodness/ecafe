import React from 'react'
import Skeleton from "@material-ui/lab/Skeleton";
import '../style/skeleton/style.scss';

function Activities () {
    return (
        <div className="activities">

            <Skeleton height={ 70 } className="rect" />
            <Skeleton height={ 70 } className="rect" />
            <Skeleton height={ 70 } className="rect" />

        </div>
    )
}

export default Activities

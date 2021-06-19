import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    fallback: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }
})
)
function FallBack() {



    const classes = useStyles();
    return (
        <div className={classes.fallback}>
            <img src="/img/app/single.png" alt="App Icon" width="100" />
        </div>
    )
}

export default FallBack

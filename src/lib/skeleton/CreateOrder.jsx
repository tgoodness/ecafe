import React from 'react'
import Skeleton from "@material-ui/lab/Skeleton";
import '../style/skeleton/style.scss';

function TradeCrypto() {
    return (
			<div className="create-order">
				<div className="row">
					<div className="col-12">
						<div className="switch">
							<Skeleton height={40} />
							<Skeleton height={40} />
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Skeleton height={60} className="mt-1" />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<Skeleton height={60} />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Skeleton height={60} />
					</div>
				</div>

				<div className="button">
					<Skeleton height={60} />
				</div>
			</div>
		);
}

export default TradeCrypto

import React from "react";
import {useNavigate} from "react-router-dom";
// import "./errorPage.scss";
import Util from "@Utils/Util";
import {ROUTES} from "@Config/appRoutes";

const NotFoundPage: React.FC = () => {

	const navigate = useNavigate();

	return (
		<div className={"content"}>

			<div className="error-page">
				<h1 className="error-page__title">404</h1>
				<h2 className="error-page__subtitle">Pagina non trovata</h2>
				<button
					className="btn btn--gray error-page__btn"
					onClick={() => navigate(Util.generatePath({
						path: ROUTES.HOME
					}))}
				>
					Torna alla home
				</button>
			</div>

		</div>
	);

}

export default NotFoundPage;
import React from "react"



function TopBar() {

	return (

		<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

			{/*<!-- Sidebar Toggle (Topbar) --> */}
			<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
				<i className="fa fa-bars"></i>
			</button>

			{/*<!-- Topbar Navbar -->*/}
			<ul className="navbar-nav ml-auto">

				{/*<!-- Nav Item - Alerts -->*/}
				<li className="nav-item dropdown no-arrow mx-1">
					
				</li>

				

				<div className="topbar-divider d-none d-sm-block"></div>

				{/*<!-- Nav Item - User Information -->*/}
				<li className="nav-item dropdown no-arrow">
					<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
					
					</a>
				</li>

			</ul>

		</nav>

	)
}

export default TopBar;
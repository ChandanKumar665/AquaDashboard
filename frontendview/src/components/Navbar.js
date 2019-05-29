import React from 'react'

const Navbar = () =>{
	return (
// A grey horizontal navbar that becomes vertical on small screens
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
				<a className="nav-link" href="#">Aqua</a>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav">
					    <li className="nav-item">
					      <a className="nav-link" href="#">Home</a>
					    </li>
					    <li className="nav-item">
					      <a className="nav-link" href="#">About us</a>
					    </li>
					</ul>
				    <form className="form-inline my-2 my-lg-0">
				  		<input className="form-control" type="text" placeholder="search"/>
				    </form>
			  	</div>
			</nav>
	)
}

export default Navbar
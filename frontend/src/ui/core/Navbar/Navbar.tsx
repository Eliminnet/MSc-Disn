import { Link } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
	title: string;
}

const Navbar = ({ title }: NavbarProps) => {
	return (
		<>
			<nav className="nav secondary">
				<Link
					to="/"
					className="nav-button nav-button__main"
				>
					<img
						src="/home.svg"
						className="nav__logo"
					/>
					<span>{title}</span>
				</Link>
				{/* <Link
					to=""
					className="nav-button"
				>
					<span>test</span>
				</Link>
				<Link
					to=""
					className="nav-button"
				>
					<span>test</span>
				</Link> */}
			</nav>
		</>
	);
};

export default Navbar;

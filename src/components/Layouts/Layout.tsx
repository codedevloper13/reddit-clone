/** @format */

import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar"; // Import the Navbar component

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
};

export default Layout;

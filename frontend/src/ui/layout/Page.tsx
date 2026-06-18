import type { ReactNode } from "react";

import "./Page.css";

interface PageProps {
	children?: ReactNode;
}

const Page = ({ children }: PageProps) => {
	return <div className="page-layout">{children}</div>;
};

export default Page;

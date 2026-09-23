import React, { ReactNode } from 'react';
import './styles.module.scss';

type PageContentProps = {
	children: ReactNode;
};

const PageContent = ({ children }: PageContentProps) => (
	<div styleName="page-content">{children}</div>
);
export default PageContent;

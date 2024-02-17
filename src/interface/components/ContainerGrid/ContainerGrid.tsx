import { ReactNode } from 'react';
import './ContainerGrid.scss';

interface ContainerGridProps {
	children: ReactNode;
	className?: string;
	content?: boolean;
	tag: 'div' | 'footer' | 'header' | 'main' | 'section';
}

export default function ContainerGrid({
	children,
	className = '',
	content,
	tag,
}: ContainerGridProps) {
	const Component = tag;
	const widthClass = className ? ` ${className}` : '';
	const widthContent = content ? ' content' : '';

	return (
		<Component className={`container-grid${widthClass}${widthContent}`}>
			{children}
		</Component>
	);
}

ContainerGrid.displayName = 'ContainerGrid';

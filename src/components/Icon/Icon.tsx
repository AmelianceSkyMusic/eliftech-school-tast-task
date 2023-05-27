import type { MaterialSymbolProps } from 'react-material-symbols';
import { MaterialSymbol } from 'react-material-symbols';
import type { SymbolCodepoints } from 'react-material-symbols/dist/types';

interface IconProps extends Omit<MaterialSymbolProps, 'icon' | 'size'> {
	name: SymbolCodepoints;
	size?: 'small' | 'default' | 'medium' | 'big' ;
}

export function Icon({
	name,
	size = 'default',
	...rest
}: IconProps) {
	const iconSizes = {
		small: 16,
		default: 24,
		medium: 36,
		big: 48,
	};

	const iconSize = iconSizes[size];

	return (
		<MaterialSymbol icon={name} size={iconSize} weight={200} grade={-25} {...rest} />
	);
}

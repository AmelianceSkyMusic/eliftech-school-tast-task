import { createStyles, Footer, Text } from '@mantine/core';

const useStyles = createStyles(() => ({
	footer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

export function FooterLayout() {
	const { classes: c } = useStyles();
	return (
		<Footer className={c.footer} height="30" p="md">
			<Text
				fz="xs"
				component="a"
				href="https://mantine.dev/core/"
				target="_black"
				rel="noreferrer noopener"
			>
				AmelianceSkyMusic © 2023
			</Text>
		</Footer>
	);
}

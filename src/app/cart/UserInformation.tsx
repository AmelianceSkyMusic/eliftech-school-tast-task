import { Flex, NumberInput, Paper, TextInput, Title } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { FormValues } from './CartForm';

interface UserInformationProps {
	form: UseFormReturnType<FormValues>;
}

export function UserInformation({ form }: UserInformationProps) {
	return (
		<Flex direction="column" gap="lg">
			<Title order={4}>User information</Title>
			<Paper p="lg" radius="md" withBorder>
				<TextInput
					label="Name"
					placeholder="Your Name"
					withAsterisk
					{...form.getInputProps('name')}
				/>
				<TextInput
					type="email"
					label="E-mail"
					placeholder="Your E-mail"
					mt="xl"
					withAsterisk
					{...form.getInputProps('email')}
				/>
				<NumberInput
					type="number"
					label="Phone"
					placeholder="Your Phone"
					withAsterisk
					mt="xl"
					hideControls
					{...form.getInputProps('phone')}
				/>

				<TextInput
					label="Address"
					placeholder="Your Address"
					withAsterisk
					mt="xl"
					{...form.getInputProps('address')}
				/>
			</Paper>
		</Flex>
	);
}

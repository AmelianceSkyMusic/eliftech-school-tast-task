import { Button, Flex, Modal, Text, Title } from '@mantine/core';

interface SuccessModalProps {
	opened: boolean;
	close: () => void;
	clear: () => void;
}

export function SuccessModal({ opened, close, clear }: SuccessModalProps) {
	return (
		<Modal
			opened={opened}
			onClose={() => {}}
			withCloseButton={false}
			centered
		>
			<Flex justify="center" direction="column" gap="lg">
				<Title order={4}>Congratulations!</Title>
				<Text>
					Your order has been accepted for processing You can stay in the
					cart
				</Text>
				<Text>
					You can stay in the cart and place another order or clear the
					cart and back to the shops
				</Text>
				<Flex gap="md">
					<Button
						variant="light"
						fullWidth
						color="red"
						radius="sm"
						mt="auto"
						onClick={clear}
					>
						To the shops
					</Button>
					<Button
						variant="light"
						fullWidth
						color="green"
						radius="sm"
						mt="auto"
						onClick={close}
					>
						Stay in the cart
					</Button>
				</Flex>
			</Flex>
		</Modal>
	);
}

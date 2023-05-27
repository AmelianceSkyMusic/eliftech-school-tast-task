import { useForm, isNotEmpty, isEmail, hasLength } from '@mantine/form';
import { Box, SimpleGrid } from '@mantine/core';
import { ProductList } from './ProductList';
import { UserInformation } from './UserInformation';
import { useOrdersState } from '~store/useOrdersState';
import { shallow } from 'zustand/shallow';

import { useUserCartState } from '~store/useUserCartState';
import { useDisclosure } from '@mantine/hooks';
import { SuccessModal } from './SuccessModal';
import { ROUTES } from '~constants/ROUTES';
import { useRouter } from 'next/navigation';

export interface FormValues {
	name: string;
	email: string;
	phone: string;
	address: string;
}

export function CartForm() {
	const userCart = useUserCartState((state) => state.userCart);
	const emptyCart = useUserCartState((state) => state.emptyCart);
	const { loading, error, submitOrder } = useOrdersState(
		(state) => ({
			loading: state.loading,
			error: state.error,
			submitOrder: state.submitOrder,
		}),
		shallow
	);

	const form = useForm<FormValues>({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			address: '',
		},

		validate: {
			name: hasLength(
				{ min: 2, max: 10 },
				'Name must be 2-10 characters long'
			),
			email: isEmail('Invalid email'),
			phone: (value) =>
				/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/.test(value)
					? null
					: 'Invalid phone number',
			address: isNotEmpty('Enter your address'),
		},
	});

	const [openedModal, { open: openModal, close: closeModal }] =
		useDisclosure(false);

	const handleFormOnSubmit = async (formFields: FormValues) => {
		await submitOrder({
			userInfo: {
				name: formFields.name,
				email: formFields.email,
				phone: formFields.phone,
				address: formFields.address,
			},
			orderItems: userCart,
		});
		openModal();
	};

	const router = useRouter();
	const onClear = () => {
		router.push(ROUTES.home);
		form.reset();
		emptyCart();
	};

	return (
		<>
			<Box component="form" onSubmit={form.onSubmit(handleFormOnSubmit)}>
				<SimpleGrid
					cols={2}
					spacing="xl"
					breakpoints={[
						{ maxWidth: 'lg', cols: 2 },
						{ maxWidth: 'sm', cols: 1 },
					]}
				>
					<UserInformation form={form} />
					<ProductList />
				</SimpleGrid>
			</Box>
			<SuccessModal
				opened={openedModal}
				close={closeModal}
				clear={onClear}
			/>
		</>
	);
}

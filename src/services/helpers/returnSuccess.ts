import { SuccessResponse } from '~services/types/SuccessResponse';

export function returnSuccess(): SuccessResponse {
	return { status: 'success' };
}

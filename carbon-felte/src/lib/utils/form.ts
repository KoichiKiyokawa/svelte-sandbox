import type { ValidatorConfig } from '@felte/validator-zod';
import { createForm as baseCreateForm } from 'felte';
import { validator } from '@felte/validator-zod';

export const createForm = <Schema>(arg: Parameters<typeof baseCreateForm>[0]) => {
	return {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		...baseCreateForm<Schema, ValidatorConfig>(arg as any),
		extend: validator({ schema: arg?.schema }),
		nameAttribute: (key: keyof Schema) => ({ name: key })
	};
};

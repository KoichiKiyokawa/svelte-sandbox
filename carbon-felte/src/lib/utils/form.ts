import { ValidatorConfig } from '@felte/validator-zod';
import { createForm as baseCreateForm } from 'felte';
import { validator } from '@felte/validator-zod';

export const createForm = <Schema>(arg: Parameters<typeof baseCreateForm>[0]) => {
	return {
		...baseCreateForm<Schema, ValidatorConfig>(arg as any),
		extend: validator,
		nameAttribute: (key: keyof Schema) => ({ name: key })
	};
};

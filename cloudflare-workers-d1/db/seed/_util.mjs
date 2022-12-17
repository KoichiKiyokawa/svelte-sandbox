import { execSync } from 'node:child_process';

/** @param {string} sql */
export function runSQL(sql) {
	execSync(`pnpm wrangler d1 execute main --local --command "${sql}"`, { stdio: 'inherit' });
}

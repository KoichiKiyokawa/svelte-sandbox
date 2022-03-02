export function assertIfNotLoggedIn(locals: App.Locals) {
	if (locals.session.data.userId === undefined) {
		throw {
			status: 302,
			headers: {
				location: '/login'
			}
		};
	}
}

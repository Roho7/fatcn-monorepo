import alert from 'cli-alerts';

// @ts-ignore
export default info => {
	alert({
		type: `warning`,
		name: `DEBUG LOG`,
		msg: ``
	});

	console.log(info);
	console.log();
};

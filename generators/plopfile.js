module.exports = function (plop) {
	plop.setGenerator('component', {
		description: 'application component logic',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'component name please',
			},
		],
		actions: [
			{
				type: 'add',
				path: '../src/components/{{dashCase name}}/index.tsx',
				templateFile: 'templates/index.tsx.hbs',
			},
			{
				type: 'add',
				path: '../src/components/{{dashCase name}}/styles.ts',
				templateFile: 'templates/styles.ts.hbs',
			},
		],
	});
};

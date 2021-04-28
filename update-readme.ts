import { readFile, writeFile } from 'fs/promises';
import { basename, dirname, parse } from 'path';
import readdirp from 'readdirp';
import { createProgram, forEachChild, isTypeAliasDeclaration, Node } from 'typescript';

const colors = new Map([
	['Aliases', ['626685', '97DAC8']],
	['Array', ['5877BC', 'F48995']],
	['Common', ['F8BB7C', 'A6EDF0']],
	['Function', ['FEDD9E', 'D9718B']],
	['Logical', ['71C7AF', '5D4231']],
	['Number', ['E52935', '59CBE8']],
	['Object', ['F76385', '3F3A81']],
	['String', ['32DE84', '191919']],
	['Union', ['A1A0D2', '363C44']]
]);

(async () => {
	const categories = new Map<string, [string, string][]>();
	const dirs = readdirp(`${process.cwd()}/src`, {
		fileFilter: '[A-Z]*.ts'
	});

	const files = new Set<string>();

	for await (const file of dirs) {
		files.add(file.fullPath);
	}

	const program = createProgram([...files], {});

	for (const file of program.getSourceFiles()) {
		if (!file.isDeclarationFile && files.has(file.fileName)) {
			forEachChild(file, (node: Node) => {
				if (isTypeAliasDeclaration(node) && node.modifiers) {
					const category = basename(dirname(file.fileName));
					const key = category[0].toUpperCase() + category.slice(1);

					const parsed = parse(file.fileName);
					const relative = `${parsed.dir.split(`${__dirname}/`)[1]}/${parsed.base}`;

					let typeName = node.name.text;

					if (node.typeParameters) {
						typeName += `<${node.typeParameters.map(({ name }) => name.escapedText).join(', ')}>`;
					}

					let value: [string, string][] = [[typeName, relative]];

					if (categories.has(key)) {
						value = categories.get(key);
						value.push([typeName, relative]);
					}

					categories.set(key, value);
				}
			});
		}
	}

	const readme = (await readFile('README.md', 'utf8')).toString();
	const lines = readme.split('\n');

	const start = lines.findIndex((line) => line.startsWith('## Types'));
	const section = lines.slice(0, start + 2);

	let badges = '';

	[...categories.keys()].map((category) => {
		const [color, labelColor] = colors.get(category);
		const types = categories.get(category);

		badges += `![#](https://img.shields.io/badge/${types.length}-${category}-${color}?style=for-the-badge&labelColor=${labelColor})\n`;
	});

	section.push(badges);

	for (let [category, type] of categories) {
		category = `- [${category}](src/${category.toLowerCase()})`;

		for (const [name, link] of type) {
			category += `\n\t- [\`${name}\`](${link})`;
		}

		section.push(category);
	}

	writeFile('README.md', `${section.join('\n')}\n`);
})();

import { readFile, writeFile } from 'fs/promises';
import { basename, dirname, parse } from 'path';
import readdirp from 'readdirp';
import {
	createProgram,
	forEachChild,
	isTypeAliasDeclaration,
	Node,
} from 'typescript';

enum BadgeColor {
	Aliases = 'FF9C9F',
	Array = 'FEC98F',
	Function = 'B9E9AA',
	General = 'FEDD9E',
	Logical = 'B9F9E6',
	Number = 'B1F1F4',
	Object = '88C5FF',
	String = 'C7B4E0',
	Union = 'F8CEEE'
}

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

	const start = lines.findIndex((line) => line.startsWith('<div'));
	lines.splice(start + 2, 9, '{{badges}}');

	const [badges, refs]: [string[], string[]] = [[], []];
	const keys = [...categories.keys()];

	keys.map((category) => void badges.push(`[![${category}]](src/${category.toLowerCase()})`));

	const template = lines.findIndex((line) => line === '{{badges}}');
	lines.splice(template, 1, badges.join('\n'));

	const end = lines.findIndex((line) => line === '</div>');
	lines.splice(end + 2);

	for (const [category, type] of categories) {
		let list = `- ${category}`;

		for (const [name, link] of type) {
			list += `\n\t- [\`${name}\`](${link})`;
		}

		lines.push(list);
	}

	for (const category of keys) {
		const types = categories.get(category);

		refs.push(
			`[${category}]: https://img.shields.io/badge/${types.length}-${category}-${BadgeColor[category]}?style=for-the-badge&labelColor=363C44`
		);
	}

	lines.push(`\n${refs.join('\n')}`);

	writeFile('README.md', `${lines.join('\n')}\n`);
})();

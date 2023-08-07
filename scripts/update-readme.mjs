// @ts-check

import fs from "node:fs/promises";
import path from "node:path";
import readdirp from "readdirp";
import ts from "typescript";

/** @type {Record<string, [string, string][]>} */
const categories = {
	general: [],
	array: [],
	boolean: [],
	function: [],
	number: [],
	object: [],
	string: [],
	union: [],
};

const files = new Set();

const dirs = readdirp(`${process.cwd()}/`, {
	directoryFilter: Object.keys(categories),
	fileFilter: "!internal.ts",
});

for await (const file of dirs) {
	files.add(file.fullPath);
}

const program = ts.createProgram([...files], {});

for (const file of program.getSourceFiles()) {
	if (!file.isDeclarationFile && files.has(file.fileName)) {
		ts.forEachChild(file, (node) => {
			if (ts.isTypeAliasDeclaration(node) && node.modifiers) {
				const parsed = path.parse(file.fileName);

				let key = path.basename(parsed.dir);
				key = key.startsWith("util") ? "general" : key;

				const name = node.name.text;
				const params = node.typeParameters;

				categories[key].push([
					name +
						(params
							? `<${params.map(({ name }) => name.escapedText).join(", ")}>`
							: ""),
					`/docs/${key}/${name}.md`,
				]);
			}
		});
	}
}

let replacement = "";

for (const [category, types] of Object.entries(categories)) {
	const displayCategory = category[0].toUpperCase() + category.slice(1);

	replacement += "<details>\n";
	replacement += `<summary>${displayCategory} (${types.length})</summary>\n\n`;

	for (const [name, link] of types) {
		replacement += `- [\`${name}\`](${link})\n`;
	}

	replacement += "\n</details>\n\n";
}

const template = await fs.readFile("scripts/README.template", "utf-8");
await fs.writeFile("README", template.replace("{types}", replacement.trim()));

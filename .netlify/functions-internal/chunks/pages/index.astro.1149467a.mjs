import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead } from '../astro.cfcfd1e7.mjs';
import 'html-escaper';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en" class="astro-J7PV25F6">
	<head>
		<meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>Roast Me</title>
		
	${renderHead()}</head>
	<body class="astro-J7PV25F6">
		<svg class="waves-top astro-J7PV25F6" preserveAspectRatio="none" viewBox="0 0 266 45" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M265 34C243 45.6667 195 56 189 9C168 27.3333 129 48 90 40C63 24 79 14 55 1C59.6667 10 64 34 1 34V1H55H265V34Z" fill="white" class="astro-J7PV25F6"></path>
			<path d="M265 34C243 45.6667 195 56 189 9C168 27.3333 129 48 90 40C63 24 79 14 55 1C59.6667 10 64 34 1 34V1H265V34Z" stroke="black" class="astro-J7PV25F6"></path>
		</svg>
		<div class="content astro-J7PV25F6">
			<h1 class="astro-J7PV25F6">Welcome to the Roast Me app!</h1>

			<h2 class="astro-J7PV25F6"> Tell Us About Yourself</h2>
			<form class="astro-J7PV25F6">
				<label class="astro-J7PV25F6">
					Name <input id="name" type="text" required class="astro-J7PV25F6">
				</label>
				<label class="astro-J7PV25F6">
					Age <input id="age" type="number" required class="astro-J7PV25F6">
				</label>
				<label class="astro-J7PV25F6">
					Height <input id="height" type="text" required class="astro-J7PV25F6">
				</label>
				<label class="astro-J7PV25F6">
					Weight <input id="weight" type="number" required class="astro-J7PV25F6">
				</label>
				<label class="astro-J7PV25F6">
					Something Interesting About Yourself <input id="interests" type="text" required class="astro-J7PV25F6">
				</label>
				<button class="astro-J7PV25F6">Roast Me</button>
			</form>
			<output class="astro-J7PV25F6">
			</output>
			<div class="indicator astro-J7PV25F6">
				Loading...
			</div>
		</div>
		<svg class="waves-bottom astro-J7PV25F6" viewBox="0 0 266 45" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 10.8588C23 -0.807852 71 -11.1412 77 35.8588C98 17.5255 137 -3.14118 176 4.85882C203 20.8588 187 30.8588 211 43.8588C206.333 34.8588 202 10.8588 265 10.8588V43.8588H211H1V10.8588Z" fill="white" class="astro-J7PV25F6"></path>
			<path d="M1 10.8588C23 -0.807852 71 -11.1412 77 35.8588C98 17.5255 137 -3.14118 176 4.85882C203 20.8588 187 30.8588 211 43.8588C206.333 34.8588 202 10.8588 265 10.8588V43.8588H1V10.8588Z" stroke="black" class="astro-J7PV25F6"></path>
		</svg>
		
	</body>
</html>`;
}, "C:/Users/11Zan/OneDrive/Documents/GitHub/Roast-Me-app/src/pages/index.astro", void 0);

const $$file = "C:/Users/11Zan/OneDrive/Documents/GitHub/Roast-Me-app/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

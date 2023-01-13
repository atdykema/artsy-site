import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: "/artsy-site",
		},
		adapter: adapter()
	}
};

export default config;

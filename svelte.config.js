import adapter from '@sveltejs/adapter-node';

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

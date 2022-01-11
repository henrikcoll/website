const express = require('express');
const projects = require('../data/projects');
const links = require('../data/links');
const socials = require('../data/socials');
const files = require('../data/files');

const router = express.Router();

router.get('/', async (req, res) => {

	const featuredProjects = await projects.listFeatured();
	const featuredLinks = await links.listFeatured();

	res.render('pages/index', {
		count: req.visitorCount,
		featuredProjects,
		featuredLinks
	});
});

router.get('/contact', async (req, res) => {
	const allSocials = await socials.list();

	res.render('pages/contact', {
		count: req.visitorCount,
		allSocials
	});
});


const filesHandler = async (req, res) => {
	const allFiles = await files.listAll(req.params['0'] ? req.params['0'] + '/' : '');
	const parrentPath = req.originalUrl.split('/').slice(0, -1).join('/');

	console.log(req.params['0'])

	res.render('pages/files', {
		count: req.visitorCount,
		parrentPath,
		isroot: !req.params['0'],
		originalUrl: req.originalUrl,
		allFiles: allFiles.map(f => {
			if (!f.prefix)
				return f;
			f.prefix = f.prefix.replace(/\/$/, '');
			return f
		})
	});
}

router.get('/files', filesHandler);
router.get('/files/*', filesHandler);





module.exports = router;
export default {
	//set title
	title: ((a) => {
		dt = a;
	}),
	//default log
	log: (...a) => cl(a),
	// style 1
	a: (...a) => {
		cl(s + (lh(a) > 1 ? (a[0] ? a[0] : dt) : dt) + s + (lh(a) > 2 ? (a[1]) : (a[lh(a) - 1])),
			pg(3, 5) + bs(3, 0, 0, 3) + cr(a[4] ? a[4] : color[0]) + bd(a[2] ? a[2] : color[2]) + fs(12),
			pg(3, 5) + br(0, 3, 3, 0) + cr(a[5] ? a[5] : color[1]) + bd(a[3] ? a[3] : color[0]) + fs(12));
	},
	// style 2
	b: (...a) => {
		cl(s + (a[0] ? a[0] : dt), pg(4, 12) + br(15) + cr(a[2] ? a[2] : color[3]) +
			bd(a[1] ? a[1] : color[4]) + fs(12) + ts('0 0 3px rgba(0, 0, 0, .5)'))
	},
	// style 3
	c: (...a) => {
		cl(s + (lh(a) > 1 ? (a[0] ? a[0] : dt) : dt) + s + (a[1] ? a[1] : a[0]),
			pg(3, 5) + cr(color[3]) + bd(a[2] ? a[2] : color[4]) + fs(12), pg(3, 5) + fs(12))
	},
	// style ....
}
//style
let color = ['#f8dfa5', '#000', '#424242', '#FFF', '#52b138'],
	dt = 'Log',
	s = '%c',
	pg = (...a) => map(a, 'padding:'),
	bs = (...a) => map(a, 'border-radius:'),
	mn = (...a) => map(a, 'margin:'),
	cr = (a) => `color:${a};`,
	bd = (a) => `background:${a};`,
	fs = (a) => `ont-size:${a}px;`,
	br = (...a) => map(a, 'border-radius:'),
	ts = (a) => "text-shadow:" + a + ";",
	map = (a, b) => {
		a.map(i => b += i + `px `)
		return b + ";";
	},
	cl = (...a) => console.log(...a),
	lh = (a) => a.length

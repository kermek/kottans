How to start
============
1. `git clone https://github.com/Kottans/bootstrap-starter-kit.git my-bp-project && cd $_ && rm -rf .git` - gets this source locally & deletes .git folder, thus making it a simple folder
2. `npm i` - to complete `npm install` and get all the dependencies
3. `npm run setup` - installs bower dependencies, does inital build
4. `npm run dev` - runs gulp watcher, static server & open page in browser. In case you need to change port/hostname, be sure to edit [gulpfile](https://github.com/Kottans/bootstrap-starter-kit/blob/master/gulpfile.js#L12-L13)


Credits
=======
All the kudos should go to:  
  + [@ericlbarnes](https://twitter.com/ericlbarnes) and his [post](http://ericlbarnes.com/setting-gulp-bower-bootstrap-sass-fontawesome)
  + [@chrisltd](https://twitter.com/chrisltd) and his [post](http://chrisltd.com/blog/2014/07/gulp-server-livereload/)
  + [divshot/bootstrap-theme-white-plum](https://github.com/divshot/bootstrap-theme-white-plum)

Live version (with slightly modified index page) is available on [gh-pages](http://kottans.org/bootstrap-starter-kit/).

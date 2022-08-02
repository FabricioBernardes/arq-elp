const gulp = require('gulp');
const sass = require('gulp-sass')(require("sass"));
const uglify = require('gulp-uglify-es').default;
const webpack = require('webpack-stream');

function compilaSass(){
    return gulp.src("./frontend/assets/style/*.scss")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest("./public/assets/style"))
}

function compilaJs () {
	return gulp.src("./frontend/assets/js/main.js")
        .pipe(webpack({
            mode: 'production',
            module: {
                rules: [{
                    exclude: /node_modules/,
                    test: /\.js$/,
                    use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                    }
                }]
            },
        }))
		.pipe(uglify())
		.pipe(gulp.dest("./public/assets/js"));
};

gulp.task("compilaSass", compilaSass)
gulp.task("compilaJs", compilaJs)

function watch(){
    gulp.watch("./frontend/assets/style/*/**.scss", compilaSass)
    gulp.watch("./frontend/assets/js/*/**.js", compilaJs)
}

gulp.task("watch", watch);

gulp.task("default", watch);
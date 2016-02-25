////////////     Variables    \\\\\\\\\\\\
var browserSync     = require('browser-sync').create();

var autoprefixer = require('gulp-autoprefixer');

var browserify      = require('gulp-browserify'),

    coffee          = require('gulp-coffee'),

    compass         = require('gulp-compass'),

    concat          = require('gulp-concat'),

    gulp            = require('gulp'),

    gulpif          = require('gulp-if'),

    gutil           = require('gulp-util'),

    imagemin        = require('gulp-imagemin'),

    jsonminify      = require('gulp-jsonminify'),

    minifyHTML      = require('gulp-minify-html'),

    pngcrush        = require('imagemin-pngcrush'),
    
    uglify          = require('gulp-uglify'),

    wiredep         = require('wiredep').stream;

    
var env,

    coffeeSources,

    jsSources,

    sassSources,

    htmlSources,

    jsonSources,

    outputDir,

    sassStyle;

  env = process.env.NODE_ENV || 'development';

    if (env==='development') {

      outputDir = 'builds/development/';

      sassStyle = 'expanded';

    } else {

      outputDir = 'builds/production/';

      sassStyle = 'compressed';

    }

////////////     Sources    \\\\\\\\\\\\
coffeeSources = ['components/coffee/black.coffee'];

jsSources = ['components/scripts/*.js'];

sassSources = ['components/sass/style.scss'];

htmlSources = [outputDir + '*.html'];

jsonSources = [outputDir + 'js/*.json'];


////////////     Tasks    \\\\\\\\\\\\


//Coffee Task
gulp.task('coffee', function() {

  gulp.src(coffeeSources)

    .pipe(coffee({ bare: true })

    .on('error', gutil.log))

    .pipe(gulp.dest('components/scripts'))

});

//Sass & Compass
gulp.task('compass', function() {

  gulp.src(sassSources)

    .pipe(compass({

      sass: 'components/sass',

      image: outputDir + 'images',

      style: sassStyle,

      sourcemap: true

    })

    .on('error', gutil.log))

    .pipe(autoprefixer({

      browsers: [

        'Firefox > 0',
        
        'Chrome > 0',

        'Explorer > 0',

        'Safari > 0'

        ],
      
      cascade: false

    }))

    .pipe(gulp.dest(outputDir + 'css'))

    .pipe(browserSync.stream());

});

//HTML
gulp.task('html', function() {

  gulp.src('builds/development/*.html')

    .pipe(gulpif(env === 'production', minifyHTML()))

    .pipe(gulpif(env === 'production', gulp.dest(outputDir)))

    .pipe(browserSync.stream());

});

//Image Compression
gulp.task('images', function(){

  gulp.src('builds/development/images/**/*.*')

  .pipe(gulpif(env === 'production', imagemin({

    progressive: true,

    svgoPlugins: [{ removeViewBox: false }],

    use: [pngcrush()]

  })))

  .pipe(gulpif(env === 'production', gulp.dest(outputDir + 'images')))

  .pipe(browserSync.stream());

});

//Js Concatination
gulp.task('js', function() {

  gulp.src(jsSources)

    .pipe(concat('script.js'))

    .pipe(browserify())

    .pipe(gulpif(env === 'production', uglify()))

    .pipe(gulp.dest(outputDir + 'js'))

    .pipe(browserSync.stream());

});

//JSON minify
gulp.task('json', function() {

  gulp.src('builds/development/js/*.json')

    .pipe(gulpif(env === 'production', jsonminify()))

    .pipe(gulpif(env === 'production', gulp.dest('builds/production/js')))

    .pipe(browserSync.stream());

});

//Local Server
gulp.task('serve', function() {

  browserSync.init({

      server: outputDir

  });

  gulp.watch(coffeeSources, ['coffee']);

  gulp.watch(jsSources, ['js']);

  gulp.watch('components/sass/*.scss', ['compass']);

  gulp.watch('builds/development/*.html', ['html']);

  gulp.watch('builds/development/js/*.json', ['json']);

  gulp.watch('builds/development/images/**/*.*', ['images']);

    //Watches for changes to the HTML and then reloads.
    gulp.watch(outputDir + '*.html').on('change', browserSync.reload());

});

gulp.task('wiredep', function(){

  gulp.src("bower_components/bootstrap/dist/css/bootstrap.css")

      .pipe(wiredep())
  
      .pipe(gulp.dest("builds/development/*.html"));

});


gulp.task('default', ['compass', 'serve']);

gulp.task('wire', ['wiredep']);

gulp.task('build', ['coffee', 'compass', 'html', 'images', 'js', 'json']);
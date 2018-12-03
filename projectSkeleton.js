
module.exports = function(grunt) {
    grunt.initConfig({
       //grunt clean
        clean: {
            build: {
              src: ['path/to/dir/one', 'path/to/dir/two']
            }
          },
         // sass compile
          sass: {                              // Task
            dist: {                            // Target
              options: {                       // Target options
                style: 'expanded'
              },
              files: {                         // Dictionary of files
                'main.css': 'main.scss',       // 'destination': 'source'
                'widgets.css': 'widgets.scss'
              }
            }
          },
          // grunt copy
          copy: {
            main: {
              files: [
                // includes files within path
                {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},
          
                // includes files within path and its sub-directories
                {expand: true, src: ['path/**'], dest: 'dest/'},
          
                // makes all src relative to cwd
                {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},
          
                // flattens results to a single level
                {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
              ],
            },
          },
          // watch css
          watch: {
            css: {
              files: '**/*.sass',
              tasks: ['sass'],
              options: {
                livereload: true,
              },
            },
          },
          // concat
          concat: {
            options: {
              separator: ';',
            },
            dist: {
              src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
              dest: 'dist/built.js',
            },
          },
          // minify js
          uglify: {
            my_target: {
              files: {
                'dest/output.min.js': ['src/input1.js', 'src/input2.js']
              }
            }
          },
          // minify css
          cssmin : {
            target : {
                src : ["css/style1.css", "css/style2.css"],
                dest : "dist/style.min.css"
            }
        },
       //grunt builder
       builder: {
        app: {
          src: 'index.html',
          options: {
            //builder options
          }
        }
      },
      //grunt open
      open : {
        dev : {
          path: 'http://127.0.0.1:5500/index.html',
          app: 'Google Chrome'
        },
        build : {
          path : 'http://google.com/',
          app: 'Firefox'
        },
        file : {
          path : '/etc/hosts'
        },
        custom: {
          path : function () {
            return grunt.option('path');
          } 
        }
      },
      //grunt template
      'template': {
        'options': {
          // Task-specific options go here
        },
        'your-target': {
          'options': {
            // Target-specific options go here
          },
          'files': {
            // Target-specific file lists go here
            
              'projectSkeleton': ['Gruntfile.js','package-lock.json','package.json']
            

          }
        }
      }

          









    });  
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-builder');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-template');
   

};



{
  "name": "skeleton-project",
  "version": "1.0.0",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@types/node": {
      "version": "10.12.12",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-10.12.12.tgz",
      "integrity": "sha512-Pr+6JRiKkfsFvmU/LK68oBRCQeEg36TyAbPhc2xpez24OOZZCuoIhWGTd39VZy6nGafSbxzGouFPTFD/rR1A0A==",
      "dev": true
    },
    "@types/semver": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/@types/semver/-/semver-5.5.0.tgz",
      "integrity": "sha512-41qEJgBH/TWgo5NFSvBCJ1qkoi3Q6ONSF2avrHq1LVEZfYpdHmj0y9SuTK+u9ZhG1sYQKBL1AWXKyLWP4RaUoQ==",
      "dev": true
    },
    "abbrev": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      "dev": true
    },
    "ajv": {
      "version": "6.6.1",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.6.1.tgz",
      "integrity": "sha512-ZoJjft5B+EJBjUyu9C9Hc0OZyPZSSlOF+plzouTrg6UlA8f+e/n8NIgBFG/9tppJtpPWfthHakK7juJdNDODww==",
      "dev": true,
      "requires": {
        "fast-deep-equal": "^2.0.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      }
    },
    "amdefine": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/amdefine/-/amdefine-1.0.1.tgz",
      "integrity": "sha1-SlKCrBZHKek2Gbz9OtFR+BfOkfU=",
      "dev": true
    },
    "ansi-regex": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
      "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
      "dev": true
    },
    "ansi-styles": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
      "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
      "dev": true
    },
    "aproba": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
      "integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw==",
      "dev": true
    },
    "are-we-there-yet": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-1.1.5.tgz",
      "integrity": "sha512-5hYdAkZlcG8tOLujVDTgCT+uPX0VnpAH28gWsLfzpXYm7wP6mp5Q/gYyR7YQ0cKVJcXJnl3j2kpBan13PtQf6w==",
      "dev": true,
      "requires": {
        "delegates": "^1.0.0",
        "readable-stream": "^2.0.6"
      }
    },
    "array-find-index": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-find-index/-/array-find-index-1.0.2.tgz",
      "integrity": "sha1-3wEKoSh+Fku9pvlyOwqWoexBh6E=",
      "dev": true
    },
    "asn1": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
      "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
      "dev": true,
      "requires": {
        "safer-buffer": "~2.1.0"
      }
    },
    "assert-plus": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
      "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
      "dev": true
    },
    "async": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/async/-/async-2.6.1.tgz",
      "integrity": "sha512-fNEiL2+AZt6AlAw/29Cr0UDe4sRAHCpEHh54WMz+Bb7QfNcFw4h3loofyJpLeQs4Yx7yuqu/2dLgM5hKOs6HlQ==",
      "dev": true,
      "requires": {
        "lodash": "^4.17.10"
      }
    },
    "async-foreach": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/async-foreach/-/async-foreach-0.1.3.tgz",
      "integrity": "sha1-NhIfhFwFeBct5Bmpfb6x0W7DRUI=",
      "dev": true
    },
    "asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
      "dev": true
    },
    "aws-sign2": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
      "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
      "dev": true
    },
    "aws4": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.8.0.tgz",
      "integrity": "sha512-ReZxvNHIOv88FlT7rxcXIIC0fPt4KZqZbOlivyWtXLt8ESx84zd3kMC6iK5jVeS2qt+g7ftS7ye4fi06X5rtRQ==",
      "dev": true
    },
    "balanced-match": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
      "dev": true
    },
    "bcrypt-pbkdf": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
      "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
      "dev": true,
      "requires": {
        "tweetnacl": "^0.14.3"
      }
    },
    "block-stream": {
      "version": "0.0.9",
      "resolved": "https://registry.npmjs.org/block-stream/-/block-stream-0.0.9.tgz",
      "integrity": "sha1-E+v+d4oDIFz+A3UUgeu0szAMEmo=",
      "dev": true,
      "requires": {
        "inherits": "~2.0.0"
      }
    },
    "body": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/body/-/body-5.1.0.tgz",
      "integrity": "sha1-5LoM5BCkaTYyM2dgnstOZVMSUGk=",
      "dev": true,
      "requires": {
        "continuable-cache": "^0.3.1",
        "error": "^7.0.0",
        "raw-body": "~1.1.0",
        "safe-json-parse": "~1.0.1"
      }
    },
    "brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "requires": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "builtin-modules": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/builtin-modules/-/builtin-modules-1.1.1.tgz",
      "integrity": "sha1-Jw8HbFpywC9bZaR9+Uxf46J4iS8=",
      "dev": true
    },
    "bytes": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-1.0.0.tgz",
      "integrity": "sha1-NWnt6Lo0MV+rmcPpLLBMciDeH6g=",
      "dev": true
    },
    "camelcase": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-2.1.1.tgz",
      "integrity": "sha1-fB0W1nmhu+WcoCys7PsBHiAfWh8=",
      "dev": true
    },
    "camelcase-keys": {
      "version": "2.1.0",
      "resolved": "http://registry.npmjs.org/camelcase-keys/-/camelcase-keys-2.1.0.tgz",
      "integrity": "sha1-MIvur/3ygRkFHvodkyITyRuPkuc=",
      "dev": true,
      "requires": {
        "camelcase": "^2.0.0",
        "map-obj": "^1.0.0"
      }
    },
    "caseless": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
      "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
      "dev": true
    },
    "chalk": {
      "version": "1.1.3",
      "resolved": "http://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
      "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
      "dev": true,
      "requires": {
        "ansi-styles": "^2.2.1",
        "escape-string-regexp": "^1.0.2",
        "has-ansi": "^2.0.0",
        "strip-ansi": "^3.0.0",
        "supports-color": "^2.0.0"
      }
    },
    "clean-css": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/clean-css/-/clean-css-4.2.1.tgz",
      "integrity": "sha512-4ZxI6dy4lrY6FHzfiy1aEOXgu4LIsW2MhwG0VBKdcoGoH/XLFgaHSdLTGr4O8Be6A8r3MOphEiI8Gc1n0ecf3g==",
      "dev": true,
      "requires": {
        "source-map": "~0.6.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "cliui": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-3.2.0.tgz",
      "integrity": "sha1-EgYBU3qRbSmUD5NNo7SNWFo5IT0=",
      "dev": true,
      "requires": {
        "string-width": "^1.0.1",
        "strip-ansi": "^3.0.1",
        "wrap-ansi": "^2.0.0"
      }
    },
    "code-point-at": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
      "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c=",
      "dev": true
    },
    "color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "requires": {
        "color-name": "1.1.3"
      }
    },
    "color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "combined-stream": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.7.tgz",
      "integrity": "sha512-brWl9y6vOB1xYPZcpZde3N9zDByXTosAeMDo4p1wzo6UMOX4vumB+TP1RZ76sfE6Md68Q0NJSrE/gbezd4Ul+w==",
      "dev": true,
      "requires": {
        "delayed-stream": "~1.0.0"
      }
    },
    "commander": {
      "version": "2.17.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.17.1.tgz",
      "integrity": "sha512-wPMUt6FnH2yzG95SA6mzjQOEKUU3aLaDEmzs1ti+1E9h+CsrZghRlqEM/EJ4KscsQVG8uNN4uVreUeT8+drlgg==",
      "dev": true
    },
    "concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
      "dev": true
    },
    "config-chain": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/config-chain/-/config-chain-1.1.12.tgz",
      "integrity": "sha512-a1eOIcu8+7lUInge4Rpf/n4Krkf3Dd9lqhljRzII1/Zno/kRtUWnznPO3jOKBmTEktkt3fkxisUcivoj0ebzoA==",
      "dev": true,
      "requires": {
        "ini": "^1.3.4",
        "proto-list": "~1.2.1"
      }
    },
    "console-control-strings": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
      "integrity": "sha1-PXz0Rk22RG6mRL9LOVB/mFEAjo4=",
      "dev": true
    },
    "continuable-cache": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/continuable-cache/-/continuable-cache-0.3.1.tgz",
      "integrity": "sha1-vXJ6f67XfnH/OYWskzUakSczrQ8=",
      "dev": true
    },
    "core-util-is": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
      "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac=",
      "dev": true
    },
    "cross-spawn": {
      "version": "0.2.9",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-0.2.9.tgz",
      "integrity": "sha1-vWf5bAfvtjA7f+lMHpefiEeOCjk=",
      "dev": true,
      "requires": {
        "lru-cache": "^2.5.0"
      }
    },
    "currently-unhandled": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/currently-unhandled/-/currently-unhandled-0.4.1.tgz",
      "integrity": "sha1-mI3zP+qxke95mmE2nddsF635V+o=",
      "dev": true,
      "requires": {
        "array-find-index": "^1.0.1"
      }
    },
    "dargs": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/dargs/-/dargs-4.1.0.tgz",
      "integrity": "sha1-A6nbtLXC8Tm/FK5T8LiipqhvThc=",
      "dev": true,
      "requires": {
        "number-is-nan": "^1.0.0"
      }
    },
    "dashdash": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
      "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0"
      }
    },
    "debug": {
      "version": "3.2.6",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.6.tgz",
      "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
      "dev": true,
      "requires": {
        "ms": "^2.1.1"
      }
    },
    "decamelize": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
      "dev": true
    },
    "delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
      "dev": true
    },
    "delegates": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
      "integrity": "sha1-hMbhWbgZBP3KWaDvRM2HDTElD5o=",
      "dev": true
    },
    "domelementtype": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.2.1.tgz",
      "integrity": "sha512-SQVCLFS2E7G5CRCMdn6K9bIhRj1bS6QBWZfF0TUPh4V/BbqrQ619IdSS3/izn0FZ+9l+uODzaZjb08fjOfablA==",
      "dev": true
    },
    "domhandler": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-2.2.1.tgz",
      "integrity": "sha1-Wd+dzSJ+gIs2Wuc+H2aErD2Ub8I=",
      "dev": true,
      "requires": {
        "domelementtype": "1"
      }
    },
    "domutils": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.3.0.tgz",
      "integrity": "sha1-mtTVm1r2ymhMYv5tdo7xcOcN8ZI=",
      "dev": true,
      "requires": {
        "domelementtype": "1"
      }
    },
    "duplexer": {
      "version": "0.1.1",
      "resolved": "http://registry.npmjs.org/duplexer/-/duplexer-0.1.1.tgz",
      "integrity": "sha1-rOb/gIwc5mtX0ev5eXessCM0z8E=",
      "dev": true
    },
    "ecc-jsbn": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
      "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
      "dev": true,
      "requires": {
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.1.0"
      }
    },
    "editorconfig": {
      "version": "0.15.2",
      "resolved": "https://registry.npmjs.org/editorconfig/-/editorconfig-0.15.2.tgz",
      "integrity": "sha512-GWjSI19PVJAM9IZRGOS+YKI8LN+/sjkSjNyvxL5ucqP9/IqtYNXBaQ/6c/hkPNYQHyOHra2KoXZI/JVpuqwmcQ==",
      "dev": true,
      "requires": {
        "@types/node": "^10.11.7",
        "@types/semver": "^5.5.0",
        "commander": "^2.19.0",
        "lru-cache": "^4.1.3",
        "semver": "^5.6.0",
        "sigmund": "^1.0.1"
      },
      "dependencies": {
        "commander": {
          "version": "2.19.0",
          "resolved": "https://registry.npmjs.org/commander/-/commander-2.19.0.tgz",
          "integrity": "sha512-6tvAOO+D6OENvRAh524Dh9jcfKTYDQAqvqezbCW82xj5X0pSrcpxtvRKHLG0yBY6SD7PSDrJaj+0AiOcKVd1Xg==",
          "dev": true
        },
        "lru-cache": {
          "version": "4.1.5",
          "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
          "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
          "dev": true,
          "requires": {
            "pseudomap": "^1.0.2",
            "yallist": "^2.1.2"
          }
        }
      }
    },
    "error": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/error/-/error-7.0.2.tgz",
      "integrity": "sha1-pfdf/02ZJhJt2sDqXcOOaJFTywI=",
      "dev": true,
      "requires": {
        "string-template": "~0.2.1",
        "xtend": "~4.0.0"
      }
    },
    "error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "dev": true,
      "requires": {
        "is-arrayish": "^0.2.1"
      }
    },
    "escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true
    },
    "extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
      "dev": true
    },
    "extsprintf": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
      "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
      "dev": true
    },
    "fast-deep-equal": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
      "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",
      "dev": true
    },
    "fast-json-stable-stringify": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.0.0.tgz",
      "integrity": "sha1-1RQsDK7msRifh9OnYREGT4bIu/I=",
      "dev": true
    },
    "faye-websocket": {
      "version": "0.10.0",
      "resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.10.0.tgz",
      "integrity": "sha1-TkkvjQTftviQA1B/btvy1QHnxvQ=",
      "dev": true,
      "requires": {
        "websocket-driver": ">=0.5.1"
      }
    },
    "figures": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/figures/-/figures-1.7.0.tgz",
      "integrity": "sha1-y+Hjr/zxzUS4DK3+0o3Hk6lwHS4=",
      "dev": true,
      "requires": {
        "escape-string-regexp": "^1.0.5",
        "object-assign": "^4.1.0"
      }
    },
    "file-sync-cmp": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/file-sync-cmp/-/file-sync-cmp-0.1.1.tgz",
      "integrity": "sha1-peeo/7+kk7Q7kju9TKiaU7Y7YSs=",
      "dev": true
    },
    "find-up": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-1.1.2.tgz",
      "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",
      "dev": true,
      "requires": {
        "path-exists": "^2.0.0",
        "pinkie-promise": "^2.0.0"
      }
    },
    "forever-agent": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
      "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
      "dev": true
    },
    "form-data": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
      "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
      "dev": true,
      "requires": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.6",
        "mime-types": "^2.1.12"
      }
    },
    "fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
      "dev": true
    },
    "fstream": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/fstream/-/fstream-1.0.11.tgz",
      "integrity": "sha1-XB+x8RdHcRTwYyoOtLcbPLD9MXE=",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.2",
        "inherits": "~2.0.0",
        "mkdirp": ">=0.5 0",
        "rimraf": "2"
      }
    },
    "gauge": {
      "version": "2.7.4",
      "resolved": "https://registry.npmjs.org/gauge/-/gauge-2.7.4.tgz",
      "integrity": "sha1-LANAXHU4w51+s3sxcCLjJfsBi/c=",
      "dev": true,
      "requires": {
        "aproba": "^1.0.3",
        "console-control-strings": "^1.0.0",
        "has-unicode": "^2.0.0",
        "object-assign": "^4.1.0",
        "signal-exit": "^3.0.0",
        "string-width": "^1.0.1",
        "strip-ansi": "^3.0.1",
        "wide-align": "^1.1.0"
      }
    },
    "gaze": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/gaze/-/gaze-1.1.3.tgz",
      "integrity": "sha512-BRdNm8hbWzFzWHERTrejLqwHDfS4GibPoq5wjTPIoJHoBtKGPg3xAFfxmM+9ztbXelxcf2hwQcaz1PtmFeue8g==",
      "dev": true,
      "requires": {
        "globule": "^1.0.0"
      }
    },
    "get-caller-file": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-1.0.3.tgz",
      "integrity": "sha512-3t6rVToeoZfYSGd8YoLFR2DJkiQrIiUrGcjvFX2mDw3bn6k2OtwHN0TNCLbBO+w8qTvimhDkv+LSscbJY1vE6w==",
      "dev": true
    },
    "get-stdin": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-4.0.1.tgz",
      "integrity": "sha1-uWjGsKBDhDJJAui/Gl3zJXmkUP4=",
      "dev": true
    },
    "getpass": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
      "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0"
      }
    },
    "glob": {
      "version": "7.1.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.3.tgz",
      "integrity": "sha512-vcfuiIxogLV4DlGBHIUOwI0IbrJ8HWPc4MU7HzviGeNho/UJDfi6B5p3sHeWIQ0KGIU0Jpxi5ZHxemQfLkkAwQ==",
      "dev": true,
      "requires": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      }
    },
    "globule": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/globule/-/globule-1.2.1.tgz",
      "integrity": "sha512-g7QtgWF4uYSL5/dn71WxubOrS7JVGCnFPEnoeChJmBnyR9Mw8nGoEwOgJL/RC2Te0WhbsEUCejfH8SZNJ+adYQ==",
      "dev": true,
      "requires": {
        "glob": "~7.1.1",
        "lodash": "~4.17.10",
        "minimatch": "~3.0.2"
      }
    },
    "graceful-fs": {
      "version": "4.1.15",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.1.15.tgz",
      "integrity": "sha512-6uHUhOPEBgQ24HM+r6b/QwWfZq+yiFcipKFrOFiBEnWdy5sdzYoi+pJeQaPI5qOLRFqWmAXUPQNsielzdLoecA==",
      "dev": true
    },
    "grunt-builder": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/grunt-builder/-/grunt-builder-0.0.3.tgz",
      "integrity": "sha1-mL5Yhng7rxJS1b2OzDiX+6xqj2s=",
      "dev": true,
      "requires": {
        "clean-css": "2.0.0",
        "htmlparser2": "3.4.0",
        "uglify-js": "2.4.8"
      },
      "dependencies": {
        "async": {
          "version": "0.2.10",
          "resolved": "http://registry.npmjs.org/async/-/async-0.2.10.tgz",
          "integrity": "sha1-trvgsGdLnXGXCMo43owjfLUmw9E=",
          "dev": true
        },
        "clean-css": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/clean-css/-/clean-css-2.0.0.tgz",
          "integrity": "sha1-7OY8mtJeOBPImpVWZ5Wj0KL/Daw=",
          "dev": true,
          "requires": {
            "commander": "2.0.x"
          }
        },
        "commander": {
          "version": "2.0.0",
          "resolved": "http://registry.npmjs.org/commander/-/commander-2.0.0.tgz",
          "integrity": "sha1-0bhvkB+LZL2UG96tr5JFMDk76Sg=",
          "dev": true
        },
        "source-map": {
          "version": "0.1.43",
          "resolved": "http://registry.npmjs.org/source-map/-/source-map-0.1.43.tgz",
          "integrity": "sha1-wkvBRspRfBRx9drL4lcbK3+eM0Y=",
          "dev": true,
          "requires": {
            "amdefine": ">=0.0.4"
          }
        },
        "uglify-js": {
          "version": "2.4.8",
          "resolved": "http://registry.npmjs.org/uglify-js/-/uglify-js-2.4.8.tgz",
          "integrity": "sha1-cOM72bzponuJb9T+rUx9pDT8ygk=",
          "dev": true,
          "requires": {
            "async": "~0.2.6",
            "optimist": "~0.3.5",
            "source-map": "~0.1.7",
            "uglify-to-browserify": "~1.0.0"
          }
        }
      }
    },
    "grunt-contrib-clean": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/grunt-contrib-clean/-/grunt-contrib-clean-2.0.0.tgz",
      "integrity": "sha512-g5ZD3ORk6gMa5ugZosLDQl3dZO7cI3R14U75hTM+dVLVxdMNJCPVmwf9OUt4v4eWgpKKWWoVK9DZc1amJp4nQw==",
      "dev": true,
      "requires": {
        "async": "^2.6.1",
        "rimraf": "^2.6.2"
      }
    },
    "grunt-contrib-concat": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/grunt-contrib-concat/-/grunt-contrib-concat-1.0.1.tgz",
      "integrity": "sha1-YVCYYwhOhx1+ht5IwBUlntl3Rb0=",
      "dev": true,
      "requires": {
        "chalk": "^1.0.0",
        "source-map": "^0.5.3"
      },
      "dependencies": {
        "source-map": {
          "version": "0.5.7",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
          "dev": true
        }
      }
    },
    "grunt-contrib-copy": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/grunt-contrib-copy/-/grunt-contrib-copy-1.0.0.tgz",
      "integrity": "sha1-cGDGWB6QS4qw0A8HbgqPbj58NXM=",
      "dev": true,
      "requires": {
        "chalk": "^1.1.1",
        "file-sync-cmp": "^0.1.0"
      }
    },
    "grunt-contrib-cssmin": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/grunt-contrib-cssmin/-/grunt-contrib-cssmin-3.0.0.tgz",
      "integrity": "sha512-eXpooYmVGKMs/xV7DzTLgJFPVOfMuawPD3x0JwhlH0mumq2NtH3xsxaHxp1Y3NKxp0j0tRhFS6kSBRsz6TuTGg==",
      "dev": true,
      "requires": {
        "chalk": "^2.4.1",
        "clean-css": "~4.2.1",
        "maxmin": "^2.1.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.1",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.1.tgz",
          "integrity": "sha512-ObN6h1v2fTJSmUXoS3nMQ92LbDK9be4TV+6G+omQlGJFdcUX5heKi1LZ1YnRMIgwTLEj3E24bT6tYni50rlCfQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "supports-color": {
          "version": "5.5.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
          "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
          "dev": true,
          "requires": {
            "has-flag": "^3.0.0"
          }
        }
      }
    },
    "grunt-contrib-sass": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/grunt-contrib-sass/-/grunt-contrib-sass-1.0.0.tgz",
      "integrity": "sha1-gGg4JRy8DhqU1k1RXN00z2dNcBs=",
      "dev": true,
      "requires": {
        "async": "^0.9.0",
        "chalk": "^1.0.0",
        "cross-spawn": "^0.2.3",
        "dargs": "^4.0.0",
        "which": "^1.0.5"
      },
      "dependencies": {
        "async": {
          "version": "0.9.2",
          "resolved": "http://registry.npmjs.org/async/-/async-0.9.2.tgz",
          "integrity": "sha1-rqdNXmHB+JlhO/ZL2mbUx48v0X0=",
          "dev": true
        }
      }
    },
    "grunt-contrib-uglify": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/grunt-contrib-uglify/-/grunt-contrib-uglify-4.0.0.tgz",
      "integrity": "sha512-vy3Vop2KDqdiwcGOGAjyKvjHFrRD/YK4KPQWR3Yt6OdYlgFw1z7HCuk66+IJ9s7oJmp9uRQXuuSHyawKRAgiMw==",
      "dev": true,
      "requires": {
        "chalk": "^2.4.1",
        "maxmin": "^2.1.0",
        "uglify-js": "~3.4.8",
        "uri-path": "^1.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.1",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.1.tgz",
          "integrity": "sha512-ObN6h1v2fTJSmUXoS3nMQ92LbDK9be4TV+6G+omQlGJFdcUX5heKi1LZ1YnRMIgwTLEj3E24bT6tYni50rlCfQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "supports-color": {
          "version": "5.5.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
          "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
          "dev": true,
          "requires": {
            "has-flag": "^3.0.0"
          }
        }
      }
    },
    "grunt-contrib-watch": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/grunt-contrib-watch/-/grunt-contrib-watch-1.1.0.tgz",
      "integrity": "sha512-yGweN+0DW5yM+oo58fRu/XIRrPcn3r4tQx+nL7eMRwjpvk+rQY6R8o94BPK0i2UhTg9FN21hS+m8vR8v9vXfeg==",
      "dev": true,
      "requires": {
        "async": "^2.6.0",
        "gaze": "^1.1.0",
        "lodash": "^4.17.10",
        "tiny-lr": "^1.1.1"
      }
    },
    "grunt-html-build": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/grunt-html-build/-/grunt-html-build-0.7.1.tgz",
      "integrity": "sha1-IZ+65LewReDBGtwvhyithemp1qM=",
      "dev": true,
      "requires": {
        "js-beautify": "^1.6.2",
        "lodash": "^4.12.0"
      }
    },
    "grunt-open": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/grunt-open/-/grunt-open-0.2.3.tgz",
      "integrity": "sha1-FFrEUCalf8+qQz/9c5iuRtK9OVc=",
      "dev": true,
      "requires": {
        "open": "~0.0.4"
      }
    },
    "grunt-sass": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/grunt-sass/-/grunt-sass-3.0.2.tgz",
      "integrity": "sha512-Ogq4cWqBre71gZIkgxIxevgzZHSIIsrKu/5yvPDl4Mvib0A4TRTJEQUdpQ0YV1iai0DPjayz02vDJE6KUVHQ2w==",
      "dev": true
    },
    "grunt-template": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/grunt-template/-/grunt-template-1.0.0.tgz",
      "integrity": "sha1-Vgj5sFoGp4b6BIymZEfktI09HCE=",
      "dev": true
    },
    "gzip-size": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/gzip-size/-/gzip-size-3.0.0.tgz",
      "integrity": "sha1-VGGI6b3DN/Zzdy+BZgRks4nc5SA=",
      "dev": true,
      "requires": {
        "duplexer": "^0.1.1"
      }
    },
    "har-schema": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
      "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
      "dev": true
    },
    "har-validator": {
      "version": "5.1.3",
      "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.3.tgz",
      "integrity": "sha512-sNvOCzEQNr/qrvJgc3UG/kD4QtlHycrzwS+6mfTrrSq97BvaYcPZZI1ZSqGSPR73Cxn4LKTD4PttRwfU7jWq5g==",
      "dev": true,
      "requires": {
        "ajv": "^6.5.5",
        "har-schema": "^2.0.0"
      }
    },
    "has-ansi": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",
      "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",
      "dev": true,
      "requires": {
        "ansi-regex": "^2.0.0"
      }
    },
    "has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
      "dev": true
    },
    "has-unicode": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
      "integrity": "sha1-4Ob+aijPUROIVeCG0Wkedx3iqLk=",
      "dev": true
    },
    "hosted-git-info": {
      "version": "2.7.1",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.7.1.tgz",
      "integrity": "sha512-7T/BxH19zbcCTa8XkMlbK5lTo1WtgkFi3GvdWEyNuc4Vex7/9Dqbnpsf4JMydcfj9HCg4zUWFTL3Za6lapg5/w==",
      "dev": true
    },
    "htmlparser2": {
      "version": "3.4.0",
      "resolved": "http://registry.npmjs.org/htmlparser2/-/htmlparser2-3.4.0.tgz",
      "integrity": "sha1-oc1l9YI60oXhnWOwha1yLQpR6uc=",
      "dev": true,
      "requires": {
        "domelementtype": "1",
        "domhandler": "2.2",
        "domutils": "1.3",
        "readable-stream": "1.1"
      },
      "dependencies": {
        "isarray": {
          "version": "0.0.1",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
          "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8=",
          "dev": true
        },
        "readable-stream": {
          "version": "1.1.14",
          "resolved": "http://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz",
          "integrity": "sha1-fPTFTvZI44EwhMY23SB54WbAgdk=",
          "dev": true,
          "requires": {
            "core-util-is": "~1.0.0",
            "inherits": "~2.0.1",
            "isarray": "0.0.1",
            "string_decoder": "~0.10.x"
          }
        },
        "string_decoder": {
          "version": "0.10.31",
          "resolved": "http://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
          "integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ=",
          "dev": true
        }
      }
    },
    "http-parser-js": {
      "version": "0.5.0",
      "resolved": "https://registry.npmjs.org/http-parser-js/-/http-parser-js-0.5.0.tgz",
      "integrity": "sha512-cZdEF7r4gfRIq7ezX9J0T+kQmJNOub71dWbgAXVHDct80TKP4MCETtZQ31xyv38UwgzkWPYF/Xc0ge55dW9Z9w==",
      "dev": true
    },
    "http-signature": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
      "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0",
        "jsprim": "^1.2.2",
        "sshpk": "^1.7.0"
      }
    },
    "in-publish": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/in-publish/-/in-publish-2.0.0.tgz",
      "integrity": "sha1-4g/146KvwmkDILbcVSaCqcf631E=",
      "dev": true
    },
    "indent-string": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-2.1.0.tgz",
      "integrity": "sha1-ji1INIdCEhtKghi3oTfppSBJ3IA=",
      "dev": true,
      "requires": {
        "repeating": "^2.0.0"
      }
    },
    "inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "dev": true,
      "requires": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "inherits": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
      "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
      "dev": true
    },
    "ini": {
      "version": "1.3.5",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.5.tgz",
      "integrity": "sha512-RZY5huIKCMRWDUqZlEi72f/lmXKMvuszcMBduliQ3nnWbx9X/ZBQO7DijMEYS9EhHBb2qacRUMtC7svLwe0lcw==",
      "dev": true
    },
    "invert-kv": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-1.0.0.tgz",
      "integrity": "sha1-EEqOSqym09jNFXqO+L+rLXo//bY=",
      "dev": true
    },
    "is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
      "dev": true
    },
    "is-builtin-module": {
      "version": "1.0.0",
      "resolved": "http://registry.npmjs.org/is-builtin-module/-/is-builtin-module-1.0.0.tgz",
      "integrity": "sha1-VAVy0096wxGfj3bDDLwbHgN6/74=",
      "dev": true,
      "requires": {
        "builtin-modules": "^1.0.0"
      }
    },
    "is-finite": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-finite/-/is-finite-1.0.2.tgz",
      "integrity": "sha1-zGZ3aVYCvlUO8R6LSqYwU0K20Ko=",
      "dev": true,
      "requires": {
        "number-is-nan": "^1.0.0"
      }
    },
    "is-fullwidth-code-point": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
      "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
      "dev": true,
      "requires": {
        "number-is-nan": "^1.0.0"
      }
    },
    "is-typedarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
      "dev": true
    },
    "is-utf8": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz",
      "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI=",
      "dev": true
    },
    "isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
      "dev": true
    },
    "isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
      "dev": true
    },
    "isstream": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
      "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
      "dev": true
    },
    "js-base64": {
      "version": "2.4.9",
      "resolved": "https://registry.npmjs.org/js-base64/-/js-base64-2.4.9.tgz",
      "integrity": "sha512-xcinL3AuDJk7VSzsHgb9DvvIXayBbadtMZ4HFPx8rUszbW1MuNMlwYVC4zzCZ6e1sqZpnNS5ZFYOhXqA39T7LQ==",
      "dev": true
    },
    "js-beautify": {
      "version": "1.8.8",
      "resolved": "https://registry.npmjs.org/js-beautify/-/js-beautify-1.8.8.tgz",
      "integrity": "sha512-qVNq7ZZ7ZbLdzorvSlRDadS0Rh5oyItaE95v6I4wbbuSiijxn7SnnsV6dvKlcXuO2jX7lK8tn9fBulx34K/Ejg==",
      "dev": true,
      "requires": {
        "config-chain": "~1.1.5",
        "editorconfig": "^0.15.0",
        "mkdirp": "~0.5.0",
        "nopt": "~4.0.1"
      },
      "dependencies": {
        "nopt": {
          "version": "4.0.1",
          "resolved": "https://registry.npmjs.org/nopt/-/nopt-4.0.1.tgz",
          "integrity": "sha1-0NRoWv1UFRk8jHUFYC0NF81kR00=",
          "dev": true,
          "requires": {
            "abbrev": "1",
            "osenv": "^0.1.4"
          }
        }
      }
    },
    "jsbn": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
      "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
      "dev": true
    },
    "json-schema": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
      "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
      "dev": true
    },
    "json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "json-stringify-safe": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
      "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
      "dev": true
    },
    "jsprim": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
      "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
      "dev": true,
      "requires": {
        "assert-plus": "1.0.0",
        "extsprintf": "1.3.0",
        "json-schema": "0.2.3",
        "verror": "1.10.0"
      }
    },
    "lcid": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/lcid/-/lcid-1.0.0.tgz",
      "integrity": "sha1-MIrMr6C8SDo4Z7S28rlQYlHRuDU=",
      "dev": true,
      "requires": {
        "invert-kv": "^1.0.0"
      }
    },
    "livereload-js": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/livereload-js/-/livereload-js-2.4.0.tgz",
      "integrity": "sha512-XPQH8Z2GDP/Hwz2PCDrh2mth4yFejwA1OZ/81Ti3LgKyhDcEjsSsqFWZojHG0va/duGd+WyosY7eXLDoOyqcPw==",
      "dev": true
    },
    "load-json-file": {
      "version": "1.1.0",
      "resolved": "http://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz",
      "integrity": "sha1-lWkFcI1YtLq0wiYbBPWfMcmTdMA=",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.2",
        "parse-json": "^2.2.0",
        "pify": "^2.0.0",
        "pinkie-promise": "^2.0.0",
        "strip-bom": "^2.0.0"
      }
    },
    "lodash": {
      "version": "4.17.11",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.11.tgz",
      "integrity": "sha512-cQKh8igo5QUhZ7lg38DYWAxMvjSAKG0A8wGSVimP07SIUEK2UO+arSRKbRZWtelMtN5V0Hkwh5ryOto/SshYIg==",
      "dev": true
    },
    "lodash.assign": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/lodash.assign/-/lodash.assign-4.2.0.tgz",
      "integrity": "sha1-DZnzzNem0mHRm9rrkkUAXShYCOc=",
      "dev": true
    },
    "lodash.clonedeep": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.clonedeep/-/lodash.clonedeep-4.5.0.tgz",
      "integrity": "sha1-4j8/nE+Pvd6HJSnBBxhXoIblzO8=",
      "dev": true
    },
    "lodash.mergewith": {
      "version": "4.6.1",
      "resolved": "https://registry.npmjs.org/lodash.mergewith/-/lodash.mergewith-4.6.1.tgz",
      "integrity": "sha512-eWw5r+PYICtEBgrBE5hhlT6aAa75f411bgDz/ZL2KZqYV03USvucsxcHUIlGTDTECs1eunpI7HOV7U+WLDvNdQ==",
      "dev": true
    },
    "loud-rejection": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/loud-rejection/-/loud-rejection-1.6.0.tgz",
      "integrity": "sha1-W0b4AUft7leIcPCG0Eghz5mOVR8=",
      "dev": true,
      "requires": {
        "currently-unhandled": "^0.4.1",
        "signal-exit": "^3.0.0"
      }
    },
    "lru-cache": {
      "version": "2.7.3",
      "resolved": "http://registry.npmjs.org/lru-cache/-/lru-cache-2.7.3.tgz",
      "integrity": "sha1-bUUk6LlV+V1PW1iFHOId1y+06VI=",
      "dev": true
    },
    "map-obj": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-1.0.1.tgz",
      "integrity": "sha1-2TPOuSBdgr3PSIb2dCvcK03qFG0=",
      "dev": true
    },
    "maxmin": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/maxmin/-/maxmin-2.1.0.tgz",
      "integrity": "sha1-TTsiCQPZXu5+t6x/qGTnLcCaMWY=",
      "dev": true,
      "requires": {
        "chalk": "^1.0.0",
        "figures": "^1.0.1",
        "gzip-size": "^3.0.0",
        "pretty-bytes": "^3.0.0"
      }
    },
    "meow": {
      "version": "3.7.0",
      "resolved": "http://registry.npmjs.org/meow/-/meow-3.7.0.tgz",
      "integrity": "sha1-cstmi0JSKCkKu/qFaJJYcwioAfs=",
      "dev": true,
      "requires": {
        "camelcase-keys": "^2.0.0",
        "decamelize": "^1.1.2",
        "loud-rejection": "^1.0.0",
        "map-obj": "^1.0.1",
        "minimist": "^1.1.3",
        "normalize-package-data": "^2.3.4",
        "object-assign": "^4.0.1",
        "read-pkg-up": "^1.0.1",
        "redent": "^1.0.0",
        "trim-newlines": "^1.0.0"
      }
    },
    "mime-db": {
      "version": "1.37.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.37.0.tgz",
      "integrity": "sha512-R3C4db6bgQhlIhPU48fUtdVmKnflq+hRdad7IyKhtFj06VPNVdk2RhiYL3UjQIlso8L+YxAtFkobT0VK+S/ybg==",
      "dev": true
    },
    "mime-types": {
      "version": "2.1.21",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.21.tgz",
      "integrity": "sha512-3iL6DbwpyLzjR3xHSFNFeb9Nz/M8WDkX33t1GFQnFOllWk8pOrh/LSrB5OXlnlW5P9LH73X6loW/eogc+F5lJg==",
      "dev": true,
      "requires": {
        "mime-db": "~1.37.0"
      }
    },
    "minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "dev": true,
      "requires": {
        "brace-expansion": "^1.1.7"
      }
    },
    "minimist": {
      "version": "1.2.0",
      "resolved": "http://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
      "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ=",
      "dev": true
    },
    "mkdirp": {
      "version": "0.5.1",
      "resolved": "http://registry.npmjs.org/mkdirp/-/mkdirp-0.5.1.tgz",
      "integrity": "sha1-MAV0OOrGz3+MR2fzhkjWaX11yQM=",
      "dev": true,
      "requires": {
        "minimist": "0.0.8"
      },
      "dependencies": {
        "minimist": {
          "version": "0.0.8",
          "resolved": "http://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz",
          "integrity": "sha1-hX/Kv8M5fSYluCKCYuhqp6ARsF0=",
          "dev": true
        }
      }
    },
    "ms": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
      "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg==",
      "dev": true
    },
    "nan": {
      "version": "2.11.1",
      "resolved": "https://registry.npmjs.org/nan/-/nan-2.11.1.tgz",
      "integrity": "sha512-iji6k87OSXa0CcrLl9z+ZiYSuR2o+c0bGuNmXdrhTQTakxytAFsC56SArGYoiHlJlFoHSnvmhpceZJaXkVuOtA==",
      "dev": true
    },
    "node-gyp": {
      "version": "3.8.0",
      "resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-3.8.0.tgz",
      "integrity": "sha512-3g8lYefrRRzvGeSowdJKAKyks8oUpLEd/DyPV4eMhVlhJ0aNaZqIrNUIPuEWWTAoPqyFkfGrM67MC69baqn6vA==",
      "dev": true,
      "requires": {
        "fstream": "^1.0.0",
        "glob": "^7.0.3",
        "graceful-fs": "^4.1.2",
        "mkdirp": "^0.5.0",
        "nopt": "2 || 3",
        "npmlog": "0 || 1 || 2 || 3 || 4",
        "osenv": "0",
        "request": "^2.87.0",
        "rimraf": "2",
        "semver": "~5.3.0",
        "tar": "^2.0.0",
        "which": "1"
      },
      "dependencies": {
        "semver": {
          "version": "5.3.0",
          "resolved": "http://registry.npmjs.org/semver/-/semver-5.3.0.tgz",
          "integrity": "sha1-myzl094C0XxgEq0yaqa00M9U+U8=",
          "dev": true
        }
      }
    },
    "node-sass": {
      "version": "4.10.0",
      "resolved": "https://registry.npmjs.org/node-sass/-/node-sass-4.10.0.tgz",
      "integrity": "sha512-fDQJfXszw6vek63Fe/ldkYXmRYK/QS6NbvM3i5oEo9ntPDy4XX7BcKZyTKv+/kSSxRtXXc7l+MSwEmYc0CSy6Q==",
      "dev": true,
      "requires": {
        "async-foreach": "^0.1.3",
        "chalk": "^1.1.1",
        "cross-spawn": "^3.0.0",
        "gaze": "^1.0.0",
        "get-stdin": "^4.0.1",
        "glob": "^7.0.3",
        "in-publish": "^2.0.0",
        "lodash.assign": "^4.2.0",
        "lodash.clonedeep": "^4.3.2",
        "lodash.mergewith": "^4.6.0",
        "meow": "^3.7.0",
        "mkdirp": "^0.5.1",
        "nan": "^2.10.0",
        "node-gyp": "^3.8.0",
        "npmlog": "^4.0.0",
        "request": "^2.88.0",
        "sass-graph": "^2.2.4",
        "stdout-stream": "^1.4.0",
        "true-case-path": "^1.0.2"
      },
      "dependencies": {
        "cross-spawn": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-3.0.1.tgz",
          "integrity": "sha1-ElYDfsufDF9549bvE14wdwGEuYI=",
          "dev": true,
          "requires": {
            "lru-cache": "^4.0.1",
            "which": "^1.2.9"
          }
        },
        "lru-cache": {
          "version": "4.1.5",
          "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
          "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
          "dev": true,
          "requires": {
            "pseudomap": "^1.0.2",
            "yallist": "^2.1.2"
          }
        }
      }
    },
    "nopt": {
      "version": "3.0.6",
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-3.0.6.tgz",
      "integrity": "sha1-xkZdvwirzU2zWTF/eaxopkayj/k=",
      "dev": true,
      "requires": {
        "abbrev": "1"
      }
    },
    "normalize-package-data": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.4.0.tgz",
      "integrity": "sha512-9jjUFbTPfEy3R/ad/2oNbKtW9Hgovl5O1FvFWKkKblNXoN/Oou6+9+KKohPK13Yc3/TyunyWhJp6gvRNR/PPAw==",
      "dev": true,
      "requires": {
        "hosted-git-info": "^2.1.4",
        "is-builtin-module": "^1.0.0",
        "semver": "2 || 3 || 4 || 5",
        "validate-npm-package-license": "^3.0.1"
      }
    },
    "npmlog": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-4.1.2.tgz",
      "integrity": "sha512-2uUqazuKlTaSI/dC8AzicUck7+IrEaOnN/e0jd3Xtt1KcGpwx30v50mL7oPyr/h9bL3E4aZccVwpwP+5W9Vjkg==",
      "dev": true,
      "requires": {
        "are-we-there-yet": "~1.1.2",
        "console-control-strings": "~1.1.0",
        "gauge": "~2.7.3",
        "set-blocking": "~2.0.0"
      }
    },
    "number-is-nan": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
      "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0=",
      "dev": true
    },
    "oauth-sign": {
      "version": "0.9.0",
      "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
      "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
      "dev": true
    },
    "object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
      "dev": true
    },
    "once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "dev": true,
      "requires": {
        "wrappy": "1"
      }
    },
    "open": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/open/-/open-0.0.5.tgz",
      "integrity": "sha1-QsPhjslUZra/DcQvOilFw/DK2Pw=",
      "dev": true
    },
    "optimist": {
      "version": "0.3.7",
      "resolved": "https://registry.npmjs.org/optimist/-/optimist-0.3.7.tgz",
      "integrity": "sha1-yQlBrVnkJzMokjB00s8ufLxuwNk=",
      "dev": true,
      "requires": {
        "wordwrap": "~0.0.2"
      }
    },
    "os-homedir": {
      "version": "1.0.2",
      "resolved": "http://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
      "integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M=",
      "dev": true
    },
    "os-locale": {
      "version": "1.4.0",
      "resolved": "http://registry.npmjs.org/os-locale/-/os-locale-1.4.0.tgz",
      "integrity": "sha1-IPnxeuKe00XoveWDsT0gCYA8FNk=",
      "dev": true,
      "requires": {
        "lcid": "^1.0.0"
      }
    },
    "os-tmpdir": {
      "version": "1.0.2",
      "resolved": "http://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
      "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ=",
      "dev": true
    },
    "osenv": {
      "version": "0.1.5",
      "resolved": "https://registry.npmjs.org/osenv/-/osenv-0.1.5.tgz",
      "integrity": "sha512-0CWcCECdMVc2Rw3U5w9ZjqX6ga6ubk1xDVKxtBQPK7wis/0F2r9T6k4ydGYhecl7YUBxBVxhL5oisPsNxAPe2g==",
      "dev": true,
      "requires": {
        "os-homedir": "^1.0.0",
        "os-tmpdir": "^1.0.0"
      }
    },
    "parse-json": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
      "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
      "dev": true,
      "requires": {
        "error-ex": "^1.2.0"
      }
    },
    "path-exists": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz",
      "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",
      "dev": true,
      "requires": {
        "pinkie-promise": "^2.0.0"
      }
    },
    "path-is-absolute": {
      "version": "1.0.1",
      "resolved": "http://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
      "dev": true
    },
    "path-type": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz",
      "integrity": "sha1-WcRPfuSR2nBNpBXaWkBwuk+P5EE=",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.2",
        "pify": "^2.0.0",
        "pinkie-promise": "^2.0.0"
      }
    },
    "performance-now": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
      "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
      "dev": true
    },
    "pify": {
      "version": "2.3.0",
      "resolved": "http://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
      "dev": true
    },
    "pinkie": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
      "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",
      "dev": true
    },
    "pinkie-promise": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
      "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
      "dev": true,
      "requires": {
        "pinkie": "^2.0.0"
      }
    },
    "pretty-bytes": {
      "version": "3.0.1",
      "resolved": "http://registry.npmjs.org/pretty-bytes/-/pretty-bytes-3.0.1.tgz",
      "integrity": "sha1-J9AAjXeAY6C0gRuzXHnxvV1fvM8=",
      "dev": true,
      "requires": {
        "number-is-nan": "^1.0.0"
      }
    },
    "process-nextick-args": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.0.tgz",
      "integrity": "sha512-MtEC1TqN0EU5nephaJ4rAtThHtC86dNN9qCuEhtshvpVBkAW5ZO7BASN9REnF9eoXGcRub+pFuKEpOHE+HbEMw==",
      "dev": true
    },
    "proto-list": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/proto-list/-/proto-list-1.2.4.tgz",
      "integrity": "sha1-IS1b/hMYMGpCD2QCuOJv85ZHqEk=",
      "dev": true
    },
    "pseudomap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
      "integrity": "sha1-8FKijacOYYkX7wqKw0wa5aaChrM=",
      "dev": true
    },
    "psl": {
      "version": "1.1.29",
      "resolved": "https://registry.npmjs.org/psl/-/psl-1.1.29.tgz",
      "integrity": "sha512-AeUmQ0oLN02flVHXWh9sSJF7mcdFq0ppid/JkErufc3hGIV/AMa8Fo9VgDo/cT2jFdOWoFvHp90qqBH54W+gjQ==",
      "dev": true
    },
    "punycode": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
      "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
      "dev": true
    },
    "qs": {
      "version": "6.5.2",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
      "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
      "dev": true
    },
    "raw-body": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-1.1.7.tgz",
      "integrity": "sha1-HQJ8K/oRasxmI7yo8AAWVyqH1CU=",
      "dev": true,
      "requires": {
        "bytes": "1",
        "string_decoder": "0.10"
      },
      "dependencies": {
        "string_decoder": {
          "version": "0.10.31",
          "resolved": "http://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
          "integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ=",
          "dev": true
        }
      }
    },
    "read-pkg": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-1.1.0.tgz",
      "integrity": "sha1-9f+qXs0pyzHAR0vKfXVra7KePyg=",
      "dev": true,
      "requires": {
        "load-json-file": "^1.0.0",
        "normalize-package-data": "^2.3.2",
        "path-type": "^1.0.0"
      }
    },
    "read-pkg-up": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-1.0.1.tgz",
      "integrity": "sha1-nWPBMnbAZZGNV/ACpX9AobZD+wI=",
      "dev": true,
      "requires": {
        "find-up": "^1.0.0",
        "read-pkg": "^1.0.0"
      }
    },
    "readable-stream": {
      "version": "2.3.6",
      "resolved": "http://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
      "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
      "dev": true,
      "requires": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "redent": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/redent/-/redent-1.0.0.tgz",
      "integrity": "sha1-z5Fqsf1fHxbfsggi3W7H9zDCr94=",
      "dev": true,
      "requires": {
        "indent-string": "^2.1.0",
        "strip-indent": "^1.0.1"
      }
    },
    "repeating": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/repeating/-/repeating-2.0.1.tgz",
      "integrity": "sha1-UhTFOpJtNVJwdSf7q0FdvAjQbdo=",
      "dev": true,
      "requires": {
        "is-finite": "^1.0.0"
      }
    },
    "request": {
      "version": "2.88.0",
      "resolved": "https://registry.npmjs.org/request/-/request-2.88.0.tgz",
      "integrity": "sha512-NAqBSrijGLZdM0WZNsInLJpkJokL72XYjUpnB0iwsRgxh7dB6COrHnTBNwN0E+lHDAJzu7kLAkDeY08z2/A0hg==",
      "dev": true,
      "requires": {
        "aws-sign2": "~0.7.0",
        "aws4": "^1.8.0",
        "caseless": "~0.12.0",
        "combined-stream": "~1.0.6",
        "extend": "~3.0.2",
        "forever-agent": "~0.6.1",
        "form-data": "~2.3.2",
        "har-validator": "~5.1.0",
        "http-signature": "~1.2.0",
        "is-typedarray": "~1.0.0",
        "isstream": "~0.1.2",
        "json-stringify-safe": "~5.0.1",
        "mime-types": "~2.1.19",
        "oauth-sign": "~0.9.0",
        "performance-now": "^2.1.0",
        "qs": "~6.5.2",
        "safe-buffer": "^5.1.2",
        "tough-cookie": "~2.4.3",
        "tunnel-agent": "^0.6.0",
        "uuid": "^3.3.2"
      }
    },
    "require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",
      "dev": true
    },
    "require-main-filename": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-1.0.1.tgz",
      "integrity": "sha1-l/cXtp1IeE9fUmpsWqj/3aBVpNE=",
      "dev": true
    },
    "rimraf": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.6.2.tgz",
      "integrity": "sha512-lreewLK/BlghmxtfH36YYVg1i8IAce4TI7oao75I1g245+6BctqTVQiBP3YUJ9C6DQOXJmkYR9X9fCLtCOJc5w==",
      "dev": true,
      "requires": {
        "glob": "^7.0.5"
      }
    },
    "safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
      "dev": true
    },
    "safe-json-parse": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/safe-json-parse/-/safe-json-parse-1.0.1.tgz",
      "integrity": "sha1-PnZyPjjf3aE8mx0poeB//uSzC1c=",
      "dev": true
    },
    "safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "dev": true
    },
    "sass-graph": {
      "version": "2.2.4",
      "resolved": "https://registry.npmjs.org/sass-graph/-/sass-graph-2.2.4.tgz",
      "integrity": "sha1-E/vWPNHK8JCLn9k0dq1DpR0eC0k=",
      "dev": true,
      "requires": {
        "glob": "^7.0.0",
        "lodash": "^4.0.0",
        "scss-tokenizer": "^0.2.3",
        "yargs": "^7.0.0"
      }
    },
    "scss-tokenizer": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/scss-tokenizer/-/scss-tokenizer-0.2.3.tgz",
      "integrity": "sha1-jrBtualyMzOCTT9VMGQRSYR85dE=",
      "dev": true,
      "requires": {
        "js-base64": "^2.1.8",
        "source-map": "^0.4.2"
      }
    },
    "semver": {
      "version": "5.6.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.6.0.tgz",
      "integrity": "sha512-RS9R6R35NYgQn++fkDWaOmqGoj4Ek9gGs+DPxNUZKuwE183xjJroKvyo1IzVFeXvUrvmALy6FWD5xrdJT25gMg==",
      "dev": true
    },
    "set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc=",
      "dev": true
    },
    "sigmund": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/sigmund/-/sigmund-1.0.1.tgz",
      "integrity": "sha1-P/IfGYytIXX587eBhT/ZTQ0ZtZA=",
      "dev": true
    },
    "signal-exit": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.2.tgz",
      "integrity": "sha1-tf3AjxKH6hF4Yo5BXiUTK3NkbG0=",
      "dev": true
    },
    "source-map": {
      "version": "0.4.4",
      "resolved": "http://registry.npmjs.org/source-map/-/source-map-0.4.4.tgz",
      "integrity": "sha1-66T12pwNyZneaAMti092FzZSA2s=",
      "dev": true,
      "requires": {
        "amdefine": ">=0.0.4"
      }
    },
    "spdx-correct": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.0.2.tgz",
      "integrity": "sha512-q9hedtzyXHr5S0A1vEPoK/7l8NpfkFYTq6iCY+Pno2ZbdZR6WexZFtqeVGkGxW3TEJMN914Z55EnAGMmenlIQQ==",
      "dev": true,
      "requires": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "spdx-exceptions": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.2.0.tgz",
      "integrity": "sha512-2XQACfElKi9SlVb1CYadKDXvoajPgBVPn/gOQLrTvHdElaVhr7ZEbqJaRnJLVNeaI4cMEAgVCeBMKF6MWRDCRA==",
      "dev": true
    },
    "spdx-expression-parse": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.0.tgz",
      "integrity": "sha512-Yg6D3XpRD4kkOmTpdgbUiEJFKghJH03fiC1OPll5h/0sO6neh2jqRDVHOQ4o/LMea0tgCkbMgea5ip/e+MkWyg==",
      "dev": true,
      "requires": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "spdx-license-ids": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.2.tgz",
      "integrity": "sha512-qky9CVt0lVIECkEsYbNILVnPvycuEBkXoMFLRWsREkomQLevYhtRKC+R91a5TOAQ3bCMjikRwhyaRqj1VYatYg==",
      "dev": true
    },
    "sshpk": {
      "version": "1.15.2",
      "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.15.2.tgz",
      "integrity": "sha512-Ra/OXQtuh0/enyl4ETZAfTaeksa6BXks5ZcjpSUNrjBr0DvrJKX+1fsKDPpT9TBXgHAFsa4510aNVgI8g/+SzA==",
      "dev": true,
      "requires": {
        "asn1": "~0.2.3",
        "assert-plus": "^1.0.0",
        "bcrypt-pbkdf": "^1.0.0",
        "dashdash": "^1.12.0",
        "ecc-jsbn": "~0.1.1",
        "getpass": "^0.1.1",
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.0.2",
        "tweetnacl": "~0.14.0"
      }
    },
    "stdout-stream": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/stdout-stream/-/stdout-stream-1.4.1.tgz",
      "integrity": "sha512-j4emi03KXqJWcIeF8eIXkjMFN1Cmb8gUlDYGeBALLPo5qdyTfA9bOtl8m33lRoC+vFMkP3gl0WsDr6+gzxbbTA==",
      "dev": true,
      "requires": {
        "readable-stream": "^2.0.1"
      }
    },
    "string-template": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/string-template/-/string-template-0.2.1.tgz",
      "integrity": "sha1-QpMuWYo1LQH8IuwzZ9nYTuxsmt0=",
      "dev": true
    },
    "string-width": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
      "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
      "dev": true,
      "requires": {
        "code-point-at": "^1.0.0",
        "is-fullwidth-code-point": "^1.0.0",
        "strip-ansi": "^3.0.0"
      }
    },
    "string_decoder": {
      "version": "1.1.1",
      "resolved": "http://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "dev": true,
      "requires": {
        "safe-buffer": "~5.1.0"
      }
    },
    "strip-ansi": {
      "version": "3.0.1",
      "resolved": "http://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
      "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
      "dev": true,
      "requires": {
        "ansi-regex": "^2.0.0"
      }
    },
    "strip-bom": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz",
      "integrity": "sha1-YhmoVhZSBJHzV4i9vxRHqZx+aw4=",
      "dev": true,
      "requires": {
        "is-utf8": "^0.2.0"
      }
    },
    "strip-indent": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-1.0.1.tgz",
      "integrity": "sha1-DHlipq3vp7vUrDZkYKY4VSrhoKI=",
      "dev": true,
      "requires": {
        "get-stdin": "^4.0.1"
      }
    },
    "supports-color": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
      "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
      "dev": true
    },
    "tar": {
      "version": "2.2.1",
      "resolved": "http://registry.npmjs.org/tar/-/tar-2.2.1.tgz",
      "integrity": "sha1-jk0qJWwOIYXGsYrWlK7JaLg8sdE=",
      "dev": true,
      "requires": {
        "block-stream": "*",
        "fstream": "^1.0.2",
        "inherits": "2"
      }
    },
    "tiny-lr": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/tiny-lr/-/tiny-lr-1.1.1.tgz",
      "integrity": "sha512-44yhA3tsaRoMOjQQ+5v5mVdqef+kH6Qze9jTpqtVufgYjYt08zyZAwNwwVBj3i1rJMnR52IxOW0LK0vBzgAkuA==",
      "dev": true,
      "requires": {
        "body": "^5.1.0",
        "debug": "^3.1.0",
        "faye-websocket": "~0.10.0",
        "livereload-js": "^2.3.0",
        "object-assign": "^4.1.0",
        "qs": "^6.4.0"
      }
    },
    "tough-cookie": {
      "version": "2.4.3",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.4.3.tgz",
      "integrity": "sha512-Q5srk/4vDM54WJsJio3XNn6K2sCG+CQ8G5Wz6bZhRZoAe/+TxjWB/GlFAnYEbkYVlON9FMk/fE3h2RLpPXo4lQ==",
      "dev": true,
      "requires": {
        "psl": "^1.1.24",
        "punycode": "^1.4.1"
      },
      "dependencies": {
        "punycode": {
          "version": "1.4.1",
          "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
          "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4=",
          "dev": true
        }
      }
    },
    "trim-newlines": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-1.0.0.tgz",
      "integrity": "sha1-WIeWa7WCpFA6QetST301ARgVphM=",
      "dev": true
    },
    "true-case-path": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/true-case-path/-/true-case-path-1.0.3.tgz",
      "integrity": "sha512-m6s2OdQe5wgpFMC+pAJ+q9djG82O2jcHPOI6RNg1yy9rCYR+WD6Nbpl32fDpfC56nirdRy+opFa/Vk7HYhqaew==",
      "dev": true,
      "requires": {
        "glob": "^7.1.2"
      }
    },
    "tunnel-agent": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
      "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
      "dev": true,
      "requires": {
        "safe-buffer": "^5.0.1"
      }
    },
    "tweetnacl": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
      "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
      "dev": true
    },
    "uglify-js": {
      "version": "3.4.9",
      "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.4.9.tgz",
      "integrity": "sha512-8CJsbKOtEbnJsTyv6LE6m6ZKniqMiFWmm9sRbopbkGs3gMPPfd3Fh8iIA4Ykv5MgaTbqHr4BaoGLJLZNhsrW1Q==",
      "dev": true,
      "requires": {
        "commander": "~2.17.1",
        "source-map": "~0.6.1"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "uglify-to-browserify": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/uglify-to-browserify/-/uglify-to-browserify-1.0.2.tgz",
      "integrity": "sha1-bgkk1r2mta/jSeOabWMoUKD4grc=",
      "dev": true
    },
    "uri-js": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
      "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
      "dev": true,
      "requires": {
        "punycode": "^2.1.0"
      }
    },
    "uri-path": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/uri-path/-/uri-path-1.0.0.tgz",
      "integrity": "sha1-l0fwGDWJM8Md4PzP2C0TjmcmLjI=",
      "dev": true
    },
    "util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
      "dev": true
    },
    "uuid": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.3.2.tgz",
      "integrity": "sha512-yXJmeNaw3DnnKAOKJE51sL/ZaYfWJRl1pK9dr19YFCu0ObS231AB1/LbqTKRAQ5kw8A90rA6fr4riOUpTZvQZA==",
      "dev": true
    },
    "validate-npm-package-license": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
      "dev": true,
      "requires": {
        "spdx-correct": "^3.0.0",
        "spdx-expression-parse": "^3.0.0"
      }
    },
    "verror": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
      "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0",
        "core-util-is": "1.0.2",
        "extsprintf": "^1.2.0"
      }
    },
    "websocket-driver": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/websocket-driver/-/websocket-driver-0.7.0.tgz",
      "integrity": "sha1-DK+dLXVdk67gSdS90NP+LMoqJOs=",
      "dev": true,
      "requires": {
        "http-parser-js": ">=0.4.0",
        "websocket-extensions": ">=0.1.1"
      }
    },
    "websocket-extensions": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/websocket-extensions/-/websocket-extensions-0.1.3.tgz",
      "integrity": "sha512-nqHUnMXmBzT0w570r2JpJxfiSD1IzoI+HGVdd3aZ0yNi3ngvQ4jv1dtHt5VGxfI2yj5yqImPhOK4vmIh2xMbGg==",
      "dev": true
    },
    "which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "dev": true,
      "requires": {
        "isexe": "^2.0.0"
      }
    },
    "which-module": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-1.0.0.tgz",
      "integrity": "sha1-u6Y8qGGUiZT/MHc2CJ47lgJsKk8=",
      "dev": true
    },
    "wide-align": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.3.tgz",
      "integrity": "sha512-QGkOQc8XL6Bt5PwnsExKBPuMKBxnGxWWW3fU55Xt4feHozMUhdUMaBCk290qpm/wG5u/RSKzwdAC4i51YigihA==",
      "dev": true,
      "requires": {
        "string-width": "^1.0.2 || 2"
      }
    },
    "wordwrap": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.3.tgz",
      "integrity": "sha1-o9XabNXAvAAI03I0u68b7WMFkQc=",
      "dev": true
    },
    "wrap-ansi": {
      "version": "2.1.0",
      "resolved": "http://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",
      "integrity": "sha1-2Pw9KE3QV5T+hJc8rs3Rz4JP3YU=",
      "dev": true,
      "requires": {
        "string-width": "^1.0.1",
        "strip-ansi": "^3.0.1"
      }
    },
    "wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
      "dev": true
    },
    "xtend": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.1.tgz",
      "integrity": "sha1-pcbVMr5lbiPbgg77lDofBJmNY68=",
      "dev": true
    },
    "y18n": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-3.2.1.tgz",
      "integrity": "sha1-bRX7qITAhnnA136I53WegR4H+kE=",
      "dev": true
    },
    "yallist": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
      "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI=",
      "dev": true
    },
    "yargs": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-7.1.0.tgz",
      "integrity": "sha1-a6MY6xaWFyf10oT46gA+jWFU0Mg=",
      "dev": true,
      "requires": {
        "camelcase": "^3.0.0",
        "cliui": "^3.2.0",
        "decamelize": "^1.1.1",
        "get-caller-file": "^1.0.1",
        "os-locale": "^1.4.0",
        "read-pkg-up": "^1.0.1",
        "require-directory": "^2.1.1",
        "require-main-filename": "^1.0.1",
        "set-blocking": "^2.0.0",
        "string-width": "^1.0.2",
        "which-module": "^1.0.0",
        "y18n": "^3.2.1",
        "yargs-parser": "^5.0.0"
      },
      "dependencies": {
        "camelcase": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-3.0.0.tgz",
          "integrity": "sha1-MvxLn82vhF/N9+c7uXysImHwqwo=",
          "dev": true
        }
      }
    },
    "yargs-parser": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-5.0.0.tgz",
      "integrity": "sha1-J17PDX/+Bcd+ZOfIbkzZS/DhIoo=",
      "dev": true,
      "requires": {
        "camelcase": "^3.0.0"
      },
      "dependencies": {
        "camelcase": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-3.0.0.tgz",
          "integrity": "sha1-MvxLn82vhF/N9+c7uXysImHwqwo=",
          "dev": true
        }
      }
    }
  }
}

{
  "name": "skeleton-project",
  "version": "1.0.0",
  "description": "a skeleton project with grunt tasks",
  "main": "Gruntfile.js",
  "scripts": {
    "test": "test"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/yaka-fi2c/project-template/blob/master/README.md"
  },
  "keywords": [
    "skeleton-project"
  ],
  "author": "yakir-fitousi",
  "license": "ISC",
  "devDependencies": {
    "grunt-builder": "0.0.3",
    "grunt-contrib-clean": "^2.0.0",
    "grunt-contrib-concat": "^1.0.1",
    "grunt-contrib-copy": "^1.0.0",
    "grunt-contrib-cssmin": "^3.0.0",
    "grunt-contrib-sass": "^1.0.0",
    "grunt-contrib-uglify": "^4.0.0",
    "grunt-contrib-watch": "^1.1.0",
    "grunt-html-build": "^0.7.1",
    "grunt-open": "^0.2.3",
    "grunt-sass": "^3.0.2",
    "grunt-template": "^1.0.0",
    "node-sass": "^4.10.0"
  }
}

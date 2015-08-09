# Credits

This project is just a slightly different configuration of the following GitHub projects. Without them, I would still be lost.
* [cmichaelgraham/aurelia-typescript](https://github.com/cmichaelgraham/aurelia-typescript)
* [Zoltu/Templates-Aurelia-TypeScript](https://github.com/Zoltu/Templates-Aurelia-TypeScript)

This screencast is an excellent starting point for anyone new to Aurelia. It demonstrates how easy it is to get started by focusing on the minimum requirements.
* [Creating an Aurelia App from Scratch Screencast - by gregoryagu](http://www.screencast.com/t/DWue3DgK)

# Getting Dependencies

If you are running Windows 7 or higher, make sure it is setup properly before continuing. See the **"How to Setup a New Windows Machine"** section below this section.

* Delete the following folder and files if they exist:
  * /jspm_packages
  * /config.js.
  * /package.json

* Ensure that you have the latest version of JSPM installed
  * npm install -g jspm@beta
  
* Open the node command line prompt at the root folder of the web site and enter:
  * jspm init (Press enter at each question to keep the default value, except type "TypeScript" for transpiler)
  * jspm install aurelia-framework
  * jspm install aurelia-bootstrapper
  * jspm install core-js

* Open config.js and add path mapping to app.js
```
   map: {
     "app": "js/app",
```

* Open Visual Studio 2015 (Community Edition or higher)
  * File > Open > Web Site
    * Browse to the root folder of the web site and click "Open".
  * Press F5 on your keyboard
    * An icon for the new IIS Express instance should appear in your systray
	  and the website should open in your web browser.

# How to Setup a New Windows Machine

This is how I setup my Windows 8.1 and Windows 10 machines. I have listed the steps here for anyone who may benefit, but cannot verify that this is the only way, or the best way to configure a windows machine. Contributions to improve these steps would be greatly appreciated!

* Install VS 2015 Community Edition (or higher) with C++ and Node. (If you select Git during installation, you will still need to install Git for Windows separately.)

* Install [Git for Windows](https://git-scm.com/download/win) (needed to compile node-gyp - the compiler for node)

* Install [Python 2.7.3](https://www.python.org/download/releases/2.7.3/)

* Add a new system environment variable named **PYTHON** and set it to the full path of python.exe. For example: C:\Python27\python.exe

* Configure node to use Visual Studio 2015 for compiling
  * At the node command line prompt, enter:
    * npm config set msvs_version 2015 --global
    * set GYP_MSVS_VERSION=2015

* Globally install node-gyp and socket.io.
  * npm install -g node-gyp
  * npm install -g socket.io

* Install TypeScript globally
  * npm install -g TypeScript

* Install jspm globally
  * npm install -g jspm@beta

* Configure jspm with your GitHub credentials (otherwise you may hit a web request limit)
  * jspm registry config github

# Additional Notes

### Source Control

  If you are using source control, you may choose to not include the jspm_packages folder when checking-in changes. If so, you can check-in the package.json and config.js files, then when getting a fresh copy of the project from source control, just enter this at the command line from the root directory.

  * jspm install -y

  If you are using Team Foundation Server as source control (includes the online version), you can create a ".tfignore" file at the root of your source control folder and add the following path to it (without quotes). That is all that you will need in the file.

  * "\*\jspm_packages"

### Windows File Path Length Limit (Still an issue in Windows 10)

  As your project grows, you may install npm modules directly which will create a node_modules folder. Because of the way node handles nested dependencies, you will end up with many levels of nested node_modules folders. This often exceeds the file path length limit for Windows. Windows will allow the folders/files to be created, but you will not be able to copy or delete them. I don't have a solution for copying the folders/files, but they can be deleted with rimraf. At the node command line prompt, enter:

  * npm install -g rimraf

  To delete the node_modules folder and all child folders/files, enter the following at the root directory of your web site

  * rimraf node_modules

### Visual Studio 2015

  You may notice that Visual Studio 2015 has a "TypeScript" project template. With this template, files with the .ts extension have a build action of TypeScript which does the transpiling to ECMAScript 5 when you build the project. Also, with this template you will see a TypeScript section in your project properties where you can select specific [compiler options](https://github.com/Microsoft/TypeScript/wiki/Compiler-Options) for the TypeScript compiler (tsc). Unfortunately, these options are a small subset of all possible compiler options that can be specified in the [tsconfig.json](https://github.com/Microsoft/TypeScript/wiki/tsconfig.json) file, which is not recognized by this project type. One of the missing options is "experimentalDecorators" which is used extensively by Aurelia.

  To save yourself much frustration, I highly recommend using a Visual Studio Web Site with a tsconfig.json file. The instructions above are written for that scenario.

  With a Visual Studio Web Site, transpiling TypeScript is easy. Just save your .ts file and by default, it will be transpiled to a .js file with the same name, in the same folder.

### TypeScript

  If you are new to TypeScript (like I am), you may think that every argument and variable needs to have a type. Fortunately, this is not the case. If no type is specified, a variable will implicitly be of type 'any'. So, any ECMAScript 6 file should transpile as long as it does not use ES6 [features that are not yet supported by the TypeScript transpiler](http://blogs.msdn.com/b/typescript/archive/2015/07/20/announcing-typescript-1-5.aspx).

  Visual Studio 2015 has a feature called "TypeScript Virtual Projects". These are very helpful for navigating type definitions, but to see them, you will need to make the following change to your Visual Studio settings.
  * Tools > Options > Text Editor > TypeScript > Project
    * Check "Display Virtual Projects when no Solution is loaded"
    * Check "Display Virtual Projects when a Solution is loaded"
    
  All Type Definition files (*.d.ts) within the web site folder (including the ones under jspm_packages) are recognize by Visual Studio and added to IntelliSense. When you right click an imported module, and select "Go To Definiton", you will be taken to the *.d.ts file where that module is defined. You will notice that the file opens from a "TypeScript Virtual Project", which loads all the type information from your real project into memory.
  
  Aurelia JSPM packages come with type definition files, but if you use a library that does not, look for them at [DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped). To use a type definition file that you downloaded, simply copy it anywhere into your web site folder - typically a folder name "types" or something similar.

  
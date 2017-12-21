var gameInstance = UnityLoader.instantiate("gameContainer", "public/DECAD/Build/DECAD_alpha6_3-webgl.json");
if (!window.Module) {
    window.Module = gameInstance.Module;
}

function registerFunctions(mainInstance) {
    Module.onRuntimeInitialized = function () {
        console.log("Setup Public API: Wrapping functions...");
        let playAnimationClipFunction = Module.cwrap('PlayAnimationClip', null, ['string']);
        mainInstance.register('playAnimation', playAnimationClipFunction);

    };
}

document.addEventListener('DOMContentLoaded', function () {
    loadLibraries();
    init();

}, false);


function init() {
    System.import('code/main.js').then(function (main) {
        var mainModule = main;
        var socket = io.connect(mainModule.Main.getHost());
        var instance = gameInstance;
        registerFunctions(mainModule.Main);
        socket.on('new request', function (message) {
            console.log(message);
            mainModule.Main.process(message, gameInstance);
        });
    });
}

function loadLibraries() {
    System.config({
        packages: {
            'code/': {
                defaultExtension: 'js'
            }
        }
    });
}

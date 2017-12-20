console.log("Setting up the Native/Public API");

if(!window.Module) {
  window.Module = gameInstance.Module;
}

//
// In this section we map the native C functions to JS.
// We do it thanks to the Emscripten function cwrap:
// https://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html?highlight=cwrap#cwrap
// format cwarp(function_name, return type, [param1_type. param2_type, ...])
// The name of the function must be the same we find in the native.c file.
// Types mapping:
// - void --> null
// - int, float --> number
// - char * --> string

Module.onRuntimeInitialized = function() {
  console.log("Setup Public API: Wrapping functions...");

  //
  // ANIMATION
  //
  PlayAnimationClip = Module.cwrap('PlayAnimationClip', null, ['string'])
  IsAnimationClipPlaying = Module.cwrap('IsAnimationClipPlaying', 'number', [])
  GetPlayingAnimationClip = Module.cwrap('GetPlayingAnimationClip', 'string', [])
  ListAvailableAnimationClips = Module.cwrap('ListAvailableAnimationClips', 'string', [])
  EnableAmbientAnimation = Module.cwrap('EnableAmbientAnimation', null, [])
  DisableAmbientAnimation = Module.cwrap('DisableAmbientAnimation', null, [])

  //
  // MaryTTS
  //
  MaryTTSspeak = Module.cwrap('MaryTTSspeak',null,['string']);
  IsMaryTTSspeaking = Module.cwrap('IsMaryTTSspeaking', 'number', []);

  console.log("Setup Public API: functions wrapped.");
};


console.log("Setup Public API: done.");

function getArgumentsFromCommandLine({ argv }){
  return argv.slice(2)
}

getArgumentsFromCommandLine(process).forEach((arg) => console.log(arg))
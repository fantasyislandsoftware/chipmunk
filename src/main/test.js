class TestProcessor extends AudioWorkletProcessor {
    constructor () {
      super()
      console.log(currentFrame)
      console.log(currentTime)
    }
    process (inputs, outputs, parameters) {
      return true
    }
  }

  registerProcessor('test-processor', TestProcessor);